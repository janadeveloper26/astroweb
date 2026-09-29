import express from 'express';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Storage for Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, 'uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname) || '.jpg';
    cb(null, 'thumb-' + uniqueSuffix + ext);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed for thumbprint!'));
    }
  },
});

// Helper functions for reading/writing JSON files
const DATA_DIR = path.join(__dirname, 'data');

const readData = (filename) => {
  try {
    const filePath = path.join(DATA_DIR, filename);
    if (!fs.existsSync(filePath)) {
      return [];
    }
    const content = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(content || '[]');
  } catch (error) {
    console.error(`Error reading ${filename}:`, error);
    return [];
  }
};

const writeData = (filename, data) => {
  try {
    const filePath = path.join(DATA_DIR, filename);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (error) {
    console.error(`Error writing ${filename}:`, error);
    return false;
  }
};

// Routes

// 1. Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    service: 'Sri Agathiya Mahasiva Nadi Jothida Nilayam API',
    heritage: 'Vaitheeswaran Koil, Sirkali Taluk',
    timestamp: new Date().toISOString(),
  });
});

// 2. Upload Thumbprint
app.post('/api/upload-thumb', upload.single('thumbprint'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: 'No file uploaded' });
  }
  const fileUrl = `/uploads/${req.file.filename}`;
  res.json({
    success: true,
    fileUrl,
    filename: req.file.filename,
    message: 'Thumbprint uploaded successfully for Nadi leaf matching',
  });
});

// 3. Bookings
app.get('/api/bookings', (req, res) => {
  const bookings = readData('bookings.json');
  res.json({ success: true, count: bookings.length, data: bookings });
});

app.post('/api/bookings', (req, res) => {
  try {
    const bookings = readData('bookings.json');
    const {
      name,
      phone,
      email,
      gender,
      dob,
      pob,
      mode,
      language,
      kandams,
      date,
      timeSlot,
      notes,
      thumbprintUrl,
    } = req.body;

    if (!name || !phone) {
      return res.status(400).json({ success: false, message: 'Name and phone number are required.' });
    }

    const newBooking = {
      id: `BK-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`,
      name,
      phone,
      email: email || '',
      gender: gender || 'male',
      thumbType: gender === 'female' ? 'Left Thumb (Female)' : 'Right Thumb (Male)',
      dob: dob || '',
      pob: pob || '',
      mode: mode || 'Online Video Call (WhatsApp)',
      language: language || 'Tamil',
      kandams: kandams && kandams.length ? kandams : ['General Kandam'],
      date: date || new Date().toISOString().split('T')[0],
      timeSlot: timeSlot || 'Morning 10:00 AM - 12:00 PM',
      notes: notes || '',
      thumbprintUrl: thumbprintUrl || null,
      status: 'Received (Leaf Search in Progress)',
      createdAt: new Date().toISOString(),
    };

    bookings.unshift(newBooking);
    writeData('bookings.json', bookings);

    res.status(201).json({
      success: true,
      message: 'Sacred palm leaf reading appointment scheduled successfully!',
      booking: newBooking,
    });
  } catch (err) {
    console.error('Error creating booking:', err);
    res.status(500).json({ success: false, message: 'Failed to create booking' });
  }
});

app.patch('/api/bookings/:id/status', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const bookings = readData('bookings.json');
  const index = bookings.findIndex((b) => b.id === id);

  if (index === -1) {
    return res.status(404).json({ success: false, message: 'Booking not found' });
  }

  bookings[index].status = status;
  bookings[index].updatedAt = new Date().toISOString();
  writeData('bookings.json', bookings);

  res.json({ success: true, booking: bookings[index] });
});

// 4. Inquiries / Contact
app.get('/api/inquiries', (req, res) => {
  const inquiries = readData('inquiries.json');
  res.json({ success: true, count: inquiries.length, data: inquiries });
});

app.post('/api/inquiries', (req, res) => {
  try {
    const inquiries = readData('inquiries.json');
    const { name, phone, email, subject, message } = req.body;

    if (!name || !phone || !message) {
      return res.status(400).json({ success: false, message: 'Name, phone, and message are required.' });
    }

    const newInquiry = {
      id: `INQ-${Math.floor(1000 + Math.random() * 9000)}`,
      name,
      phone,
      email: email || '',
      subject: subject || 'General Nadi Astrology Guidance',
      message,
      status: 'New',
      createdAt: new Date().toISOString(),
    };

    inquiries.unshift(newInquiry);
    writeData('inquiries.json', inquiries);

    res.status(201).json({
      success: true,
      message: 'Your inquiry has been received. Guruji will contact you shortly.',
      inquiry: newInquiry,
    });
  } catch (err) {
    console.error('Error saving inquiry:', err);
    res.status(500).json({ success: false, message: 'Failed to submit inquiry' });
  }
});

// 5. Reviews
app.get('/api/reviews', (req, res) => {
  const reviews = readData('reviews.json');
  res.json({ success: true, count: reviews.length, data: reviews });
});

app.post('/api/reviews', (req, res) => {
  try {
    const reviews = readData('reviews.json');
    const { name, location, kandam, rating, comment } = req.body;

    if (!name || !comment) {
      return res.status(400).json({ success: false, message: 'Name and review text are required.' });
    }

    const newReview = {
      id: `rev-${Date.now()}`,
      name,
      location: location || 'Devotee',
      kandam: kandam || 'General Nadi Reading',
      rating: Number(rating) || 5,
      date: new Date().toISOString().split('T')[0],
      comment,
      verified: true,
    };

    reviews.unshift(newReview);
    writeData('reviews.json', reviews);

    res.status(201).json({
      success: true,
      message: 'Thank you for your blessed review!',
      review: newReview,
    });
  } catch (err) {
    console.error('Error posting review:', err);
    res.status(500).json({ success: false, message: 'Failed to save review' });
  }
});

// 6. Admin stats
app.get('/api/admin/stats', (req, res) => {
  const bookings = readData('bookings.json');
  const inquiries = readData('inquiries.json');
  const reviews = readData('reviews.json');

  const pendingBookings = bookings.filter((b) => b.status.includes('Search') || b.status.includes('Pending')).length;
  const avgRating = reviews.length ? (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1) : '5.0';

  res.json({
    totalBookings: bookings.length,
    pendingBookings,
    totalInquiries: inquiries.length,
    totalReviews: reviews.length,
    averageRating: avgRating,
    heritageYears: 85,
    generations: '4th Generation Hereditary Gurukkal',
  });
});

app.listen(PORT, () => {
  console.log(`🕉️ Sri Agathiya Mahasiva Nadi API listening on http://localhost:${PORT}`);
});

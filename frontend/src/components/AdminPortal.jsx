import React, { useState, useEffect } from 'react';
import {
  X,
  ShieldCheck,
  Search,
  CheckCircle,
  Clock,
  Phone,
  Calendar,
  Eye,
  RefreshCw,
  Fingerprint,
} from 'lucide-react';

export default function AdminPortal({ isOpen, onClose, lang }) {
  const [activeTab, setActiveTab] = useState('bookings');
  const [bookings, setBookings] = useState([]);
  const [inquiries, setInquiries] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedThumb, setSelectedThumb] = useState(null);

  const fetchAdminData = async () => {
    setLoading(true);
    try {
      const [bRes, iRes, sRes] = await Promise.all([
        fetch('http://localhost:5000/api/bookings'),
        fetch('http://localhost:5000/api/inquiries'),
        fetch('http://localhost:5000/api/admin/stats'),
      ]);

      const bData = await bRes.json();
      const iData = await iRes.json();
      const sData = await sRes.json();

      if (bData.success) setBookings(bData.data);
      if (iData.success) setInquiries(iData.data);
      setStats(sData);
    } catch (err) {
      console.warn('Failed to load admin data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchAdminData();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleStatusChange = async (id, newStatus) => {
    try {
      await fetch(`http://localhost:5000/api/bookings/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      setBookings((prev) =>
        prev.map((b) => (b.id === id ? { ...b, status: newStatus } : b))
      );
    } catch (e) {
      console.error('Status update failed:', e);
    }
  };

  const filteredBookings = bookings.filter(
    (b) =>
      b.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.phone.includes(searchTerm) ||
      b.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="modal-backdrop">
      <div className="modal-container-glass admin-modal-wide">
        {/* Header */}
        <div className="admin-header-row">
          <div className="admin-title-box">
            <ShieldCheck size={28} className="admin-gold-badge" />
            <div>
              <h2>{lang === 'ta' ? 'குருக்கள் நிர்வாக போர்டல்' : 'Guruji Sanctum Portal'}</h2>
              <p>{lang === 'ta' ? 'வைத்தீஸ்வரன் கோவில் தலைமை பீட சுவடி நிர்வாகம்' : 'Vaitheeswaran Koil Nadi Archive Management'}</p>
            </div>
          </div>

          <div className="admin-header-actions">
            <button onClick={fetchAdminData} className="refresh-btn" title="Refresh">
              <RefreshCw size={16} className={loading ? 'spinning' : ''} />
            </button>
            <button onClick={onClose} className="modal-close-btn" aria-label="Close">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Stats Row */}
        {stats && (
          <div className="admin-stats-cards">
            <div className="admin-stat-card">
              <span className="stat-label">Total Consultations</span>
              <span className="stat-val">{stats.totalBookings}</span>
            </div>
            <div className="admin-stat-card highlight">
              <span className="stat-label">Active Leaf Searches</span>
              <span className="stat-val">{stats.pendingBookings}</span>
            </div>
            <div className="admin-stat-card">
              <span className="stat-label">Direct Inquiries</span>
              <span className="stat-val">{stats.totalInquiries}</span>
            </div>
            <div className="admin-stat-card">
              <span className="stat-label">Devotee Rating</span>
              <span className="stat-val">⭐ {stats.averageRating} / 5.0</span>
            </div>
          </div>
        )}

        {/* Navigation Tabs */}
        <div className="admin-tabs-row">
          <button
            onClick={() => setActiveTab('bookings')}
            className={`admin-tab-btn ${activeTab === 'bookings' ? 'active' : ''}`}
          >
            <span>Palm Leaf Bookings ({bookings.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('inquiries')}
            className={`admin-tab-btn ${activeTab === 'inquiries' ? 'active' : ''}`}
          >
            <span>Inquiries ({inquiries.length})</span>
          </button>

          {activeTab === 'bookings' && (
            <div className="admin-search-wrap">
              <Search size={15} />
              <input
                type="text"
                placeholder="Search by Name, Phone, or Booking ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          )}
        </div>

        {/* Tab 1: Bookings List */}
        {activeTab === 'bookings' && (
          <div className="admin-table-container">
            {filteredBookings.length === 0 ? (
              <div className="admin-empty-state">
                <Clock size={32} />
                <p>No bookings matching current search filter.</p>
              </div>
            ) : (
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Ref ID</th>
                    <th>Seeker</th>
                    <th>Gender & Thumb</th>
                    <th>Kandams</th>
                    <th>Preferred Slot</th>
                    <th>Mode</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBookings.map((b) => (
                    <tr key={b.id}>
                      <td>
                        <span className="badge-id">{b.id}</span>
                      </td>
                      <td>
                        <div className="seeker-col">
                          <strong>{b.name}</strong>
                          <span className="phone-sub">
                            <Phone size={12} /> {b.phone}
                          </span>
                        </div>
                      </td>
                      <td>
                        <span className="thumb-col">
                          <Fingerprint size={14} />
                          {b.thumbType || (b.gender === 'female' ? 'Left Thumb' : 'Right Thumb')}
                        </span>
                        {b.thumbprintUrl && (
                          <button
                            onClick={() => setSelectedThumb(`http://localhost:5000${b.thumbprintUrl}`)}
                            className="view-thumb-btn"
                          >
                            <Eye size={12} /> View Scan
                          </button>
                        )}
                      </td>
                      <td>
                        <div className="kandams-list-tags">
                          {b.kandams &&
                            b.kandams.map((k, idx) => (
                              <span key={idx} className="k-badge">
                                {k}
                              </span>
                            ))}
                        </div>
                      </td>
                      <td>
                        <div className="slot-col">
                          <span>
                            <Calendar size={12} /> {b.date}
                          </span>
                          <span className="slot-time">{b.timeSlot}</span>
                        </div>
                      </td>
                      <td>
                        <span className="mode-pill">{b.mode}</span>
                      </td>
                      <td>
                        <select
                          value={b.status}
                          onChange={(e) => handleStatusChange(b.id, e.target.value)}
                          className="status-selector"
                        >
                          <option value="Received (Leaf Search in Progress)">Received / In Progress</option>
                          <option value="Leaves Found (Searching Slot)">Leaves Found</option>
                          <option value="Confirmed">Confirmed</option>
                          <option value="Reading Completed">Completed</option>
                        </select>
                      </td>
                      <td>
                        <a
                          href={`https://wa.me/${b.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                            `Pranam ${b.name}, this is Sri Agathiya Mahasiva Nadi Jothida Nilayam regarding your consultation (Ref: ${b.id}).`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="wa-action-icon"
                          title="Contact via WhatsApp"
                        >
                          💬 Chat
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}

        {/* Tab 2: Inquiries List */}
        {activeTab === 'inquiries' && (
          <div className="admin-table-container">
            {inquiries.length === 0 ? (
              <div className="admin-empty-state">
                <p>No inquiries received yet.</p>
              </div>
            ) : (
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Inquiry ID</th>
                    <th>Name & Phone</th>
                    <th>Subject</th>
                    <th>Message Details</th>
                    <th>Received At</th>
                  </tr>
                </thead>
                <tbody>
                  {inquiries.map((inq) => (
                    <tr key={inq.id}>
                      <td>
                        <span className="badge-id">{inq.id}</span>
                      </td>
                      <td>
                        <strong>{inq.name}</strong>
                        <div className="phone-sub">
                          <Phone size={12} /> {inq.phone}
                        </div>
                      </td>
                      <td>{inq.subject}</td>
                      <td>
                        <p className="inq-msg">{inq.message}</p>
                      </td>
                      <td>{new Date(inq.createdAt).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}

        {/* Modal for Thumb View */}
        {selectedThumb && (
          <div className="thumb-view-overlay" onClick={() => setSelectedThumb(null)}>
            <div className="thumb-view-card" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setSelectedThumb(null)} className="modal-close-btn">
                <X size={20} />
              </button>
              <h4>Uploaded Seeker Thumb Impression</h4>
              <img src={selectedThumb} alt="Seeker Thumb" className="enlarged-thumb" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

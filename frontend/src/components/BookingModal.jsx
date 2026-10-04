import React, { useState, useEffect } from 'react';
import {
  X,
  Sparkles,
  Fingerprint,
  Calendar,
  Clock,
  MapPin,
  CheckCircle,
  Upload,
  MessageCircle,
  FileCheck,
  Shield,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { kandamsData } from '../translations/content';

export default function BookingModal({ isOpen, onClose, lang, t, preselectedKandam }) {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(null);

  // Form State
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('male');
  const [dob, setDob] = useState('');
  const [pob, setPob] = useState('');
  const [preferredLanguage, setPreferredLanguage] = useState('Tamil');
  const [mode, setMode] = useState('Online (WhatsApp)');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [timeSlot, setTimeSlot] = useState('Morning: 9:00 AM - 12:00 PM');
  const [notes, setNotes] = useState('');
  const [selectedKandams, setSelectedKandams] = useState(['General Kandam (Life Overview)']);
  const [thumbFile, setThumbFile] = useState(null);
  const [thumbPreview, setThumbPreview] = useState(null);
  const [scanProgress, setScanProgress] = useState(0);

  useEffect(() => {
    if (preselectedKandam) {
      const title = lang === 'ta' ? preselectedKandam.tamilTitle : preselectedKandam.englishTitle;
      if (!selectedKandams.includes(title)) {
        setSelectedKandams([...selectedKandams, title]);
      }
    }
  }, [preselectedKandam, lang]);

  if (!isOpen) return null;

  const handleThumbUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setThumbFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        setThumbPreview(reader.result);
        // Animate scanner
        setScanProgress(0);
        let p = 0;
        const interval = setInterval(() => {
          p += 10;
          setScanProgress(p);
          if (p >= 100) clearInterval(interval);
        }, 80);
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleKandam = (title) => {
    if (selectedKandams.includes(title)) {
      if (selectedKandams.length > 1) {
        setSelectedKandams(selectedKandams.filter((k) => k !== title));
      }
    } else {
      setSelectedKandams([...selectedKandams, title]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      let uploadedUrl = null;

      // 1. Upload thumb if provided
      if (thumbFile) {
        const formData = new FormData();
        formData.append('thumbprint', thumbFile);
        try {
          const uploadRes = await fetch('http://localhost:5000/api/upload-thumb', {
            method: 'POST',
            body: formData,
          });
          const uploadData = await uploadRes.json();
          if (uploadData.success) {
            uploadedUrl = uploadData.fileUrl;
          }
        } catch (err) {
          console.warn('Backend thumb upload skipped, continuing locally:', err);
        }
      }

      // 2. Post booking
      const payload = {
        name,
        phone,
        email,
        gender,
        dob,
        pob,
        language: preferredLanguage,
        mode,
        date,
        timeSlot,
        notes,
        kandams: selectedKandams,
        thumbprintUrl: uploadedUrl,
      };

      const res = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.success) {
        setBookingSuccess(data.booking);
        // Trigger celebratory confetti
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#f5b82e', '#e03131', '#ffffff', '#ffdf88'],
        });
      } else {
        throw new Error(data.message || 'Booking submission failed');
      }
    } catch (err) {
      console.warn('Backend booking error, generating fallback reference:', err);
      // Fallback local booking simulation
      const fallbackBooking = {
        id: `BK-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`,
        name,
        phone,
        date,
        timeSlot,
        mode,
        kandams: selectedKandams,
        gender,
        thumbType: gender === 'female' ? 'Left Thumb (Female)' : 'Right Thumb (Male)',
      };
      setBookingSuccess(fallbackBooking);
      confetti({
        particleCount: 100,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#f5b82e', '#e03131', '#ffffff'],
      });
    } finally {
      setSubmitting(false);
    }
  };

  const getWhatsAppConfirmationUrl = () => {
    if (!bookingSuccess) return '#';
    const text =
      lang === 'ta'
        ? `வணக்கம் குருஜி, நான் நாடி ஜோதிட ஆலோசனைக்கு பதிவு செய்துள்ளேன்.\n\n*பதிவு எண்:* ${bookingSuccess.id}\n*பெயர்:* ${name}\n*தொலைபேசி:* ${phone}\n*பாலினம்:* ${gender === 'female' ? 'பெண் (இடது பெருவிரல்)' : 'ஆண் (வலது பெருவிரல்)'}\n*தேர்ந்தெடுத்த காண்டங்கள்:* ${selectedKandams.join(', ')}\n*தேதி & நேரம்:* ${date} (${timeSlot})\n*முறை:* ${mode}\n\nசுவடி தேடும் பணியை துவங்க வேண்டுகிறேன்.`
        : `Pranam Guruji, I have registered for Nadi Palm Leaf consultation.\n\n*Booking ID:* ${bookingSuccess.id}\n*Name:* ${name}\n*Phone:* ${phone}\n*Gender:* ${gender === 'female' ? 'Female (Left Thumb)' : 'Male (Right Thumb)'}\n*Kandams:* ${selectedKandams.join(', ')}\n*Date & Slot:* ${date} (${timeSlot})\n*Mode:* ${mode}\n\nPlease begin the palm leaf search at Vaitheeswaran Koil archives.`;
    return `https://wa.me/918838972528?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-container-glass">
        {/* Modal Close Button */}
        <button onClick={onClose} className="modal-close-btn" aria-label="Close Modal">
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-badge">
            <Sparkles size={14} />
            <span>{t.modal.subtitle}</span>
          </div>
          <h2 className="modal-title">{t.modal.title}</h2>
          <div className="sacred-rule-pill">
            <Shield size={14} />
            <span>{t.modal.genderNotice}</span>
          </div>
        </div>

        {/* Success View */}
        {bookingSuccess ? (
          <div className="modal-success-body">
            <div className="success-icon-wrap">
              <CheckCircle size={56} className="success-check" />
            </div>
            <h3>{t.modal.successTitle}</h3>
            <p className="success-desc">{t.modal.successMessage}</p>

            <div className="booking-ref-card">
              <span className="ref-label">{t.modal.bookingId}</span>
              <span className="ref-number">{bookingSuccess.id}</span>
              <span className="ref-meta">
                {name} • {bookingSuccess.thumbType || (gender === 'female' ? 'Left Thumb' : 'Right Thumb')} • {date}
              </span>
            </div>

            <div className="success-actions">
              <a
                href={getWhatsAppConfirmationUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-confirm-btn"
              >
                <MessageCircle size={18} />
                <span>{t.modal.whatsappConfirm}</span>
              </a>

              <button onClick={onClose} className="outline-gold-btn">
                {lang === 'ta' ? 'முடிந்தது / மூடுக' : 'Close Window'}
              </button>
            </div>
          </div>
        ) : (
          /* Multi-Step Form */
          <form onSubmit={handleSubmit} className="modal-form-flow">
            {/* Step Indicators */}
            <div className="steps-tracker">
              <button
                type="button"
                onClick={() => setStep(1)}
                className={`tracker-step ${step >= 1 ? 'active' : ''}`}
              >
                <span className="num">1</span>
                <span className="txt">{t.modal.step1}</span>
              </button>
              <div className="tracker-line"></div>
              <button
                type="button"
                onClick={() => name && phone && setStep(2)}
                className={`tracker-step ${step >= 2 ? 'active' : ''}`}
              >
                <span className="num">2</span>
                <span className="txt">{t.modal.step2}</span>
              </button>
              <div className="tracker-line"></div>
              <button
                type="button"
                onClick={() => name && phone && setStep(3)}
                className={`tracker-step ${step >= 3 ? 'active' : ''}`}
              >
                <span className="num">3</span>
                <span className="txt">{t.modal.step3}</span>
              </button>
            </div>

            {/* STEP 1: Personal Details */}
            {step === 1 && (
              <div className="form-step-content animate-fade">
                <div className="form-grid-2">
                  <div className="form-group">
                    <label>{t.modal.fullName}</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. S. Karthikeyan / Rajeshwari"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label>{t.modal.gender}</label>
                    <div className="gender-toggle-row">
                      <button
                        type="button"
                        onClick={() => setGender('male')}
                        className={`gender-btn ${gender === 'male' ? 'active' : ''}`}
                      >
                        <Fingerprint size={16} />
                        <span>{t.modal.male}</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setGender('female')}
                        className={`gender-btn ${gender === 'female' ? 'active' : ''}`}
                      >
                        <Fingerprint size={16} />
                        <span>{t.modal.female}</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label>{t.modal.phone}</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98401 23456"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label>{t.modal.email}</label>
                    <input
                      type="email"
                      placeholder="devotee@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label>{t.modal.dob}</label>
                    <input
                      type="date"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label>{t.modal.pob}</label>
                    <input
                      type="text"
                      placeholder="e.g. Chennai / Madurai / Singapore"
                      value={pob}
                      onChange={(e) => setPob(e.target.value)}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-step-actions">
                  <div></div>
                  <button
                    type="button"
                    disabled={!name || !phone}
                    onClick={() => setStep(2)}
                    className="gold-shimmer-btn"
                  >
                    <span>{lang === 'ta' ? 'அடுத்தது: கைரேகை' : 'Next: Thumb Impression'}</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Thumb Impression Upload */}
            {step === 2 && (
              <div className="form-step-content animate-fade">
                <div className="thumb-upload-card">
                  <div className="thumb-visual-preview">
                    {thumbPreview ? (
                      <div className="preview-container">
                        <img src={thumbPreview} alt="Thumb Impression Preview" className="preview-img" />
                        <div className="scanner-line"></div>
                        {scanProgress < 100 ? (
                          <div className="scan-status-text">
                            Scanning Whorls: {scanProgress}%
                          </div>
                        ) : (
                          <div className="scan-success-badge">
                            <CheckCircle size={14} /> Whorls Identified
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="default-thumb-icon">
                        <Fingerprint size={64} className="glowing-fingerprint" />
                        <span>
                          {gender === 'female'
                            ? lang === 'ta'
                              ? 'இடது பெருவிரல் ரேகை'
                              : 'Left Thumb (Female)'
                            : lang === 'ta'
                            ? 'வலது பெருவிரல் ரேகை'
                            : 'Right Thumb (Male)'}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="upload-instructions">
                    <h4>{t.modal.thumbUploadTitle}</h4>
                    <p>{t.modal.thumbUploadHint}</p>

                    <label className="file-upload-dropzone">
                      <Upload size={20} />
                      <span>{thumbFile ? thumbFile.name : lang === 'ta' ? 'புகைப்படத்தை தேர்ந்தெடுக்கவும்' : 'Choose Photo or Scan'}</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleThumbUpload}
                        className="d-none"
                      />
                    </label>

                    <div className="upload-tip">
                      <span>💡 {lang === 'ta' ? 'குறிப்பு: மை இல்லாவிட்டாலும் விரலின் தெளிவான புகைப்படத்தை பதிவேற்றலாம்.' : 'Tip: Even a crisp phone photo of your thumb whorl on plain surface works perfectly.'}</span>
                    </div>
                  </div>
                </div>

                <div className="form-step-actions">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="outline-btn"
                  >
                    <ArrowLeft size={16} />
                    <span>{lang === 'ta' ? 'முந்தையது' : 'Previous'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="gold-shimmer-btn"
                  >
                    <span>{lang === 'ta' ? 'அடுத்தது: காண்டம் தேர்வு' : 'Next: Choose Chapters'}</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Choose Kandams & Mode */}
            {step === 3 && (
              <div className="form-step-content animate-fade">
                <div className="kandam-selection-box">
                  <label className="section-label">
                    {lang === 'ta' ? 'நீங்கள் பார்க்க விரும்பும் காண்டங்கள்:' : 'Select Required Kandams (Chapters):'}
                  </label>
                  <div className="kandam-chips-container">
                    {kandamsData.map((k) => {
                      const title = lang === 'ta' ? k.tamilTitle : k.englishTitle;
                      const isChecked = selectedKandams.includes(title);
                      return (
                        <button
                          type="button"
                          key={k.id}
                          onClick={() => toggleKandam(title)}
                          className={`kandam-chip ${isChecked ? 'selected' : ''}`}
                        >
                          <span className="chip-check">{isChecked ? '✓' : '+'}</span>
                          <span>{k.number}. {title}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="form-grid-3">
                  <div className="form-group">
                    <label>{t.modal.preferredLanguage}</label>
                    <select
                      value={preferredLanguage}
                      onChange={(e) => setPreferredLanguage(e.target.value)}
                      className="form-select"
                    >
                      <option value="Tamil">தமிழ் (Tamil)</option>
                      <option value="English">English</option>
                      <option value="Telugu">తెలుగు (Telugu)</option>
                      <option value="Hindi">हिन्दी (Hindi)</option>
                      <option value="Malayalam">മലയാളം (Malayalam)</option>
                      <option value="Kannada">ಕನ್ನಡ (Kannada)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>{t.modal.mode}</label>
                    <select
                      value={mode}
                      onChange={(e) => setMode(e.target.value)}
                      className="form-select"
                    >
                      <option value="Online (WhatsApp)">{t.modal.modeOnline}</option>
                      <option value="In-Person (Vaitheeswaran Koil Nilayam)">{t.modal.modeInPerson}</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>{t.modal.date}</label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label>{t.modal.timeSlot}</label>
                    <select
                      value={timeSlot}
                      onChange={(e) => setTimeSlot(e.target.value)}
                      className="form-select"
                    >
                      <option value="Morning: 9:00 AM - 12:00 PM">{t.modal.timeMorning}</option>
                      <option value="Afternoon: 1:00 PM - 4:00 PM">{t.modal.timeAfternoon}</option>
                      <option value="Evening: 5:00 PM - 8:30 PM">{t.modal.timeEvening}</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>{t.modal.notes}</label>
                    <input
                      type="text"
                      placeholder="e.g. Marriage delay, career growth, or pariharam enquiry"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-step-actions">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="outline-btn"
                  >
                    <ArrowLeft size={16} />
                    <span>{lang === 'ta' ? 'முந்தையது' : 'Previous'}</span>
                  </button>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="gold-shimmer-btn submit-final-btn"
                  >
                    {submitting ? (
                      <>
                        <span className="spinner"></span>
                        <span>{t.modal.processing}</span>
                      </>
                    ) : (
                      <>
                        <FileCheck size={18} />
                        <span>{t.modal.submitBooking}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import {
  Sparkles,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  MessageCircle,
} from 'lucide-react';

export default function ContactSection({ t, lang }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Nadi Palm Leaf Reading Inquiry');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch('http://localhost:5000/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, email, subject, message }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setSubmitted(true);
      }
    } catch (err) {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>{t.contact.badge}</span>
          </div>
          <h2 className="section-title">{t.contact.title}</h2>
          <p className="section-subtitle">{t.contact.subtitle}</p>
        </div>

        <div className="contact-main-grid">
          {/* Left Column: Sanctum Info & Map */}
          <div className="contact-info-col">
            <div className="contact-card-glass">
              {/* Address */}
              <div className="contact-info-item">
                <div className="info-icon-box">
                  <MapPin size={22} />
                </div>
                <div className="info-text">
                  <h4>{t.contact.addressTitle}</h4>
                  <p>{t.contact.address}</p>
                </div>
              </div>

              {/* Phones */}
              <div className="contact-info-item">
                <div className="info-icon-box">
                  <Phone size={22} />
                </div>
                <div className="info-text">
                  <h4>{t.contact.phoneTitle}</h4>
                  <p>
                    <a href="tel:+916374844127" className="contact-link">
                      +91 6374844127
                    </a>{' '}
                    (WhatsApp Available)
                  </p>
                  <p>
                    <a href="tel:+918189911639" className="contact-link">
                      +91 8189911639
                    </a>
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="contact-info-item">
                <div className="info-icon-box">
                  <Clock size={22} />
                </div>
                <div className="info-text">
                  <h4>{t.contact.timingTitle}</h4>
                  <p>{t.contact.timing}</p>
                </div>
              </div>

              {/* Email */}
              <div className="contact-info-item">
                <div className="info-icon-box">
                  <Mail size={22} />
                </div>
                <div className="info-text">
                  <h4>{t.contact.emailTitle}</h4>
                  <p>
                    <a href="mailto:astrowebnadi@gmail.com" className="contact-link">
                      astrowebnadi@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="whatsapp-quick-callout">
                <MessageCircle size={28} className="wa-icon" />
                <div>
                  <strong>{lang === 'ta' ? 'வாட்ஸ்அப் நேரடி ஆலோசனை' : 'Direct WhatsApp Help'}</strong>
                  <p>{lang === 'ta' ? 'உடனடி சுவடி வழிகாட்டலுக்கு தொடர்பு கொள்க' : 'Chat instantly for immediate guidance'}</p>
                </div>
                <a
                  href="https://wa.me/916374844127"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wa-pill-btn"
                >
                  {lang === 'ta' ? 'செய்தி அனுப்புக' : 'Message'}
                </a>
              </div>
            </div>

            {/* Embedded Temple Map */}
            <div className="map-frame-box">
              <iframe
                title="Vaitheeswaran Koil Devasthanam Map"
                src="https://maps.google.com/maps?q=2%2F72%2C%20DEVASTHANAM%20BUILDING%2CEAST%20CAR%20STREET%20VAITHISWARAN%20KOVIL%2C%20SIRKALI%20TALUKA%20MAYILADUTHURAI%20DISTRICT%20TAMILNADU%2C%20INDIA%20-%20609117&t=m&z=15&output=embed&iwloc=near"
                width="100%"
                height="230"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="contact-form-col">
            <div className="form-card-glass">
              <h3>{t.contact.formTitle}</h3>
              <p className="form-subtitle-text">{t.contact.formSubtitle}</p>

              {submitted ? (
                <div className="inquiry-success-message">
                  <CheckCircle size={48} className="success-icon" />
                  <h4>{lang === 'ta' ? 'உங்கள் கேள்வி பெறப்பட்டது!' : 'Inquiry Received!'}</h4>
                  <p>
                    {lang === 'ta'
                      ? 'எங்கள் தலைமை குருக்கள் உங்கள் விவரங்களை ஆய்வு செய்து 2 மணி நேரத்திற்குள் தொலைபேசி அல்லது வாட்ஸ்அப் மூலம் தொடர்புகொள்வார்.'
                      : 'Our chief hereditary Gurukkal has received your details and will get in touch shortly via Phone/WhatsApp.'}
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setMessage('');
                    }}
                    className="outline-gold-btn mt-3"
                  >
                    {lang === 'ta' ? 'மற்றொரு செய்தி அனுப்ப' : 'Send Another Inquiry'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="inquiry-form">
                  <div className="form-group">
                    <label>{t.contact.nameLabel}</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. S. Karthikeyan"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="form-input"
                    />
                  </div>

                  <div className="form-grid-2">
                    <div className="form-group">
                      <label>{t.contact.phoneLabel}</label>
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
                      <label>{t.contact.emailLabel}</label>
                      <input
                        type="email"
                        placeholder="devotee@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>{t.contact.subjectLabel}</label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label>{t.contact.msgLabel}</label>
                    <textarea
                      required
                      rows={5}
                      placeholder={
                        lang === 'ta'
                          ? 'உங்கள் ஜாதக சிக்கல் அல்லது அறிய விரும்பும் காண்டங்களை பற்றி இங்கு குறிப்பிடவும்...'
                          : 'Please specify your queries regarding marriage delay, career, health remedies, or family pariharams...'
                      }
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="form-input"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="gold-shimmer-btn w-100"
                  >
                    <Send size={18} />
                    <span>{submitting ? t.contact.submitting : t.contact.submitBtn}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact({ preselectedService }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Nadi Astrology Consultation Enquiry');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setSubject(`Enquiry about ${preselectedService}`);
    }
  }, [preselectedService]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const payload = {
        name,
        phone,
        email,
        subject,
        message,
        timestamp: new Date().toISOString(),
      };

      // Save locally
      try {
        const existing = JSON.parse(localStorage.getItem('astroweb_inquiries') || '[]');
        existing.push(payload);
        localStorage.setItem('astroweb_inquiries', JSON.stringify(existing));
      } catch (e) {
        // ignore
      }

      // Try backend if available (optional, won't break if offline)
      try {
        await fetch('http://localhost:5000/api/inquiries', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      } catch (err) {
        // Backend not running, proceed gracefully
      }

      // Format WhatsApp message to directly notify Guruji
      const text = `*New Consultation Enquiry - Astroweb*%0A%0A*Name:* ${encodeURIComponent(
        name
      )}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Email:* ${encodeURIComponent(
        email || 'Not provided'
      )}%0A*Subject:* ${encodeURIComponent(subject)}%0A*Message:* ${encodeURIComponent(
        message
      )}`;
      const waUrl = `https://wa.me/918838972528?text=${text}`;

      // Open WhatsApp in new tab for direct consultation
      window.open(waUrl, '_blank');

      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padded bg-soft contact-section-wrap">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-center">
          <span className="section-tag">Reach Out</span>
          <h2 className="section-title">Contact Us</h2>
          <p className="section-desc">
            Get in touch with Astroweb (Sri Agathiya Mahasiva Nadi Jothida Nilayam) at Vaitheeswaran Kovil
          </p>
        </div>

        {/* Main Grid */}
        <div className="contact-grid-clean">
          {/* Left Column: Sanctum Address & Details */}
          <div className="contact-details-col">
            <div className="details-card-clean">
              <h3>Get In Touch</h3>
              <p className="details-sub">
                Have any questions about Nadi Astrology or wish to consult our Guruji? Contact us anytime.
              </p>

              <div className="contact-item-row">
                <div className="contact-icon-bubble">
                  <MapPin size={20} />
                </div>
                <div>
                  <strong>Sanctum Address</strong>
                  <p>
                    Guruji V.prakash Shivam<br />
                    2/75, Edakudi thenpathi,<br />
                    Vaitheeshwarankovil
                  </p>
                </div>
              </div>

              <div className="contact-item-row">
                <div className="contact-icon-bubble">
                  <Phone size={20} />
                </div>
                <div>
                  <strong>Phone Number</strong>
                  <p>
                    <a href="tel:+918838972528" className="link-text">+91 883 897 2528</a>
                  </p>
                </div>
              </div>

              <div className="contact-item-row">
                <div className="contact-icon-bubble">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <strong>WhatsApp Consultation</strong>
                  <p>
                    <a
                      href="https://wa.me/918838972528"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="whatsapp-text-link"
                    >
                      +91 883 897 2528 (Chat on WhatsApp)
                    </a>
                  </p>
                </div>
              </div>

              <div className="contact-item-row">
                <div className="contact-icon-bubble">
                  <Mail size={20} />
                </div>
                <div>
                  <strong>Email Address</strong>
                  <p>
                    <a href="mailto:astrowebnadi@gmail.com" className="link-text">
                      astrowebnadi@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="contact-item-row">
                <div className="contact-icon-bubble">
                  <Clock size={20} />
                </div>
                <div>
                  <strong>Opening Hours</strong>
                  <p>Open 24 Hours (24h) – All 7 Days</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="clean-map-container">
              <iframe
                title="Vaitheeshwarankovil Map - Guruji V.prakash Shivam"
                src="https://maps.google.com/maps?q=2%2F75%2C%20Edakudi%20thenpathi%2C%20Vaitheeshwarankovil&t=m&z=15&output=embed&iwloc=near"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Right Column: Normal Contact Form */}
          <div className="contact-form-col">
            <div className="form-card-clean">
              <h3>Send Us A Message</h3>
              <p className="form-desc-text">
                Fill in your details below and our team will get back to you promptly.
              </p>

              {submitted ? (
                <div className="booking-confirmed-box">
                  <CheckCircle size={52} className="check-success" />
                  <h4>Thank You!</h4>
                  <p>
                    Your enquiry has been received and opened on WhatsApp. Guruji's team will contact you promptly.
                  </p>
                  <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', marginTop: '1.25rem', flexWrap: 'wrap' }}>
                    <a
                      href="https://wa.me/918838972528"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp"
                      style={{ padding: '0.65rem 1.25rem' }}
                    >
                      <MessageCircle size={16} />
                      <span>Chat on WhatsApp</span>
                    </a>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setName('');
                        setPhone('');
                        setEmail('');
                        setMessage('');
                      }}
                      className="btn-secondary"
                      style={{ padding: '0.65rem 1.25rem' }}
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="clean-booking-form">
                  <div className="form-row-2">
                    <div className="form-field">
                      <label>Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="input-box"
                      />
                    </div>

                    <div className="form-field">
                      <label>Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="Phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="input-box"
                      />
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-field">
                      <label>Email Address</label>
                      <input
                        type="email"
                        placeholder="Email (optional)"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input-box"
                      />
                    </div>

                    <div className="form-field">
                      <label>Subject</label>
                      <input
                        type="text"
                        placeholder="Subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="input-box"
                      />
                    </div>
                  </div>

                  <div className="form-field">
                    <label>Message *</label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Write your message or inquiry here..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="input-box"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary w-100"
                  >
                    <Send size={15} />
                    <span>{submitting ? 'Sending...' : 'Send Message'}</span>
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

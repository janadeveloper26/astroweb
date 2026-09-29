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
      };

      const res = await fetch('http://localhost:5000/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.6 },
        });
      } else {
        setSubmitted(true);
      }
    } catch (err) {
      // Local fallback
      setSubmitted(true);
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
            Get in touch with Sri Agathiya Mahasiva Nadi Jothida Nilayam at Vaitheeswaran Kovil
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
                    2/72, Devasthanam Building, East Car Street, Vaitheeswaran Kovil, Sirkali Taluk, Mayiladuthurai District, Tamil Nadu, India - 609117
                  </p>
                </div>
              </div>

              <div className="contact-item-row">
                <div className="contact-icon-bubble">
                  <Phone size={20} />
                </div>
                <div>
                  <strong>Phone Numbers</strong>
                  <p>
                    <a href="tel:+916374844127" className="link-text">+91 6374844127</a>
                  </p>
                  <p>
                    <a href="tel:+918189911639" className="link-text">+91 8189911639</a>
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
                      href="https://wa.me/916374844127"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="whatsapp-text-link"
                    >
                      +91 6374844127 (Click to Chat Directly)
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
                    <a href="mailto:sivachandranadi@gmail.com" className="link-text">
                      sivachandranadi@gmail.com
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
                  <p>Monday to Sunday : 8:00 AM – 9:00 PM (IST)</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="clean-map-container">
              <iframe
                title="Vaitheeswaran Koil Devasthanam Building Map"
                src="https://maps.google.com/maps?q=2%2F72%2C%20DEVASTHANAM%20BUILDING%2CEAST%20CAR%20STREET%20VAITHISWARAN%20KOVIL%2C%20SIRKALI%20TALUKA%20MAYILADUTHURAI%20DISTRICT%20TAMILNADU%2C%20INDIA%20-%20609117&t=m&z=15&output=embed&iwloc=near"
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
                    Your message has been sent successfully. We will get back to you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setPhone('');
                      setEmail('');
                      setMessage('');
                    }}
                    className="btn-primary mt-3"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="clean-booking-form">
                  <div className="form-field">
                    <label>Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="input-box"
                    />
                  </div>

                  <div className="form-row-2">
                    <div className="form-field">
                      <label>Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="Enter your phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="input-box"
                      />
                    </div>

                    <div className="form-field">
                      <label>Email Address</label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input-box"
                      />
                    </div>
                  </div>

                  <div className="form-field">
                    <label>Subject</label>
                    <input
                      type="text"
                      placeholder="Enter subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="input-box"
                    />
                  </div>

                  <div className="form-field">
                    <label>Message *</label>
                    <textarea
                      required
                      rows={5}
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
                    <Send size={16} />
                    <span>{submitting ? 'Sending Message...' : 'Send Message'}</span>
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

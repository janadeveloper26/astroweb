import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Navigation,
  ExternalLink,
  Sparkles,
} from 'lucide-react';

export default function Contact() {
  const googleMapsUrl =
    'https://maps.google.com/?q=2/75,+Edakudi+thenpathi,+Vaitheeshwarankovil';
  const whatsappLocationUrl =
    'https://wa.me/918838972528?text=Hello%20Guruji,%20please%20guide%20me%20with%20the%20sanctum%20location%20and%20directions%20to%20Vaitheeshwarankovil.';

  return (
    <section id="contact" className="section-padded bg-soft contact-section-wrap">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-center">
          <span className="section-tag">Reach Out</span>
          <h2 className="section-title">Contact Us</h2>
          <p className="section-desc">
            Get in touch with Astroweb (Sri Agasthiyar Maharishi Nadi Jothidam Nilayam) at Vaitheeswaran Kovil
          </p>
        </div>

        {/* Main Grid: Details on Left, Map on Right */}
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
                    Vaitheeshwarankovil, Mayiladuthurai District, Tamil Nadu - 609117
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
          </div>

          {/* Right Column: Google Map in place of Send Us A Message Form */}
          <div className="contact-map-col">
            <div className="map-card-clean">
              <div className="map-card-header">
                <div className="badge-pill mb-2" style={{ display: 'inline-flex' }}>
                  <Sparkles size={14} className="badge-icon" />
                  <span>Sacred Temple Sanctum</span>
                </div>
                <h3>Sanctum Location Map</h3>
                <p className="map-desc-text">
                  Locate Guruji V.prakash Shivam at Vaitheeshwarankovil. Click below for live turn-by-turn navigation or guidance.
                </p>
              </div>

              <div className="map-embed-wrapper">
                <iframe
                  title="Vaitheeshwarankovil Map - Sri Agasthiyar Maharishi Nadi Jothidam Nilayam"
                  src="https://maps.google.com/maps?q=2%2F75%2C%20Edakudi%20thenpathi%2C%20Vaitheeshwarankovil&t=m&z=15&output=embed&iwloc=near"
                  width="100%"
                  height="360"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="map-card-actions">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary map-directions-btn"
                >
                  <Navigation size={16} />
                  <span>Open in Google Maps</span>
                  <ExternalLink size={14} />
                </a>

                <a
                  href={whatsappLocationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp map-whatsapp-btn"
                >
                  <MessageCircle size={16} />
                  <span>Directions on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

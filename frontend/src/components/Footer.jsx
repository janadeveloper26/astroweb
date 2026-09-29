import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer({ onScrollTo }) {
  return (
    <footer className="footer-clean">
      <div className="container footer-top-grid">
        {/* Col 1: About */}
        <div className="footer-col">
          <div className="footer-brand-title">
            <span className="footer-emblem">ॐ</span>
            <div>
              <h3>Astroweb</h3>
              <p>Sri Agathiya Mahasiva Nadi Jothida Nilayam</p>
            </div>
          </div>
          <p className="footer-about-text">
            Preserving the sacred palm leaf heritage of Sage Agathiyar through four unbroken
            generations of traditional Nadi astrologers at Vaitheeswaran Kovil.
          </p>
          <div className="footer-timing-badge">
            <Clock size={14} />
            <span>Mon - Sun: 8:00 AM – 9:00 PM</span>
          </div>
        </div>

        {/* Col 2: Pages */}
        <div className="footer-col">
          <h4 className="footer-col-heading">Quick Links</h4>
          <ul className="footer-nav-list">
            <li>
              <button onClick={() => onScrollTo('home')} className="footer-link-btn">Home</button>
            </li>
            <li>
              <button onClick={() => onScrollTo('about')} className="footer-link-btn">About Us</button>
            </li>
            <li>
              <button onClick={() => onScrollTo('services')} className="footer-link-btn">Services</button>
            </li>
            <li>
              <button onClick={() => onScrollTo('gallery')} className="footer-link-btn">Photo Gallery</button>
            </li>
            <li>
              <button onClick={() => onScrollTo('contact')} className="footer-link-btn">Contact Us</button>
            </li>
          </ul>
        </div>

        {/* Col 4: Sanctum Address */}
        <div className="footer-col">
          <h4 className="footer-col-heading">Sanctum Address</h4>
          <div className="footer-contact-list">
            <p className="contact-detail">
              <MapPin size={16} className="detail-icon" />
              <span>2/72, Devasthanam Bldg, East Car St, Vaitheeswaran Kovil - 609117, Tamil Nadu</span>
            </p>
            <p className="contact-detail">
              <Phone size={16} className="detail-icon" />
              <a href="tel:+916374844127">+91 6374844127</a> / <a href="tel:+918189911639">+91 8189911639</a>
            </p>
            <p className="contact-detail">
              <Mail size={16} className="detail-icon" />
              <a href="mailto:astrowebnadi@gmail.com">astrowebnadi@gmail.com</a>
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom-strip">
        <div className="container bottom-inner">
          <p>© {new Date().getFullYear()} Astroweb (Sri Agathiya Mahasiva Nadi Jothida Nilayam). All Rights Reserved.</p>
          <p className="sanctum-location-note">Vaitheeswaran Kovil, Tamil Nadu, India</p>
        </div>
      </div>
    </footer>
  );
}

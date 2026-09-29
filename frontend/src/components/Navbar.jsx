import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Menu, X } from 'lucide-react';

export default function Navbar({ activeSection, onScrollTo }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (sectionId) => {
    onScrollTo(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Clean Top Contact Bar */}
      <div className="top-bar-clean">
        <div className="container top-bar-container">
          <div className="top-left-info">
            <span className="info-item">
              <Phone size={13} className="info-icon" />
              <a href="tel:+916374844127">+91 6374844127</a> / <a href="tel:+918189911639">+91 8189911639</a>
            </span>
            <span className="info-divider">|</span>
            <span className="info-item">
              <Mail size={13} className="info-icon" />
              <a href="mailto:astrowebnadi@gmail.com">astrowebnadi@gmail.com</a>
            </span>
            <span className="info-divider">|</span>
            <span className="info-item location-item">
              <MapPin size={13} className="info-icon" />
              <span>Vaitheeswaran Kovil - 609117</span>
            </span>
          </div>

          <div className="top-right-info">
            <Clock size={13} className="info-icon" />
            <span>Mon to Sun : 8:00 AM – 9:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="main-nav-clean">
        <div className="container nav-container">
          {/* Logo */}
          <div onClick={() => handleNavClick('home')} className="logo-wrap cursor-pointer">
            <div className="logo-emblem">
              <span>ॐ</span>
            </div>
            <div className="logo-text">
              <span className="brand-name">Astroweb</span>
              <span className="brand-tagline">Sri Agathiya Mahasiva Nadi Jothida Nilayam</span>
            </div>
          </div>

          {/* Desktop 5 Section Links */}
          <nav className="desktop-menu">
            <ul className="nav-links-list">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`nav-item-btn ${activeSection === item.id ? 'active' : ''}`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Action Button */}
          <div className="nav-action-wrap">
            <button
              onClick={() => handleNavClick('contact')}
              className="btn-primary btn-sm"
            >
              <Phone size={14} />
              <span>Contact Us</span>
            </button>

            {/* Mobile Toggler */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-hamburger"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="mobile-menu-dropdown">
            <ul className="mobile-links-list">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`mobile-nav-btn ${activeSection === item.id ? 'active' : ''}`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li className="mobile-btn-wrap">
                <button
                  onClick={() => handleNavClick('contact')}
                  className="btn-primary w-100"
                >
                  <Phone size={16} />
                  <span>Contact Us</span>
                </button>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
}

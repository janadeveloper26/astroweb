import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Menu, X } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function Navbar({ activeSection, onScrollTo }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'nadi-types', label: 'Types of Nadi' },
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
              <a href="tel:+918838972528">+91 883 897 2528</a>
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
            <span>Open 24 Hours (24h)</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="main-nav-clean">
        <div className="container nav-container">
          {/* Logo */}
          <div onClick={() => handleNavClick('home')} className="logo-wrap cursor-pointer">
            <div className="logo-emblem">
              <img src={logoImg} alt="Agathiyar Nadi Logo" className="logo-img" />
            </div>
            <div className="logo-text">
              <span className="brand-name">Astroweb</span>
              <span className="brand-tagline">Sri Agasthiyar Maharishi Nadi Jothidam Nilayam</span>
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

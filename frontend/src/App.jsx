import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import NadiTypes from './pages/NadiTypes';
import Contact from './pages/Contact';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [preselectedService, setPreselectedService] = useState('');

  // Smooth scroll handler with offset for sticky navbar
  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const navOffset = 76;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(sectionId);
    }
  };

  const handleSelectService = (serviceTitle) => {
    setPreselectedService(serviceTitle);
  };

  // Scroll listener to update active section in navbar dynamically
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'nadi-types', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="site-wrapper">
      {/* Sticky Navigation Header */}
      <Navbar
        activeSection={activeSection}
        onScrollTo={scrollToSection}
      />

      {/* 5 Seamless Sequential Sections */}
      <main className="main-content">
        {/* 1. Home Section */}
        <Home onScrollTo={scrollToSection} />

        {/* 2. About Us Section */}
        <About onScrollTo={scrollToSection} />

        {/* 3. Services Section (15 Kandams) */}
        <Services
          onScrollTo={scrollToSection}
          onSelectService={handleSelectService}
        />

        {/* 4. Dedicated Types of Nadi Astrology Section */}
        <NadiTypes
          onScrollTo={scrollToSection}
          onSelectService={handleSelectService}
        />

        {/* 5. Contact Us Section */}
        <Contact preselectedService={preselectedService} />
      </main>

      {/* Light Theme Footer */}
      <Footer onScrollTo={scrollToSection} />

      {/* Floating WhatsApp Quick Action */}
      <FloatingWhatsApp />
    </div>
  );
}

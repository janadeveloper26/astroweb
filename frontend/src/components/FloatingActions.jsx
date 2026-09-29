import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import SacredAudio from './SacredAudio';

export default function FloatingActions({ lang, onOpenBooking }) {
  const whatsappUrl = `https://wa.me/916374844127?text=${encodeURIComponent(
    lang === 'ta'
      ? 'வணக்கம் குருஜி, நான் வைத்தீஸ்வரன் கோவில் அகத்திய மகாசிவ நாடி ஜோதிடம் பார்க்க விரும்புகிறேன்.'
      : 'Pranam Guruji, I would like to consult Sri Agathiya Mahasiva Nadi Palm Leaf reading.'
  )}`;

  return (
    <>
      {/* Floating Audio Player (Bottom Left) */}
      <SacredAudio lang={lang} />

      {/* Floating Action Buttons (Bottom Right) */}
      <div className="floating-actions-container">
        {/* Call button */}
        <a
          href="tel:+916374844127"
          className="floating-btn call-float-btn"
          title={lang === 'ta' ? 'குருஜியை அழைக்க' : 'Call Guruji (+91 6374844127)'}
          aria-label="Call Guruji"
        >
          <Phone size={22} />
        </a>

        {/* WhatsApp button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-btn wa-float-btn"
          title={lang === 'ta' ? 'வாட்ஸ்அப் நேரலை' : 'WhatsApp Consultation'}
          aria-label="WhatsApp Us"
        >
          <MessageCircle size={24} />
          <span className="wa-pulse-dot"></span>
        </a>

        {/* Quick Booking CTA */}
        <button
          onClick={onOpenBooking}
          className="floating-book-pill"
          title={lang === 'ta' ? 'சுவடி பதிவு' : 'Book Reading'}
        >
          <Calendar size={18} />
          <span>{lang === 'ta' ? 'ரேகை பதிவு' : 'Book Reading'}</span>
        </button>
      </div>
    </>
  );
}

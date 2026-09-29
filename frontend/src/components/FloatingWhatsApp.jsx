import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

export default function FloatingWhatsApp() {
  const whatsappUrl =
    'https://wa.me/916374844127?text=Hello%20Guruji,%20I%20would%20like%20to%20consult%20for%20Nadi%20Palm%20Leaf%20Astrology.';

  return (
    <div className="floating-widgets-light">
      <a
        href="tel:+916374844127"
        className="floating-call-btn"
        title="Call Astrologer"
        aria-label="Call Astrologer"
      >
        <Phone size={20} />
      </a>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-wa-btn"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={24} />
        <span className="wa-pulse"></span>
      </a>
    </div>
  );
}

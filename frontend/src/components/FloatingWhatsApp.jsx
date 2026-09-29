import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const whatsappUrl =
    'https://wa.me/916374844127?text=Hello%20Guruji,%20I%20would%20like%20to%20consult%20for%20Nadi%20Palm%20Leaf%20Astrology.';

  return (
    <div className="floating-widgets-light">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-wa-btn"
        title="Chat on WhatsApp"
        aria-label="Chat with Guruji on WhatsApp"
      >
        <MessageCircle size={26} />
        <span className="wa-pulse"></span>
      </a>
    </div>
  );
}

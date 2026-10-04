import React from 'react';
import { Sparkles, Calendar, MessageCircle, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Hero({ t, lang, onOpenBooking }) {
  const whatsappUrl = `https://wa.me/918838972528?text=${encodeURIComponent(
    lang === 'ta'
      ? 'வணக்கம் குருஜி, நான் ஸ்ரீ அகத்தியர் மகரிஷி நாடி ஜோதிடம் ஆன்லைன் மூலம் பார்க்க விரும்புகிறேன். தயவுசெய்து வழிகாட்டவும்.'
      : 'Pranam Guruji, I would like to book an authentic Nadi Palm Leaf reading consultation. Please guide me.'
  )}`;

  return (
    <section id="home" className="hero-section">
      {/* Background with Dark Aura Overlay */}
      <div className="hero-bg-media">
        <img src="/images/hero.jpg" alt="Vaitheeswaran Koil Nadi Astrology Sanctum" className="hero-bg-img" />
        <div className="hero-overlay"></div>
        <div className="hero-glow-amber"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          {/* Sacred Top Badge */}
          <div className="hero-sanctum-badge">
            <Sparkles className="badge-sparkle" size={16} />
            <span>{t.hero.sanctum} • {t.hero.lineage}</span>
          </div>

          {/* Majestic Title */}
          <h1 className="hero-main-title">
            {t.hero.title}
            <span className="hero-city-tag">{t.hero.templeCity}</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-description">{t.hero.subtitle}</p>

          {/* Sacred Live Status */}
          <div className="hero-live-status">
            <span className="pulse-indicator"></span>
            <span className="live-status-text">
              {lang === 'ta'
                ? 'இன்றைய சுவடித் தேடுதல் மற்றும் ஆன்லைன் ஆலோசனை நேரலை திறப்பில் உள்ளது'
                : 'Live Palm Leaf Archives & Online Consultation Open Today (8 AM – 9 PM IST)'}
            </span>
          </div>

          {/* Primary Action Buttons */}
          <div className="hero-cta-group">
            <button onClick={onOpenBooking} className="gold-shimmer-btn hero-primary-btn">
              <Calendar size={18} />
              <span>{t.hero.ctaBooking}</span>
              <ArrowRight size={16} className="btn-arrow" />
            </button>

            <a href="#kandams" className="outline-gold-btn hero-secondary-btn">
              <span>{t.hero.ctaExplore}</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-hero-btn"
            >
              <MessageCircle size={18} />
              <span>{t.hero.ctaWhatsapp}</span>
            </a>
          </div>

          {/* Devotional Quote */}
          <div className="hero-quote-card">
            <div className="quote-mark">“</div>
            <p className="quote-text">{t.hero.quote}</p>
          </div>

          {/* Key Trust Badges */}
          <div className="hero-trust-row">
            <div className="trust-pill">
              <CheckCircle2 size={16} className="trust-check" />
              <span>{lang === 'ta' ? 'அகத்தியர் ஓலைச்சுவடி பாதுகாப்பு' : 'Authentic Agathiyar Palm Leaves'}</span>
            </div>
            <div className="trust-pill">
              <CheckCircle2 size={16} className="trust-check" />
              <span>{lang === 'ta' ? 'வாட்ஸ்அப் ஆன்லைன் நேரலை' : 'WhatsApp Online Live Reading'}</span>
            </div>
            <div className="trust-pill">
              <CheckCircle2 size={16} className="trust-check" />
              <span>{lang === 'ta' ? 'நேரடி கோவில் சாந்தி பரிகாரம்' : 'Vaitheeswaran Koil Pariharams'}</span>
            </div>
          </div>
        </div>

        {/* Hero Interactive Floating Card */}
        <div className="hero-floating-card">
          <div className="floating-card-glass">
            <div className="card-top-header">
              <span className="holy-icon">🪔</span>
              <div>
                <h4>{lang === 'ta' ? 'அதிர்ஷ்ட கைரேகை பதிவு' : 'Sacred Thumbprint Consultation'}</h4>
                <p className="card-subtext">{lang === 'ta' ? 'ஆண்: வலது கை | பெண்: இடது கை' : 'Men: Right Thumb | Women: Left Thumb'}</p>
              </div>
            </div>

            <div className="thumbprint-preview-box">
              <img src="/images/thumbprint.jpg" alt="Sacred Thumbprint Astrological Constellation" className="thumb-graphic" />
              <div className="biometric-laser"></div>
              <div className="scan-label">
                <span>{lang === 'ta' ? 'சுவடி தேடல் வழிகாட்டி' : 'Agathiyar Nadi Search Engine'}</span>
              </div>
            </div>

            <ul className="quick-perks-list">
              <li>
                <span className="gold-bullet">✦</span>
                <span>{lang === 'ta' ? 'பெயர் மற்றும் பெற்றோர் முதலெழுத்து சரிபார்ப்பு' : '100% Name & Parents Initial Verification'}</span>
              </li>
              <li>
                <span className="gold-bullet">✦</span>
                <span>{lang === 'ta' ? 'முழுமையான பதிவு உடனுக்குடன் வழங்கப்படும்' : 'Full Audio & Translated Note Provided'}</span>
              </li>
              <li>
                <span className="gold-bullet">✦</span>
                <span>{lang === 'ta' ? 'தமிழ், English, தெலுங்கு, இந்தி மொழிகளில்' : 'Tamil, English, Telugu, Hindi Translations'}</span>
              </li>
            </ul>

            <button onClick={onOpenBooking} className="gold-shimmer-btn w-100 mt-3">
              {lang === 'ta' ? 'ஆன்லைனில் பதிவு செய்க' : 'Start Online Consultation'}
            </button>
          </div>
        </div>
      </div>

      {/* Hero Stats Ribbon */}
      <div className="hero-stats-ribbon">
        <div className="container stats-grid">
          <div className="stat-item">
            <span className="stat-number">85+</span>
            <span className="stat-label">{t.hero.statYears}</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">15,000+</span>
            <span className="stat-label">{t.hero.statClients}</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">24+</span>
            <span className="stat-label">{t.hero.statCountries}</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">15</span>
            <span className="stat-label">{t.hero.statKandams}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { Sparkles, Compass, Shield, ArrowRight } from 'lucide-react';
import { rasisData } from '../translations/content';

export default function ZodiacSection({ t, lang, onOpenBooking }) {
  const [selectedRasi, setSelectedRasi] = useState(rasisData[0]);

  return (
    <section id="horoscope" className="section-padding zodiac-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-badge">
            <Compass size={14} />
            <span>{t.zodiac.badge}</span>
          </div>
          <h2 className="section-title">{t.zodiac.title}</h2>
          <p className="section-subtitle">{t.zodiac.subtitle}</p>
        </div>

        {/* 12 Rasis Grid */}
        <div className="rasis-carousel-grid">
          {rasisData.map((rasi) => {
            const isSelected = selectedRasi.id === rasi.id;
            return (
              <button
                key={rasi.id}
                onClick={() => setSelectedRasi(rasi)}
                className={`rasi-chip-card ${isSelected ? 'active' : ''}`}
              >
                <div className="rasi-icon-circle">
                  <span className="rasi-initial">
                    {lang === 'ta' ? rasi.nameTa.split(' ')[0] : rasi.nameEn.split(' ')[0]}
                  </span>
                </div>
                <div className="rasi-name-text">
                  <strong>{lang === 'ta' ? rasi.nameTa : rasi.nameEn}</strong>
                  <span className="rasi-lord">{rasi.lord}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Rasi Detailed Pariharam Card */}
        <div className="selected-rasi-pariharam-display">
          <div className="pariharam-display-glass">
            <div className="pariharam-header-row">
              <div>
                <span className="pariharam-tag">
                  {lang === 'ta' ? 'தேர்ந்தெடுக்கப்பட்ட ராசி' : 'Selected Astrological Sign'}
                </span>
                <h3 className="selected-rasi-title">
                  {lang === 'ta' ? selectedRasi.nameTa : selectedRasi.nameEn}
                </h3>
              </div>
              <div className="rasi-meta-pills">
                <span className="meta-pill">
                  <strong>{lang === 'ta' ? 'அதிபதி:' : 'Ruling Planet:'}</strong> {selectedRasi.lord}
                </span>
                <span className="meta-pill">
                  <strong>{lang === 'ta' ? 'ரத்தினம்:' : 'Lucky Gem:'}</strong> {selectedRasi.stone}
                </span>
                <span className="meta-pill">
                  <strong>{lang === 'ta' ? 'தத்துவம்:' : 'Element:'}</strong> {selectedRasi.element}
                </span>
              </div>
            </div>

            <div className="pariharam-body">
              <div className="pariharam-icon-large">
                <Shield size={32} />
              </div>
              <div className="pariharam-instruction">
                <h4>
                  {lang === 'ta'
                    ? 'வைத்தீஸ்வரன் கோவில் அங்காரக மற்றும் நவகிரக பரிகார முறை:'
                    : 'Vaitheeswaran Koil Consecrated Mars & Navagraha Pariharam:'}
                </h4>
                <p className="pariharam-quote">
                  {lang === 'ta' ? selectedRasi.pariharamTa : selectedRasi.pariharam}
                </p>
                <p className="pariharam-note">
                  {lang === 'ta'
                    ? '*குறிப்பு: உங்கள் கையின் பெருவிரல் ரேகை மூலம் 13-வது சாந்தி காண்டத்தை வாசிப்பதன் மூலமே உங்களுடைய பூர்வ ஜென்ம வினை மற்றும் துல்லியமான கோவில் பரிகாரங்கள் தெரியவரும்.'
                    : '*Note: The exact astrological prescription varies per individual karma, accurately revealed in the 13th Santhi Pariharam Kandam.'}
                </p>
              </div>
            </div>

            <div className="pariharam-footer-row">
              <button onClick={onOpenBooking} className="gold-shimmer-btn">
                <span>{lang === 'ta' ? 'இராசிக்கான நாடி சுவடி பார்க்க' : 'Book Personalized Nadi Reading'}</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

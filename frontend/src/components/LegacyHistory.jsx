import React from 'react';
import { Sparkles, MapPin, Landmark, History, Award, CheckCircle } from 'lucide-react';

export default function LegacyHistory({ t, lang, onOpenBooking }) {
  return (
    <section id="history" className="section-padding history-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>{t.history.badge}</span>
          </div>
          <h2 className="section-title">{t.history.title}</h2>
          <p className="section-subtitle">{t.history.subtitle}</p>
        </div>

        {/* Story Grid */}
        <div className="history-story-grid">
          {/* Left Column: Visual Sanctum Showcase */}
          <div className="history-visual-col">
            <div className="temple-showcase-frame">
              <img
                src="/images/temple.jpg"
                alt="Sacred Vaitheeswaran Koil Temple Tower & Water Tank"
                className="temple-img"
              />
              <div className="temple-caption-card">
                <MapPin size={18} className="map-pin-icon" />
                <div>
                  <h5>{lang === 'ta' ? 'ஸ்ரீ வைத்தியநாத சுவாமி கோவில்' : 'Sri Vaidyanatha Swamy Temple'}</h5>
                  <p>{lang === 'ta' ? 'வைத்தீஸ்வரன் கோவில், மயிலாடுதுறை மாவட்டம்' : 'Vaitheeswaran Koil, Tamil Nadu'}</p>
                </div>
              </div>
            </div>

            {/* Inset Palm Leaf Photo */}
            <div className="leaf-showcase-inset">
              <img
                src="/images/palm-leaves.jpg"
                alt="Sacred Nadi Palm Leaf Manuscript with Stylus"
                className="leaf-inset-img"
              />
              <div className="inset-badge">
                <span>{lang === 'ta' ? 'அகத்தியர் ஓலைச்சுவடி' : 'Agathiyar Palm Scripture'}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Historical Narrative */}
          <div className="history-narrative-col">
            <div className="narrative-card">
              <div className="heritage-icon-row">
                <div className="heritage-badge-pill">
                  <Landmark size={15} />
                  <span>{lang === 'ta' ? '12-ஆம் நூற்றாண்டு சோழர் காலம்' : '12th Century Chola Era'}</span>
                </div>
                <div className="heritage-badge-pill">
                  <History size={15} />
                  <span>{lang === 'ta' ? '3-ம் தலைமுறை பாரம்பரியம்' : '3rd Generation Lineage'}</span>
                </div>
              </div>

              <h3 className="narrative-heading">
                {lang === 'ta'
                  ? 'நோய்களையும் கர்ம வினைகளையும் தீர்க்கும் தேவ வைத்தியர்'
                  : 'The Supreme Divine Doctor for Earthly Ills & Karmic Ailments'}
              </h3>

              <div className="narrative-text">
                <p>{t.history.p1}</p>
                <p>{t.history.p2}</p>
                <p>{t.history.p3}</p>
                <p>{t.history.p4}</p>
              </div>

              {/* Four Cardinal Virtues */}
              <div className="lineage-virtues">
                <div className="virtue-item">
                  <CheckCircle size={16} className="virtue-check" />
                  <div>
                    <strong>{lang === 'ta' ? 'உண்மை விசுவாசம்' : 'Spiritual Purity'}</strong>
                    <span>{lang === 'ta' ? 'ரிஷிகளின் வாக்கு பிறழாமல் வாசிப்பு' : 'Direct chanting of Agathiyar verses'}</span>
                  </div>
                </div>
                <div className="virtue-item">
                  <CheckCircle size={16} className="virtue-check" />
                  <div>
                    <strong>{lang === 'ta' ? 'பரிகார வழிகாட்டல்' : 'Authentic Pariharams'}</strong>
                    <span>{lang === 'ta' ? 'வைத்தீஸ்வரன் கோவில் அங்காரக பரிகாரம்' : 'Temple consecrated Mars rituals'}</span>
                  </div>
                </div>
              </div>

              {/* Bottom CTA Callout */}
              <div className="history-cta-box">
                <div className="experience-tag">
                  <Award size={20} className="award-icon" />
                  <span>{t.history.experienceLabel}</span>
                </div>
                <button onClick={onOpenBooking} className="gold-shimmer-btn">
                  {lang === 'ta' ? 'உங்கள் சுவடியை அறிய' : 'Consult with Guruji'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

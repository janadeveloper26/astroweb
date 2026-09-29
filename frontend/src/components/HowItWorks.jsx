import React from 'react';
import { Fingerprint, Search, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

export default function HowItWorks({ t, lang, onOpenBooking }) {
  const steps = [
    {
      num: "01",
      icon: Fingerprint,
      title: t.howItWorks.step1Title,
      desc: t.howItWorks.step1Desc,
      tag: lang === 'ta' ? 'வலது / இடது பெருவிரல்' : 'Biometric Print',
    },
    {
      num: "02",
      icon: Search,
      title: t.howItWorks.step2Title,
      desc: t.howItWorks.step2Desc,
      tag: lang === 'ta' ? 'அகத்தியர் சுவடி தேடல்' : 'Archive Matching',
    },
    {
      num: "03",
      icon: ShieldCheck,
      title: t.howItWorks.step3Title,
      desc: t.howItWorks.step3Desc,
      tag: lang === 'ta' ? 'உண்மை சரிபார்ப்பு' : 'Live Fact Check',
    },
    {
      num: "04",
      icon: Sparkles,
      title: t.howItWorks.step4Title,
      desc: t.howItWorks.step4Desc,
      tag: lang === 'ta' ? 'வாழ்க்கைப் பலன் & பரிகாரம்' : 'Full Destiny Audio',
    },
  ];

  return (
    <section id="how-it-works" className="section-padding how-it-works-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>{t.howItWorks.badge}</span>
          </div>
          <h2 className="section-title">{t.howItWorks.title}</h2>
          <p className="section-subtitle">{t.howItWorks.subtitle}</p>
        </div>

        {/* Steps Grid */}
        <div className="steps-grid">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={step.num} className="step-card">
                <div className="step-card-glass">
                  <div className="step-top-row">
                    <span className="step-number">{step.num}</span>
                    <span className="step-tag">{step.tag}</span>
                  </div>

                  <div className="step-icon-wrapper">
                    <Icon size={28} className="step-icon" />
                  </div>

                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.desc}</p>

                  <div className="step-bottom-indicator">
                    <div className="step-indicator-dot"></div>
                  </div>
                </div>

                {idx < steps.length - 1 && (
                  <div className="step-connector d-none d-lg-block">
                    <ArrowRight size={20} className="connector-arrow" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Callout Banner */}
        <div className="procedure-callout-banner">
          <div className="callout-content">
            <div className="callout-icon">🌿</div>
            <div>
              <h4>
                {lang === 'ta'
                  ? 'பிறந்த தேதி மற்றும் நேரம் துல்லியமாக தெரியாதவர்களுக்கும் நாடி ஜோதிடம் வழிகாட்டுகிறது'
                  : 'No exact date or birth time required — The thumbprint connects directly to your destined leaf'}
              </h4>
              <p>
                {lang === 'ta'
                  ? 'உங்கள் கையின் ரேகை வரிகளே உங்கள் முன்னோர்களின் கர்மாவையும் வாழ்வின் நிகழ்வுகளையும் வெளிப்படுத்தும் திறவுகோல்.'
                  : 'Ancient Maharishis classified human thumbprints into 108 categories. Your palm leaf is discovered solely through this cosmic fingerprint.'}
              </p>
            </div>
          </div>
          <button onClick={onOpenBooking} className="gold-shimmer-btn callout-btn">
            {lang === 'ta' ? 'இப்போதே பதிவு செய்க' : 'Book Leaf Search'}
          </button>
        </div>
      </div>
    </section>
  );
}

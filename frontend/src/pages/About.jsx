import React from 'react';
import { ShieldCheck, Award, MapPin, CheckCircle, ArrowRight } from 'lucide-react';

export default function About({ onScrollTo }) {
  return (
    <section id="about" className="section-padded about-section-wrap">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-center">
          <span className="section-tag">About Our Lineage</span>
          <h2 className="section-title">About Astroweb</h2>
          <p className="section-desc">
            Sri Agathiya Mahasiva Nadi Jothida Nilayam • 3rd Generation Hereditary Lineage at Vaitheeswaran Kovil
          </p>
        </div>

        {/* Two Col Story */}
        <div className="two-col-grid">
          <div className="text-side">
            <span className="section-tag">Our Lineage</span>
            <h2 className="section-title">
              Preserving the Sacred Tradition of Sage Agathiyar
            </h2>
            <p className="lead-paragraph">
              For over four generations, our family has been entrusted with the sacred duty of preserving,
              interpreting, and chanting the divine Palmyra palm leaves inscribed by the revered Saptarishis.
            </p>
            <p className="body-paragraph">
              Astrology is a recognized pillar of ancient Vedic science. The science of Nadi Astrology was
              divined by Sage Agathiyar and other illuminated rishis, who detailed the spiritual and worldly
              journeys of souls destined to be born on this planet earth.
            </p>
            <p className="body-paragraph">
              These palm leaves, originally safeguarded at the historic Tanjore Saraswathi Mahal Library,
              were transferred to traditional astrologer lineages based in the holy town of Vaitheeswaran Kovil.
              We continue this unbroken parampara with honesty, transparency, and reverence.
            </p>

            <div className="key-pillars-list">
              <div className="pillar-item">
                <CheckCircle size={18} className="check-icon" />
                <div>
                  <strong>Ancestral Purity:</strong>
                  <span>Verses are chanted directly from ancient poetic Tamil manuscripts.</span>
                </div>
              </div>
              <div className="pillar-item">
                <CheckCircle size={18} className="check-icon" />
                <div>
                  <strong>Verification Guarantee:</strong>
                  <span>If your matching leaf is not found in the archives, no reading fee is charged.</span>
                </div>
              </div>
              <div className="pillar-item">
                <CheckCircle size={18} className="check-icon" />
                <div>
                  <strong>Global Reach:</strong>
                  <span>Devotees from across the globe receive live video call consultations and audio recordings.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="img-side">
            <div className="about-img-frame">
              <img
                src="/images/temple.jpg"
                alt="Vaitheeswaran Koil Temple Sanctum"
                className="rounded-photo"
              />
              <div className="temple-caption-pill">
                <MapPin size={16} />
                <span>Vaitheeswaran Kovil, Sirkali Taluk, Mayiladuthurai District</span>
              </div>
            </div>
          </div>
        </div>

        {/* Temple History Banner */}
        <div className="two-col-grid reverse-mobile mt-4" style={{ marginTop: '4rem' }}>
          <div className="img-side">
            <img
              src="/images/palm-leaves.jpg"
              alt="Ancient Tamil Palm Leaves with Bronze Stylus"
              className="rounded-photo shadow-card"
            />
          </div>

          <div className="text-side">
            <span className="section-tag">Holy Temple Heritage</span>
            <h2 className="section-title">
              The Healing Grace of Vaitheeswaran Koil
            </h2>
            <p className="body-paragraph">
              Vaitheeswaran Koil is a world-renowned pilgrimage center in Tamil Nadu, dedicated to Lord Shiva
              as <strong>Sri Vaidyanathar</strong> — the Divine Healer and Doctor of all ailments. According to
              legend, Lord Shiva cured the injuries of Lord Muruga following the battle with the demon Surapadman.
            </p>
            <p className="body-paragraph">
              The temple is also intimately associated with <strong>Mars (Angaraka / Chevaai)</strong>, one of
              Hindu astrology's nine planets (Navagraha). Millions of pilgrims visit Vaitheeswaran Koil to seek
              remedies for Chevaai Dosham, delays in marriage, property disputes, and long-standing health issues.
            </p>
            <p className="body-paragraph">
              It is in this sacred spiritual atmosphere that our Nadi Nilayam operates, helping devotees
              discover their destiny and perform authentic temple pariharams.
            </p>

            <button onClick={() => onScrollTo('contact')} className="btn-primary mt-3">
              Contact Guruji Directly <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

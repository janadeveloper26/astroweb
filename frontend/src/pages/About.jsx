import React from 'react';
import { CheckCircle, Sparkles } from 'lucide-react';
import gurujiImg from '../assets/1.png';

export default function About({ onScrollTo }) {
  return (
    <section id="about" className="section-padded about-section-wrap">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-center">
          <span className="section-tag">About Our Lineage</span>
          <h2 className="section-title">About Astroweb</h2>
          <p className="section-desc">
            Sri Agasthiyar Maharishi Nadi Jothidam Nilayam • 3rd Generation Hereditary Lineage at Vaitheeswaran Kovil
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
                  <span>Devotees from across the globe receive live online consultations and audio recordings.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="img-side">
            <div className="about-guruji-card">
              <div className="about-img-frame">
                <img
                  src={gurujiImg}
                  alt="Guruji V.prakash Shivam - Sri Agasthiyar Maharishi Nadi Jothidam Nilayam"
                  className="rounded-photo guruji-main-photo"
                />
                <div className="temple-caption-pill guruji-caption-pill">
                  <Sparkles size={15} />
                  <span>Guruji V.prakash Shivam • Vaitheeswaran Kovil</span>
                </div>
              </div>

              {/* Sacred Heritage Parchment Card below photo */}
              <div className="heritage-parchment-box">
                <h3 className="parchment-title">Sri Agasthiyar Maharishi Nadi Jothidam Nilayam</h3>
                <span className="parchment-subtitle">Guruji V.prakash Shivam • Vaitheeswaran Koil</span>
                <p className="parchment-text">
                  Our Nadi Astrology services trace their origins to <strong>Vaitheeswaran Koil</strong>, a sacred temple in Tamil Nadu dedicated to Lord Shiva. The ancient art of <strong>Palm Leaf (Naadi) Astrology</strong>, practiced by great sages like <strong>Agastya, Vasista, and Brigu</strong>, records the past, present, and future of individuals on sacred palm leaves.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

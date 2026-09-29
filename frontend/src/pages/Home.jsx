import React from 'react';
import {
  Users,
  Scroll,
  ShieldCheck,
  ArrowRight,
  Phone,
  MessageCircle,
  CheckCircle2,
  Calendar,
  Sparkles,
} from 'lucide-react';

export default function Home({ onScrollTo }) {
  const whatsappUrl =
    'https://wa.me/916374844127?text=Hello%20Guruji,%20I%20would%20like%20to%20know%20more%20about%20Nadi%20Astrology%20consultation.';

  return (
    <div id="home" className="home-section-wrap">
      {/* Hero Section */}
      <section className="light-hero">
        <div className="container hero-inner">
          <div className="hero-text-content">
            <div className="badge-pill">
              <Sparkles size={14} className="badge-icon" />
              <span>Sri Agathiya Mahasiva Nadi Jothida Nilayam</span>
            </div>

            <h1 className="hero-heading">
              Ancient Nadi Astrology <br />
              <span className="gold-accent">Vaitheeswaran Kovil</span>
            </h1>

            <p className="hero-subtext">
              Unveil your soul's journey etched thousands of years ago on sacred palm leaves by
              Sage Agathiyar. Consult with 4th generation hereditary astrologers in person or
              through online video call worldwide.
            </p>

            <div className="hero-cta-row">
              <button
                onClick={() => onScrollTo('contact')}
                className="btn-primary"
              >
                <Calendar size={18} />
                <span>Contact Us</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={() => onScrollTo('services')}
                className="btn-secondary"
              >
                <span>Our Services</span>
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <MessageCircle size={18} />
                <span>WhatsApp Us</span>
              </a>
            </div>

            <div className="hero-features-list">
              <div className="feature-item">
                <CheckCircle2 size={16} className="check-icon" />
                <span>4th Generation Hereditary Family</span>
              </div>
              <div className="feature-item">
                <CheckCircle2 size={16} className="check-icon" />
                <span>Online Video Consultation</span>
              </div>
              <div className="feature-item">
                <CheckCircle2 size={16} className="check-icon" />
                <span>Authentic Palm Leaf Verification</span>
              </div>
            </div>
          </div>

          <div className="hero-image-wrap">
            <div className="hero-image-frame">
              <img
                src="/images/hero.jpg"
                alt="Vaitheeswaran Koil Nadi Astrologer with Sacred Palm Leaves"
                className="hero-main-img"
              />
              <div className="hero-image-overlay-card">
                <div className="overlay-icon">🪔</div>
                <div>
                  <strong>Online Service Available</strong>
                  <p>Send your thumbprint from anywhere in the world</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Core Highlights */}
      <section className="section-padded bg-soft">
        <div className="container">
          <div className="cards-grid-3">
            <div className="feature-card">
              <div className="card-icon-box">
                <Users size={22} />
              </div>
              <div className="feature-card-content">
                <h3>Current Generation (4th)</h3>
                <p>Continuing our family's sacred Nadi astrology legacy at Vaitheeswaran Kovil.</p>
                <button onClick={() => onScrollTo('about')} className="card-learn-more">
                  Learn More <ArrowRight size={13} />
                </button>
              </div>
            </div>

            <div className="feature-card">
              <div className="card-icon-box">
                <Scroll size={22} />
              </div>
              <div className="feature-card-content">
                <h3>Nadi Palm Leaf Science</h3>
                <p>Locating your destined palm leaf through sacred thumbprint classification.</p>
                <button onClick={() => onScrollTo('services')} className="card-learn-more">
                  View Services <ArrowRight size={13} />
                </button>
              </div>
            </div>

            <div className="feature-card">
              <div className="card-icon-box">
                <ShieldCheck size={22} />
              </div>
              <div className="feature-card-content">
                <h3>Vedic & Planetary Healing</h3>
                <p>Authentic temple pariharams to overcome doshas and karmic obstacles.</p>
                <button onClick={() => onScrollTo('contact')} className="card-learn-more">
                  Enquire Now <ArrowRight size={13} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome & Introduction Section */}
      <section className="section-padded">
        <div className="container">
          <div className="two-col-grid">
            <div className="img-side">
              <div className="image-stack">
                <img
                  src="/images/palm-leaves.jpg"
                  alt="Ancient Nadi Palm Leaf Manuscript with Stylus"
                  className="stack-img-main"
                />
                <div className="experience-badge">
                  <span className="exp-num">85+</span>
                  <span className="exp-text">Years of Heritage & Trust</span>
                </div>
              </div>
            </div>

            <div className="text-side">
              <span className="section-tag">Welcome to Astroweb</span>
              <h2 className="section-title">
                The Sacred Science of Thumbprint & Ancient Palm Leaves
              </h2>
              <p className="lead-paragraph">
                Astrology is an accepted branch of Vedic Science. The profound wisdom of Nadi Astrology
                sheds light on the story of your soul's journey across time.
              </p>
              <p className="body-paragraph">
                Nadi relies on one's thumb impression to accurately locate predictions inscribed on ancient
                palmyra palm leaves. Men provide their right thumbprint, while women provide their left
                thumbprint.
              </p>
              <p className="body-paragraph">
                During the reading, our Guruji reads verse clues to verify your parents' names, date of birth,
                and current life situation. Once your unique leaf is confirmed, your complete life predictions
                are chanted and explained clearly in English or your preferred language.
              </p>

              <div className="cta-box-inline">
                <button onClick={() => onScrollTo('about')} className="btn-primary">
                  Read Full About Us
                </button>
                <a href="tel:+916374844127" className="phone-cta-link">
                  <Phone size={18} />
                  <span>+91 6374844127</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Simple Steps */}
      <section className="section-padded bg-soft">
        <div className="container">
          <div className="section-header-center">
            <span className="section-tag">Simple Process</span>
            <h2 className="section-title">How Online Nadi Reading Works</h2>
            <p className="section-desc">
              Receive authentic Vaitheeswaran Koil palm leaf predictions from the comfort of your home in 4 easy steps.
            </p>
          </div>

          <div className="steps-container-4">
            <div className="simple-step-card">
              <div className="step-circle">1</div>
              <div className="step-card-content">
                <h4>Send Thumb Impression</h4>
                <p>Send a photo of your thumbprint on white paper via WhatsApp.</p>
              </div>
            </div>

            <div className="simple-step-card">
              <div className="step-circle">2</div>
              <div className="step-card-content">
                <h4>Palm Leaf Search</h4>
                <p>Guruji searches the sacred Vaitheeswaran Kovil archives for your bundle.</p>
              </div>
            </div>

            <div className="simple-step-card">
              <div className="step-circle">3</div>
              <div className="step-card-content">
                <h4>Fact Verification</h4>
                <p>Live video or phone session to verify family verses and confirm your leaf.</p>
              </div>
            </div>

            <div className="simple-step-card">
              <div className="step-circle">4</div>
              <div className="step-card-content">
                <h4>Predictions & Audio</h4>
                <p>Full life predictions chanted and explained with audio recording provided.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

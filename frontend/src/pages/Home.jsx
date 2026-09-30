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
  Globe,
  Video,
  Award,
  CalendarCheck,
  Languages,
  Compass,
} from 'lucide-react';

export default function Home({ onScrollTo }) {
  const whatsappUrl =
    'https://wa.me/918838972528?text=Hello%20Guruji,%20I%20would%20like%20to%20know%20more%20about%20Nadi%20Astrology%20consultation.';

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
              Sage Agathiyar. Consult with 3rd generation hereditary astrologers in person or
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
                <span>3rd Generation Hereditary Family</span>
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
                <h3>Current Generation (3rd)</h3>
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
                <a href="tel:+918838972528" className="phone-cta-link">
                  <Phone size={18} />
                  <span>+91 883 897 2528</span>
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

      {/* Why Choose Our Online Nadi Astrology Service? (7 Points) */}
      <section className="section-padded why-choose-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-tag">Divine Trust & Authenticity</span>
            <h2 className="section-title">
              Why Choose Our Online Nadi Astrology Service?
            </h2>
            <p className="section-desc">
              Rooted in the ancient Vaitheeswaran Temple tradition, we provide genuine and accurate palm leaf readings to seekers across the world.
            </p>
          </div>

          <div className="why-choose-grid">
            {/* Point 1 */}
            <div className="why-card">
              <div className="why-card-top">
                <div className="why-icon-box">
                  <Globe size={22} />
                </div>
                <span className="why-step-num">01</span>
              </div>
              <h3 className="why-card-title">Genuine & Accessible Online</h3>
              <p className="why-card-desc">
                Genuine Nadi Astrology online and accessible from anywhere.
              </p>
              <div className="why-card-tag">Accessible Anywhere</div>
            </div>

            {/* Point 2 */}
            <div className="why-card">
              <div className="why-card-top">
                <div className="why-icon-box">
                  <Video size={22} />
                </div>
                <span className="why-step-num">02</span>
              </div>
              <h3 className="why-card-title">Convenient Online Consultation</h3>
              <p className="why-card-desc">
                Convenient online Nadi astrology service and consultation from the comfort of your home.
              </p>
              <div className="why-card-tag">At Your Convenience</div>
            </div>

            {/* Point 3 */}
            <div className="why-card">
              <div className="why-card-top">
                <div className="why-icon-box highlight-icon">
                  <Award size={22} />
                </div>
                <span className="why-step-num">03</span>
              </div>
              <h3 className="why-card-title">3rd Generation Hereditary Lineage</h3>
              <p className="why-card-desc">
                3rd generation Nadi astrologers rooted in the sacred Vaitheeswaran Temple tradition.
              </p>
              <div className="why-card-tag tag-sacred">Temple Tradition</div>
            </div>

            {/* Point 4 */}
            <div className="why-card">
              <div className="why-card-top">
                <div className="why-icon-box">
                  <CheckCircle2 size={22} />
                </div>
                <span className="why-step-num">04</span>
              </div>
              <h3 className="why-card-title">Accurate & Authentic Readings</h3>
              <p className="why-card-desc">
                Accurate & authentic palm leaf reading decoded directly from original ancient scriptures.
              </p>
              <div className="why-card-tag">100% Genuine Verses</div>
            </div>

            {/* Point 5 */}
            <div className="why-card">
              <div className="why-card-top">
                <div className="why-icon-box">
                  <CalendarCheck size={22} />
                </div>
                <span className="why-step-num">05</span>
              </div>
              <h3 className="why-card-title">Easy Online Booking Process</h3>
              <p className="why-card-desc">
                Easy online booking process to submit thumb impressions and get your appointment.
              </p>
              <div className="why-card-tag">Quick & Simple</div>
            </div>

            {/* Point 6 */}
            <div className="why-card">
              <div className="why-card-top">
                <div className="why-icon-box">
                  <Languages size={22} />
                </div>
                <span className="why-step-num">06</span>
              </div>
              <h3 className="why-card-title">Multiple Language Support</h3>
              <p className="why-card-desc">
                Multiple language support — readings chanted in classical Tamil and clearly explained in English, Tamil, and more.
              </p>
              <div className="why-card-tag">Multi-Lingual</div>
            </div>

            {/* Point 7: Grand Worldwide Banner */}
            <div className="why-card-worldwide">
              <div className="worldwide-content">
                <div className="worldwide-badge">
                  <Compass size={18} />
                  <span>Point 07 • Global Reach</span>
                </div>
                <h3 className="worldwide-title">
                  Online Nadi Astrology Service Available Worldwide
                </h3>
                <p className="worldwide-desc">
                  Online Nadi Astrology service available worldwide. Devotees and seekers from across the globe receive their destined palm leaf predictions with complete personal guidance.
                </p>
              </div>

              <div className="worldwide-actions">
                <button
                  onClick={() => onScrollTo('contact')}
                  className="btn-primary"
                >
                  <Calendar size={18} />
                  <span>Book Consultation</span>
                  <ArrowRight size={16} />
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

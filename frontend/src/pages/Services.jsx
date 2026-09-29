import React, { useState } from 'react';
import {
  Scroll,
  Briefcase,
  Heart,
  Activity,
  Flame,
  Video,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Check,
} from 'lucide-react';

const mainServices = [
  {
    id: 'general',
    tag: 'Chapter 1',
    title: 'General Life Reading',
    desc: 'Complete overview of your life from birth to future destiny based on your sacred thumb impression.',
    icon: Scroll,
  },
  {
    id: 'career',
    tag: 'Chapters 2 & 10',
    title: 'Career & Financial Growth',
    desc: 'Clarity on business opportunities, job promotions, wealth accumulation, and foreign travel.',
    icon: Briefcase,
  },
  {
    id: 'marriage',
    tag: 'Chapters 5 & 7',
    title: 'Marriage & Family Life',
    desc: 'Auspicious timing for marriage, spouse compatibility, family harmony, and progeny blessings.',
    icon: Heart,
  },
  {
    id: 'health',
    tag: 'Chapters 8 & 15',
    title: 'Health & Wellness',
    desc: 'Insights into physical wellbeing, overcoming chronic ailments, and traditional Siddha remedies.',
    icon: Activity,
  },
  {
    id: 'pariharam',
    tag: 'Chapter 13',
    title: 'Karmic Remedies (Pariharam)',
    desc: 'Sacred Vaitheeswaran Koil temple remedies to remove past karmic blocks and Angaraka (Chevaai) doshas.',
    icon: Flame,
  },
  {
    id: 'online',
    tag: 'Worldwide',
    title: 'Online Video Consultation',
    desc: 'Direct consultation with Guruji via WhatsApp video call from anywhere in the world. Audio recording included.',
    icon: Video,
  },
];

const all15Kandams = [
  { num: 1, name: 'General Kandam', desc: 'Complete life summary from birth to salvation' },
  { num: 2, name: 'Money & Family', desc: 'Wealth, eyesight, speech, and family harmony' },
  { num: 3, name: 'Brothers & Sisters', desc: 'Siblings relationships and ancestral ties' },
  { num: 4, name: 'Mother & Assets', desc: 'Maternal health, house, lands, and vehicles' },
  { num: 5, name: 'Children & Progeny', desc: 'Birth of children and remedial blessings' },
  { num: 6, name: 'Diseases & Debts', desc: 'Clearance of debts, illnesses, and court cases' },
  { num: 7, name: 'Matrimony', desc: 'Exact marriage timing and life partner details' },
  { num: 8, name: 'Longevity', desc: 'Span of life, accidents, and life preservation' },
  { num: 9, name: 'Father & Ancestry', desc: 'Father’s lifespan, guru blessings, and charity' },
  { num: 10, name: 'Profession & Business', desc: 'Career growth, trade success, and employment' },
  { num: 11, name: 'Profits & Gains', desc: 'Financial windfalls and second marriage indications' },
  { num: 12, name: 'Moksha & Foreign Travel', desc: 'Expenditure, overseas journeys, and salvation' },
  { num: 13, name: 'Shanthi Pariharam', desc: 'Past birth karmas and temple remedies' },
  { num: 14, name: 'Deekshai Kandam', desc: 'Sacred mantras and protective talisman (Rakshai)' },
  { num: 15, name: 'Aushadha Kandam', desc: 'Ancient Siddha medicine and herbal remedies' },
];

export default function Services({ onScrollTo, onSelectService }) {
  const [showAllKandams, setShowAllKandams] = useState(false);

  const handleBook = (title) => {
    if (onSelectService) {
      onSelectService(title);
    }
    onScrollTo('contact');
  };

  return (
    <section id="services" className="section-padded bg-soft services-section-wrap">
      <div className="container">
        {/* Simple & Clean Section Header */}
        <div className="section-header-center">
          <span className="section-tag">What We Offer</span>
          <h2 className="section-title">Our Services</h2>
          <p className="section-desc">
            Authentic palm leaf readings decoded by 4th generation hereditary astrologers at Vaitheeswaran Kovil.
          </p>
        </div>

        {/* 6 Clean Service Cards */}
        <div className="services-grid-3">
          {mainServices.map((s) => {
            const IconComp = s.icon;
            return (
              <div key={s.id} className="simple-service-card">
                <div className="service-card-header">
                  <div className="service-icon-clean">
                    <IconComp size={24} />
                  </div>
                  <span className="service-tag-badge">{s.tag}</span>
                </div>

                <h3 className="simple-service-title">{s.title}</h3>
                <p className="simple-service-text">{s.desc}</p>

                <button
                  type="button"
                  onClick={() => handleBook(s.title)}
                  className="simple-service-btn"
                >
                  <span>Enquire Now</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            );
          })}
        </div>

        {/* Clean Accordion / Expandable for the 15 Kandams (Simple & unobtrusive) */}
        <div className="kandams-expand-container">
          <button
            type="button"
            onClick={() => setShowAllKandams(!showAllKandams)}
            className="kandams-toggle-btn"
          >
            <span>{showAllKandams ? 'Hide 15 Kandams List' : 'View Complete List of 15 Kandams'}</span>
            {showAllKandams ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>

          {showAllKandams && (
            <div className="kandams-compact-table animate-fade-in">
              <div className="kandams-table-header">
                <h4>All 15 Sacred Palm Leaf Chapters (Kandams)</h4>
                <p>Chanted from ancient Tamil scripts and explained in English.</p>
              </div>
              <div className="kandams-compact-grid">
                {all15Kandams.map((k) => (
                  <div key={k.num} className="kandam-compact-item">
                    <span className="kandam-num-circle">{k.num}</span>
                    <div className="kandam-info">
                      <strong>{k.name}</strong>
                      <p>{k.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Simple Bottom Banner */}
        <div className="services-simple-banner">
          <div className="banner-left">
            <h4>Need a personalized or emergency reading?</h4>
            <p>We also provide Sivanadi Sukshmam and Prasna Kandam readings on request.</p>
          </div>
          <button
            type="button"
            onClick={() => handleBook('Specialized Nadi Reading')}
            className="btn-primary"
          >
            Contact Guruji
          </button>
        </div>
      </div>
    </section>
  );
}

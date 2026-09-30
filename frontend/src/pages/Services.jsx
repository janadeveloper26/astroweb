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
  Sparkles,
  BookOpen,
} from 'lucide-react';

import vasistaImg from '../assets/nadi/vasista-nadi.jpg';
import bhriguImg from '../assets/nadi/bhrigu-nadi.jpg';
import brahmaImg from '../assets/nadi/brahma-nadi.jpg';
import kaushikaImg from '../assets/nadi/kaushika-nadi.jpg';
import agasthiyaImg from '../assets/nadi/agasthiya-nadi.jpg';
import sukhaImg from '../assets/nadi/sukha-nadi.jpg';

const mainServices = [
  {
    id: 'general',
    tag: 'Chapter 1',
    title: 'General Life Reading',
    desc: 'Complete overview of your life, family, and future destiny.',
    icon: Scroll,
  },
  {
    id: 'career',
    tag: 'Chapters 2 & 10',
    title: 'Career & Financial Growth',
    desc: 'Business guidance, job promotions, wealth, and foreign travel.',
    icon: Briefcase,
  },
  {
    id: 'marriage',
    tag: 'Chapters 5 & 7',
    title: 'Marriage & Family Life',
    desc: 'Auspicious marriage timing, spouse match, and family peace.',
    icon: Heart,
  },
  {
    id: 'health',
    tag: 'Chapters 8 & 15',
    title: 'Health & Wellness',
    desc: 'Insights into physical wellbeing and traditional Siddha remedies.',
    icon: Activity,
  },
  {
    id: 'pariharam',
    tag: 'Chapter 13',
    title: 'Karmic Remedies (Pariharam)',
    desc: 'Temple rituals to remove past karmas and Chevaai doshas.',
    icon: Flame,
  },
  {
    id: 'online',
    tag: 'Worldwide',
    title: 'Online Video Consultation',
    desc: 'Direct consultation via WhatsApp video call with audio recording.',
    icon: Video,
  },
];

const nadiTypes = [
  {
    id: 'vasista',
    name: 'Vasista Nadi',
    tamilName: 'வசிஷ்ட நாடி',
    location: 'Wrist Pulse • மணிக்கட்டு நாடி',
    tag: 'Pulse Reading',
    img: vasistaImg,
  },
  {
    id: 'bhrigu',
    name: 'Bhrigu Nadi',
    tamilName: 'பிருகு நாடி',
    location: 'Palm Lines • உள்ளங்கை ரேகைகள்',
    tag: 'Destiny Lines',
    img: bhriguImg,
  },
  {
    id: 'brahma',
    name: 'Brahma Nadi',
    tamilName: 'பிரம்மா நாடி',
    location: 'Thumbprint Whorl • பெருவிரல் சக்கரம்',
    tag: 'Thumb Chakra',
    img: brahmaImg,
  },
  {
    id: 'kaushika',
    name: 'Kaushika Nadi',
    tamilName: 'கௌசிக நாடி',
    location: 'Hand Mounts • கையின் மேடுகள்',
    tag: 'Planetary Mounts',
    img: kaushikaImg,
  },
  {
    id: 'agasthiya',
    name: 'Agasthiya Nadi',
    tamilName: 'அகத்தியர் நாடி',
    location: 'Palm Leaf Verse • மூல ஓலைச்சுவடி',
    tag: 'Ancient Script',
    img: agasthiyaImg,
  },
  {
    id: 'sukha',
    name: 'Sukha Nadi',
    tamilName: 'சுகர் நாடி',
    location: 'Chin Mudra • சின்முத்திரை நாடி',
    tag: 'Sacred Mudra',
    img: sukhaImg,
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
            Authentic palm leaf readings decoded by 3rd generation hereditary astrologers at Vaitheeswaran Kovil.
          </p>
        </div>

        {/* 6 Clean Service Cards */}
        <div className="services-grid-3">
          {mainServices.map((s) => {
            const IconComp = s.icon;
            return (
              <div key={s.id} className="simple-service-card">
                <div className="service-icon-clean">
                  <IconComp size={20} />
                </div>
                <div className="service-card-body">
                  <div className="service-title-row">
                    <h3 className="simple-service-title">{s.title}</h3>
                    <span className="service-tag-badge">{s.tag}</span>
                  </div>
                  <p className="simple-service-text">{s.desc}</p>
                  <button
                    type="button"
                    onClick={() => handleBook(s.title)}
                    className="simple-service-btn"
                  >
                    <span>Enquire Now</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Types of Nadi Showcase */}
        <div className="nadi-types-wrapper">
          <div className="section-header-center">
            <span className="section-tag">Sacred Traditions & Palm Leaves</span>
            <h2 className="section-title">Types of Nadi Astrology</h2>
            <p className="section-desc">
              Ancient palm leaf scriptures divined by illuminated Rishis & Siddhas, each revealing profound insights into human destiny.
            </p>
          </div>

          <div className="nadi-types-grid">
            {nadiTypes.map((nadi) => (
              <div key={nadi.id} className="nadi-card">
                <div className="nadi-card-img-wrap">
                  <img
                    src={nadi.img}
                    alt={`${nadi.name} - ${nadi.location}`}
                    className="nadi-card-img"
                  />
                  <div className="nadi-card-overlay">
                    <span className="nadi-rishi-badge">
                      <Sparkles size={12} />
                      {nadi.tag}
                    </span>
                  </div>
                </div>

                <div className="nadi-card-body">
                  <div className="nadi-title-row">
                    <h3 className="nadi-title">{nadi.name}</h3>
                    <span className="nadi-tamil-name">{nadi.tamilName}</span>
                  </div>
                  <span className="nadi-location-text">{nadi.location}</span>

                  <button
                    type="button"
                    onClick={() => handleBook(`${nadi.name} Consultation`)}
                    className="nadi-consult-btn"
                  >
                    <span>Consult Now</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Clean Accordion / Expandable for the 15 Kandams (Simple & unobtrusive) */}
        <div className="kandams-expand-container">
          <button
            type="button"
            onClick={() => setShowAllKandams(!showAllKandams)}
            className="kandams-toggle-btn"
          >
            <span>{showAllKandams ? 'Hide 15 Kandams List' : 'View Complete List of 15 Kandams'}</span>
            {showAllKandams ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
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

import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

import guruVasistaImg from '../assets/gurus/guru-vasista.jpg';
import guruBhriguImg from '../assets/gurus/guru-bhrigu.jpg';
import guruBrahmaImg from '../assets/gurus/guru-brahma.jpg';
import guruKaushikaImg from '../assets/gurus/guru-kaushika.jpg';
import guruAgasthiyaImg from '../assets/gurus/guru-agasthiya.jpg';
import guruSukhaImg from '../assets/gurus/guru-sukha.jpg';

const nadiTypes = [
  {
    id: 'vasista',
    name: 'Vasista Nadi',
    tamilName: 'வசிஷ்ட நாடி',
    guruName: 'Sage Vasishtha',
    guruTamil: 'வசிஷ்ட மகரிஷி',
    location: 'Wrist Pulse • மணிக்கட்டு நாடி',
    tag: 'Pulse Reading',
    img: guruVasistaImg,
  },
  {
    id: 'bhrigu',
    name: 'Bhrigu Nadi',
    tamilName: 'பிருகு நாடி',
    guruName: 'Maharishi Bhrigu',
    guruTamil: 'பிருகு முனிவர்',
    location: 'Palm Lines • உள்ளங்கை ரேகைகள்',
    tag: 'Destiny Lines',
    img: guruBhriguImg,
  },
  {
    id: 'brahma',
    name: 'Brahma Nadi',
    tamilName: 'பிரம்மா நாடி',
    guruName: 'Lord Brahma',
    guruTamil: 'பிரம்மா தேவர்',
    location: 'Thumbprint Whorl • பெருவிரல் சக்கரம்',
    tag: 'Thumb Chakra',
    img: guruBrahmaImg,
  },
  {
    id: 'kaushika',
    name: 'Kaushika Nadi',
    tamilName: 'கௌசிக நாடி',
    guruName: 'Maharishi Vishwamitra',
    guruTamil: 'கௌசிக முனிவர்',
    location: 'Hand Mounts • கையின் மேடுகள்',
    tag: 'Planetary Mounts',
    img: guruKaushikaImg,
  },
  {
    id: 'agasthiya',
    name: 'Agasthiya Nadi',
    tamilName: 'அகத்தியர் நாடி',
    guruName: 'Sage Agasthiyar',
    guruTamil: 'அகத்திய மாமுனிவர்',
    location: 'Palm Leaf Verse • மூல ஓலைச்சுவடி',
    tag: 'Ancient Script',
    img: guruAgasthiyaImg,
  },
  {
    id: 'sukha',
    name: 'Sukha Nadi',
    tamilName: 'சுகர் நாடி',
    guruName: 'Sage Sukha Maharishi',
    guruTamil: 'சுக முனிவர்',
    location: 'Chin Mudra • சின்முத்திரை நாடி',
    tag: 'Sacred Mudra',
    img: guruSukhaImg,
  },
];

export default function NadiTypes({ onScrollTo, onSelectService }) {
  const handleBook = (title) => {
    if (onSelectService) {
      onSelectService(title);
    }
    if (onScrollTo) {
      onScrollTo('contact');
    }
  };

  return (
    <section id="nadi-types" className="section-padded bg-white nadi-types-section-wrap">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-center">
          <span className="section-tag">Sacred Traditions & Palm Leaves</span>
          <h2 className="section-title">Types of Nadi Astrology</h2>
          <p className="section-desc">
            Ancient palm leaf scriptures divined by illuminated Rishis & Siddhas, each revealing profound insights into human destiny.
          </p>
        </div>

        {/* 6 Guru Cards Grid */}
        <div className="nadi-types-grid">
          {nadiTypes.map((nadi) => (
            <div key={nadi.id} className="nadi-card">
              <div className="nadi-card-img-wrap">
                <img
                  src={nadi.img}
                  alt={`${nadi.guruName} (${nadi.guruTamil}) - ${nadi.name}`}
                  className="nadi-card-img"
                  loading="lazy"
                />
                <div className="nadi-card-overlay">
                  <div className="nadi-overlay-top">
                    <span className="nadi-rishi-badge">
                      <Sparkles size={11} />
                      {nadi.tag}
                    </span>
                  </div>
                  <div className="nadi-overlay-bottom">
                    <span className="nadi-guru-tag-pill">
                      {nadi.guruTamil}
                    </span>
                  </div>
                </div>
              </div>

              <div className="nadi-card-body">
                <div className="nadi-guru-attribution">
                  <span className="nadi-guru-ornament">✦</span>
                  <span className="nadi-guru-tamil-title">அருள்மிகு {nadi.guruTamil}</span>
                  <span className="nadi-guru-sep">•</span>
                  <span className="nadi-guru-en-title">{nadi.guruName}</span>
                </div>

                <div className="nadi-title-row">
                  <h3 className="nadi-title">{nadi.name}</h3>
                  <span className="nadi-tamil-name">{nadi.tamilName}</span>
                </div>

                <div className="nadi-location-row">
                  <span className="nadi-location-text">{nadi.location}</span>
                </div>

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
    </section>
  );
}

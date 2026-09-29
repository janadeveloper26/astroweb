import React, { useState } from 'react';
import {
  Sparkles,
  Scroll,
  Coins,
  Users,
  Home,
  Baby,
  ShieldAlert,
  HeartHandshake,
  Hourglass,
  Briefcase,
  TrendingUp,
  Plane,
  Flame,
  Feather,
  Activity,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import { kandamsData } from '../translations/content';

const iconMap = {
  Scroll,
  Coins,
  Users,
  Home,
  Baby,
  ShieldAlert,
  HeartHandshake,
  Hourglass,
  Sparkles,
  Briefcase,
  TrendingUp,
  Plane,
  Flame,
  Feather,
  Activity,
};

export default function KandamsSection({ t, lang, onSelectKandam }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filterCategories = [
    { key: 'All', label: t.kandams.filterAll },
    { key: 'Life', label: t.kandams.filterLife },
    { key: 'Family', label: t.kandams.filterFamily },
    { key: 'Health', label: t.kandams.filterHealth },
    { key: 'Career', label: t.kandams.filterCareer },
  ];

  const filteredKandams = kandamsData.filter((item) => {
    if (activeFilter === 'All') return true;
    return item.tag === activeFilter;
  });

  return (
    <section id="kandams" className="section-padding kandams-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>{t.kandams.badge}</span>
          </div>
          <h2 className="section-title">{t.kandams.title}</h2>
          <p className="section-subtitle">{t.kandams.subtitle}</p>

          {/* Languages Available Tag */}
          <div className="languages-pill">
            <span>🌐 {t.kandams.languagesAvailable}</span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="kandams-filter-bar">
          {filterCategories.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key)}
              className={`filter-btn ${activeFilter === tab.key ? 'active' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Kandams Grid */}
        <div className="kandams-grid">
          {filteredKandams.map((kandam) => {
            const IconComponent = iconMap[kandam.icon] || Scroll;
            return (
              <div key={kandam.id} className="kandam-card">
                <div className="kandam-card-inner">
                  {/* Card Header */}
                  <div className="kandam-card-top">
                    <div className="kandam-number-pill">
                      <span>{lang === 'ta' ? `காண்டம் ${kandam.number}` : `Kandam ${kandam.number}`}</span>
                    </div>
                    <div className="kandam-icon-box">
                      <IconComponent size={22} className="kandam-icon" />
                    </div>
                  </div>

                  {/* Titles */}
                  <h3 className="kandam-title">
                    {lang === 'ta' ? kandam.tamilTitle : kandam.englishTitle}
                  </h3>
                  <h4 className="kandam-sub-title">
                    {lang === 'ta' ? kandam.englishTitle : kandam.tamilTitle}
                  </h4>

                  {/* Description */}
                  <p className="kandam-desc">
                    {lang === 'ta' ? kandam.descTa : kandam.descEn}
                  </p>

                  {/* Card Footer Button */}
                  <div className="kandam-card-footer">
                    <button
                      onClick={() => onSelectKandam(kandam)}
                      className="kandam-action-btn"
                    >
                      <span>{t.kandams.selectBtn}</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Special Kandams Spotlight */}
        <div className="special-kandams-banner">
          <div className="special-banner-inner">
            <div className="special-badge">
              <Sparkles size={14} />
              <span>{lang === 'ta' ? 'அதிமுக்கிய விசேஷ காண்டங்கள்' : 'Specialized Chapters'}</span>
            </div>
            <h3>
              {lang === 'ta'
                ? 'சிவநாடி துல்லியம் • சிவநாடி சூக்ஷ்மம் • ஞான காண்டம் • பிரசன்ன காண்டம்'
                : 'Sivanadi Thulliam • Sivanadi Sukshmam • Gnana Kandam • Prasna Kandam'}
            </h3>
            <p>{t.kandams.specialNotice}</p>

            <div className="special-features-row">
              <div className="feature-item">
                <CheckCircle size={16} className="feature-icon" />
                <span>{lang === 'ta' ? 'அரசியல் வெற்றி மற்றும் உயர் பதவி யோகம்' : 'Political & High Office Guidance'}</span>
              </div>
              <div className="feature-item">
                <CheckCircle size={16} className="feature-icon" />
                <span>{lang === 'ta' ? 'கோவில் சாந்தி பரிகார முறை' : 'Ancestral Curse Removal (Pariharam)'}</span>
              </div>
              <div className="feature-item">
                <CheckCircle size={16} className="feature-icon" />
                <span>{lang === 'ta' ? 'உடனடி பிரசன்னக் கேள்வி தீர்வு' : 'Instant Prasna Query Resolutions'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

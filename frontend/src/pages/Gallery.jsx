import React, { useState } from 'react';
import { Eye, X } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    title: "Vaitheeswaran Koil Sacred Temple Tower & Tank",
    category: "Holy Temple",
    src: "/images/temple.jpg",
    desc: "The sacred gopuram and Siddhamirtham holy temple water tank at twilight, Vaitheeswaran Koil.",
  },
  {
    id: 2,
    title: "Antique Nadi Palm Leaf Manuscript (Olai Chuvadi)",
    category: "Palm Leaf Scriptures",
    src: "/images/palm-leaves.jpg",
    desc: "Ancient Palmyra palm leaves inscribed with poetic Tamil verses and traditional bronze writing stylus (ezhuthani).",
  },
  {
    id: 3,
    title: "Sacred Sanctum & Hereditary Gurukkal Chanting",
    category: "Sanctum Reading",
    src: "/images/hero.jpg",
    desc: "4th generation hereditary Nadi astrologer deciphering destined palm leaves in the presence of Sage Agathiyar and Lord Shiva.",
  },
  {
    id: 4,
    title: "Sacred Thumbprint Biometric Science",
    category: "Thumbprint Science",
    src: "/images/thumbprint.jpg",
    desc: "Astrological classification of human thumb impressions into 108 categories as divined by Sage Agathiyar.",
  },
];

export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section id="gallery" className="section-padded gallery-section-wrap">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-center">
          <span className="section-tag">Photo Showcase</span>
          <h2 className="section-title">Photo Gallery</h2>
          <p className="section-desc">
            Glimpses of Vaitheeswaran Koil, Sacred Palm Leaf Archives & Consultations
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid-clean">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="gallery-item-card"
            >
              <div className="gallery-img-wrap">
                <img src={item.src} alt={item.title} className="gallery-img" />
                <div className="gallery-hover-overlay">
                  <Eye size={28} className="overlay-view-icon" />
                  <span>View Image</span>
                </div>
              </div>
              <div className="gallery-caption">
                <span className="gallery-cat">{item.category}</span>
                <h4 className="gallery-title">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="lightbox-backdrop" onClick={() => setSelectedPhoto(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedPhoto(null)} className="lightbox-close">
              <X size={24} />
            </button>
            <img src={selectedPhoto.src} alt={selectedPhoto.title} className="lightbox-full-img" />
            <div className="lightbox-details">
              <h3>{selectedPhoto.title}</h3>
              <p>{selectedPhoto.desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

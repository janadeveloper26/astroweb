import React, { useState, useEffect } from 'react';
import { Star, Sparkles, MessageSquarePlus, CheckCircle, Quote } from 'lucide-react';

const defaultReviews = [
  {
    id: "rev-1",
    name: "Rajeshwari S.",
    location: "Chennai, Tamil Nadu",
    kandam: "General Kandam & Santhi Pariharam (1st & 13th)",
    rating: 5,
    date: "2026-08-14",
    comment: "It is very exciting and thrilling. This reading was deeply beneficial for me because I did not know my exact birth time. Finding the leaf with just my thumbprint and mother's initial was pure miracle! Blessed by Sage Agathiyar and the holy parampara.",
    verified: true,
  },
  {
    id: "rev-2",
    name: "Karthi N.",
    location: "Coimbatore, Tamil Nadu",
    kandam: "7th Kandam (Vivaham & Marriage)",
    rating: 5,
    date: "2026-09-02",
    comment: "The Guruji accurately told my spouse's direction, first letter of her name, and the exact year of marriage. Today we are blessed with twins. 100% genuine hereditary Nadi astrologers at Vaitheeswaran Koil.",
    verified: true,
  },
  {
    id: "rev-3",
    name: "Dr. Ganesh M.",
    location: "Bengaluru, Karnataka",
    kandam: "10th Kandam (Profession & Business)",
    rating: 5,
    date: "2026-09-18",
    comment: "I was facing heavy obstacles in my new clinic venture. The remedial pariharam prescribed from the palm leaves at Vaitheeswaran Koil transformed my situation within 90 days. Immensely grateful to Sivachandra Nadi.",
    verified: true,
  },
  {
    id: "rev-4",
    name: "Senthil Nathan & Priya",
    location: "Singapore (Online Video Consultation)",
    kandam: "5th Kandam (Putra Bhakyam)",
    rating: 5,
    date: "2026-09-22",
    comment: "Living in Singapore, we sent our thumb impressions online via WhatsApp. The online leaf search was so authentic and detailed over video call with clear Tamil and English translation. We received the recorded audio promptly.",
    verified: true,
  },
];

export default function TestimonialsSection({ t, lang, onOpenReviewModal, reviews, setReviews }) {
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/reviews');
        const data = await res.json();
        if (data.success && data.data.length > 0) {
          setReviews(data.data);
        }
      } catch (e) {
        // use default fallback
      }
    };
    fetchReviews();
  }, [setReviews]);

  const activeReviews = reviews && reviews.length > 0 ? reviews : defaultReviews;

  return (
    <section id="testimonials" className="section-padding testimonials-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>{t.testimonials.badge}</span>
          </div>
          <h2 className="section-title">{t.testimonials.title}</h2>
          <p className="section-subtitle">{t.testimonials.subtitle}</p>

          <div className="reviews-cta-wrap">
            <button onClick={onOpenReviewModal} className="outline-gold-btn">
              <MessageSquarePlus size={16} />
              <span>{t.testimonials.leaveReviewBtn}</span>
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="testimonials-grid">
          {activeReviews.map((rev) => (
            <div key={rev.id} className="testimonial-card">
              <div className="testimonial-card-glass">
                {/* Quote Icon */}
                <div className="quote-icon-bubble">
                  <Quote size={20} />
                </div>

                {/* Star Rating */}
                <div className="stars-row">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill={i < rev.rating ? '#f5b82e' : 'none'}
                      color="#f5b82e"
                    />
                  ))}
                </div>

                {/* Comment Text */}
                <p className="testimonial-comment">"{rev.comment}"</p>

                {/* Client Info */}
                <div className="client-footer-info">
                  <div className="client-avatar">
                    <span>{rev.name.charAt(0)}</span>
                  </div>
                  <div className="client-details">
                    <div className="name-verified-row">
                      <h4 className="client-name">{rev.name}</h4>
                      {rev.verified && (
                        <span className="verified-badge" title="Verified Devotee">
                          <CheckCircle size={13} />
                        </span>
                      )}
                    </div>
                    <span className="client-location">{rev.location}</span>
                    <span className="client-kandam-tag">{rev.kandam}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

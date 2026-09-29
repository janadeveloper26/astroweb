import React, { useState } from 'react';
import { X, Star, Sparkles, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ReviewModal({ isOpen, onClose, lang, onReviewAdded }) {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [kandam, setKandam] = useState('General Kandam');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const newRev = {
      name,
      location: location || 'Devotee',
      kandam,
      rating,
      comment,
      date: new Date().toISOString().split('T')[0],
      verified: true,
    };

    try {
      const res = await fetch('http://localhost:5000/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newRev),
      });
      const data = await res.json();
      if (data.success) {
        onReviewAdded(data.review);
      } else {
        onReviewAdded({ ...newRev, id: `rev-${Date.now()}` });
      }
    } catch (err) {
      console.warn('Fallback local review:', err);
      onReviewAdded({ ...newRev, id: `rev-${Date.now()}` });
    } finally {
      confetti({
        particleCount: 80,
        spread: 50,
        colors: ['#f5b82e', '#ffcf56', '#ffffff'],
      });
      setSubmitting(false);
      onClose();
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-container-glass review-modal-box">
        <button onClick={onClose} className="modal-close-btn" aria-label="Close">
          <X size={20} />
        </button>

        <div className="modal-header">
          <div className="modal-badge">
            <Sparkles size={14} />
            <span>{lang === 'ta' ? 'பக்தர் சான்றளிப்பு' : 'Devotee Testimonial'}</span>
          </div>
          <h2 className="modal-title">
            {lang === 'ta' ? 'உங்கள் ஆன்மீக அனுபவத்தை பகிரவும்' : 'Share Your Sacred Experience'}
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="modal-form-flow">
          <div className="form-grid-2">
            <div className="form-group">
              <label>{lang === 'ta' ? 'உங்கள் பெயர் *' : 'Your Name *'}</label>
              <input
                type="text"
                required
                placeholder="e.g. S. Meenakshi"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label>{lang === 'ta' ? 'ஊர் / நாடு' : 'City / Country'}</label>
              <input
                type="text"
                placeholder="e.g. Madurai / Singapore / UK"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="form-input"
              />
            </div>
          </div>

          <div className="form-grid-2">
            <div className="form-group">
              <label>{lang === 'ta' ? 'பார்த்த காண்டம்' : 'Kandam Consulted'}</label>
              <input
                type="text"
                placeholder="e.g. 7th Marriage / 10th Business"
                value={kandam}
                onChange={(e) => setKandam(e.target.value)}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label>{lang === 'ta' ? 'மதிப்பீடு (நட்சத்திரங்கள்)' : 'Rating'}</label>
              <div className="rating-select-stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    onClick={() => setRating(star)}
                    className={`star-pick-btn ${rating >= star ? 'filled' : ''}`}
                  >
                    <Star size={24} fill={rating >= star ? '#f5b82e' : 'none'} color="#f5b82e" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>{lang === 'ta' ? 'உங்கள் அனுபவம் *' : 'Your Experience / Comments *'}</label>
            <textarea
              required
              rows={4}
              placeholder={
                lang === 'ta'
                  ? 'சுவடி வாசிப்பு, பெற்றோரின் பெயர் பொருத்தம், மற்றும் பலன்கள் எவ்வாறு அமைந்தது என்பதை விவரிக்கவும்...'
                  : 'Describe how the leaf matching, fact verification, and Guruji guidance enlightened you...'
              }
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="form-input"
            />
          </div>

          <div className="form-step-actions">
            <button type="button" onClick={onClose} className="outline-btn">
              {lang === 'ta' ? 'ரத்து' : 'Cancel'}
            </button>
            <button type="submit" disabled={submitting} className="gold-shimmer-btn">
              <Send size={16} />
              <span>{submitting ? (lang === 'ta' ? 'பதிவாகிறது...' : 'Posting...') : (lang === 'ta' ? 'வெளியிடவும்' : 'Submit Review')}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

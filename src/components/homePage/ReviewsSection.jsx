import { useState, useEffect } from 'react';
import './ReviewsSection.css'; // Import styles

const ReviewsSection = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ stars: 5, text: '', reviewer: '' });
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false); // Toggle popup

  // ✅ Fetch Reviews from Backend
  const fetchReviews = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/reviews');
      const data = await response.json();
      setReviews(data);
    } catch (err) {
      setError('Error fetching reviews');
    }
  };

  // ✅ Handle Input Change
  const handleChange = (e) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
  };

  // ✅ Submit New Review
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newReview),
      });

      if (response.ok) {
        setNewReview({ stars: 5, text: '', reviewer: '' });
        fetchReviews(); // Refresh reviews
        setShowForm(false); // Close popup
      } else {
        setError('Failed to add review');
      }
    } catch (error) {
      setError('Server error');
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <section className="reviews-section">
      <h2>What Parents Say</h2>
      
      {/* Show Error Messages */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Reviews List */}
      <div className="reviews-container">
        {reviews.map((review, index) => (
        <div key={index} className="review-card">
        <div className="stars">{'⭐'.repeat(review.stars)}</div>
        <p>"{review.text}"</p> {/* Wrap text in double quotes */}
        <span className="reviewer">{review.reviewer}</span>
      </div>
        ))}
      </div>

      {/* ✅ Review Button */}
      <button className="review-btn" onClick={() => setShowForm(true)}>Leave a Review</button>

      {/* ✅ Floating Popup Review Form */}
      {showForm && (
        <div className="popup-overlay">
          <div className="popup-box">
            <span className="close-btn" onClick={() => setShowForm(false)}>&times;</span>
            <h3 className="text-center">Leave a Review</h3>

            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label>Stars (1-5)</label>
                <input 
                  type="number" 
                  name="stars" 
                  value={newReview.stars} 
                  onChange={handleChange} 
                  min="1" 
                  max="5" 
                  required 
                />
              </div>

              <div className="input-group">
                <label>Review</label>
                <textarea 
                  name="text" 
                  value={newReview.text} 
                  onChange={handleChange} 
                  required 
                />
              </div>

              <div className="input-group">
                <label>Your Name</label>
                <input 
                  type="text" 
                  name="reviewer" 
                  value={newReview.reviewer} 
                  onChange={handleChange} 
                  required 
                />
              </div>

              <button type="submit" className="btn-submit">Submit Review</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default ReviewsSection;

import React, { useState } from 'react';
import axios from 'axios';

function ReviewForm({ bookId, setBook }) {
  const [review, setReview] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!review.trim()) {
      setError('Review cannot be empty');
      return;
    }
    setError(null);
    setLoading(true);

    axios.post(`http://localhost:3001/api/books/${bookId}/reviews`, { review })
      .then((response) => {
        // Update the book data with the new review
        setBook(response.data);
        setReview('');
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error adding review:', err);
        setError('Could not add review. Please try again.');
        setLoading(false);
      });
  };

  return (
    <div>
      <h4>Add Review:</h4>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <input 
            type="text"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Write your review..."
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit Review'}
        </button>
      </form>
    </div>
  );
}

export default ReviewForm;

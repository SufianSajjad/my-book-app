import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReviewForm from './ReviewForm';

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null);     // Error state

  useEffect(() => {
    axios.get(`http://localhost:3001/api/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Error fetching book details');
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading book details...</p>;
  if (error) return <p>{error}</p>;
  if (!book) return <p>No book found.</p>;

  return (
    <div className="book-details">
      <h2>{book.title} by {book.author}</h2>
      <h3>Reviews:</h3>
      <ul>
        {book.reviews && book.reviews.length > 0 ? (
          book.reviews.map((review, index) => (
            <li key={index}>{review}</li>
          ))
        ) : (
          <li>No reviews yet.</li>
        )}
      </ul>
      <ReviewForm bookId={id} setBook={setBook} />
    </div>
  );
}

export default BookDetails;

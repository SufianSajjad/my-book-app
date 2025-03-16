import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function BookList() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);    // Loading state
  const [error, setError] = useState(null);        // Error state

  useEffect(() => {
    axios.get('http://localhost:3001/api/books')
      .then((response) => {
        setBooks(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Error fetching books');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading books...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Books</h2>
      <Link to="/add-book">Add New Book</Link>
      <ul>
        {books.length > 0 ? (
          books.map(book => (
            <li key={book.id}>
              <Link to={`/books/${book.id}`}>
                {book.title} by {book.author}
              </Link>
            </li>
          ))
        ) : (
          <li>No books available.</li>
        )}
      </ul>
    </div>
  );
}

export default BookList;

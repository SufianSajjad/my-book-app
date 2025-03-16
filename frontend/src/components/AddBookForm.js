import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddBookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [error, setError] = useState(null);     // Error state
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Frontend form validation
    if (!title.trim() || !author.trim()) {
      setError('Title and author are required');
      return;
    }
    setError(null);
    setLoading(true);

    axios.post('http://localhost:3001/api/books', { title, author })
      .then((response) => {
        console.log('Book added:', response.data);
        setLoading(false);
        navigate('/');
      })
      .catch((err) => {
        console.error('Error adding book:', err);
        setError('Could not add the book. Please try again.');
        setLoading(false);
      });
  };

  return (
    <div>
      <h2>Add New Book</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input 
            type="text" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Author:</label>
          <input 
            type="text" 
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Adding...' : 'Add Book'}
        </button>
      </form>
    </div>
  );
}

export default AddBookForm;

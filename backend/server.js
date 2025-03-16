const express = require('express');
const cors = require('cors');   // 1) Import cors
const app = express();
const port = 3001;

// Middleware to parse JSON bodies
app.use(express.json());

app.use(cors());    

// Default route for root URL
app.get('/', (req, res) => {
  res.send('Welcome to the Book Review API!');
});

// Import and use book routes
const booksRouter = require('./routes/books');
app.use('/api/books', booksRouter);

// Basic error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

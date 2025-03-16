let books = [];
let nextId = 1;

/**
 * GET /api/books
 * Returns an array of all books.
 */
exports.getAllBooks = (req, res) => {
  res.json(books);
};

/**
 * GET /api/books/:id
 * Returns a single book by its ID.
 */
exports.getBookById = (req, res) => {
  const { id } = req.params;
  const book = books.find((b) => b.id === parseInt(id));
  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }
  res.json(book);
};

/**
 * POST /api/books
 * Adds a new book to the collection.
 * Expects { title, author } in the request body.
 */
exports.addNewBook = (req, res) => {
  const { title, author } = req.body;

  // Validation
  if (!title || !author) {
    return res.status(400).json({ error: 'Title and author are required' });
  }

  const newBook = {
    id: nextId++,
    title,
    author,
    reviews: []
  };

  books.push(newBook);
  res.status(201).json(newBook);
};

/**
 * POST /api/books/:id/reviews
 * Adds a new review to the specified book.
 * Expects { review } in the request body.
 */
exports.addReview = (req, res) => {
  const { id } = req.params;
  const { review } = req.body;

  // Validation
  if (!review) {
    return res.status(400).json({ error: 'Review content is required' });
  }

  const book = books.find((b) => b.id === parseInt(id));
  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }

  book.reviews.push(review);
  res.status(201).json(book);
};

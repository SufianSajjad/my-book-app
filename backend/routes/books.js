const express = require('express');
const router = express.Router();
const booksController = require('../controllers/booksController');

// GET all books
router.get('/', booksController.getAllBooks);

// GET a single book
router.get('/:id', booksController.getBookById);

// POST add a new book
router.post('/', booksController.addNewBook);

// POST add a review
router.post('/:id/reviews', booksController.addReview);

module.exports = router;

// index.js
const express = require('express');
const app = express();
const port = 3000;

// Request logger middleware
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.originalUrl}`);
  next();
});

const books = [
  { id: 1, title: 'Braiding Sweetgrass', author: 'Robin Wall Kimmerer' },
  { id: 2, title: 'Pilgrim at Tinker Creek', author: 'Annie Dillard' },
  { id: 3, title: 'The Overstory', author: 'Richard Powers' },
  { id: 4, title: 'A Sand County Almanac', author: 'Aldo Leopold' },
  { id: 5, title: 'The Hidden Life of Trees', author: 'Peter Wohlleben' },
  { id: 6, title: 'Desert Solitaire', author: 'Edward Abbey' },
  { id: 7, title: 'Into the Wild', author: 'Jon Krakauer' },
  { id: 8, title: 'Wild', author: 'Cheryl Strayed' },
  { id: 9, title: 'The Snow Leopard', author: 'Peter Matthiessen' },
  { id: 10, title: 'Walden', author: 'Henry David Thoreau' }
];

// Home page
app.get('/', (req, res) => {
  res.send('Welcome to the Book Listing Server!');
});

// Book list
app.get('/books', (req, res) => {
  res.json(books);
});

// Search for books
app.get('/books/search', (req, res) => {
  // Extract the keyword
  const keyword = req.query.title?.trim();
  
  if (keyword) {
    // Filter the book list
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(keyword.toLowerCase()));
    res.json(filteredBooks);
  } else {
    res.status(400).send('Please, provide a title to search.');
  }
});

// Book details
app.get('/books/:id', (req, res) => {
  // Extract the book ID
  const bookId = parseInt(req.params.id);
  // Find the book with the matching ID
  const book = books.find(b => b.id === bookId);
  
  if (book) {
    // Send the book as JSON
    res.json(book);
  } else {
    res.status(404).send('Book not found');
  }
});

// Error handler middleware
app.use((req, res, next) => {
  res.status(404).send('Sorry, the requested resource was not found!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
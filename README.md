# book-listing-server
A simple Express.js server that provides a list of nature-themed books with support for search and detailed views.

## Features
* Request logging middleware
* Home route
* Book list route which returns a list of all books
* Book search route which searches for books by title
* Book details route which fetches book details by ID
* Error handling middleware for unknown routes

## Installation
```bash
npm install book-listing-server
```

If you are using this as a standalone project, clone the repository and install dependencies:
```bash
git clone https://github.com/gh-aam/book-listing-server.git
cd book-listing-server
npm install
```

## Usage
Start the server:
```bash
npm start
```

Or during development with hot-reload:
```bash
npm run dev
```

Once the server is running, visit:
* [http://localhost:3000](http://localhost:3000) - Home page
* [http://localhost:3000/books](http://localhost:3000/books) - Book list
* [http://localhost:3000/books/search?title=wild](http://localhost:3000/books/search?title=wild) - Book search by title
* [http://localhost:3000/books/3](http://localhost:3000/books/3) - Book details by ID

## Example Response
`GET /books/3`
```json
{
  "id": 3,
  "title": "The Overstory",
  "author": "Richard Powers"
}
```

## Scripts
* `npm start` - Start the server
* `npm run dev` - Start the server with `nodemon`
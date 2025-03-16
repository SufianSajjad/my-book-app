
# Book Review Platform

A full-stack web application that allows users to manage and review books. This project features a RESTful API built with Express.js (backend) and a responsive React frontend enhanced with Bootstrap.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Deployment](#deployment)
- [Future Enhancements](#future-enhancements)
- [License](#license)

## Features

- **Backend (Express.js):**
  - Retrieve all books
  - Retrieve a single book by ID
  - Add a new book (with title and author validation)
  - Add a review to a book (with review validation)
  - In-memory data storage using an array of objects
  - Comprehensive error handling and validation

- **Frontend (React):**
  - Book List Page: Displays all books and links to details
  - Book Details Page: Shows individual book details and reviews; allows adding reviews
  - Add New Book Form: Allows users to add new books with form validation
  - Navigation using React Router
  - Loading states and error handling in UI
  - Responsive design using Bootstrap and custom CSS

## Technologies Used

- **Backend:** Node.js, Express.js, CORS
- **Frontend:** React, React Router, Axios, Bootstrap
- **Package Management:** npm

## Project Structure

```
my-book-app/
├── backend/
│   ├── package.json
│   ├── server.js
│   ├── routes/
│   │   └── books.js
│   └── controllers/
│       └── booksController.js
└── frontend/
    ├── package.json
    ├── public/
    │   └── index.html
    └── src/
        ├── index.js
        ├── App.js
        ├── routes/
        │   └── AppRoutes.js
        ├── components/
        │   ├── BookList.js
        │   ├── BookDetails.js
        │   ├── AddBookForm.js
        │   └── ReviewForm.js
        └── styles/
            └── main.css
```

## Setup Instructions

### Backend Setup

1. Navigate to the `backend` folder:
   ```
   cd backend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the Express server:
   ```
   npm start
   ```
   The backend will run on [http://localhost:3001](http://localhost:3001).

### Frontend Setup

1. Navigate to the `frontend` folder:
   ```
   cd frontend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the React development server:
   ```
   npm start
   ```
   The frontend will run on [http://localhost:3000](http://localhost:3000).

### Integrating Bootstrap

- Bootstrap is installed via npm and imported in `src/index.js`:
  ```jsx
  import 'bootstrap/dist/css/bootstrap.min.css';
  ```
- Custom styles are located in `src/styles/main.css`.

## Usage

- **Book List Page:** View all books. Click on a book title to view details.
- **Add New Book:** Use the "Add New Book" button to navigate to the form. Fill in the required fields (Title and Author) and submit.
- **Book Details Page:** View book information and existing reviews. Add a review using the provided form.

## API Endpoints

### GET /api/books
- Retrieves a list of all books.

### GET /api/books/:id
- Retrieves details of a specific book by ID.

### POST /api/books
- Adds a new book.
- **Body:** JSON object with `title` and `author`.

### POST /api/books/:id/reviews
- Adds a review to the specified book.
- **Body:** JSON object with `review`.

## Deployment

To deploy the project to GitHub:

1. Initialize a Git repository in the project root:
   ```
   git init
   ```
2. Add a `.gitignore` file to exclude `node_modules`, build directories, and other unnecessary files.
3. Commit your changes:
   ```
   git add .
   git commit -m "Initial commit: Full-stack Book Review Platform"
   ```
4. Create a new repository on GitHub and push your code:
   ```
   git remote add origin https://github.com/yourusername/my-book-app.git
   git branch -M main
   git push -u origin main
   ```

## Future Enhancements

- Add user authentication and authorization.
- Persist data using a database (e.g., MongoDB, PostgreSQL).
- Write unit and integration tests for both frontend and backend.
- Deploy the application to a cloud provider like Heroku or Vercel.

## License

This project is licensed under the MIT License.

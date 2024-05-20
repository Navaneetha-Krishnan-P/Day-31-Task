import React, { useState } from 'react';
import BookForm from './BookForm';
import AuthorForm from './AuthorForm';
import BookTable from './BookTable';
import AuthorTable from './AuthorTable';

const Dashboard = () => {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [editingBook, setEditingBook] = useState(null);
  const [editingAuthor, setEditingAuthor] = useState(null);

  const handleAddBook = (book) => {
    if (editingBook) {
      setBooks(books.map((b) => (b.id === book.id ? book : b)));
    } else {
      setBooks([...books, { ...book, id: Date.now() }]);
    }
    setEditingBook(null);
  };

  const handleEditBook = (book) => {
    setEditingBook(book);
  };

  const handleDeleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const handleAddAuthor = (author) => {
    if (editingAuthor) {
      setAuthors(authors.map((a) => (a.id === author.id ? author : a)));
    } else {
      setAuthors([...authors, { ...author, id: Date.now() }]);
    }
    setEditingAuthor(null);
  };

  const handleEditAuthor = (author) => {
    setEditingAuthor(author);
  };

  const handleDeleteAuthor = (id) => {
    setAuthors(authors.filter((author) => author.id !== id));
  };

  return (
    <div className="container">
      <h2 className="my-4">Library Management Dashboard</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-header">Add / Edit Book</div>
            <div className="card-body">
              <BookForm initialValues={editingBook || { title: '', author: '', isbn: '', publicationDate: '' }} onSubmit={handleAddBook} />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-header">Add / Edit Author</div>
            <div className="card-body">
              <AuthorForm initialValues={editingAuthor || { name: '', birthDate: '', biography: '' }} onSubmit={handleAddAuthor} />
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="card mb-4">
            <div className="card-header">Books List</div>
            <div className="card-body">
              <BookTable books={books} onEdit={handleEditBook} onDelete={handleDeleteBook} />
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="card mb-4">
            <div className="card-header">Authors List</div>
            <div className="card-body">
              <AuthorTable authors={authors} onEdit={handleEditAuthor} onDelete={handleDeleteAuthor} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import React from 'react';

const BookTable = ({ books, onEdit, onDelete }) => (
  <table className="table table-striped">
    <thead>
      <tr>
        <th>Title</th>
        <th>Author</th>
        <th>ISBN</th>
        <th>Publication Date</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {books.map((book) => (
        <tr key={book.id}>
          <td>{book.title}</td>
          <td>{book.author}</td>
          <td>{book.isbn}</td>
          <td>{book.publicationDate}</td>
          <td>
            <button onClick={() => onEdit(book)} className="btn btn-info btn-sm">Edit</button>
            <button onClick={() => onDelete(book.id)} className="btn btn-danger btn-sm">Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default BookTable;

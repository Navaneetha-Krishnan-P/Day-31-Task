import React from 'react';

const AuthorTable = ({ authors, onEdit, onDelete }) => (
  <table className="table table-striped">
    <thead>
      <tr>
        <th>Name</th>
        <th>Birth Date</th>
        <th>Biography</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {authors.map((author) => (
        <tr key={author.id}>
          <td>{author.name}</td>
          <td>{author.birthDate}</td>
          <td>{author.biography}</td>
          <td>
            <button onClick={() => onEdit(author)} className="btn btn-info btn-sm">Edit</button>&nbsp;&nbsp;
            <button onClick={() => onDelete(author.id)} className="btn btn-danger btn-sm">Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default AuthorTable;

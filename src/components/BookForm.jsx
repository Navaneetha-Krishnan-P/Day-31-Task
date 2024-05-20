import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const BookForm = ({ initialValues, onSubmit }) => {
  const validate = values => {
    const errors = {};
    if (!values.title) {
      errors.title = 'Title is required';
    }
    if (!values.author) {
      errors.author = 'Author is required';
    }
    if (!values.isbn) {
      errors.isbn = 'ISBN number is required';
    }
    if (!values.publicationDate) {
      errors.publicationDate = 'Publication date is required';
    }
    return errors;
  };

  return (
    <Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
      {({ touched, errors }) => (
        <Form>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <Field name="title" className={`form-control ${touched.title && errors.title ? 'is-invalid' : ''}`} />
            <ErrorMessage name="title" component="div" className="invalid-feedback" />
          </div>
          <div className="form-group">
            <label htmlFor="author">Author</label>
            <Field name="author" className={`form-control ${touched.author && errors.author ? 'is-invalid' : ''}`} />
            <ErrorMessage name="author" component="div" className="invalid-feedback" />
          </div>
          <div className="form-group">
            <label htmlFor="isbn">ISBN</label>
            <Field name="isbn" className={`form-control ${touched.isbn && errors.isbn ? 'is-invalid' : ''}`} />
            <ErrorMessage name="isbn" component="div" className="invalid-feedback" />
          </div>
          <div className="form-group">
            <label htmlFor="publicationDate">Publication Date</label>
            <Field name="publicationDate" type="date" className={`form-control ${touched.publicationDate && errors.publicationDate ? 'is-invalid' : ''}`} />
            <ErrorMessage name="publicationDate" component="div" className="invalid-feedback" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default BookForm;

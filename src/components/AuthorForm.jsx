import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const AuthorForm = ({ initialValues, onSubmit }) => {
  const validate = values => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Name is required';
    }
    if (!values.birthDate) {
      errors.birthDate = 'Birth date is required';
    }
    if (!values.biography) {
      errors.biography = 'Biography is required';
    }
    return errors;
  };

  return (
    <Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
      {({ touched, errors }) => (
        <Form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <Field name="name" className={`form-control ${touched.name && errors.name ? 'is-invalid' : ''}`} />
            <ErrorMessage name="name" component="div" className="invalid-feedback" />
          </div>
          <div className="form-group">
            <label htmlFor="birthDate">Birth Date</label>
            <Field name="birthDate" type="date" className={`form-control ${touched.birthDate && errors.birthDate ? 'is-invalid' : ''}`} />
            <ErrorMessage name="birthDate" component="div" className="invalid-feedback" />
          </div>
          <div className="form-group">
            <label htmlFor="biography">Biography</label>
            <Field name="biography" as="textarea" rows="4" className={`form-control ${touched.biography && errors.biography ? 'is-invalid' : ''}`} />
            <ErrorMessage name="biography" component="div" className="invalid-feedback" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default AuthorForm;

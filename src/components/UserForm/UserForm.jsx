// import { useState } from 'react';
import { Form, Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';

import { Container, Input, Label } from './UserForm.styled.js';
// import { Container, Input, Label, ErrorText } from './UserForm.styled.js';
// Повідомлення про помилку
// const FormError = ({ name }) => {
//   return (
//     <ErrorMessage
//       name={name}
//       render={message => <ErrorText>{message}</ErrorText>}
//     />
//   );
// };

const Schema = yup.object({
  name: yup
    .string()
    .min(2, 'Too Short!')
    .max(16)
    .matches(
      /^[a-zA-Zа-яіїєА-ЯІЇЄ][a-zA-Zа-яіїєА-ЯІЇЄ'-\s]{1,15}$/,
      'Only alphabetic characters are allowed'
    ),
  // .required('Field is required!')
  email: yup
    .string()
    // .required('Email field is required')
    .matches(
      /^([a-zA-Z0-9]{1}[a-zA-Z0-9_\-.]{1,})@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,4})$/,
      'Example: user@mail.com'
    )
    .max(70, 'Maximum 70 characters')
    .min(6, 'Minimum 6 characters')
    .email('Please, enter a valid email'),
  city: yup
    .string()
    .min(2, 'Min 2 characters')
    .max(35, 'Max 35 characters')
    .matches(
      /^([A-ZА-ЯЁ][a-zа-яё]*)(?:[-\s]([A-ZА-ЯЁ][a-zа-яё]*))?$/,
      'Only in format "City"'
    ),
  phone: yup
    .string()
    .matches(/^\+\d{12}$/, 'Phone should be in format +380441234567'),
  birthday: yup
    .string()
    .matches(
      /^(0[1-9]|[1-2]\d|3[0-1])\.(0[1-9]|1[0-2])\.\d{4}$/,
      'Please enter a valid date: dd.mm.yyyy'
    ),
  // .required()
});

const capitalize = d => (d && d[0].toUpperCase() + d.slice(1)) || '';

export const UserForm = ({ isEdit, field, initValue, setUser }) => {
  return (
    <Formik
      validationSchema={Schema}
      initialValues={initValue}
      validateOnBlur={true}
    >
      {({ values, errors, touched }) => (
        <Form>
          <Container>
            <Label>{capitalize(field)}:</Label>
            <Input autoComplete="off" name={field} disabled={isEdit} />
          </Container>
          <ErrorMessage
            name={field}
            render={msg => (
              <div
                id="fail"
                style={{
                  color: 'red',
                  fontSize: '1rem',
                  position: 'relative',
                  maxWidth: '80%',
                  marginBottom: '8px',
                  marginLeft: 'auto',
                  marginRight: '32px',
                  height: '30px',
                }}
              >
                {msg}
              </div>
            )}
          />
        </Form>
      )}
    </Formik>
  );
};

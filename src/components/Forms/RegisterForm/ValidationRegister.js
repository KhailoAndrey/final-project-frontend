import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is a required field')
    .min(2, 'Name must be at least 2 characters')
    .max(16, 'Name must be at least 16 characters')
    .matches(/^[A-Za-z]{2,16}$/, 'The name must be in English'),
  email: Yup.string()
    .email()
    .required('Email is a required field')
    .matches(/^[a-zA-Z0-9._%+-]+@[a-z.-]+\.[a-z]{2,}$/, 'Enter a valid Email'),
  password: Yup.string()
    .required('Password is a required field')
    .min(6, 'Password must be at least 6 characters')
    .max(16, 'Password must be no more than 16 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      'At least one number, one lowercase and an uppercase letter'
    ),
  confirmPassword: Yup.string().when('password', (password, schema) => {
    return password
      ? schema
          .required('Password confirmation required')
          .oneOf([Yup.ref('password')], 'Passwords must match')
      : schema.notRequired();
  }),
});

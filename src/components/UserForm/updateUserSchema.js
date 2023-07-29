import * as yup from 'yup';

export const updateUserSchema = yup.object().shape({
  file: yup
    .mixed()
    .required('Upload your avatar')
    .test(
      'fileType',
      'Only image files are allowed',
      value => !value || ['image/']
    ),
  name: yup
    .string()
    .min(2, 'Too Short!')
    .max(16)
    // .required('Field is required!')
    .matches(
      /^[a-zA-Zа-яіїєА-ЯІЇЄ][a-zA-Zа-яіїєА-ЯІЇЄ'-\s]{1,15}$/,
      'Only alphabetic characters are allowed'
    ),

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
  birthday: yup.string().matches(
    // eslint-disable-next-line
    /^(0?[1-9]|[12][0-9]|3[01])[./\-](0?[1-9]|1[012])[./\-]\d{4}$/,
    'Please enter a valid date: dd.mm.yyyy'
  ),
  phone: yup
    .string()
    .matches(/^\+\d{12}$/, 'Phone should be in format +380441234567'),
  city: yup
    .string()
    .min(2, 'Min 2 characters')
    .max(35, 'Max 35 characters')
    .matches(
      /^(?:[A-ZА-ЯІЇЄ][a-zа-яіїє]*[\s-])*[A-ZА-ЯІЇЄ][a-zа-яіїє]*$/,
      'Only in format "City"'
    ),
});

import * as yup from 'yup';

export const updateUserSchema = yup.object().shape({
  file: yup
    .mixed()
    .test(
      'fileType',
      'Only image files are allowed',
      value => !value || ['image/']
    ),
  name: yup
    .string()
    .min(2, 'Too Short!')
    .max(16)
    .matches(
      /^([A-Za-zА-Яа-яЁёІіЇїЄєҐґ]+\s?){2,26}$/,
      'Only alphabetic characters are allowed'
    ),

  email: yup
    .string()
    .matches(
      /^([a-zA-Z0-9]{1}[a-zA-Z0-9_\-.]{1,})@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,4})$/,
      'Example: user@mail.com'
    )
    .max(70, 'Maximum 70 characters')
    .min(6, 'Minimum 6 characters')
    .email('Please, enter a valid email'),

  // birthday: yup.string().matches(
  //   // eslint-disable-next-line
  //   /^(0[1-9]|[12]\d|3[01])-(0[1-9]|1[0-2])-\d{4}$/,
  //   'Please enter a valid date: dd.mm.yyyy'
  // ),
  birthday: yup.date().max(new Date(), 'Must be less than "now"'),
  // .matches(
  //   /^(0[1-9]|[12]\d|3[01])-(0[1-9]|1[0-2])-\d{4}$/,
  //   'Please enter a valid date: dd.mm.yyyy'
  // ),
  phone: yup
    .string()
    .matches(/^\+380\d{9}$/, 'Phone should be in format +380441234567'),
  city: yup
    .string()
    .min(2, 'Min 2 characters')
    .max(35, 'Max 35 characters')
    .matches(
      /^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ\s]+(?:,\s*[A-Za-zА-Яа-яЁёІіЇїЄєҐґ\s]+)*$/,
      'Only in format "City"'
    ),
});

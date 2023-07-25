import * as yup from 'yup';
import 'yup-phone';

export const yupLoginValidation = yup.object().shape({
  email: yup
    .string()
    .email('Enter a Valid Email')
    .required('Email is Required'),
  password: yup
    .string()
    .required('Enter Your Password')
    .min(8, 'Password Should be minimum 8 character')
    .max(50, 'Too long'),
});

export const yupRegisterValidation = yup.object().shape({
  email: yup
    .string()
    .email('Enter a Valid Email')
    .required('Email is Required'),
  password: yup
    .string()
    .required('Enter Your Password')
    .min(6, 'Password should be minimum 6 character')
    .max(16, 'Too long')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter'),
  confirm: yup
    .string()
    .oneOf([yup.ref('password')], 'Password does not matched')
    .required('Confirm Password is Required'),
});

export const addPetFormSchema = yup.object().shape({
  title: yup.string().when('category', {
    is: value => value !== 'my pet',
    then: yup
      .string()
      .min(2, 'Minimum 2 characters')
      .max(50, 'Maximum 50 characters')
      .required('Enter a title'),
    otherwise: yup.string(),
  }),
  date: yup
    .date()
    .max(new Date(), 'Must be less than "now"')
    .required('Choose a date of birth'),
  breed: yup
    .string('Must be a string')
    .min(2, 'Minimum 2 characters')
    .max(16, 'Maximum 16 characters')
    .required('Enter a pet`s breed '),
  name: yup
    .string()
    .min(2, 'Minimum 2 characters')
    .max(16, 'Maximum 16 characters')
    .required('Enter a pet`s name'),
  location: yup.string().when('category', {
    is: value => value !== 'my pet',
    then: yup
      .string()
      .matches(/^[A-Z][A-Za-z ]+$/, 'Starts with capitalize character')
      .required('Enter your location'),
    otherwise: yup.string(),
  }),
  price: yup.number().when('category', {
    is: value => value === 'sell',
    then: yup
      .number()
      .moreThan(0, 'Price must be greater than 0')
      .required('Enter a price'),
    otherwise: yup.number(),
  }),
  comments: yup
    .string()
    .min(8, 'Minimum 8 characters')
    .max(350, 'Maximum 350 characters'),
  sex: yup.string().when('category', {
    is: value =>
      value === 'sell' || value === 'lost-found' || value === 'for-free',
    then: yup.string().oneOf(['female', 'male']).required('Choose a pet`s sex'),
    otherwise: yup.string(),
  }),
  category: yup
    .string()
    .oneOf(['my pet', 'sell', 'lost-found', 'for-free'])
    .required(),
  file: yup
    .mixed()
    .required('Upload pet`s photo')
    .test(
      'fileType',
      'Only image files are allowed',
      value =>
        !value || ['image/jpg', 'image/jpeg', 'image/png'].includes(value.type)
    )
    .test(
      'fileSize',
      'File size is too large',
      value => value?.size <= 3145728
    ),
});

export const profileSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'min 2 characters')
    .max(20, 'max 20 characters')
    .required('Set your name'),
  email: yup.string().email('Enter a valid email').required('Set your email'),
  birthday: yup
    .date()
    .max(new Date(), 'Must be less than "now"')
    .required('Choose  your birthday'),
  city: yup
    .string()
    .matches(/^[A-Z][a-zA-Z]*$/, 'Starts with capitalize character'),
  phone: yup.string().matches(/^\+\d{12}$/, 'UA format number'),
});

export const photoSchema = yup.object().shape({
  file: yup
    .mixed()
    .test(
      'fileType',
      'Only image files are allowed',
      value =>
        !value || ['image/jpg', 'image/jpeg', 'image/png'].includes(value.type)
    ),
});

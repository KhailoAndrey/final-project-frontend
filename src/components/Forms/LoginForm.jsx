import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { logIn } from 'redux/auth/authOperations';
import {
  FormContainer,
  FormInput,
  FormHeader,
  FormText,
  FormLink,
  FormButton,
  FormError,
  FormEye,PasswordDiv
} from './LoginForm.styled';

import {ic_visibility_off_outline} from 'react-icons-kit/md/ic_visibility_off_outline'
import {ic_visibility_outline} from 'react-icons-kit/md/ic_visibility_outline'

const emailRegexp = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Please enter your registered email')
    .required('Please enter your email')
    .matches(
      emailRegexp,
      'Please enter a valid value using English characters'
    ),
  password: Yup.string()
    .trim()
    .required('Please enter password')
    .min(7, 'The password you entered is incorrect. Please try again')
    .max(32, 'The password you entered is incorrect. Please try again'),
});

export const LoginForm = () => {
    const [type, setType] = useState('password');
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async values => {
      dispatch(
        logIn({
          email: values.email,
          password: values.password,
        })
      );

      formik.resetForm();
    },
  });


  return (
    <FormContainer>
      <FormHeader>Login</FormHeader>
      <form onSubmit={formik.handleSubmit}>
        <FormInput
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="Email"
        />
        {formik.touched.email && formik.errors.email && (
          <FormError>{formik.errors.email}</FormError>
        )}
        <PasswordDiv>
        <FormInput
          id="password"
          name="password"
          type={type}
          autoComplete="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          placeholder="Password"
        />
        
        {type==="password"?(
            <span onClick={()=>setType("text")}>
              <FormEye icon={ic_visibility_off_outline} size={24}/>
            </span >
          ):(
            <span   onClick={()=>setType("password")}>
              <FormEye icon={ic_visibility_outline} size={24} />
            </span >
          )}
          </PasswordDiv>
        {formik.touched.password && formik.errors.password && (
          <FormError>{formik.errors.password}</FormError>
        )}
        <FormButton type="submit">Login</FormButton>
        <FormText>
          Don't have an account?
          <FormLink to="/register">Register</FormLink>
        </FormText>
      </form>
    </FormContainer>
  );
};

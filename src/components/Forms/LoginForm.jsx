import { useState } from 'react';
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
  FormErrorPassword,
  FormErrorEmail,
  FormEye,
  PasswordDiv,
  EmailDiv,
  FormSuccessPassword,
} from './LoginForm.styled';

import { Icon } from 'react-icons-kit';
import { ic_visibility_off_outline } from 'react-icons-kit/md/ic_visibility_off_outline';
import { ic_visibility_outline } from 'react-icons-kit/md/ic_visibility_outline';
import { iosCloseEmpty } from 'react-icons-kit/ionicons/iosCloseEmpty';
import { androidDone } from 'react-icons-kit/ionicons/androidDone';

const emailRegexp = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Please enter your registered email')
    .required('Please enter your email')
    .matches(emailRegexp, 'Please enter a valid value using English characters'),
  password: Yup.string()
    .trim()
    .required('Please enter password')
    .min(6, 'The password you entered is incorrect. Please try again')
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
    onSubmit: async (values) => {
      dispatch(
        logIn({
          email: values.email,
          password: values.password,
        })
      );
      formik.resetForm();
    },
  });

  const handlePasswordBlur = () => {
    formik.setTouched({ ...formik.touched, password: true });
  };

  const handleEmailBlur = () => {
    formik.setTouched({ ...formik.touched, email: true });
  };

  const isEmailError =
    (formik.touched.email || formik.submitCount > 0) &&
    formik.errors.email &&
    formik.values.email;

  const isPasswordError =
    (formik.touched.password || formik.submitCount > 0) &&
    formik.errors.password &&
    formik.values.password;

  const showPasswordSuccess =
    formik.touched.password && !formik.errors.password && formik.values.password;

  return (
    <FormContainer>
      <FormHeader>Login</FormHeader>
      <form onSubmit={formik.handleSubmit}>
        <EmailDiv>
          <FormInput
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="Email"
            onBlur={handleEmailBlur}
            className={
              isEmailError
                ? 'input-error'
                : formik.touched.email && !formik.errors.email
                ? 'input-success'
                : ''
            }
          />
          {formik.touched.email && formik.errors.email && (
            <FormErrorEmail>{formik.errors.email}</FormErrorEmail>
          )}
          {isEmailError && (
            <Icon
              icon={iosCloseEmpty}
              size={36}
              style={{
                position: 'absolute',
                top: '6px',
                right: '16px',
                color: 'red',
              }}
            />
          )}
        </EmailDiv>
        <PasswordDiv>
          <FormInput
            id="password"
            name="password"
            type={type}
            autoComplete="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder="Password"
            onBlur={handlePasswordBlur}
            className={
              isPasswordError
                ? 'input-error'
                : showPasswordSuccess
                ? 'input-success'
                : ''
            }
          />

          {type === 'password' ? (
            <span onClick={() => setType('text')}>
              <FormEye icon={ic_visibility_off_outline} size={24} />
            </span>
          ) : (
            <span onClick={() => setType('password')}>
              <FormEye icon={ic_visibility_outline} size={24} />
            </span>
          )}
          {showPasswordSuccess && (
            <Icon
              icon={androidDone}
              size={24}
              style={{
                position: 'absolute',
                top: '11px',
                right: '50px',
                color: 'green',
              }}
            />
          )}

          {formik.touched.password && formik.errors.password && (
            <FormErrorPassword>{formik.errors.password}</FormErrorPassword>
          )}
          {showPasswordSuccess && (
            <FormSuccessPassword>Password is secure</FormSuccessPassword>
          )}
        </PasswordDiv>

        <FormButton type="submit">Login</FormButton>
        <FormText>
          Don't have an account?
          <FormLink to="/register">Register</FormLink>
        </FormText>
      </form>
    </FormContainer>
  );
};

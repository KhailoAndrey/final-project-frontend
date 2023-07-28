import { useDispatch } from 'react-redux';
import { useState } from 'react';
// import { useTranslation } from 'react-i18next';
import Notiflix from 'notiflix';
import { useFormik } from 'formik';
import { register } from 'redux/auth/authOperations';
import { validationSchema } from './ValidationRegister';

import svg from '../../../images/Icons/symbol-defs.svg';

import {
  ErrorText,
  FormButton,
  FormContainer,
  FormHeader,
  FormInput,
  FormInputWrapper,
  FormLink,
  FormText,
  IconForInput,
  SuccessText,
  WrapperInput,
} from './RegisterForm.styled';

Notiflix.Notify.init({
  width: '280px',
  position: 'center-top',
  distance: '15px',
  timeout: 5000,
  opacity: 1,
  warning: {
    background: 'var(--main-clr-blue)',
    textColor: 'var(--main-accent-text-clr)',
    notiflixIconColor: 'var(--main-clr-yellow)',
  },
});

const IconSvgClose = () => {
  return (
    <svg width={24} height={24}>
      <use
        href={`${svg}#icon-close-eye`}
        style={{
          stroke: 'var(--main-clr-blue)',
        }}
        width={24}
        height={24}
      />
    </svg>
  );
};

const IconSvgOpen = () => {
  return (
    <svg width={24} height={24}>
      <use
        href={`${svg}#icon-eye`}
        style={{
          stroke: 'var(--main-clr-blue)',
        }}
        width={24}
        height={24}
      />
    </svg>
  );
};

const NameIconError = () => {
  return (
    <svg width={24} height={24}>
      <use
        href={`${svg}#icon-cross`}
        style={{
          stroke: 'var(--form-error-red)',
        }}
        width={24}
        height={24}
      />
    </svg>
  );
};

const NameIconSuccess = () => {
  return (
    <svg width={24} height={24}>
      <use
        href={`${svg}#icon-check`}
        style={{
          stroke: 'var(--menu-clr-green)',
        }}
        width={24}
        height={24}
      />
    </svg>
  );
};

const RegisterForm = () => {
  // const { t } = useTranslation();
  const dispatch = useDispatch();

  const [typeForPassword, setTypeForPassword] = useState('password');
  const [typeForConfirmPassword, setTypeForConfirmPassword] =
    useState('password');

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },

    validationSchema: validationSchema,

    onSubmit: async (values, { resetForm }) => {
      const credentials = {
        name: values.name,
        email: values.email,
        password: values.password,
      };
      try {
        // console.log(credentials);
        const response = await dispatch(register(credentials));
        if (response.error) {
          Notiflix.Notify.warning(`${response.error.data.message}`);
        } else {
          resetForm();
        }
      } catch (error) {
        console.error(error);
      }
    },
  });

  const handleNameBlur = () => {
    formik.setTouched({ ...formik.touched, name: true });
  };

  const handleEmailBlur = () => {
    formik.setTouched({ ...formik.touched, email: true });
  };

  const handlePasswordBlur = () => {
    formik.setTouched({ ...formik.touched, password: true });
  };

  const handleConfirmPasswordBlur = () => {
    formik.setTouched({ ...formik.touched, confirmPassword: true });
  };
  const showNameError =
    (formik.touched.name || formik.submitCount > 0) &&
    formik.errors.name &&
    formik.values.name;

  const showNameSuccess =
    formik.touched.name && !formik.errors.name && formik.values.name;

  const showEmailError =
    (formik.touched.email || formik.submitCount > 0) &&
    formik.errors.email &&
    formik.values.email;

  const showEmailSuccess =
    formik.touched.email && !formik.errors.email && formik.values.email;

  const showPasswordError =
    (formik.touched.password || formik.submitCount > 0) &&
    formik.errors.password &&
    formik.values.password;

  const showPasswordSuccess =
    formik.touched.password &&
    !formik.errors.password &&
    formik.values.password;

  const showConfirmPasswordError =
    (formik.touched.confirmPassword || formik.submitCount > 0) &&
    formik.errors.confirmPassword &&
    formik.values.confirmPassword;

  const showConfirmPasswordSuccess =
    formik.touched.confirmPassword &&
    !formik.errors.confirmPassword &&
    formik.values.confirmPassword;

  return (
    <FormContainer>
      <form onSubmit={formik.handleSubmit}>
        <FormHeader>Registration</FormHeader>
        <FormInputWrapper>
          <div>
            <label htmlFor="name" hidden>
              Name
            </label>
            <WrapperInput>
              <FormInput
                id="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                name="name"
                placeholder="Name"
                onBlur={handleNameBlur}
                className={
                  showNameError
                    ? 'input-error'
                    : showNameSuccess
                    ? 'input-success'
                    : ''
                }
              />
              {formik.touched.name && formik.errors.name && (
                <ErrorText>{formik.errors.name}</ErrorText>
              )}
              <IconForInput>
                {showNameError && <NameIconError />}
                {showNameSuccess && <NameIconSuccess />}
              </IconForInput>
            </WrapperInput>
          </div>
          <div>
            <label htmlFor="email" hidden>
              Email
            </label>
            <WrapperInput>
              <FormInput
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                placeholder="Email"
                onBlur={handleEmailBlur}
                className={
                  showEmailError
                    ? 'input-error'
                    : showEmailSuccess
                    ? 'input-success'
                    : ''
                }
              />
              {formik.touched.email && formik.errors.email && (
                <ErrorText>{formik.errors.email}</ErrorText>
              )}
              <IconForInput>
                {showEmailError && <NameIconError />}
                {showEmailSuccess && <NameIconSuccess />}
              </IconForInput>
            </WrapperInput>
          </div>
          <div>
            <label htmlFor="password" hidden>
              Password
            </label>
            <WrapperInput>
              <FormInput
                id="password"
                type={typeForPassword}
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                placeholder="Password"
                onBlur={handlePasswordBlur}
                className={
                  showPasswordError
                    ? 'input-error'
                    : showPasswordSuccess
                    ? 'input-success'
                    : ''
                }
              />
              <IconForInput>
                {typeForPassword === 'password' ? (
                  <span onClick={() => setTypeForPassword('text')}>
                    <IconSvgClose />
                  </span>
                ) : (
                  <span onClick={() => setTypeForPassword('password')}>
                    <IconSvgOpen />
                  </span>
                )}
                {showPasswordError && <NameIconError />}
                {showPasswordSuccess && <NameIconSuccess />}
              </IconForInput>
              {formik.touched.password && formik.errors.password && (
                <ErrorText>{formik.errors.password}</ErrorText>
              )}
              {showPasswordSuccess && (
                <SuccessText>Password is secure</SuccessText>
              )}
            </WrapperInput>
          </div>
          <div>
            <label htmlFor="confirmPassword" hidden>
              Confirm password
            </label>
            <WrapperInput>
              <FormInput
                id="confirmPassword"
                type={typeForConfirmPassword}
                name="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                placeholder="Confirm password"
                onBlur={handleConfirmPasswordBlur}
                className={
                  showConfirmPasswordError
                    ? 'input-error'
                    : showConfirmPasswordSuccess
                    ? 'input-success'
                    : ''
                }
              />
              <IconForInput>
                {typeForConfirmPassword === 'password' ? (
                  <span onClick={() => setTypeForConfirmPassword('text')}>
                    <IconSvgClose />
                  </span>
                ) : (
                  <span onClick={() => setTypeForConfirmPassword('password')}>
                    <IconSvgOpen />
                  </span>
                )}
                {showConfirmPasswordError && <NameIconError />}
                {showConfirmPasswordSuccess && <NameIconSuccess />}
              </IconForInput>
              {formik.touched.confirmPassword &&
                formik.errors.confirmPassword && (
                  <ErrorText>{formik.errors.confirmPassword}</ErrorText>
                )}
            </WrapperInput>
          </div>
        </FormInputWrapper>
        <FormButton type="submit">Registration</FormButton>
        <FormText>
          Already have an account?
          <FormLink to="/login">Login</FormLink>
        </FormText>
      </form>
    </FormContainer>
  );
};

export default RegisterForm;

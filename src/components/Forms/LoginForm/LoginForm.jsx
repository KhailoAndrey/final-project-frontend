import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';
import svg from '../../../images/Icons/symbol-defs.svg';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { logIn } from 'redux/auth/authOperations';
import {
  FormContainer,
  FormInput,
  FormInputEmail,
  FormHeader,
  FormText,
  FormLink,
  FormButton,
  FormErrorPassword,
  FormErrorEmail,
  PasswordDiv,
  EmailDiv,
  FormSuccessPassword,
  IconsContainer,
  EmailIcon,
  GoogleAuth,
  GoogleIcon,
} from './LoginForm.styled';

const emailRegexp = /^[a-zA-Z0-9._%+-]+@[a-z.-]+.[a-z]{2,}$/;
const passwordRegexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;
const googleAuthUrl =
  'https://final-project-backend-4o0r.onrender.com/api/users/google';

const validationSchema = Yup.object({
  email: Yup.string()
    .email(t('email_registered'))
    .required(t('requried_email_field'))
    .matches(emailRegexp, t('email_regexp')),
  password: Yup.string()
    .trim()
    .required(t('requried_password_field'))
    .min(6, t('password_min'))
    .max(16, t('password_max'))
    .matches(passwordRegexp, t('password_regexp')),
});

export const LoginForm = () => {
  const { t } = useTranslation();
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

  const handlePasswordBlur = () => {
    formik.setTouched({ ...formik.touched, password: true });
  };

  const handleEmailBlur = () => {
    formik.setTouched({ ...formik.touched, email: true });
  };

  const showEmailError =
    (formik.touched.email || formik.submitCount > 0) &&
    formik.errors.email &&
    formik.values.email;

  const showPasswordError =
    (formik.touched.password || formik.submitCount > 0) &&
    formik.errors.password &&
    formik.values.password;

  const showPasswordSuccess =
    formik.touched.password &&
    !formik.errors.password &&
    formik.values.password;

  const showEmailSuccess =
    formik.touched.email && !formik.errors.email && formik.values.email;

  const handleClear = field => {
    formik.setFieldValue(field, '');
  };
  return (
    <FormContainer>
      <FormHeader>{t('login_form')}</FormHeader>
      <div>
        <GoogleAuth href={`${googleAuthUrl}`} type="button">
          <GoogleIcon />
          {t('googleAuth')}
        </GoogleAuth>
      </div>

      <form onSubmit={formik.handleSubmit}>
        <EmailDiv>
          <FormInputEmail
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder={t('email')}
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
            <FormErrorEmail>{formik.errors.email}</FormErrorEmail>
          )}
          {showEmailError && (
            <EmailIcon>
              <svg width={24} height={24} onClick={() => handleClear('email')}>
                <use
                  href={`${svg}#icon-cross`}
                  width={24}
                  height={24}
                  style={{ stroke: 'var( --red-form-clr)' }}
                />
              </svg>
            </EmailIcon>
          )}
          {showEmailSuccess && (
            <EmailIcon>
              <svg width={24} height={24}>
                <use
                  href={`${svg}#icon-check`}
                  width={24}
                  height={24}
                  style={{ stroke: 'var( --green-form-clr)' }}
                />
              </svg>
            </EmailIcon>
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
            placeholder={t('password')}
            onBlur={handlePasswordBlur}
            className={
              showPasswordError
                ? 'input-error'
                : showPasswordSuccess
                ? 'input-success'
                : ''
            }
          />
          <IconsContainer>
            {type === 'password' ? (
              <span onClick={() => setType('text')}>
                <svg width={24} height={24}>
                  <use
                    href={`${svg}#icon-close-eye`}
                    width={24}
                    height={24}
                    style={{ stroke: 'var( --main-clr-blue)' }}
                  />
                </svg>
              </span>
            ) : (
              <span onClick={() => setType('password')}>
                <svg width={24} height={24}>
                  <use
                    href={`${svg}#icon-eye`}
                    width={24}
                    height={24}
                    style={{ stroke: 'var( --main-clr-blue)' }}
                  />
                </svg>
              </span>
            )}
            {showPasswordError && (
              <svg
                width={24}
                height={24}
                onClick={() => handleClear('password')}
              >
                <use
                  href={`${svg}#icon-cross`}
                  width={24}
                  height={24}
                  style={{ stroke: 'var( --red-form-clr)' }}
                />
              </svg>
            )}

            {showPasswordSuccess && (
              <svg width={24} height={24}>
                <use
                  href={`${svg}#icon-check`}
                  width={24}
                  height={24}
                  style={{ stroke: 'var( --green-form-clr)' }}
                />
              </svg>
            )}
          </IconsContainer>

          {formik.touched.password && formik.errors.password && (
            <FormErrorPassword>{formik.errors.password}</FormErrorPassword>
          )}
          {showPasswordSuccess && (
            <FormSuccessPassword>{t('password_is_secure')}</FormSuccessPassword>
          )}
        </PasswordDiv>

        <FormButton type="submit">{t('login_form')}</FormButton>
        <FormText>
          {t('login_form_text')}
          <FormLink to="/register">{t('registration')}</FormLink>
        </FormText>
      </form>
    </FormContainer>
  );
};

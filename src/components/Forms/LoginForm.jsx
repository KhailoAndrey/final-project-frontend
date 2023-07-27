import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Icon } from 'react-icons-kit';
import { ic_visibility_off_outline } from 'react-icons-kit/md/ic_visibility_off_outline';
import { ic_visibility_outline } from 'react-icons-kit/md/ic_visibility_outline';
import { iosCloseEmpty } from 'react-icons-kit/ionicons/iosCloseEmpty';
import { androidDone } from 'react-icons-kit/ionicons/androidDone';
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
  IconsContainer,
} from './LoginForm.styled';

const emailRegexp = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Please enter your registered email')
    .required('Email is a required field')
    .matches(emailRegexp, 'Enter a valid Email'),
  password: Yup.string()
    .trim()
    .required('Password is a required field')
    .min(6, 'Password must be at least 6 characters')
    .max(16, 'Password must be no more than 16 characters'),
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

  return (
    <FormContainer>
      <FormHeader>{t('login_form')}</FormHeader>
      <form onSubmit={formik.handleSubmit}>
        <EmailDiv>
          <FormInput
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
          {showEmailSuccess && (
            <Icon
              icon={androidDone}
              size={24}
              style={{
                position: 'absolute',
                top: '11px',
                right: '16px',
                color: 'green',
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
                <FormEye icon={ic_visibility_off_outline} size={24} />
              </span>
            ) : (
              <span onClick={() => setType('password')}>
                <FormEye icon={ic_visibility_outline} size={24} />
              </span>
            )}
            {showPasswordError && (
              <Icon
                icon={iosCloseEmpty}
                size={36}
                style={{
                  color: 'red',
                }}
              />
            )}

            {showPasswordSuccess && (
              <Icon
                icon={androidDone}
                size={24}
                style={{
                  color: 'green',
                }}
              />
            )}
          </IconsContainer>

          {formik.touched.password && formik.errors.password && (
            <FormErrorPassword>{formik.errors.password}</FormErrorPassword>
          )}
          {showPasswordSuccess && (
            <FormSuccessPassword>Password is secure</FormSuccessPassword>
          )}
        </PasswordDiv>

        <FormButton type="submit">{t('login')}</FormButton>
        <FormText>
          {t('login_form_text')}
          <FormLink to="/register">{t('registration')}</FormLink>
        </FormText>
      </form>
    </FormContainer>
  );
};

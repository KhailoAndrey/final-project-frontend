import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { register } from 'redux/auth/authOperations';
import getMessage from 'utils/messages';
import { validationSchema } from './ValidationRegister';
import { IconSvgClose, IconSvgOpen,IconSvgSuccess  } from './RegisterFormIcons';

import svg from '../../../images/Icons/symbol-defs.svg';

import {
  ErrorText,
  FormButton,
  FormContainer,
  FormHeader,
  FormInput,
  FormInputNameEmail,
  FormInputWrapper,
  FormLink,
  FormText,
  IconForInput,
  SuccessText,
  WrapperInput,
} from './RegisterForm.styled';


const RegisterForm = () => {
  const { t } = useTranslation();
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
        const response = await dispatch(register(credentials));
        if (response.error) {
          getMessage(response.error.data.message);
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

  const handleClear = field => {
    formik.setFieldValue(field, '');
  };

  return (
    <FormContainer>
      <form onSubmit={formik.handleSubmit}>
        <FormHeader>{t('registration')}</FormHeader>
        <FormInputWrapper>
          <div>
            <label htmlFor="name" hidden>
              Name
            </label>
            <WrapperInput>
              <FormInputNameEmail
                id="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                name="name"
                placeholder={t('name')}
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
                {showNameError && (
                  <svg
                    width={24}
                    height={24}
                    onClick={() => handleClear('name')}
                  >
                    <use
                      href={`${svg}#icon-cross`}
                      style={{
                        stroke: 'var(--form-error-red)',
                      }}
                      width={24}
                      height={24}
                    />
                  </svg>
                )}
                {showNameSuccess && <IconSvgSuccess />}
              </IconForInput>
            </WrapperInput>
          </div>
          <div>
            <label htmlFor="email" hidden>
              Email
            </label>
            <WrapperInput>
              <FormInputNameEmail
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
                <ErrorText>{formik.errors.email}</ErrorText>
              )}
              <IconForInput>
                {showEmailError && (
                  <svg
                    width={24}
                    height={24}
                    onClick={() => handleClear('email')}
                  >
                    <use
                      href={`${svg}#icon-cross`}
                      style={{
                        stroke: 'var(--form-error-red)',
                      }}
                      width={24}
                      height={24}
                    />
                  </svg>
                )}
                {showEmailSuccess && <IconSvgSuccess />}
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
                {showPasswordError && (
                  <svg
                    width={24}
                    height={24}
                    onClick={() => handleClear('password')}
                  >
                    <use
                      href={`${svg}#icon-cross`}
                      style={{
                        stroke: 'var(--form-error-red)',
                      }}
                      width={24}
                      height={24}
                    />
                  </svg>
                )}
                {showPasswordSuccess && <IconSvgSuccess />}
              </IconForInput>
              {formik.touched.password && formik.errors.password && (
                <ErrorText>{formik.errors.password}</ErrorText>
              )}
              {showPasswordSuccess && (
                <SuccessText>{t('password_is_secure')}</SuccessText>
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
                placeholder={t('confirm_password')}
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
                {showConfirmPasswordError && (
                  <svg
                    width={24}
                    height={24}
                    onClick={() => handleClear('confirmPassword')}
                  >
                    <use
                      href={`${svg}#icon-cross`}
                      style={{
                        stroke: 'var(--form-error-red)',
                      }}
                      width={24}
                      height={24}
                    />
                  </svg>
                )}
                {showConfirmPasswordSuccess && <IconSvgSuccess />}
              </IconForInput>
              {formik.touched.confirmPassword &&
                formik.errors.confirmPassword && (
                  <ErrorText>{formik.errors.confirmPassword}</ErrorText>
                )}
            </WrapperInput>
          </div>
        </FormInputWrapper>
        <FormButton type="submit">{t('registration')}</FormButton>
        <FormText>
          {t('registration_form_text')}
          <FormLink to="/login">{t('login_form')}</FormLink>
        </FormText>
      </form>
    </FormContainer>
  );
};

export default RegisterForm;

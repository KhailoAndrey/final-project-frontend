import { useDispatch } from 'react-redux';
import { Formik, Form, ErrorMessage } from 'formik';
import { validationSchema } from './ValidationRegister';
import { register } from 'redux/auth/authOperations';
import {
  ErrorText,
  FormButton,
  FormContainer,
  FormHeader,
  FormInput,
  FormInputWrapper,
  FormLink,
  FormText,
  WrapperInput,
} from './RegisterForm.styled';

import Notiflix from 'notiflix';

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

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (values, { resetForm }) => {
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
  };

  return (
    <FormContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <FormHeader>Registration</FormHeader>
          <FormInputWrapper>
            <div>
              <label htmlFor="name" hidden>
                Name
              </label>
              <WrapperInput>
                <FormInput
                  type="text"
                  name="name"
                  placeholder="Name"
                ></FormInput>
                <FormError name="name" />
              </WrapperInput>
            </div>
            <div>
              <label htmlFor="email" hidden>
                Email
              </label>
              <WrapperInput>
                <FormInput
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                ></FormInput>
                <FormError name="email" />
              </WrapperInput>
            </div>
            <div>
              <label htmlFor="password" hidden>
                Password
              </label>
              <WrapperInput>
                <FormInput
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                ></FormInput>
                <FormError name="password" />
              </WrapperInput>
            </div>
            <div>
              <label htmlFor="confirmPassword" hidden>
                Confirm password
              </label>
              <WrapperInput>
                <FormInput
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Confirm password"
                ></FormInput>
                <FormError name="confirmPassword" />
              </WrapperInput>
            </div>
          </FormInputWrapper>
          <FormButton type="submit">Registration</FormButton>
          <FormText>
            Already have an account?
            <FormLink to="/login">Login</FormLink>
          </FormText>
        </Form>
      </Formik>
    </FormContainer>
  );
};

export default RegisterForm;

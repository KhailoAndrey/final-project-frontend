import { useDispatch } from 'react-redux';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
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

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is a required field')
    .min(2, 'Name must be at least 2 characters')
    .max(16, 'Name must be at least 16 characters')
    .matches(/^[A-Za-z]{2,16}$/, 'The name must be in English'),
  email: Yup.string()
    .email()
    .required('Email is a required field')
    .matches(/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/, 'Enter a valid Email'),
  password: Yup.string()
    .required('Password is a required field')
    .min(6, 'Password must be at least 6 characters')
    .max(16, 'Password must be no more than 16 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      'Must be at least one number, one lowercase and an uppercase letter'
    ),
  confirmPassword: Yup.string().when('password', (password, schema) => {
    return password
      ? schema
          .required('Password confirmation required')
          .oneOf([Yup.ref('password')], 'Passwords must match')
      : schema.notRequired();
  }),
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

  const handleSubmit = (values, { resetForm }) => {
    const credentials = {
      name: values.name,
      email: values.email,
      password: values.password,
    };
    // console.log(credentials);
    dispatch(register(credentials));
    resetForm();
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

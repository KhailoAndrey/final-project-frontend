import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { register } from 'redux/auth/authOperations';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required()
    .matches(/^[A-Za-z]{2,16}$/),
  email: Yup.string()
    .email()
    .required()
    .matches(/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/),
  password: Yup.string()
    .required()
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.\d)[a-zA-Z\d]{6,16}$/),
  confirmPassword: Yup.string()
    .required()
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.\d)[a-zA-Z\d]{6,16}$/),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const credentials = {
      name: values.name,
      email: values.email,
      password: values.password,
    };
    dispatch(register(credentials));
    resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <h2>Registration</h2>
          <div>
            <label htmlFor="name" hidden>
              Name
            </label>
            <Field type="text" name="name" placeholder="Name"></Field>
          </div>
          <div>
            <label htmlFor="email" hidden>
              Email
            </label>
            <Field
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            ></Field>
          </div>
          <div>
            <label htmlFor="password" hidden>
              Password
            </label>
            <Field
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            ></Field>
          </div>
          <div>
            <label htmlFor="confirmPassword" hidden>
              Confirm password
            </label>
            <Field
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm password"
            ></Field>
          </div>
          <button type="submit">Registration</button>
          <p>
            Already have an account?
            <Link to="/login">Login</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { logIn } from 'redux/auth/authOperations';


const emailRegexp =/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/

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

const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  

export const LoginForm = () => {
    const dispatch = useDispatch();
    
  
    const handleSubmit = e => {
      e.preventDefault();
      const form = e.currentTarget;
      dispatch(
        logIn({
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      );
      form.reset();
    };
  
    return (
        <div>
      <Formik 
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        
        <Form>
        <h2>Login</h2>
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
          <button type="submit">Login</button>
          <p>
          Don't have an account? 
            <Link to="/register">Register</Link>
          </p>
        </Form>

      </Formik>
     
      </div>
    );
  };
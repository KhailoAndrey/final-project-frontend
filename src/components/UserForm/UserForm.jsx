import { useEffect, useState } from 'react';
import { Form, Formik, ErrorMessage } from 'formik';
import { toast, ToastContainer } from 'react-toastify';
import { useAuth } from 'redux/auth/selectors';

import { Container, Input, Label, ErrorText, Div } from './UserForm.styled.js';

import {
  CameraIcon1,
  CloseIcon,
  // EditFoto,
  EditIcon,
  LogoutB,
} from 'components/UserButtons/UserButtons.jsx';
import {
  AvatarBtn,
  Button,
  // LogoutButton,
  // SaveBtn,
} from 'components/UserButtons/UserButtons.styled.js';
import { updateUserSchema } from './updateUserSchema.js';

import {
  AvatarContainer,
  ImgWrapper,
  PhotoWrapper,
} from '../UserForm/UserForm.styled.js';

// import { useDispatch } from 'react-redux';
// import Logout from 'components/Header/Navigation/UserNav/Logout/Logout.jsx';
// import { updateUser } from 'redux/auth/authOperations.js';
// import { getCurrentUser, updateUser } from 'fetch/user.js';

export const UserForm = () => {
  const { user } = useAuth();
  // const [user, setUser] = useState(null);
  // const { token } = useAuth();
  // const dispatch = useDispatch();

  // Можливість редагування форми
  const [isFormEdit, setIsFormEdit] = useState(false);
  console.log(`isFormEdit=${isFormEdit}`);

  // Можливість редагування аватар
  const [isAvatarEdit, setIsAvatarEdit] = useState(false);
  console.log(`isAvatarEdit=${isAvatarEdit}`);
  // Стани полів форми
  const [file, setFile] = useState(null);
  const [imageUrl, setImageURL] = useState(null);

  const [values, setValues] = useState({
    name: user && user.name ? user.name : '',
    email: user && user.email ? user.email : '',
    birthday: user ? user.birthday : '',
    phone: user ? user.phone : '',
    city: user ? user.city : '',
  });

  //   const initialValues = {
  //     avatar: '',
  // name: user && user.name ? user.name : '',
  // email: user && user.email ? user.email : '',
  // birthday: user ? user.birthday : '',
  // phone: user ? user.phone : '',
  // city: user ? user.city : '',
  //   };
  // useEffect(() => {
  //   getCurrentUser()
  //     .then(user => {
  //       setUser(user);
  //     })
  //     .catch(error => console.log(error));
  // }, []);

  // useEffect(() => {
  //   if (user === null) {
  //     return;
  //   }
  // }, [user]);

  useEffect(() => {
    if (user === null) {
      return;
    }
    setValues({
      name: user && user.name ? user.name : '',
      email: user && user.email ? user.email : '',
      birthday: user ? user.birthday : '',
      phone: user ? user.phone : '',
      city: user ? user.city : '',
      avatar: values.avatar || '',
      avatarURL: user ? user.avatarURL : '',
    });
    setImageURL(file ? imageUrl : user.avatarURL);
  }, [user, file, imageUrl, values.avatar]);

  const handleSubmit = values => {
    console.log('Submit!');
    // if (file && !values.avatar) {
    //   toast.error('Press confirm or cancel your new photo');
    //   return;
    // }

    // setIsFormEdit(false);
    // const formData = new FormData();

    // if (values.imgUrl) {
    //   formData.append('avatar', values.imgUrl);
    // }
    // if (values.name) {
    //   formData.append('name', values.name);
    // }
    // if (values.birthday) {
    //   formData.append('birthday', values.birthday);
    // }
    // if (values.phone) {
    //   formData.append('phone', values.phone);
    // }
    // if (values.city) {
    //   formData.append('city', values.city);
    // }

    // console.log(`formData:${{ formData }}`);
    // dispatch(updateUser(formData));
    // toast.success('Changes saved successfully');
  };

  const handleClick = () => {
    setIsFormEdit(true);
  };

  const removeChanges = () => {
    setIsFormEdit(false);
    setFile(null);
    setIsAvatarEdit(false);
  };

  // >>>>>>=============== для Aватару====================

  const handleFileChange = evt => {
    const fileSize = 3000000;
    const file = evt.target.files[0];
    if (file && file.size <= fileSize) {
      setFile(file);
      setImageURL(URL.createObjectURL(file));

      setIsAvatarEdit(true);

      console.log(`Is file: ${{ file }}`);
      console.log(`editing: ${isAvatarEdit}`);
    } else {
      setIsAvatarEdit(false);
      setImageURL(user && user.avatarURL);
      toast.error('File size must be less than 3MB');
      console.log('No file');
      console.log(values);
    }
  };

  const handleConfirm = () => {
    setValues({ ...values, avatar: file });
    console.log(`values after confirm ${values}`);
    setIsFormEdit(true);
    setIsAvatarEdit(false);
    console.log('Image saved:', values.imageUrl);
  };

  const handleRemove = () => {
    setImageURL('imageUrl', '');
    setIsFormEdit(true);
    setIsAvatarEdit(false);
    console.log(`editing: ${isAvatarEdit}`);
    setFile(null);
  };
  // <<<<<<=============== для аватару====================
  return (
    <Div>
      <Formik
        validationSchema={updateUserSchema}
        initialValues={values}
        // validateOnBlur={true}
        onSubmit={handleSubmit}
      >
        <Form>
          {!isFormEdit ? (
            <Button type="button" onClick={handleClick}>
              <EditIcon />
            </Button>
          ) : (
            <Button type="button" onClick={removeChanges}>
              <CloseIcon />
            </Button>
          )}

          <AvatarContainer>
            <ImgWrapper>
              <PhotoWrapper>
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt="Avatar"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                ) : (
                  <img
                    src={user.avatarURL}
                    alt="Avatar"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                )}
              </PhotoWrapper>

              {isFormEdit && !isAvatarEdit ? (
                <AvatarBtn>
                  <input
                    type="file"
                    id="fileInput"
                    accept="image/*"
                    style={{ display: 'none' }}
                    name="file"
                    onChange={handleFileChange}
                  />

                  <label htmlFor="fileInput">
                    <CameraIcon1 />
                    Edit foto
                  </label>
                </AvatarBtn>
              ) : null}

              {isFormEdit && isAvatarEdit ? (
                <AvatarBtn>
                  <button type="button" onClick={handleConfirm}>
                    Confirm
                  </button>
                  <button type="button" onClick={handleRemove}>
                    Remove
                  </button>
                </AvatarBtn>
              ) : null}
            </ImgWrapper>
          </AvatarContainer>

          <Container>
            <Label htmlFor="name">Name:</Label>
            <Input
              id="name"
              autoComplete="off"
              name="name"
              disabled={!isFormEdit}
            />
          </Container>
          <ErrorMessage name="name" component={ErrorText} />

          <Container>
            <Label htmlFor="email">Email:</Label>
            <Input id="email" autoComplete="off" name="email" disabled={true} />
          </Container>
          <ErrorMessage name="email" component={ErrorText} />

          <Container>
            <Label htmlFor="birthday">Birthday:</Label>
            <Input
              id="birthday"
              autoComplete="off"
              name="birthday"
              placeholder="00-00-0000"
              disabled={!isFormEdit}
            />
          </Container>
          <ErrorMessage name="birthday" component={ErrorText} />

          <Container>
            <Label htmlFor="phone">Phone:</Label>
            <Input
              id="phone"
              autoComplete="off"
              name="phone"
              placeholder="+380000000000"
              disabled={!isFormEdit}
            />
          </Container>
          <ErrorMessage name="phone" component={ErrorText} />

          <Container>
            <Label htmlFor="city"> City:</Label>
            <Input
              id="city"
              autoComplete="off"
              name="city"
              placeholder="Kyiv"
              disabled={!isFormEdit}
            />
          </Container>
          <ErrorMessage name="city" component={ErrorText} />

          {!isFormEdit ? <LogoutB /> : <button type="submit">Save</button>}

          {/* <Logout /> */}
        </Form>
      </Formik>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        closeOnClick
        pauseOnHover
      />
    </Div>
  );
};

import { useEffect, useState } from 'react';
import { Form, Formik, ErrorMessage } from 'formik';
import { toast, ToastContainer } from 'react-toastify';
import { useAuth } from 'redux/auth/selectors';

// import { toast, ToastContainer } from 'react-toastify';
import { Container, Input, Label, ErrorText, Div } from './UserForm.styled.js';
import { Button } from 'components/UserData/UserData.styled.js';
import {
  CloseIcon,
  EditIcon,
  Logout,
} from 'components/Buttons/UserPageButtons/UserPageButtons.jsx';
import { SaveBtn } from 'components/Buttons/UserPageButtons/UserPageButtons.styled.js';
import { updateUserSchema } from './updateUserSchema.js';

import {
  AvatarBtn,
  AvatarContainer,
  ImgWrapper,
  PhotoWrapper,
} from 'components/AvatarCard/AvatarCard.styled.js';

// import { useDispatch } from 'react-redux';
// import { getCurrentUser, updateUser } from 'fetch/user.js';

export const UserForm = () => {
  const { user } = useAuth();
  // const [user, setUser] = useState(null);
  // const { token } = useAuth();
  // const dispatch = useDispatch();

  // Можливість редагування форми
  const [isEdit, setIsEdit] = useState(false);
  console.log(`isEdit=${isEdit}`);

  // Можливість редагування зображення
  const [editing, setEditing] = useState(false);
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

  const handleSubmit = async values => {
    if (file && !values.avatar) {
      errorMessage('Press confirm or cancel your new photo');
      return;
    }
    setIsEdit(false);
    try {
      const formData = new FormData();
      // const entries = Object.entries(values);

      // let validationObject = {};

      // entries.forEach(entry => {
      //   if (entry[1]) {
      //     formData.append(entry[0], entry[1]);
      //     validationObject = {
      //       ...validationObject,
      //       [entry[0]]: entry[1],
      //     };
      //   }
      // });
      // !!!!!!!!!!!!!======= переробити форм дату без емайл ======!!!!!!!!!!!!!!
      formData.append('avatar', values.imgUrl);
      formData.append('name', values.name);
      formData.append('birthday', values.birthday);
      formData.append('phone', values.phone);
      formData.append('city', values.city);
      console.log(values);
      // dispatch(updateUser(formData));

      //   const formDataObject = {
      //   avatar: fileInputElement.files[0],
      //  name: Groucho

      //   });

      // const formDataObject = {};
      // formData.forEach((value, key) => {
      //   formDataObject[key] = value;
      // });
      // ===========================================<<<<<<<<<<<

      // await updateUserSchema.validate(validationObject);
      // console.log(`formData:${{ formData }}`);
      // updateUser(formData);
      successMessage('Changes saved successfully');
    } catch (error) {
      if (error.name === 'ValidationError') {
        errorMessage(error.errors[0]);
      }
    }
  };

  const handleClick = () => {
    setIsEdit(!isEdit);
  };

  const removeChanges = () => {
    setIsEdit(!isEdit);
    setFile(null);
    setEditing(true);
  };

  // >>>>>>=============== для Aватару====================

  const handleFileChange = evt => {
    const file = evt.target.files[0];
    if (file) {
      setFile(file);
      setImageURL(URL.createObjectURL(file));

      setEditing(true);
      console.log('Is file');
      console.log(editing);
    } else {
      // setEditing(true);
      setImageURL(user && user.avatarURL);
      console.log('No file');
    }
  };

  const handleConfirm = () => {
    setValues({ ...values, avatar: file });
    setIsEdit(true);
    setEditing(true);
    console.log('Image saved:', values.imageUrl);
  };

  const handleRemove = () => {
    setImageURL('imageUrl', '');
    setIsEdit(true);
    setEditing(false);
    setFile(null);
  };
  // <<<<<<=============== для аватару====================
  // Повідомлення
  const errorMessage = message => {
    toast.error(message);
  };

  const successMessage = message => {
    toast.success(message);
  };

  return (
    <Div>
      {/* <AvatarCard isEdit={isEdit} /> */}

      <Formik
        validationSchema={updateUserSchema}
        initialValues={values}
        // validateOnBlur={true}
        onSubmit={handleSubmit}
      >
        <Form>
          {!isEdit ? (
            <Button type="button" onClick={handleClick}>
              <EditIcon />
            </Button>
          ) : (
            <Button type="button" onClick={removeChanges}>
              <CloseIcon /> X
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

              {isEdit && !editing ? (
                <AvatarBtn>
                  <input
                    type="file"
                    id="fileInput"
                    accept="image/*"
                    style={{ display: 'none' }}
                    name="file"
                    onChange={handleFileChange}
                  />
                  <label htmlFor="fileInput">Edit foto</label>
                </AvatarBtn>
              ) : null}

              {isEdit && file ? (
                <AvatarBtn>
                  <button type="button" onClick={handleConfirm}>
                    Confirm
                  </button>
                  <button onClick={handleRemove}>Remove</button>
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
              disabled={!isEdit}
            />
            <ErrorMessage name="name" component={ErrorText} />
          </Container>

          <Container>
            <Label htmlFor="email">Email:</Label>
            <Input id="email" autoComplete="off" name="email" disabled={true} />
            <ErrorMessage name="email" component={ErrorText} />
          </Container>

          <Container>
            <Label htmlFor="birthday">Birthday:</Label>
            <Input
              id="birthday"
              autoComplete="off"
              name="birthday"
              placeholder="00-00-0000"
              disabled={!isEdit}
            />
            <ErrorMessage name="birthday" component={ErrorText} />
          </Container>

          <Container>
            <Label htmlFor="phone">Phone:</Label>
            <Input
              id="phone"
              autoComplete="off"
              name="phone"
              placeholder="+380000000000"
              disabled={!isEdit}
            />
            <ErrorMessage name="phone" component={ErrorText} />
          </Container>

          <Container>
            <Label htmlFor="city">City:</Label>
            <Input
              id="city"
              autoComplete="off"
              name="city"
              placeholder="Kyiv"
              disabled={!isEdit}
            />
            <ErrorMessage name="city" component={ErrorText} />
          </Container>

          {!isEdit ? <Logout /> : <SaveBtn type="submit">Save</SaveBtn>}
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

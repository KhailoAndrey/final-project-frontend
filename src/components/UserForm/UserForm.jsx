import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
// import { useState } from 'react';
import { Form, Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import { Container, Input, Label, ErrorText, Div } from './UserForm.styled.js';
import {
  Button,
  InputFile,
  InputWrapper,
} from 'components/UserData/UserData.styled.js';
import {
  CloseIcon,
  EditFoto,
  EditIcon,
  Logout,
} from 'components/Buttons/UserPageButtons/UserPageButtons.jsx';
import { SaveBtn } from 'components/Buttons/UserPageButtons/UserPageButtons.styled.js';
import axios from 'axios';

// import { useDispatch } from 'react-redux';

const schema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Too Short!')
    .max(16)
    .matches(
      /^[a-zA-Zа-яіїєА-ЯІЇЄ][a-zA-Zа-яіїєА-ЯІЇЄ'-\s]{1,15}$/,
      'Only alphabetic characters are allowed'
    ),
  // .required('Field is required!')
  email: yup
    .string()
    // .required('Email field is required')
    .matches(
      /^([a-zA-Z0-9]{1}[a-zA-Z0-9_\-.]{1,})@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,4})$/,
      'Example: user@mail.com'
    )
    .max(70, 'Maximum 70 characters')
    .min(6, 'Minimum 6 characters')
    .email('Please, enter a valid email'),
  birthday: yup
    .string()
    .matches(
      /^(0?[1-9]|[12][0-9]|3[01])[./\-](0?[1-9]|1[012])[./\-]\d{4}$/,
      'Please enter a valid date: dd.mm.yyyy'
    ),
  phone: yup
    .string()
    .matches(/^\+\d{12}$/, 'Phone should be in format +380441234567'),
  city: yup
    .string()
    .min(2, 'Min 2 characters')
    .max(35, 'Max 35 characters')
    .matches(
      /^(?:[A-ZА-ЯІЇЄ][a-zа-яіїє]*[\s-])*[A-ZА-ЯІЇЄ][a-zа-яіїє]*$/,
      'Only in format "City"'
    ),
});

const imageExtensions = [
  'jpg',
  'jpeg',
  'png',
  'svg',
  'gif',
  'webp',
  'JPG',
  'GPEG',
  'PNG',
  'SVG',
  'GIF',
  'WEBP',
];

export const UserForm = () => {
  const user = useSelector(state => state.auth.user);
  console.log(user);
  const initialValues = {
    name: user && user.name ? user.name : '',
    email: user && user.email ? user.email : '',
    birthday: user ? user.birthday : '',
    phone: user ? user.phone : '',
    city: user ? user.city : '',
  };

  // axios.defaults.baseURL =
  //   'https://final-project-backend-4o0r.onrender.com/api/';
  // const putUserData = async () => {
  //   try {
  //     const res = await axios.put(`/users/`);
  //     const { user } = await res.data;
  //     console.log(user);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
  // useEffect(() => {
  //   putUserData();
  // }, [user]);
  // const dispatch = useDispatch();
  // Стани для зміни форми
  // Можливість редагування форми
  const [isEdit, setIsEdit] = useState(false);
  console.log(`isEdit=${isEdit}`);
  // Можливість зміни зображення
  // const [isImgChangeable, setIsImgChangeable] = useState(true);

  // Стани полів форми
  const [avatar, setAvatar] = useState('');
  const [previewURL, setPreviewURL] = useState(undefined);
  // const [values, setValues] = useState({
  //   name: '',
  //   email: '',
  //   birthday: '',
  //   phone: '',
  //   city: '',
  // });
  // Рендер аватару
  useEffect(() => {
    if (avatar === '') {
      return;
    }
  }, [avatar]);
  // Рендер даних користувача
  useEffect(() => {
    if (user === null) {
      return;
    }
    // setValues({
    //   name: user && user.name ? user.name : '',
    //   email: user && user.email ? user.email : '',
    //   birthday: user ? user.birthday : '',
    //   phone: user ? user.phone : '',
    //   city: user ? user.city : '',
    // });

    setPreviewURL(user && user.avatarURL);
  }, [user]);

  const handleSubmit = (values, actions) => {
    setIsEdit(false);
    console.log(values);
  };

  const handleClick = (values, actions) => {
    setIsEdit(!isEdit);
  };

  // const changeImgClick = (values, actions) => {
  //   setIsImgChangeable(!isImgChangeable);
  // };
  const fileInputRef = useRef(null);
  const [fileInput, setFileInput] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleFileChange = e => {
    const fileList = e.target.files;
    const file = fileList[0];

    if (!file) {
      // Handle case when no file is selected
      return;
    }

    const imageUrl = URL.createObjectURL(file);
    setImageUrl(imageUrl);
  };

  // const handleSelectFile = () => {
  //   if (fileInputRef.current) {
  //     fileInputRef.current.click();
  //   }
  // };

  const handleRemoveImage = () => {
    if (fileInputRef.current) {
      console.log(fileInputRef.current.value);
      fileInputRef.current.value = null;
    }
    setImageUrl(null);
    fileInputRef.current.value = null;
  };

  // const handleChangePhoto = async e => {
  //   const file = e.currentTarget.value;
  //   const findExtension = e.currentTarget.value.split('.');
  //   const extension = findExtension[findExtension.length - 1];

  //   if (!imageExtensions.includes(extension)) {
  //     toast.error(
  //       'Avatar must be an image file with extention jpg, jpeg, png, svg, gif, webp'
  //     );
  //     return;
  //   }
  //   return <img src={URL.createObjectURL(file)} alt="avatar" height={182} />;
  // };

  return (
    <Div>
      {/* {isEdit ? (
        <InputWrapper>
          <EditFoto />
          <InputFile
            type="file"
            accept="image/*"
            onChange={handleChangePhoto}
          />
        </InputWrapper>
      ) : null} */}

      <Formik
        validationSchema={schema}
        initialValues={initialValues}
        // validateOnBlur={true}
        onSubmit={handleSubmit}
      >
        <Form>
          {!isEdit ? (
            <Button type="button" onClick={handleClick}>
              <EditIcon />
            </Button>
          ) : (
            <Button type="button" onClick={handleClick}>
              <CloseIcon />
            </Button>
          )}
          <Container>
            {isEdit ? (
              <>
                <Label htmlFor="avatar">EDIT PHOTO</Label>
                <Input
                  id="avatar"
                  autoComplete="off"
                  name="avatar"
                  type="file"
                  disabled={!isEdit}
                  accept="image/*"
                  style={{ display: 'none' }}
                  ref={input => setFileInput(input)}
                  // ref={fileInputRef}
                  onChange={handleFileChange}
                />
              </>
            ) : null}
            {
              imageUrl ? (
                <div>
                  <img src={imageUrl} alt="Selected" height="60" />
                  <button type="button" onClick={handleRemoveImage}>
                    Remove
                  </button>
                </div>
              ) : null
              // <Label htmlFor="avatar">
              //   <button type="button" onClick={handleSelectFile}>
              //     Select a file
              //   </button>
              // </Label>
            }
            <ErrorMessage name="avatar" component={ErrorText} />
          </Container>

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
            <Input
              id="email"
              autoComplete="off"
              name="email"
              disabled={!isEdit}
            />
            <ErrorMessage name="email" component={ErrorText} />
          </Container>

          <Container>
            <Label htmlFor="birthday">Birthday:</Label>
            <Input
              id="birthday"
              autoComplete="off"
              name="birthday"
              placeholder="00.00.0000"
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

import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
// import { useState } from 'react';
import { Form, Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
// import { toast, ToastContainer } from 'react-toastify';
import { Container, Input, Label, ErrorText, Div } from './UserForm.styled.js';
import { Button } from 'components/UserData/UserData.styled.js';
import {
  CloseIcon,
  EditIcon,
  Logout,
} from 'components/Buttons/UserPageButtons/UserPageButtons.jsx';
import { SaveBtn } from 'components/Buttons/UserPageButtons/UserPageButtons.styled.js';
import { useSelector } from 'react-redux';
import AvatarCard from 'components/AvatarCard/AvatarCard.jsx';
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
  birthday: yup.string().matches(
    // eslint-disable-next-line
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

export const UserForm = () => {
  const user = useSelector(state => state.auth.user);
  // const dispatch = useDispatch();

  // Можливість редагування форми
  const [isEdit, setIsEdit] = useState(false);
  console.log(`isEdit=${isEdit}`);

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
  const initialValues = {
    name: user && user.name ? user.name : '',
    email: user && user.email ? user.email : '',
    birthday: user ? user.birthday : '',
    phone: user ? user.phone : '',
    city: user ? user.city : '',
  };
  // Рендер аватару
  useEffect(() => {
    if (avatar === '') {
      return;
    }
  }, [avatar]);
  // Рендер даних користувача
  // useEffect(() => {
  //   if (user === null) {
  //     return;
  //   }
  //   setValues({
  // name: user && user.name ? user.name : '',
  // email: user && user.email ? user.email : '',
  // birthday: user ? user.birthday : '',
  // phone: user ? user.phone : '',
  // city: user ? user.city : '',
  //   });
  //   setPreviewURL(user && user.avatarURL);
  // }, [user]);

  const handleSubmit = (values, actions) => {
    setIsEdit(false);
    console.log(values);
  };

  const handleClick = () => {
    setIsEdit(!isEdit);
  };

  const removeChanges = () => {
    setIsEdit(!isEdit);
    // resetForm();
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
      <AvatarCard isEdit={isEdit} />

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
            <Button type="button" onClick={removeChanges}>
              <CloseIcon /> X
            </Button>
          )}

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
      {/* <ToastContainer
        position="top-center"
        autoClose={5000}
        closeOnClick
        pauseOnHover
      /> */}
    </Div>
  );
};

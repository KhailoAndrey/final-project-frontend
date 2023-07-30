import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Form, Formik, ErrorMessage } from 'formik';
import { toast, ToastContainer } from 'react-toastify';
import { useAuth } from 'redux/auth/selectors';

import {
  InputWrap,
  Input,
  Label,
  ErrorText,
  Div,
  AvatarContainer,
  ImgWrapper,
  PhotoWrapper,
  AvatarLabel,
} from './UserForm.styled.js';

import {
  CameraIcon1,
  CheckIcon,
  CloseIcon,
  // EditFoto,
  EditIcon,
  LogoutB,
  RemoveIcon,
} from 'components/UserButtons/UserButtons.jsx';
import {
  AvatarBtn,
  Button,
  // LogoutButton,
  SaveBtn,
} from 'components/UserButtons/UserButtons.styled.js';
import { updateUserSchema } from './updateUserSchema.js';
import { updateUser } from 'redux/auth/authOperations.js';

// import Logout from 'components/Header/Navigation/UserNav/Logout/Logout.jsx';

export const UserForm = () => {
  const { user } = useAuth();
  // const navigate = useNavigate();
  const dispatch = useDispatch();

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
    if (file && !values.avatar) {
      toast.error('Press confirm or cancel your new photo');
      return;
    }

    setIsFormEdit(false);
    const formData = new FormData();

    if (values.imgUrl) {
      formData.append('avatar', values.imgUrl);
    }

    if (values.name) {
      formData.append('name', values.name);
    }
    // переводимо дату у формат беку
    const rowDate = values.birthday;
    const newDate = `${rowDate.slice(8, rowDate.length)}-${rowDate.slice(
      5,
      7
    )}-${rowDate.slice(0, 4)}`;

    if (values.birthday) {
      formData.append('birthday', newDate);
    }

    if (values.phone) {
      formData.append('phone', values.phone);
    }
    if (values.city) {
      formData.append('city', values.city);
    }

    dispatch(updateUser(formData));
    toast.success('Changes saved successfully');
    // navigate(`/user`);
  };

  const handleClick = () => {
    setIsFormEdit(true);
  };

  const removeChanges = () => {
    setIsFormEdit(false);
    setFile(null);
    setIsAvatarEdit(false);
  };

  // >>>>>>============ дії з Аватаром ====================

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
    // setIsFormEdit(true);
    setIsAvatarEdit(false);
    console.log('Image saved:', values.imageUrl);
  };

  const handleRemove = () => {
    setImageURL('imageUrl', '');
    // setIsFormEdit(true);
    setIsAvatarEdit(false);
    console.log(`editing: ${isAvatarEdit}`);
    setFile(null);
  };
  // <<<<<<============= дії з Аватаром ====================
  return (
    <>
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
          <Div>
            <AvatarContainer>
              {isFormEdit ? (
                <AvatarBtn>
                  <input
                    type="file"
                    id="fileInput"
                    accept="image/*"
                    style={{ display: 'none' }}
                    name="file"
                    onChange={handleFileChange}
                  />

                  <AvatarLabel htmlFor="fileInput">
                    <CameraIcon1 />
                    Edit foto
                  </AvatarLabel>
                </AvatarBtn>
              ) : null}
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

                {isFormEdit && isAvatarEdit ? (
                  <AvatarBtn>
                    <button type="button" onClick={handleConfirm}>
                      <CheckIcon />
                      <span>Confirm</span>
                    </button>
                    <button type="button" onClick={handleRemove}>
                      <RemoveIcon />
                    </button>
                  </AvatarBtn>
                ) : null}
              </ImgWrapper>
            </AvatarContainer>
            <div>
              <InputWrap>
                <Label htmlFor="name">Name:</Label>
                <Input
                  id="name"
                  autoComplete="off"
                  name="name"
                  disabled={!isFormEdit}
                />
              </InputWrap>
              <ErrorMessage name="name" component={ErrorText} />

              <InputWrap>
                <Label htmlFor="email">Email:</Label>
                <Input
                  id="email"
                  autoComplete="off"
                  name="email"
                  disabled={true}
                />
              </InputWrap>
              <ErrorMessage name="email" component={ErrorText} />

              <InputWrap>
                <Label htmlFor="birthday">Birthday:</Label>
                <Input
                  id="birthday"
                  type="date"
                  autoComplete="off"
                  name="birthday"
                  placeholder="00.00.0000"
                  disabled={!isFormEdit}
                />
              </InputWrap>
              <ErrorMessage name="birthday" component={ErrorText} />

              <InputWrap>
                <Label htmlFor="phone">Phone:</Label>
                <Input
                  id="phone"
                  autoComplete="off"
                  name="phone"
                  placeholder="+380000000000"
                  disabled={!isFormEdit}
                />
              </InputWrap>
              <ErrorMessage name="phone" component={ErrorText} />

              <InputWrap>
                <Label htmlFor="city"> City:</Label>
                <Input
                  id="city"
                  autoComplete="off"
                  name="city"
                  placeholder="Kyiv"
                  disabled={!isFormEdit}
                />
              </InputWrap>
              <ErrorMessage name="city" component={ErrorText} />

              {!isFormEdit ? (
                <LogoutB />
              ) : (
                <SaveBtn type="submit">Save</SaveBtn>
              )}

              {/* <Logout /> */}
            </div>
          </Div>
        </Form>
      </Formik>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        closeOnClick
        pauseOnHover
      />
    </>
  );
};

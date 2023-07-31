import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
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
// import { formatPhoneNumber } from 'helpers/phoneInput.js';

// import Logout from 'components/Header/Navigation/UserNav/Logout/Logout.jsx';

export const UserForm = () => {
  // const [phoneNumber, setPhoneNumber] = useState('');

  const { user } = useAuth();
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  // Можливість редагування форми
  const [isFormEdit, setIsFormEdit] = useState(false);
  // console.log(`isFormEdit=${isFormEdit}`);

  // Можливість редагування аватар
  const [isAvatarEdit, setIsAvatarEdit] = useState(false);
  // console.log(`isAvatarEdit=${isAvatarEdit}`);
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

  // const newDefDate = () => {
  //     const reduxDate = user.birthday;
  //     console.log('reduxDate :>> ', reduxDate);
  //     if (reduxDate.length > 0) {
  //       console.log('user have birthday');
  //       return `${reduxDate.slice(
  //         6,
  //         reduxDate.length
  //       )}-${reduxDate.slice(3, 5)}-${reduxDate.slice(0, 2)}`;
  //       // console.log('newDefDate', newDefDate);
  //     } else {
  //       console.log('user don`t have birthday');
  //       const date = new Date();
  //       return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  //       // console.log('newDefDate', newDefDate);
  //     }
  //   }

    useEffect(() => {
    if (user === null) {
      return;
    }

    // const date = newDefDate();
    
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

  // сабміт форми------------------------
  const handleSubmit = values => {

    if (file && isAvatarEdit) {
      toast.error('Press confirm or cancel your new photo');
      return;
    }

    setIsFormEdit(false);
    const formData = new FormData();

    if (file) {
      // console.log('we have new avatar');
      formData.append('avatar', file);
    }

    if (values.name) {
      // console.log('name changed');
      formData.append('name', values.name);
    }
    // переводимо дату у формат беку

    if (values.birthday) {
      console.log('birthday changed');
      const rowDate = values.birthday;
      // console.log('rowDate :>> ', rowDate);
      const newDate = `${rowDate.slice(8, rowDate.length)}-${rowDate.slice(
        5,
        7
      )}-${rowDate.slice(0, 4)}`;
      // console.log('newDate :>> ', newDate);
      formData.append('birthday', newDate);
    }

    if (values.phone) {
      formData.append('phone', values.phone);
    }
    if (values.city) {
      formData.append('city', values.city);
    }

    console.log(formData.get('avatar'));
    dispatch(updateUser(formData));
    toast.success('Changes saved successfully');
    // navigate(`/user`);
    // after submit-----------------------
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
    console.log('file :>> ', file);
    if (file && file.size <= fileSize) {
      console.log('ok size');
      setFile(file);
      setImageURL(URL.createObjectURL(file));
      console.log('URL.createObjectURL(file) :>> ', URL.createObjectURL(file));

      setIsAvatarEdit(true);

      // console.log(`Is file: ${{ file }}`);
    } else {
      setIsAvatarEdit(false);
      setImageURL(user && user.avatarURL);
      toast.error('File size must be less than 3MB');
      console.log('No file');
      console.log(values);
    }
  };

  // avatars confirm
  const handleConfirm = () => {
    console.log('confirm avatar handle');
    setValues({ ...values, avatar: file });
    console.log('values after confirm', values);
    // setIsFormEdit(true);
    setIsAvatarEdit(false);
    console.log('Image saved:', values.avatarURL);
  };

  const handleRemove = () => {
    setImageURL('imageUrl', '');
    // setIsFormEdit(true);
    setIsAvatarEdit(false);
    console.log(`editing: ${isAvatarEdit}`);
    setFile(null);
  };
  // <<<<<<============= дії з Аватаром ====================
  // const handleInputChange = event => {
  //   const { name, value } = event.target;
  //   if (name === 'phone') {
  //     // Устанавливаем предзаполненное значение поля телефона
  //     const formattedValue = formatPhoneNumber(value);
  //     setValues({ ...values, phone: value });
  //     setPhoneNumber(formattedValue);
  //   }
  // };

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
                  // value={values.birthday}
                  // placeholder="00.00.0000"
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
                  placeholder="+380441234567"
                  disabled={!isFormEdit}
                  // value={phoneNumber} // Добавьте это свойство для предзаполнения поля телефона
                  // onChange={handleInputChange}
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

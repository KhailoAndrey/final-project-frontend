import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
import { Form, Formik, ErrorMessage } from 'formik';
import { useAuth } from 'redux/auth/selectors';
import {
  CameraIcon1,
  CheckIcon,
  CloseIcon,
  // EditFoto,
  EditIcon,
  LogoutUser,
  RemoveIcon,
} from 'components/UserButtons/UserButtons.jsx';
import { updateUserSchema } from './updateUserSchema.js';
import { updateUser } from 'redux/auth/authOperations.js';
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
  AvatarBtn,
  AvatarBtnNext,
  Button,
  // LogoutButton,
  SaveBtn,
} from 'components/UserButtons/UserButtons.styled.js';

export const UserForm = () => {
  // const [phoneNumber, setPhoneNumber] = useState('');
  const { t } = useTranslation();

  const { user } = useAuth();
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  // Можливість редагування форми
  const [isFormEdit, setIsFormEdit] = useState(false);
  // console.log(`isFormEdit=${isFormEdit}`);

  // Можливість редагування аватару
  const [isAvatarEdit, setIsAvatarEdit] = useState(false);
  // console.log(`isAvatarEdit=${isAvatarEdit}`);

  // Стани полів форми
  const [file, setFile] = useState(null);
  const [imageUrl, setImageURL] = useState(null);

  const [values, setValues] = useState({
    name: user && user.name ? user.name : '',
    email: user && user.email ? user.email : '',
    birthday:
      user.birthday.length > 0
        ? `${user.birthday.slice(
            6,
            user.birthday.length
          )}-${user.birthday.slice(3, 5)}-${user.birthday.slice(0, 2)}`
        : '',
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
      birthday: user
        ? `${user.birthday.slice(
            6,
            user.birthday.length
          )}-${user.birthday.slice(3, 5)}-${user.birthday.slice(0, 2)}`
        : '',
      phone: user ? user.phone : '',
      city: user ? user.city : '',
      avatar: values.avatar || '',
      avatarURL: user ? user.avatarURL : '',
    });
    // console.log("values", values)

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
      console.log('newDate :>> ', newDate);
      formData.append('birthday', newDate);
    }

    if (values.phone) {
      formData.append('phone', values.phone);
    }
    if (values.city) {
      formData.append('city', values.city);
    }

    // console.log(formData.get('avatar'));
    dispatch(updateUser(formData));
    toast.success('Changes saved successfully');

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
      // console.log('URL.createObjectURL(file) :>> ', URL.createObjectURL(file));

      setIsAvatarEdit(true);
    } else {
      setIsAvatarEdit(false);
      setImageURL(user && user.avatarURL);
      toast.error('File size must be less than 3MB');
      // console.log('No file');
      // console.log(values);
    }
  };

  // avatars confirm
  const handleConfirm = () => {
    console.log('confirm avatar handle');
    setValues({ ...values, avatar: file });
    // console.log('values after confirm', values);
    // setIsFormEdit(true);
    setIsAvatarEdit(false);
    // console.log('Image saved:', values.avatarURL);
  };

  const handleRemove = () => {
    setImageURL('imageUrl', '');
    // setIsFormEdit(true);
    setIsAvatarEdit(false);
    // console.log(`editing: ${isAvatarEdit}`);
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

                  <AvatarLabel htmlFor="fileInput">
                    <CameraIcon1 />
                    {t('edit_photo')}
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
                  <AvatarBtnNext>
                    <div onClick={handleConfirm}>
                      <CheckIcon />
                      {t('confirm')}
                    </div>

                    <div onClick={handleRemove}>
                      <RemoveIcon />
                    </div>
                  </AvatarBtnNext>
                ) : null}
              </ImgWrapper>
            </AvatarContainer>
            <div>
              <InputWrap>
                <Label htmlFor="name">{t('name')}:</Label>
                <Input
                  id="name"
                  autoComplete="off"
                  name="name"
                  disabled={!isFormEdit}
                />
              </InputWrap>
              <ErrorMessage name="name" component={ErrorText} />

              <InputWrap>
                <Label htmlFor="email">{t('email')}:</Label>
                <Input
                  id="email"
                  autoComplete="off"
                  name="email"
                  disabled={true}
                />
              </InputWrap>
              <ErrorMessage name="email" component={ErrorText} />

              <InputWrap>
                <Label htmlFor="birthday">{t('birthday')}:</Label>
                <Input
                  id="birthday"
                  type="date"
                  autoComplete="off"
                  name="birthday"
                  disabled={!isFormEdit}
                />
              </InputWrap>
              <ErrorMessage name="birthday" component={ErrorText} />

              <InputWrap>
                <Label htmlFor="phone">{t('phone')}:</Label>
                <Input
                  id="phone"
                  autoComplete="off"
                  name="phone"
                  placeholder="+380441234567"
                  disabled={!isFormEdit}
                />
              </InputWrap>
              <ErrorMessage name="phone" component={ErrorText} />

              <InputWrap>
                <Label htmlFor="city">{t('city')}:</Label>
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
                <LogoutUser />
              ) : (
                <SaveBtn type="submit">{t('save')}</SaveBtn>
              )}
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

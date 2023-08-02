import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Form, Formik, ErrorMessage } from 'formik';
import { useAuth } from 'redux/auth/selectors';
import { updateUser } from 'redux/auth/authOperations.js';
import { updateUserSchema } from './updateUserSchema.js';
import Notiflix from 'notiflix';

import {
  CameraIcon,
  CheckIcon,
  CloseIcon,
  EditIcon,
  LogoutUser,
  RemoveIcon,
} from 'components/UserButtons/UserButtons.jsx';

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
  ConfirmDiv,
  IconDiv,
  SaveBtn,
} from 'components/UserButtons/UserButtons.styled.js';

Notiflix.Notify.init({
  width: '280px',
  position: 'center-top',
  distance: '15px',
  timeout: 5000,
  opacity: 1,
  warning: {
    background: 'var(--main-clr-blue)',
    textColor: 'var(--main-accent-text-clr)',
    notiflixIconColor: 'var(--main-clr-yellow)',
  },
});

export const UserForm = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const dispatch = useDispatch();

  // Можливість редагування форми
  const [isFormEdit, setIsFormEdit] = useState(false);

  // Можливість редагування аватару
  const [isAvatarEdit, setIsAvatarEdit] = useState(false);

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

    setImageURL(file ? imageUrl : user.avatarURL);
  }, [user, file, imageUrl, values.avatar]);

  // ========= сабміт форми ==================
  const handleSubmit = values => {
    if (file && isAvatarEdit) {
      Notiflix.Notify.warning('Press confirm or cancel your new photo');
      return;
    }
    setIsFormEdit(false);

    const formData = new FormData();
    if (file) {
      formData.append('avatar', file);
    }
    if (values.name) {
      formData.append('name', values.name);
    }
    // ========= переводимо дату у формат беку ========
    if (values.birthday) {
      const rowDate = values.birthday;
      const newDate = `${rowDate.slice(8, rowDate.length)}-${rowDate.slice(
        5,
        7
      )}-${rowDate.slice(0, 4)}`;
      formData.append('birthday', newDate);
    }

    if (values.phone) {
      formData.append('phone', values.phone);
    }
    if (values.city) {
      formData.append('city', values.city);
    }

    dispatch(updateUser(formData));
    Notiflix.Notify.success('Changes saved successfully');
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
    // console.log('file :>> ', file);
    if (file && file.size <= fileSize) {
      setFile(file);
      setImageURL(URL.createObjectURL(file));
      setIsAvatarEdit(true);
    } else {
      setIsAvatarEdit(false);
      setImageURL(user && user.avatarURL);
      Notiflix.Notify.warning('File size must be less than 3MB');
    }
  };

  const handleConfirm = () => {
    setValues({ ...values, avatar: file });
    setIsAvatarEdit(false);
  };

  const handleRemove = () => {
    setImageURL('imageUrl', '');
    setIsAvatarEdit(false);

    setFile(null);
  };
  // <<<<<<============= дії з Аватаром ====================

  return (
    <>
      <Formik
        validationSchema={updateUserSchema}
        initialValues={values}
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
                    <CameraIcon />
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
                    <ConfirmDiv>
                      <IconDiv onClick={handleConfirm}>
                        <CheckIcon />
                      </IconDiv>
                      {t('confirm')}
                    </ConfirmDiv>
                    <IconDiv onClick={handleRemove}>
                      <RemoveIcon />
                    </IconDiv>
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
    </>
  );
};

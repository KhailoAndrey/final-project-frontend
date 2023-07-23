import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useDispatch } from 'react-redux';
import {
  Logout,
  CloseIcon,
  EditIcon,
  EditFoto,
} from '../Buttons/UserPageButtons/UserPageButtons';
// import {
//   updateUser,
//   deleteUsersAvatar,
//   updateUserAvatar,
// } from 'redux/auth/auth-operations';

// import { UserDataItem } from 'components/UserDataItem/UserDataItem';

// import { useAuth } from '../../hooks/useAuth';

import userPhotoDefault from '../../images/userPhotoDefault.png';

import {
  UserTitle,
  UserCard,
  ImgContainer,
  Img,
  ImgWrapper,
  DataWrapper,
  InputWrapper,
  InputFile,
} from './UserData.styled';
import { UserForm } from 'components/UserForm/UserForm';
import {
  Button,
  SaveBtn,
} from 'components/Buttons/UserPageButtons/UserPageButtons.styled';

const imageExtensions = ['jpg', 'jpeg', 'png', 'svg', 'gif', 'webp'];

export const UserData = () => {
  const [isEdit, setIsEdit] = useState(false);

  const handleSubmit = (values, actions) => {
    setIsEdit(false);
    console.log(values);
  };
  //   const dispatch = useDispatch();
  //   const {
  //     user: { email, name, birthday, phone, city, avatarURL },
  //   } = useAuth();

  const handleChangePhoto = async e => {
    const findExtension = e.currentTarget.value.split('.');
    const extension = findExtension[findExtension.length - 1];

    if (!imageExtensions.includes(extension)) {
      toast.error(
        'Avatar must be an image file with extention jpg, jpeg, png, svg, gif, webp'
      );
      return;
    }

    //     const imgFile = e.target.files[0];
    //     if (imgFile) {
    //       const value = new FormData();
    //       value.append('image', imgFile);
    //       await dispatch(updateUserAvatar({ value }));
    //     }
  };

  return (
    <>
      <UserTitle>My information:</UserTitle>
      <UserCard edit={isEdit}>
        <ImgContainer>
          {!isEdit ? (
            <Button
              type="button"
              onClick={() => {
                setIsEdit(true);
              }}
            >
              <EditIcon />
            </Button>
          ) : (
            <Button
              type="button"
              onClick={() => {
                setIsEdit(false);
              }}
            >
              <CloseIcon />
            </Button>
          )}
          <ImgWrapper>
            <Img alt="user photo" src={userPhotoDefault} />

            {/*{avatarURL && (
              <CloseBtnWrapper
                onClick={async () => {
                  await dispatch(deleteUsersAvatar());
                }}
              >
                <CloseShape alt="close" src={closeShape} />
              </CloseBtnWrapper>
            )} */}
          </ImgWrapper>

          {isEdit ? (
            <InputWrapper>
              <EditFoto />
              <InputFile type="file" onChange={handleChangePhoto} />
            </InputWrapper>
          ) : null}
        </ImgContainer>

        <DataWrapper>
          <UserForm
            field="name"
            initValue={{ name: '' }}
            disabled={isEdit}
          ></UserForm>
          <UserForm
            field="email"
            initValue={{ email: '' }}
            placeholder="name@mail.com"
          ></UserForm>
          <UserForm
            field="birthday"
            initValue={{ birthday: '00.00.0000' }}
            disabled={true}
          ></UserForm>
          <UserForm
            field="phone"
            initValue={{ phone: '+380000000000' }}
          ></UserForm>
          <UserForm
            field="city"
            initValue={{ city: 'Kyiv' }}

            // initValue={city ? { city } : { city: '' }}
            // setUser={async value => {
            //   console.log(value);
            //   if (value.city === city) {
            //     return;
            //   }
            //   await dispatch(updateUser({ city: value.city }));
            // }}
          ></UserForm>
          {!isEdit ? (
            <Logout />
          ) : (
            <SaveBtn type="submit" onClick={handleSubmit}>
              Save
            </SaveBtn>
          )}
        </DataWrapper>
      </UserCard>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        closeOnClick
        pauseOnHover
      />
    </>
  );
};

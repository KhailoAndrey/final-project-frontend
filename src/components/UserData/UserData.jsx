import { useEffect, useState } from 'react';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
// import { useDispatch } from 'react-redux';
// import {
//   Logout,
//   CloseIcon,
//   EditIcon,
//   EditFoto,
// } from '../Buttons/UserPageButtons/UserPageButtons';
// import {
//   updateUser,
//   deleteUsersAvatar,
//   updateUserAvatar,
// } from 'redux/auth/auth-operations';

// import { UserDataItem } from 'components/UserDataItem/UserDataItem';

// import { useAuth } from '../../hooks/useAuth';

import {
  UserTitle,
  UserCard,
  ImgContainer,
  Img,
  ImgWrapper,
  DataWrapper,
} from './UserData.styled';
import { UserForm } from 'components/UserForm/UserForm';
// import {
//   Button,
//   SaveBtn,
// } from 'components/Buttons/UserPageButtons/UserPageButtons.styled';
import userPhotoDefault from '../../images/userPhotoDefault.png';
export const UserData = () => {
  const [user, setUser] = useState(null);
  axios.defaults.baseURL =
    'https://final-project-backend-4o0r.onrender.com/api/';
  const getCurrentUser = async () => {
    try {
      const res = await axios(`/users/current`);
      const { user } = await res.data;
      setUser(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  // Початкове отримання даних користувача
  useEffect(() => {
    getCurrentUser();
  }, []);
  // Оновлення при зміні даних
  useEffect(() => {
    if (user === null) {
      return;
    }
  }, [user]);

  // const [isEdit, setIsEdit] = useState(false);

  //   const dispatch = useDispatch();
  //   const {
  //     user: { email, name, birthday, phone, city, avatarURL },
  //   } = useAuth();

  //     const imgFile = e.target.files[0];
  //     if (imgFile) {
  //       const value = new FormData();
  //       value.append('image', imgFile);
  //       await dispatch(updateUserAvatar({ value }));
  //     }

  return (
    <>
      {/* <UserTitle>My information:</UserTitle> */}
      <UserCard>
        <ImgContainer>
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
        </ImgContainer>

        <DataWrapper>
          <UserForm user={user} />
        </DataWrapper>
      </UserCard>
    </>
  );
};

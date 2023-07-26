import svg from '../../../images/Icons/symbol-defs.svg';
import {
  CameraIcon,
  // Edit,
  EditFotoBtn,
  LogoutBtn,
  LogoutIcon,
} from './UserPageButtons.styled';

export const Logout = () => {
  return (
    <>
      <LogoutBtn type="button" onClick={() => console.log('LogoutBtn')}>
        <LogoutIcon>
          <svg width={24} height={24}>
            <use href={`${svg}#icon-logout`} />
          </svg>
        </LogoutIcon>
        Log Out
      </LogoutBtn>
    </>
  );
};

export const EditFoto = () => {
  return (
    <>
      <EditFotoBtn>
        <CameraIcon>
          <svg width={24} height={24}>
            <use href={`${svg}#icon-camera`} />
          </svg>
        </CameraIcon>
        Edit foto
      </EditFotoBtn>
    </>
  );
};

export const LogoutIcon1 = () => {
  return (
    <svg width={24} height={24}>
      <use href={`${svg}#icon-logout`} />
    </svg>
  );
};

export const CameraIcon1 = () => {
  return (
    <svg width={24} height={24}>
      <use href={`${svg}#icon-camera`} />
    </svg>
  );
};

export const EditIcon = () => {
  return (
    <svg width={24} height={24}>
      <use href={`${svg}#icon-edit`} />
    </svg>
  );
};

export const CloseIcon = () => {
  return (
    <svg width={24} height={24}>
      <use href={`${svg}#icon-cross`} />
    </svg>
  );
};

export const CheckIcon = () => {
  return (
    <svg width={24} height={24}>
      <use href={`${svg}#icon-check`} />
    </svg>
  );
};

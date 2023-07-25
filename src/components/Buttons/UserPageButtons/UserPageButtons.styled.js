import styled from 'styled-components';
import { Field } from 'formik';

export const LogoutBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
  border: none;
  background-color: transparent;
  color: var(--main-form-clr);
  width: fit-content;
  margin-top: 25px;
  transition: transform var(--fast-animation);
  @media screen and (min-width: 768px) {
    margin-top: 3px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 23px;
  }
  &:focus,
  &:hover {
    transform: scale(1.2);
  }
`;

export const LogoutIcon = styled.div`
  padding-right: 12px;
`;

// export const Button = styled.button`
//   position: absolute;
//   border: none;
//   background-color: transparent;
//   top: 200px;
//   right: 14px;
//   transition: transform var(--fast-animation);

//   &:focus,
//   &:hover {
//     transform: scale(1.3);
//   }
// `;

export const SaveBtn = styled.button`
  border: none;
  background-color: var(--main-clr-blue);
  margin-top: 21px;
  transition: background-color var(--fast-animation);
  @media screen and (min-width: 768px) {
    margin-top: 15px;
  }

  &:focus,
  &:hover {
    background-color: var(--main-clr-gr_blue);
  }
`;

export const EditFotoBtn = styled.button`
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  padding: 0;
  border: none;
  background-color: transparent;
  color: var(--main-form-clr);
  width: fit-content;

  &:focus,
  &:hover {
    transform: scale(1.2);
  }
`;

export const CameraIcon = styled.div`
  padding-right: 12px;
`;

import styled from 'styled-components';

export const AvatarBtn = styled.div`
  position: absolute;
  top: 216px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  cursor: pointer;
  transition: transform var(--fast-animation);

  @media screen and (min-width: 768px) {
    bottom: 28px;
  }

  @media screen and (min-width: 1280px) {
    top: 216;
  }
  &:focus,
  &:hover {
    transform: scale(1.1);
  }
`;

export const AvatarBtnNext = styled.div`
  position: absolute;
  top: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  cursor: pointer;
  align-self: center;

  @media screen and (min-width: 768px) {
    bottom: 28px;
  }

  @media screen and (min-width: 1280px) {
    top: 216;
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 28px;
  height: 28px;
  background-color: transparent;
  padding: 0;
  border: none;

  transition: transform var(--fast-animation);
  &:hover,
  :focus {
    transform: scale(1.2);
  }
  @media screen and (min-width: 768px) {
    top: 18px;
    right: 18px;
  }
`;

export const ConfirmDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform var(--fast-animation);

  &:focus,
  &:hover {
    transform: scale(1.1);
  }
`;

export const IconDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 8px;
  transition: transform var(--fast-animation);

  &:focus,
  &:hover {
    transform: scale(1.2);
  }
`;

export const SaveBtn = styled.button`
  width: 248px;
  height: 34px;
  margin: 0 auto;
  display: block;
  text-align: center;
  padding-top: 6px;
  padding-bottom: 6px;
  border: 0;
  outline: 0;
  padding-left: auto;
  padding-right: auto;
  border-radius: 40px;
  border-color: transparent;
  font-size: 16px;
  color: var(--white-bckg-clr);
  background-color: var(--main-clr-blue);
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    margin-right: 0px;
    padding-top: 5px;
    padding-bottom: 5px;
    width: 240px;
  }

  :hover,
  :focus {
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
  }
`;

export const LogoutButton = styled.button`
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 0;
  border: none;
  background-color: transparent;
  color: var(--main-form-clr);
  width: fit-content;
  margin-top: 25px;
  transition: transform var(--fast-animation);
  @media screen and (min-width: 768px) {
    margin-top: 15px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 23px;
  }
  &:focus,
  &:hover {
    transform: scale(1.1);
  }
`;

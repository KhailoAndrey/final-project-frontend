import styled from 'styled-components';

export const UserInfo = styled.div`
  position: relative;
  width: 280px;
  border-radius: 20px;
  margin-top: 18px;

  @media screen and (min-width: 768px) {
    width: 704px;
    margin-top: 24px;
  }

  @media screen and (min-width: 1280px) {
    width: 395px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  width: 280px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 704px;
    margin-top: 0;
  }

  @media screen and (min-width: 1280px) {
    width: 821px;
  }
`;

export const ProfileTitle = styled.h2`
  font-family: Manrope;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.8px;

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`;

export const UserContainer = styled.div`
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 0;
  }
`;

export const PetsContainer = styled.div`
  width: 280px;
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    width: 704px;
  }

  @media screen and (min-width: 1280px) {
    width: 821px;
    margin-top: 0;
    margin-bottom: 24px;
  }
`;

export const UserPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin: 0 auto 68px auto;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    gap: 32px;
    margin-top: 62px;
    align-items: flex-start;
  }
`;

export const UserLoaderDiv = styled.div`
  z-index: 1;
  position: fixed;
  top: 30%;
  left: 30%;
`;

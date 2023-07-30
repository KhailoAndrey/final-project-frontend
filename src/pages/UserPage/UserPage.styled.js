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

export const Container = styled.div`
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
    margin-bottom: 24px;
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
  margin-top: 40px;

  @media screen and (min-width: 1280px) {
    margin-top: 0;
  }
`;

export const UserPageContainer = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
    gap: 32px;
    margin-top: 62px;
    justify-content: center;
  }
`;

// ===============================
// Нижче видалити?
export const PetsInfo = styled.div`
  width: 280px;
  height: 517px;
  /* border-radius: 20px;
  background-color: lightseagreen; */
  margin-top: 31px;

  @media screen and (min-width: 768px) {
    width: 704px;
    /* height: 268px; */
    margin-top: 24px;
  }

  @media screen and (min-width: 1280px) {
    width: 821px;
    height: 520px;
    margin-top: 24px;
  }
`;

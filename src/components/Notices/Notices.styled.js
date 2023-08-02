import styled from 'styled-components';

export const NoticeNavContainer = styled.div`
  display: flex;
  width: 280px;
  justify-content: space-between;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  flex-wrap: wrap;
  position: relative;

  @media screen and (min-width: 768px) {
    width: 704px;
    margin-top: 40px;
  }

  @media screen and (min-width: 1280px) {
    width: 1248px;
  }
`;

export const ContainerTablet = styled.div`
  @media screen and (min-width: 768px) {
    background-color: red;
  }
`;
export const BtnContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const NoNotice = styled.div`
  width: 320px;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    width: 704px;
  }

  @media screen and (min-width: 1280px) {
    width: 1248px;
  }
`;

export const LoaderDiv = styled.div`
  z-index: 1;
  position: fixed;
  top: 40%;
  left: 40%;
`;

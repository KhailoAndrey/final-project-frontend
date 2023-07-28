import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  z-index: 200;
  width: 100vw;
  height: 100vh;
  background: rgba(97, 97, 97, 0.6);
  backdrop-filter: blur(4px);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ModalContent = styled.div`
  z-index: 200;
  width: 280px;
  border-radius: 20px;
  background-color: #fff;
  padding: 60px 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media screen and (min-width: 768px) {
    width: 608px;
    padding: 60px 40px;
  }
`;

export const ModalBtn = styled.button`
  position: absolute;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  background-color: #fff;
  top: 16px;
  right: 16px;

  &:hover,
  &:focus {
    svg {
      stroke: var(--main-clr-yellow);
    }
  }
`;

export const ModalTitle = styled.p`
  font-family: Manrope;
  font-size: 24px;
  font-weight: 500;

  @media screen and (min-width: 768px) {
    font-size: 36px;
  }
`;

export const ModalText = styled.p`
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    margin-top: 40px;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
  }
`;

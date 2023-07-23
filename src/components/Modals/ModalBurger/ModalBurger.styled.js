import styled from "styled-components";

export const ModalBackdrop = styled.div`
  width: 100vw;
  height: 100vh;
  background: var(--modal-backdrop);
  backdrop-filter: blur(4px);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ModalContent = styled.div`
  width: 280px;
  border-radius: 20px;
  background-color: var(--btn-clr-fon);
  padding: 22px 20px 40px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media screen and (min-width: 768px) {
    width: 608px;
    padding: 24px 32px;
  }
`;

export const ModalHeader = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`

export const ModalBtn = styled.button`
  border: 0;
  text-decoration: none;
  cursor: pointer;
  background-color: var(--btn-clr-fon);
  top: 16px;
  right: 16px;
  stroke: var(--main-clr-yellow);
  &:hover {
      stroke: var(--main-clr-blue);
}
`;

export const UserBlock = styled.div`
margin-top: 40px;
margin-bottom: 84px;
padding: 8px 16px;
`

export const BtnContainer = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
  margin: 40px auto;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
  }
`;
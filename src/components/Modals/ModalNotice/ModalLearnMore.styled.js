import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(97, 97, 97, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 100;
`;

export const ModalWindow = styled.div`
  overflow: auto;
  position: relative;
  height: auto;
  max-height: calc(100vh - 40px);
  background-color: var(--white-bckg-clr);
  width: 280px;
  padding: 20px;
  border-radius: 20px;
  
  @media (min-width: 768px) {
    border-radius: 40px;
    width: 680px;
    padding: 32px;
    min-height: 540px;
  }
`;

export const Info = styled.div`
  height: auto;
  display: flex;
  align-items: flex-start;
  gap: 24px;

  @media (max-width: 767px) {
    margin-top: 44px;
    flex-direction: column;
    gap: 12px;
    height: auto;
  }
`;

export const Contact = styled.div`
  display: flex;
  position: relative;  
  align-items: center;
  gap: 10px;
  
  font-size: 16px;
  line-height: 22px;

  @media (max-width: 767px) {
    font-size: 12px;
    line-height: 16px;
  }
`;
export const Description = styled.div`
  width: 240px;

  font-family: 'Manrope';
  font-weight: 700;
  font-size: 28px;
  line-height: 1.357;
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Contactheader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 5px;
  
  font-weight: 600;
`;

export const ContactContent = styled.div`
  display: flex;
  /* position: absolute;
  right: 0;
  top: 0; */
  flex-direction: column;
  align-items: left;
  gap: 5px;
`;

export const Comment = styled.div`
  padding-top: 28px;
  padding-bottom: 70px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;

  @media (max-width: 767px) {
    font-size: 14px;
    font-weight: 600;
    line-height: 1.375;
    padding-top: 12px;
    padding-bottom: 12px;
  }
`;

export const ContactButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 17px;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const ContactButtonAdd = styled.button`
  /* min-width: 129px; */
  padding: 6px 20px;
  color: var(--btn-clr-fon);
  background-color: var(--main-clr-blue);
  border-radius: 40px;
  border: none;

  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  & svg {
    stroke: currentColor;
    fill: none;
  }

  :hover,
  :focus {
    background: var(--main-clr-gr_blue);
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const ContactButtonContact = styled.button`
  /* min-width: 129px; */
  padding: 8px 20px;
  background-color: var(--btn-clr-fon);
  color: var(--main-clr-blue);
  border-radius: 40px;
  border: 1px solid var(--main-clr-blue);
  :hover,
  :focus {
    background: var(--main-clr-gr_blue);
    color: var(--white-bckg-clr);
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;
export const Image = styled.div`
  position: relative;
  width: 262px;
  height: 298px;
  border-radius: 0 0 40px 40px;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;

  @media (max-width: 767px) {
    width: 240px;
    height: 240px;
  }
`;

export const Category = styled.div`
  position: absolute;
  left: 0;
  top: 16px;

  width: 126px;
  height: 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 500;
  font-size: 14px;
  line-height: 19px;

  background-color: var(--main-clr-blue-light);
  border-radius: 0 16px 16px 0;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 28px;
  right: 31px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--white-bckg-clr);
  color: var(--main-clr-blue);
  border: none;
  stroke: currentColor;

  &:hover {
    stroke: var(--main-clr-yellow);
  }

  @media (max-width: 767px) {
    top: 17px;
    right: 17px;
  }
`;

export const LinkEmail = styled.a`
text-decoration: none;
color: inherit;
&:hover {
    color: var(--main-clr-yellow);
    scale: 1.1;
  }
`
export const LinkPhone = styled.a`
text-decoration: none;
color: inherit;
&:hover {
  color: var(--main-clr-yellow);
  scale: 1.1;
  }
`

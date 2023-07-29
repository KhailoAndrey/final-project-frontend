import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(39, 39, 39, 0.6);
  overflow: hidden;
  z-index: 100;
`;

export const ModalWindow = styled.div`
  position: relative;
  width: 280px;
  height: 287px;
  padding: 68px 16px 60px;
  background-color: #fff;
  box-shadow: 3px 8px 14px 0px var( --small-shadow);
  border-radius: 20px;

  @media screen and (min-width: 320px) {
    width: 280px;
  }
  @media screen and (min-width: 768px) {
    padding: 60px 129px;
    width: 608px;
    height: 354px;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const BtnClose = styled.button`
  position: absolute;
  right: 16px;
  top: 16px;
  width: 24px;
  height: 24px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  stroke: var(--main-clr-blue);
  &:hover {
    stroke: var(--main-clr-yellow);
  }

  @media screen and (min-width: 768px) {
    right: 24px;
    top: 24px;
  }
`;

export const BtnDelete = styled.button`
  width: 100%;
  height: 40px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  background-color: ${(props) => (props.isHovered ? 'var(--btn-clr-fon)' : 'var(--main-clr-blue)')};
  color: ${(props) => (props.isHovered ? 'var(--main-clr-blue)' : 'var(--btn-clr-fon)')};

  
  border-radius: 40px;
  border: 2px solid var(--main-clr-blue);
  font-family: inherit;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.36;
  letter-spacing: 0.04em;
  stroke: #fff;

  &:hover {
    background-color: ${(props) => (props.isHovered ? 'var(--main-clr-blue)' : 'var(--btn-clr-fon)')};
    color: ${(props) => (props.isHovered ? 'var(--btn-clr-fon)' : 'var(--main-clr-blue)')};
    stroke: var(--main-clr-blue);
  }

  @media screen and (min-width: 768px) {
    width: 248px;
  }
`;

export const TitleDelete = styled.h2`
  margin-bottom: 24px;
  text-align: center;
  font-weight: 7 00;
  font-size: 24px;
  line-height: 1.36;
  color: var(--main-accent-text-clr);

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 28px;
    line-height: 1.36;
  }
`;

export const TextDelete = styled.p`
  margin-bottom: 40px;
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.375;
  color: var(--main-accent-text-clr);

  @media screen and (min-width: 768px) {
    margin-bottom: 48px;
    font-size: 16px;
   
  }
`;

export const QuestioBtnWrap = styled.div`
margin-bottom: 60px;
display: flex;
gap: 17px;
`
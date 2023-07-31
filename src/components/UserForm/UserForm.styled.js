import styled from 'styled-components';
import { Field } from 'formik';

export const InputWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  justify-content: space-between;
  position: relative;
  width: 264px;

  @media screen and (min-width: 768px) {
    width: 355px;
    height: 32px;
  }
  @media screen and (min-width: 1280px) {
    width: 100%;
  }
`;

export const Input = styled(Field)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 4px 12px;
  height: 32px;
  border: 1px solid #54adff;
  border-radius: 20px;
  width: 175px;

  @media screen and (min-width: 768px) {
    min-width: 240px;
  }

  &:focus,
  &:hover {
    box-shadow: 2px 2px 4px #456a8e84;
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  font-size: 14px;
  line-height: 19.2px;
  letter-spacing: 4%;

  @media screen and (min-width: 768px) {
    font-weight: 600;
    font-size: 18px;
    line-height: calc(25 / 18);
  }
`;

export const ErrorText = styled.p`
  color: var(--form-error-red);
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    gap: 71px;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: column;
    gap: 0px;
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImgWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 182px;
  height: 182px;
  border-radius: 40px;

  margin-bottom: 60px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 64px;
  }
`;

export const PhotoWrapper = styled.div`
  width: 182px;
  height: 182px;
  border-radius: 40px;
  background-color: var(--main-bckg-clr);

  overflow: hidden;

  display: block;
  justify-content: center;
`;

export const AvatarLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
`;

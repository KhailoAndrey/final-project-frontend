import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit';

export const FormContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;

  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  width: 280px;

  border-radius: 40px;
  background-color:  var(--white-bckg-clr);

  box-shadow: 7px 4px 14px rgba(136, 198, 253, 0.19);

  padding: 60px 75px;
  @media screen and (min-width: 768px) {
    width: 608px;
    margin-top: 60px;
  }
`;

export const FormInput = styled.input`
  box-sizing: border-box;
  outline: none;
  display: flex;
  margin-bottom: 14px;
  width: 256px;
  padding: 12px 16px;
  border: 1px  var( --main-clr-blue) solid;
  border-radius: 40px;
  @media screen and (min-width: 768px) {
    width: 458px;
    margin-bottom: 32px;
  }
  &::placeholder {
    font-family: Manrope, sans-serif;
    font-weight: 400;

    line-height: 24px;
    font-size: 16px;
  }
  &.input-error {
    border-color: red;
  }
  &.input-success {
    border-color: green;
  }
`;

export const FormHeader = styled.h2`
  font-family: Manrope, sans-serif;
  font-weight: 500;
  margin-bottom: 20px;
  line-height: 24px;
  letter-spacing: 0.04em;
  font-size: 32.78px;
  @media screen and (min-width: 768px) {
    line-height: 49px;
    font-size: 36px;
    margin-bottom: 40px;
  }
`;

export const FormText = styled.p`
  text-align: center;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.04em;
  color:  var( --main-form-clr);
`;

export const FormLink = styled(Link)`
  display: inline-block;
  margin-left: 2px;

  color: var( --main-clr-blue);
`;

export const FormButton = styled.button`
  width: 100%;
  margin-top: 94px;
  margin-bottom: 8px;
  padding: 10.5px 100px;
  border-radius: 40px;
  line-height: 27px;
  letter-spacing: 0.04em;
  font-size: 20px;
  color: var(--white-bckg-clr);
  background-color: var( --main-clr-blue);
  border: transparent;
  @media screen and (min-width: 768px) {
    margin-top: 32px;
    margin-bottom: 20px;
  }
`;

export const PasswordDiv = styled.div`
  position: relative;
`;


export const EmailDiv = styled.div`
  position: relative;
`;

export const FormErrorPassword= styled.p`
position: absolute;
font-size: 12px;
color: var( --red-form-clr);
top:44px;
left:16px;
`;
export const FormErrorEmail= styled.p`
font-size: 12px;
position: absolute;
color: var( --red-form-clr);
top:44px;
left:16px;
`;

export const FormSuccessPassword= styled.p`
font-size: 12px;
position: absolute;
color:var( --green-form-clr);
top:44px;
left:16px;
`;

export const FormEye = styled(Icon)`
  position: absolute;
  top: 12px;
  right: 16px;
  color: var( --main-clr-blue);
`;



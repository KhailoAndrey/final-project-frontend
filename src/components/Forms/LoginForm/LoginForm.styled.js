import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';


export const FormContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
margin-bottom: 80px;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  width: 280px;

  border-radius: 20px;
  background-color: var(--white-bckg-clr);

  box-shadow: 7px 4px 14px var(--small-shadow);

  padding: 40px 12px;
  @media screen and (min-width: 768px) {
    width: 608px;
    margin-top: 80px;
    margin-bottom: 100px;

    padding: 60px 75px;
    border-radius: 40px;
  }  
  `;

export const GoogleIcon = styled(FcGoogle)`
display: block;
width: 36px;
height: 36px;
&:hover{
  transform: scale(1.3);
}
`

export const GoogleAuth = styled.a`
display: flex;
gap: 8px;
  font-family: Manrope, sans-serif;
  text-decoration: none;
  font-weight: 400;
  line-height: normal;
  font-style: normal;
  letter-spacing: 0.8px;
  font-size: 16px;
  color: var(--white-bckg-clr);
  background-color: var(--main-clr-blue);
  border: transparent;
  margin-bottom: 8px;
  padding: 10px 28px;
  border-radius: 40px;
  text-align: left;
  align-items: center;
  :hover {
    background: var(--main-clr-gr_blue);
    &:hover {
    ${GoogleIcon} {
      transform: scale(1.3); 
    }
  }
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
  }

  @media screen and (min-width: 1280px) {
  }
`

export const FormInputEmail = styled.input`
  box-sizing: border-box;
  outline: none;
  display: flex;
  margin-bottom: 14px;
  width: 256px;
  line-height: 1.4;
  padding: 12px 60px 12px 16px;
  border: 1px var(--main-clr-blue) solid;
  border-radius: 40px;

  @media screen and (min-width: 768px) {
    width: 458px;
    margin-bottom: 32px;
  }
  &::placeholder {
    font-family: Manrope, sans-serif;
    font-weight: 400;
    letter-spacing: 0.64px;
    font-size: 16px;
  }
  &.input-error {
    border-color: var(--red-form-clr);
  }
  &.input-success {
    border-color: var(--green-form-clr);
  }
  :-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px white inset;
    box-shadow: 0 0 0 1000px white inset;
  }
`;

export const FormInput = styled.input`
  box-sizing: border-box;
  outline: none;
  display: flex;
  margin-bottom: 14px;
  width: 256px;
  line-height: 1.4;
  padding: 12px 85px 12px 16px;
  border: 1px var(--main-clr-blue) solid;
  border-radius: 40px;

  @media screen and (min-width: 768px) {
    width: 458px;
    margin-bottom: 32px;
  }
  &::placeholder {
    font-family: Manrope, sans-serif;
    font-weight: 400;
    letter-spacing: 0.64px;
    font-size: 16px;
  }
  &.input-error {
    border-color: var(--red-form-clr);
  }
  &.input-success {
    border-color: var(--green-form-clr);
  }
  :-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px white inset;
    box-shadow: 0 0 0 1000px white inset;
  }
`;

export const FormHeader = styled.h2`
  font-family: Manrope, sans-serif;
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 24px;
  text-align: center;
  line-height: normal;
  font-style: normal;

  color: var(--main-accent-text-clr);

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 36px;
    letter-spacing: 1.44px;
  }
`;

export const FormText = styled.p`
  text-align: center;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.04em;
  color: var(--main-form-clr);
`;

export const FormLink = styled(Link)`
  display: inline-block;
  margin-left: 2px;

  color: var(--main-clr-blue);
`;

export const FormButton = styled.button`
  font-family: Manrope, sans-serif;
  width: 100%;
  font-weight: 600;
  line-height: normal;
  font-style: normal;
  letter-spacing: 0.8px;
  font-size: 20px;
  color: var(--white-bckg-clr);
  background-color: var(--main-clr-blue);
  border: transparent;
  margin-top: 40px;
  margin-bottom: 8px;
  padding: 10px 28px;
  border-radius: 40px;

  :hover,
  :focus {
    background: var(--main-clr-gr_blue);
  }

  @media screen and (min-width: 768px) {
    margin-top: 52px;
    margin-bottom: 16px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 40px;
  }
`;

export const PasswordDiv = styled.div`
  position: relative;
`;

export const EmailDiv = styled.div`
  position: relative;
`;

export const FormErrorPassword = styled.p`
  position: absolute;
  font-size: 8px;
  color: var(--red-form-clr);
  top: 48px;
  left: 16px;

  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`;

export const FormErrorEmail = styled.p`
  font-size: 8px;
  position: absolute;
  color: var(--red-form-clr);
  top: 48px;
  left: 16px;

  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`;

export const FormSuccessPassword = styled.p`
  font-size: 8px;
  position: absolute;
  color: var(--green-form-clr);
  top: 48px;
  left: 16px;

  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`;

export const IconsContainer = styled.div`
  position: absolute;
  display: flex;
 
  gap: 12px;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
`;

export const EmailIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);

`;

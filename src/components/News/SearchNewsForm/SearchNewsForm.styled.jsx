import styled from 'styled-components';

export const FormSearch = styled.form`
  position: relative;
  width: 280px;
  margin-bottom: 44px;
  margin-right: auto;
  margin-left: auto;
  @media screen and (min-width: 768px) {
    margin-bottom: 62px;
    width: 492px;
  }
  @media screen and (min-width: 1024px) {
    width: 608px;
  }
`;

export const InputSearch = styled.input`
  box-shadow: rgba(136, 198, 253, 0.19) 3px 8px 14px;
  width: 100%;
  height: 44px;
  border-radius: 40px;
  border: 1px solid transparent;
  padding: 8px 20px;
  box-sizing: border-box;
  outline: none;
  &::placeholder {
    font-size: 14px;
  }
  @media screen and (min-width: 768px) {
    width: 492px;
  }
  @media screen and (min-width: 1024px) {
    width: 608px;
    &:: placeholder {
      font-size: 20px;
    }
  }
`;

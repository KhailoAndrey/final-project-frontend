import styled from 'styled-components';
import { Field } from 'formik';

export const InputLabel = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  font-weight: 500;

  font-size: 14px;
  line-height: 1.36;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 1.3;
  }
`;

export const Input = styled(Field)`
  padding: 8px 16px;
  width: 264px;
  height: 40px;
  margin-top: 4px;

  font-size: 14px;
  line-height: 1.5;
  border-radius: 40px;
  outline: transparent;

  border: 1px solid;
  border-color: ${props => (props['data-invalid'] ? `#F43F5E` : `#54ADFF`)};

  @media screen and (min-width: 768px) {
    width: 395px;
    height: 48px;
    padding: 12px 16px;
    margin-top: 8px;
    font-size: 16px;
  }

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5;
    color: #888888;
  }
`;

export const ErrWrapper = styled.span`
  position: absolute;
  bottom: -20px;
  padding-left: 16px;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.35;
  color: #f43f5e;
`;

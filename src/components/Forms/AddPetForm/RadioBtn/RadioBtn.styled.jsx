import styled from 'styled-components';
import { Field } from 'formik';

export const InputLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  box-shadow: 3px 8px 14px 0px var(--small-shadow);
  padding: ${props => {
    if (props.name === 'category') {
      return '8px 16px';
    }
  }};

  font-weight: 500;
  font-size: ${props => {
    if (props.name === 'category') {
      return '14px';
    } else {
      return '16px';
    }
  }};

  line-height: 1.35;
  letter-spacing: 0.04em;

  color: ${props => {
    if (props.name === 'category') {
      return props.selected ? `var(--btn-clr-fon)` : `var(--main-clr-blue)`;
    } else {
      return props.selected ? `var(--menu-clr-green)` : `var(--main-form-clr)`;
    }
  }};

  background: ${props => {
    if (props.name === 'category') {
      return props.selected
        ? `var(--main-clr-blue)`
        : `var(--main-clr-blue-light)`;
    }
  }};

  border-radius: ${props => {
    if (props.name === 'category') {
      return '40px';
    }
  }};

  &:hover {
    box-shadow: 3px 8px 14px 0px var(--big-shadow);
  }

  cursor: pointer;
`;

export const RadioInput = styled(Field)`
  display: none;
`;

import styled from 'styled-components';
import { Field } from 'formik';

export const InputLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
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
      return props.selected
        ? props.theme.colors.whity
        : props.theme.colors.blue;
    } else {
      return props.selected
        ? props.theme.colors.green
        : props.theme.colors.grey;
    }
  }};
  background: ${props => {
    if (props.name === 'category') {
      return props.selected
        ? props.theme.colors.blue
        : props.theme.colors.blueLight;
    }
  }};
  border-radius: ${props => {
    if (props.name === 'category') {
      return '40px';
    }
  }};

  cursor: pointer;
`;

export const RadioInput = styled(Field)`
  display: none;
`;

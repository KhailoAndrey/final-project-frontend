import styled from 'styled-components';

export const Stage = styled.span`
  font-size: 10px;
  line-height: 14px;
  color: ${props => {
    if (props.stage < props.datastage) {
      return `var(--main-form-clr)`;
    } else if (props.stage === props.datastage) {
      return `var(--main-clr-blue)`;
    } else {
      return `var(--menu-clr-green)`;
    }
  }};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 26px;
  }
`;

export const Indicator = styled.span`
  width: 80px;
  height: 8px;
  background: ${props => {
    if (props.stage < props.datastage) {
      return `var(--main-clr-blue-light)`;
    } else if (props.stage === props.datastage) {
      return `var(--main-clr-blue)`;
    } else {
      return `var(--menu-clr-green)`;
    }
  }};
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    width: 120px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  font-weight: 500;
  gap: 12px;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    gap: 16px;

    justify-content: ${props =>
      props['data-category'] !== 'your pet' ? 'center' : 'left'};
  }
`;

export const StageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

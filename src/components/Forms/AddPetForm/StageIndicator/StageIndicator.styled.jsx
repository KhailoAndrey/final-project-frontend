import styled from 'styled-components';

export const Stage = styled.span`
  font-size: 10px;
  line-height: 14px;
  color: ${props => {
    if (props.stage < props.datastage) {
      return props.theme.colors.grey;
    } else if (props.stage === props.datastage) {
      return props.theme.colors.blue;
    } else {
      return props.theme.colors.green;
    }
  }};

  @media screen and (${props => props.theme.media.md}) {
    font-size: 16px;
    line-height: 26px;
  }
`;

export const Indicator = styled.span`
  width: 80px;
  height: 8px;
  background: ${props => {
    if (props.stage < props.datastage) {
      return props.theme.colors.blueLight;
    } else if (props.stage === props.datastage) {
      return props.theme.colors.blue;
    } else {
      return props.theme.colors.green;
    }
  }};
  border-radius: 8px;

  @media screen and (${props => props.theme.media.md}) {
    width: 120px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  font-weight: ${props => props.theme.fontWeights.medium};
  gap: 12px;
  margin-bottom: 16px;

  @media screen and (${props => props.theme.media.md}) {
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

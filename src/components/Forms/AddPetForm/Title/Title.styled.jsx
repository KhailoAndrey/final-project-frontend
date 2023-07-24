import styled from 'styled-components';

export const AddPetTitle = styled.h2`
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: 20px;
  line-height: 1.35;
  color: ${props => props.theme.colors.dark};
  padding-left: 16px;
  margin-bottom: 24px;

  @media screen and (${props => props.theme.media.md}) {
    font-size: 28px;

    text-align: ${props =>
      props['data-category'] !== 'your pet' && props['data-stage'] !== 1
        ? 'center'
        : 'left'};
  }
`;

import styled from 'styled-components';

export const AddPetTitle = styled.h2`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
  color: #111111;
  padding-left: 16px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 28px;

    text-align: ${props =>
      props['data-category'] !== 'your pet' && props['data-stage'] !== 1
        ? 'center'
        : 'left'};
  }
`;

import styled from 'styled-components';

export const OFWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 68px;

  @media screen and (min-width: 768px) {
    gap: 32px;
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
  }
`;

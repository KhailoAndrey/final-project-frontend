import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 28px;

  @media screen and (min-width: 768px) {
    height: 44px;
  }

  @media screen and (min-width: 1280px) {
    height: 48px;
  }
`;

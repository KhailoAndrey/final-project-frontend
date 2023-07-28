import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  padding: 0 20px;
  background-color: var(--main-bckg-clr);

  @media screen and (min-width: 768px) {
    height: 68px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1280px) {
    padding: 0 16px;
  }
`;

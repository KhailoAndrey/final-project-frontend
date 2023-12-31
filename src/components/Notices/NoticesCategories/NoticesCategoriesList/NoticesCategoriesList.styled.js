import styled from 'styled-components';

export const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 24px;
  margin-bottom: 68px;

  @media screen and (min-width: 768px) {
    width: 704px;
    flex-direction: row;
    justify-content: space-around;

    flex-wrap: wrap;
    gap: 32px;
    margin-top: 40px;
  }

  @media screen and (min-width: 1280px) {
    width: 1248px;
  }
`;

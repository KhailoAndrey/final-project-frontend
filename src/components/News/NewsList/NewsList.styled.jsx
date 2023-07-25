import styled from 'styled-components';

export const List = styled.ul`
  margin: 0 auto;
  display: grid;
  row-gap: 42px;
  width: 100%;

  @media screen and (max-width: 767px) {
    width: 280px;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    column-gap: 24px;
  
`;

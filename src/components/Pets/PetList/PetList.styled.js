import styled from 'styled-components';

export const List = styled.ul`
  width: 280px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 24px;

  @media (min-width: 768px) {
    gap: 24px;
    width: 100%;
  }

  @media screen and (min-width: 1280px) {
    // max-height: 520px;
    /*overflow: auto; */
    /* background-color: aqua; */
  }
`;

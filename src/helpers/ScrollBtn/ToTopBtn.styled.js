import styled from 'styled-components';

export const ScrollBtn = styled.button`
  position: fixed;
  bottom: 50px;
  right: 20px;
  width: 50px;
  height: 50px;
  border: 2px dashed var(--main-clr-yellow);
  outline: 0;
  border-radius: 50%;
  color: var(--main-clr-yellow);
  background-color: transparent;
  &:hover {
    background-color: var(--main-bckg-clr);
  }
`;

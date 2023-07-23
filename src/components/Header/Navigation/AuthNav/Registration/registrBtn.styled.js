import styled from 'styled-components';

export const ButtonReg = styled.button`
  border-radius: 40px;
  border: 2px solid var(--main-clr-yellow);
  background: var(--btn-clr-fon);
  width: 165px;
  height: 40px;
  padding: 8px 20px;
  color: var(--main-clr-yellow);
  font-family: Manrope;
  font-size: 16px;
  font-weight: 600;
  transition: all var(--default-animation);

  &:hover {
    background: var(--main-clr-yellow);
    color: var(--btn-clr-fon);
    transform: transition;
  }
`;

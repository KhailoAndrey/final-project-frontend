import styled from 'styled-components';

export const ButtonLog = styled.button`
  border-radius: 40px;
  border: 2px solid var(--main-clr-yellow);
  background: var(--main-clr-yellow);
  display: flex;
  width: 165px;
  height: 40px;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: var(--btn-clr-fon);
  font-family: Manrope;
  font-size: 16px;
  font-weight: 700;
  transition: all var(--default-animation);
  svg {
    fill: var(--btn-clr-fon);
  }
  &:hover {
    background: var(--main-bckg-clr);
    color: var(--main-clr-yellow);
    svg {
      fill: var(--main-clr-yellow);
    }
    transform: transition;
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

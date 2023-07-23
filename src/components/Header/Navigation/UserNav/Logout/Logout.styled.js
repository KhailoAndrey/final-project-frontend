import styled from 'styled-components';

export const LogoutBtn = styled.button`
display: none;
@media screen and (min-width: 1280px) {    
    margin-left: auto;
    display: inline-flex;
    border-radius: 40px;
    border: 2px solid var(--main-clr-blue);
    background: var(--main-clr-blue);
    padding: 8px;
    gap: 8px;
    justify-content: center;
    align-items: center;
    width: 135px;
    height: 40px;
    font-family: "Manrope";
    font-size: 16px;
    font-weight: 700;
    color: var(--btn-clr-fon);
    letter-spacing: 0.64px;
  transition: all var(--default-animation);
  svg {
    stroke: var(--btn-clr-fon);
  }
  &:hover {
    background: var(--btn-clr-fon);
    color: var(--main-clr-blue);
    svg {
      stroke: var(--main-clr-blue);
    }
    transform: transition;
  }
}
`
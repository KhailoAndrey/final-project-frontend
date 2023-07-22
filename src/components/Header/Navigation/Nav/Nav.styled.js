import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavBox = styled.div`
  display: block;
  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
    width: 328px;
  }
`;
export const StyledNavLink = styled(Link)`
  text-decoration: none;
  display: block;
  font-family: Manrope;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.8px;
  color: var(--main-accent-text-clr);
  &:hover {
    color: var(--main-clr-yellow);
    box-shadow: var(--big-shadow);
  }
  &.activeLink {
    color: var(--main-clr-yellow);
  }
`;

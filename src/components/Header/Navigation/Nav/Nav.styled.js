import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 328px;
  }
`;
export const StyledNavLink = styled(Link)`
  font-size: 32px;
  letter-spacing: 1.28px;
  text-decoration: none;
  display: block;
  font-family: Manrope;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: var(--main-accent-text-clr);
  &:hover {
    color: var(--main-clr-yellow);
    box-shadow: var(--big-shadow);
  }
  &.activeLink {
    color: var(--main-clr-yellow);
  }
  @media screen and (min-width: 768px) {
  font-size: 48px;
  letter-spacing: 1.92px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 20px;
    letter-spacing: 0.8px;
  }
`;

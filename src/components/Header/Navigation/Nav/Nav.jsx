import { useLocation } from 'react-router';
import { NavBox, StyledNavLink } from './Nav.styled';

const Nav = () => {
  const location = useLocation();

  return (
    <>
      <NavBox>
        <StyledNavLink
          to={'/news'}
          className={location.pathname.startsWith('/news') ? 'activeLink' : ''}
        >
          News
        </StyledNavLink>
        <StyledNavLink
          to={'/notices'}
          className={
            location.pathname.startsWith('/notices') ? 'activeLink' : ''
          }
        >
          Find pet
        </StyledNavLink>
        <StyledNavLink
          to={'/friends'}
          className={
            location.pathname.startsWith('/friends') ? 'activeLink' : ''
          }
        >
          Our friends
        </StyledNavLink>
      </NavBox>
    </>
  );
};

export default Nav;

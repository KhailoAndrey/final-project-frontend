import { useLocation } from 'react-router';
import { NavBox, StyledNavLink } from './Nav.styled';

const Nav = ({ onClick }) => {
  const location = useLocation();

  return (
    <>
      <NavBox>
        <StyledNavLink
          onClick={onClick}
          to={'/news'}
          className={location.pathname.startsWith('/news') ? 'activeLink' : ''}
        >
          News
        </StyledNavLink>
        <StyledNavLink
          onClick={onClick}
          to={'/notices'}
          className={
            location.pathname.startsWith('/notices') ? 'activeLink' : ''
          }
        >
          Find pet
        </StyledNavLink>
        <StyledNavLink
          onClick={onClick}
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

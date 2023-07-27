import { useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';
import { NavBox, StyledNavLink } from './Nav.styled';

const Nav = ({ onClick }) => {
  const location = useLocation();
const { t } = useTranslation();
  return (
    <>
      <NavBox>
        <StyledNavLink
          onClick={onClick}
          to={'/news'}
          className={location.pathname.startsWith('/news') ? 'activeLink' : ''}
        >
          {t('header_news')}
        </StyledNavLink>
        <StyledNavLink
          onClick={onClick}
          to={'/notices'}
          className={
            location.pathname.startsWith('/notices') ? 'activeLink' : ''
          }
        >
          {t('header_find')}
        </StyledNavLink>
        <StyledNavLink
          onClick={onClick}
          to={'/friends'}
          className={
            location.pathname.startsWith('/friends') ? 'activeLink' : ''
          }
        >
          {t('header_sponsors')}
        </StyledNavLink>
      </NavBox>
    </>
  );
};

export default Nav;

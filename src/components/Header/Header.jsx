import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';
import { ThemeSwitch } from 'helpers/Theme/ThemeSwitch';

import { Container } from './Header.styled';

const Header = () => {
  return (
    <Container>
      <Logo />
      <ThemeSwitch />
      <Navigation />
    </Container>
  );
};

export default Header;

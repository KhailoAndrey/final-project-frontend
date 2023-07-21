import styled from 'styled-components';

import logo_mob from '../../../images/Logo/logo_small.png'
import { Link } from 'react-router-dom';

export const LogoLink = styled(Link)`
  text-decoration: none;
  display: block;
  background-image: url(${logo_mob});
  width: 116px;
  height: 20px;
  &:hover {
    opacity: 0.8;
  }
`;
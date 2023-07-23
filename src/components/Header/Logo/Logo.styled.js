import styled from 'styled-components';

import logo_mob from '../../../images/Logo/logo_small.png'
import logo_mob_2x from '../../../images/Logo/logo_small_2x.png'
import logo_default from '../../../images/Logo/logo_big.png'
import logo_default_2x from '../../../images/Logo/logo_big_2x.png'

import { Link } from 'react-router-dom';

export const LogoLink = styled(Link)`
  text-decoration: none;
  display: block;
  background-image: url(${logo_mob});
  background-size: 116px 20px;
  width: 116px;
  height: 20px;
  &:hover {
    box-shadow: var(--big-shadow);
  }

  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    background-image: url(${logo_mob_2x});
  }

  @media screen and (min-width: 768px) {
    width: 162px;
    height: 28px;
    background-image: url(${logo_default});
    background-size: 162px 28px;

    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      background-image: url(${logo_default_2x});
    }
  }
`;
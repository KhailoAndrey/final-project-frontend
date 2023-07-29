import styled from 'styled-components';

import logo_mob from '../../../images/Logo/logo_small.png'
import logo_mob_2x from '../../../images/Logo/logo_small_2x.png'
import logo_default from '../../../images/Logo/logo_big.png'
import logo_default_2x from '../../../images/Logo/logo_big_2x.png'
import logo_mob_webp from '../../../images/Logo/logo_small.webp'
import logo_mob_2x_webp from '../../../images/Logo/logo_small_2x.webp'
import logo_default_webp from '../../../images/Logo/logo_big.webp'
import logo_default_2x_webp from '../../../images/Logo/logo_big_2x.webp'

import { Link } from 'react-router-dom';

export const LogoLink = styled(Link)`
  text-decoration: none;
  display: block;
  width: 116px;
  height: 20px;
  background-size: 116px 20px;
  background-image: url(${logo_mob});

  &:hover {
    box-shadow: var(--big-shadow);
    scale: 1.1;
  }

  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    background-image: url(${logo_mob_2x});
  }

  @media (min-width: 768px) {
    width: 162px;
    height: 28px;
    background-size: 162px 28px;
    background-image: url(${logo_default});

    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      background-image: url(${logo_default_2x});
    }

    /* Проверяем поддержку формата WebP */
    /* @supports (image-rendering: -webkit-optimize-contrast) {
      background-image: url(${logo_default_webp});
      @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
        background-image: url(${logo_default_2x_webp});
      }
    } */
  }

  /* Проверяем поддержку формата WebP для мобильных устройств */
  /* @supports (image-rendering: -webkit-optimize-contrast) {
    background-image: url(${logo_mob_webp});
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      background-image: url(${logo_mob_2x_webp});
    }
  } */
`;
import styled from 'styled-components';

import bg_mob from '../../images/BackGround/bg_mob.png';
import bg_tab from '../../images/BackGround/bg_tab.png';
import bg_desk from '../../images/BackGround/bg_desk.png';
import bg_mob_retina from '../../images/BackGround/bg_mob_2x.png'; // Изображение для Retina на мобильных устройствах
import bg_tab_retina from '../../images/BackGround/bg_tab_2x.png'; // Изображение для Retina на планшетных устройствах
import bg_desk_retina from '../../images/BackGround/bg_desk_2x.png'; // Изображение для Retina на десктопах

export const Container = styled.div`
display: block;
margin: 0;
padding: 20px;
background-image: url(${bg_mob});
height: 100vh;

@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) and (max-width: 767px) {
    background-image: url(${bg_mob_retina});
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding: 24px 32px;
    background-image: url(${bg_tab});

    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      background-image: url(${bg_tab_retina});
    }
  }

  @media screen and (min-width: 1280px) {
    padding: 20px 16px;
    background-image: url(${bg_desk});

    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      background-image: url(${bg_desk_retina});
    }
  }
`
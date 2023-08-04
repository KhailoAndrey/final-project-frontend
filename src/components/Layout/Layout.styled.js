import styled from 'styled-components';

import bg_mob from '../../images/BackGround/bg_mob.png';
import bg_tab from '../../images/BackGround/bg_tab.png';
import bg_desk from '../../images/BackGround/bg_desk.png';
import bg_mob_retina from '../../images/BackGround/bg_mob_2x.png'; 
import bg_tab_retina from '../../images/BackGround/bg_tab_2x.png'; 
import bg_desk_retina from '../../images/BackGround/bg_desk_2x.png'; 

export const Section = styled.section`
  /* position: fixed; */
  background-attachment: fixed;
  background-color: var(--main-bckg-clr);
  margin: 0;
  padding: 0 20px 20px;
  width: 100%;
  height: 100%;
  /* min-width: 100vh;
  min-height: 100vh; */
  background-repeat: repeat;
  background-image: url(${bg_mob});
  /* overflow: auto; */
  display: block;
  justify-content: center;

  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    background-image: url(${bg_mob_retina});
  }

  @media screen and (min-width: 768px) {
    padding: 0 32px 24px;
    background-image: url(${bg_tab});

    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      background-image: url(${bg_tab_retina});
    }
  }

  @media screen and (min-width: 1280px) {
    padding: 0 16px 20px;

    background-image: url(${bg_desk});

    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      background-image: url(${bg_desk_retina});
    }
  }
`;

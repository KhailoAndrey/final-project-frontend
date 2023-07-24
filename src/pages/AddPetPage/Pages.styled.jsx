import styled from 'styled-components';

import bg_desk_2x from '../../images/BackGround/bg_desk_2x.png';
import bg_desk from '../../images/BackGround/bg_desk.png';
import bg_mob_2x from '../../images/BackGround/bg_mob_2x.png';
import bg_mob from '../../images/BackGround/bg_mob.png';
import bg_tab_2x from '../../images/BackGround/bg_tab_2x.png';
import bg_tab from '../../images/BackGround/bg_tab.png';

export const BgWrapper = styled.div`
  height: 100%;
  margin-left: auto;
  margin-right: auto;

  background-repeat: no-repeat;
  background-position: center -70px;
  background-size: 100%;

  background-image: url(${bg_mob});

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bg_mob_2x});
  }

  @media screen and (min-width: 768px) {
    background-size: 100%;
    background-position: center -100px;
    background-image: url(${bg_tab});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bg_tab_2x});
    }
  }

  @media screen and (min-width: 1280px) {
    background-image: url(${bg_desk});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bg_desk_2x});
    }
  }
`;

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 32px;
  }
`;

export const Wrapper = styled.div`
  position: relative;
`;

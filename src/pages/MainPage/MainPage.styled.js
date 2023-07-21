import styled from 'styled-components';
import * as bg from '../../images/BackGround/index';

export const Section = styled.section`
  max-width: 100%;
  background-color: #fdf7f2;

  max-height: calc(100vh - 48px);
  margin: 0 auto;
  background-repeat: no-repeat;
  background-position: center top;
  background-size: 100%;
  background-image: url(${bg.bg_mob});

  @media screen and (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bg.bg_mob_2x});
  }

  @media screen and (min-width: 768px) {
    height: calc(100vh - 68px);
    background-image: url(${bg.bg_tab});

    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bg.bg_tab_2x});
    }
  }

  @media screen and (min-width: 1280px) {
    max-height: calc(100vh - 72px);
    background-image: url(${bg.bg_desk});

    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bg.bg_desk});
    }
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  width: 320px;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: 768px) {
    width: 786px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;

  @media screen and (min-width: 768px) {
    padding-top: 80px;
    gap: 27px;
  }

  @media screen and (min-width: 1280px) {
    align-items: flex-start;
    gap: 0;
    padding-top: 30px;
    flex-direction: row;
  }
`;

export const Title = styled.h1`
  width: 100%;
  font-weight: 700;
  font-size: 32px;
  line-height: calc(44 / 32);
  margin: 0;
  @media screen and (min-width: 768px) {
    font-size: 68px;
    line-height: calc(100 / 68);
  }

  @media screen and (min-width: 1280px) {
    margin-top: 188px;
    max-width: 501px;
    min-width: 501px;
    font-weight: 800;
    font-size: 68px;
    line-height: calc(88 / 68);
  }
`;

export const Picture = styled.picture`
  display: flex;
  justify-content: center;
  width: 100vw;
  overflow: hidden;
  height: calc(100vh - 216px);
  min-height: 394px;

  @media screen and (min-width: 768px) {
    min-width: 100vw;
    height: 818px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: -50px;
    margin-left: -154px;
    min-width: auto;
    width: calc(100vw - 363px);
    height: calc(100vh - 52px);
  }
`;

export const Img = styled.img`
  min-width: 475px;
  max-height: 494px;
  object-fit: cover;
  object-position: center;

  @media screen and (min-width: 768px) {
    margin-top: -100px;
    min-width: 960px;
    min-height: 915px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 0;
    min-width: 872px;
    max-width: 842px;
    min-height: 896px;
  }
`;

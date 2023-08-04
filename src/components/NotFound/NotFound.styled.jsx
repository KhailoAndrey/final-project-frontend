import styled from 'styled-components';
import { ReactComponent as Paw } from '../../images/Icons/pawprint.svg';

import NFbgImgMobileX1 from '../../images/404/404_mob_2x.png';
import NFbgImgTabletX1 from '../../images/404/404_tab_2x.png';
import NFbgImgDesktopX1 from '../../images/404/404_desk_2x.png';

export const NFDivWrap = styled.div`
  max-width: 767px;
  height: 512px;
  padding-top: 60px;
  padding-bottom: 100px;
  margin-left: auto;
  margin-right: auto;

  background-repeat: no-repeat;
  background-position: top -200px left 100px;

  @media (min-width: 768px) {
    background-position: bottom -150px right 100px;
    max-width: 1280px;
    padding-bottom: 204px;
  }
  @media (min-width: 1280px) {
    background-position: bottom -150px right 100px;
  }
`;

export const NFText = styled.p`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 130%;
  text-align: center;
  letter-spacing: -0.02em;
  color: var(--main-accent-text-clr);

  @media (min-width: 768px) {
    width: 100%;
  }
`;

export const NFImg = styled.div`
  width: 292px;
  height: 170px;
  margin-bottom: 14px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-top: 80px;

  background-image: url(${NFbgImgMobileX1});
  background-repeat: no-repeat;
  background-size: contain;
  @media (min-width: 768px) {
    background-image: url(${NFbgImgTabletX1});
    width: 498px;
    height: 327px;
    margin-bottom: 32px;
  }
  @media (min-width: 1280px) {
    background-image: url(${NFbgImgDesktopX1});
    width: 822px;
    height: 360px;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 9px;
  padding: 9px 52px;
  font-family: 'Manrope';
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 0.04em;
  color: var(--main-clr-yellow);
  text-decoration: none;
  border-radius: 40px;
  border: 2px solid;
  border-color: var(--main-clr-blue);
  cursor: pointer;

  margin: auto;

  background: var(--main-clr-blue);
  color: var(--btn-clr-fon);

  span {
    margin-right: 12px;
  }

  svg {
    fill: var(--btn-clr-fon);
  }

  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 350ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: var(--main-clr-blue);
    background-color: var(--main-bckg-clr);
  }
  &:hover svg,
  &:focus svg {
    fill: var(--main-clr-blue);
  }
`;

export const PawIcon = styled(Paw)`
  fill: var(--main-clr-blue);

  transition: fill 350ms cubic-bezier(0.4, 0, 0.2, 1);
`;

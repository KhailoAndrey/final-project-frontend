import styled from 'styled-components';

export const FIWrapper = styled.div`
  position: relative;
  width: 280px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  border-radius: 40px;
  background: var(--white-bckg-clr, #fff);
  box-shadow: 3px 8px 14px 0px var(--small-shadow);
  @media screen and (min-width: 768px) {
    width: 336px;
  }
  @media screen and (min-width: 1280px) {
    width: 394px;
  }
  animation: moveIn var(--slow-animation) forwards ;


  @keyframes moveIn {
    0% {
      opacity: 0;
      transform: scaleY(0);
    }
    100% {
      opacity: 1;
      transform: scaleY(1);
    }    
  }
`;
export const FITitle = styled.a`
  text-decoration: none;
  padding: 0 10px;
  color: var(--main-clr-blue);
  text-align: center;
  font-family: Manrope;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 16px;
  &:hover {
    scale: 1.2;
  }
`;
export const FIContainer = styled.div`
  margin: 16px 0;
  padding: 0 12px;
  display: flex;
  gap: 12px;
`;
export const FIImage = styled.img`
  min-width: 100px;
  height: 68px;
  justify-content: center;
  align-content: center;
  @media screen and (min-width: 768px) {
    min-width: 124px;
    height: 88px;
  }
  @media screen and (min-width: 1280px) {
    min-width: 146px;
    height: 104px;
  }
`;
export const FIInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const FIText = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--main-accent-text-clr, #111);
  &:hover {
    color: var(--main-clr-blue);
  }
`;
export const FITTitle = styled.span`
  color: inherit;
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 16px;
  }
`;
export const FITAddress = styled.a`
  text-decoration: none;
  color: inherit;
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 16px;
  }
`;
export const FITData = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 16px;
  }
`;

export const WorkDaysList = styled.ul`
  position: absolute;
  top: 100px;
  left: 120px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 130px;
  height: auto;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid var(--main-clr-blue);
  box-shadow: var(--small-shadow);
  background-color: var(--white-bckg-clr);
  transition: all var(--slow-animation);
  @media screen and (min-width: 768px) {
    left: 146px;
  }
  @media screen and (min-width: 1280px) {
    left: 170px;
    top: 110px;
  }
`;

export const WorkDayItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Manrope';
  font-size: 12px;
  color: var(--main-accent-text-clr, #111);
`;

export const WorkDays = styled.p``;

export const WorkTime = styled.p``;

import styled from 'styled-components';

export const Card = styled.li`
  width: 280px;
  height: 456px;
  box-shadow: 3px 8px 14px 0px var(--small-shadow);
  border-radius: 0px 0px 40px 40px;
  background-color: var(--white-bckg-clr);

  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  transition: var(--default-animation);
  margin-right: auto;
  margin-left: auto;
  
  @media screen and (min-width: 768px) {
    margin-right: 0;
    margin-left: 0;
    width: 336px;
  }

  @media screen and (min-width: 1280px) {
    width: 288px;
  }

  &:hover,
  &:focus {
    box-shadow: 3px 8px 14px 0px var(--big-shadow);
  }
`;

export const ImgContainer = styled.div`
  width: 280px;
  height: 288px;
  position: relative;

  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1280px) {
    width: 288px;
  }
`;

export const PetPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Category = styled.div`
  width: 126px;
  height: 32px;
  background-color: var(--main-clr-blue-light);
  border-radius: 0px 16px 16px 0px;
  position: absolute;
  top: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FavBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--main-clr-blue-light);
  border: 0;
  outline: 0;
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    scale: 1.1;
  }
`;

export const DelBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--main-clr-blue-light);
  border: 0;
  outline: 0;
  position: absolute;
  top: 68px;
  right: 12px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    stroke: var(--main-clr-blue);
  }

  &:hover,
  &:focus {
    background-color: var(--main-clr-blue);

    svg {
      stroke: var(--main-clr-blue-light);
    }
  }
`;

export const InfoContainer = styled.div`
  width: 280px;
  height: 28px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  bottom: 12px;

  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1280px) {
    width: 288px;
  }
`;

export const Information = styled.div`
  min-width: 80px;
  height: 28px;
  background-color: var(--main-clr-blue-light);
  border-radius: 16px;
  display: flex;
  align-items: center;
  padding-left: 5px;
  padding-right: 4px;
  gap: 3px;
  font-size: 12px;
  font-weight: 600;
`;

export const BottomContainer = styled.div`
  height: 168px;
  padding: 20px 16px 28px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    padding: 20px 20px 24px 20px;
  }
`;

export const Title = styled.h2`
  font-family: Manrope;
  font-size: 24px;
  font-weight: 700;
`;

export const LearnMoreBtn = styled.button`
  width: 248px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 40px;
  border: 2px solid var(--main-clr-blue);
  color: var(--main-clr-blue);
  font-size: 16px;
  font-weight: 600;
  margin-left: auto;
  margin-right: auto;
  outline: 0;

  svg {
    fill: var(--main-clr-blue);
  }

  &:hover,
  &:focus {
    background: var(--main-clr-gr_blue);
    color: var(--btn-clr-fon);
    border: 0;

    svg {
      fill: var(--btn-clr-fon);
    }
  }
`;

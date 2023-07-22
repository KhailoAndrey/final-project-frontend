import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  /* gap: 20px; */

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
  line-height: 1.375;
  margin: 0;
  @media screen and (min-width: 768px) {
    font-size: 68px;
    line-height: 1.47;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 188px;
    max-width: 501px;
    font-weight: 800;
    font-size: 68px;
    line-height: 1.29;
  }
`;

export const Picture = styled.picture`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 394px;
  @media screen and (min-width: 768px) {
    width: 985px;
    height: 818px;
  }

  @media screen and (min-width: 1280px) {
    width: 917px;
    height: 670px;
    margin-left: -154px;
  }
`;

export const Img = styled.img`
  min-width: 474px;
  max-height: 494px;
  object-fit: cover;
  object-position: center;

  @media screen and (min-width: 768px) {
    min-width: 985px;
    min-height: 818px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 0;
    min-width: 872px;
    max-width: 842px;
    min-height: 896px;
  }
`;

import styled from 'styled-components';

export const NoPetsWrap = styled.div`
  position: relative;
  padding-top: 50%;
  margin-top: 24px;

  width: 280px;

  @media screen and (min-width: 768px) {
    width: 704px;
  }
  @media screen and (min-width: 1280px) {
    width: 821px;
  }
`;

export const NoPetsImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;

  width: 280px;

  @media screen and (min-width: 768px) {
    width: 704px;
  }
  @media screen and (min-width: 1280px) {
    height: 541px;
  }
`;

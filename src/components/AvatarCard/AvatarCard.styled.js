import styled from 'styled-components';

import temp from '../../images/UserPageImg/userPhotoDefault.png';

export const PhotoWrapper = styled.div`
  width: 182px;
  height: 182px;
  border-radius: 40px;
  background-color: var(--main-bckg-clr);
  background-image: url(${temp});
  overflow: hidden;

  display: block;
  justify-content: center;

  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    background-image: url(${temp});
  }

  @media screen and (min-width: 768px) {
    background-image: url(${temp});

    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      background-image: url(${temp});
    }
  }

  @media screen and (min-width: 1280px) {
    background-image: url(${temp});

    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      background-image: url(${temp});
    }
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImgWrapper = styled.div`
  position: relative;
  width: 182px;
  height: 182px;
  border-radius: 40px;

  margin-bottom: 60px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 64px;
  }
`;

export const AvatarBtn = styled.div`
  position: absolute;
  top: 200px;
`;

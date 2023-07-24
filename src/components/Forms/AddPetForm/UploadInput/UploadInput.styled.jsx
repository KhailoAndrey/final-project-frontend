import styled from 'styled-components';

export const UploadFileLabel = styled.label`
  display: flex;
  justify-content: left;
  align-items: center;
  align-self: flex-start;

  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: 14px;
  line-height: 1.35;
  gap: 27px;
  cursor: pointer;

  @media screen and (${props => props.theme.media.md}) {
    font-size: 20px;
    flex-direction: ${props =>
      props['data-category'] !== 'your pet' ? 'column' : 'row'};
    gap: ${props => (props['data-category'] !== 'your pet' ? '12px' : '27px')};
  }
`;

export const UploadFile = styled.input`
  display: none;
`;

export const Photo = styled.img`
  object-fit: cover;
  object-position: top center;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 20px;

  @media screen and (${props => props.theme.media.md}) {
    border-radius: 40px;
  }
`;

export const PhotoPlaceWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;
export const PhotoWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 112px;
  height: 112px;
  background: ${props => props.theme.colors.blueLight};
  border-radius: 20px;

  @media screen and (${props => props.theme.media.md}) {
    width: 182px;
    height: 182px;
    border-radius: 40px;
  }
`;

export const ErrWrapper = styled.span`
  position: absolute;
  display: inline-block;
  width: 180px;
  bottom: -25px;
  text-align: center;

  font-size: 12px;

  line-height: 1.35;
  color: ${props => props.theme.colors.red};
`;

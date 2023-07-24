import styled from 'styled-components';

export const BtnLM = styled.button`
  height: 38px;
  width: 248px;
  display: flex;
  justify-content: center;
  padding: 8px 78px;
  border-radius: 40px;
  border: 2px solid ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.blue};
  background-color: ${props => props.theme.colors.white};
  font-size: 16px;
  font-family: ${props => props.theme.fonts.main};
  font-weight: ${props => props.theme.fontWeights.semibold};
  cursor: pointer;
  :hover,
  :focus {
    color: ${props => props.theme.colors.white};
    border: none;
    background: ${props => props.theme.colors.blueGradient};
  }
  margin: 0 auto 20px;
`;
export const BigBtnFavor = styled.button`
  height: 38px;
  width: 248px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 40px;
  padding-left: auto;
  padding-right: auto;
  border: 2px solid ${props => props.theme.colors.blue};
  font-size: 16px;
  color: ${props => props.theme.colors.blue};
  background-color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.main};
  font-weight: ${props => props.theme.fontWeights.bold};
  cursor: pointer;
  padding-left: 36px;
  :hover,
  :focus {
    background: ${props => props.theme.colors.blue};
    color: ${props => props.theme.colors.white};
    border: none;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  position: absolute;
  bottom: 24px;
  right: 20px;
`;
export const BtnLearnMoreStyled = styled.button`
  height: 38px;
  width: 248px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 40px;
  padding-left: auto;
  padding-right: auto;
  border: 2px solid ${props => props.theme.colors.blue};
  font-size: 16px;
  color: ${props => props.theme.colors.blue};
  background-color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.main};
  font-weight: ${props => props.theme.fontWeights.bold};
  cursor: pointer;
  padding-left: 36px;
  :hover,
  :focus {
    background: ${props => props.theme.colors.blue};
    color: ${props => props.theme.colors.white};
    border: none;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  position: absolute;
  bottom: 24px;
  right: 16px;
  @media screen and (${props => props.theme.media.md}) {
    right: 44px;
  }
  @media screen and (${props => props.theme.media.lg}) {
    right: 20px;
  }
`;

export const PetFormBtn = styled.button`
  height: 38px;
  width: 248px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 40px;
  padding-left: auto;
  padding-right: auto;
  border: 2px solid ${props => props.theme.colors.blue};
  font-size: 16px;
  color: ${props => props.theme.colors.clearWhite};
  background-color: ${props => props.theme.colors.blue};
  font-family: ${props => props.theme.fonts.main};
  font-weight: ${props => props.theme.fontWeights.bold};
  cursor: pointer;
  padding-left: 36px;
  :hover,
  :focus {
    background: ${props => props.theme.colors.blueGradient};

    border: none;
  }
`;

export const Pawprint = styled.svg`
  fill: ${props => props.theme.colors.white};
  margin-left: 12px;
`;
export const BtnCancelArrow = styled.button`
  height: 40px;
  width: 94px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 4px;
  padding-top: 6px;
  padding-bottom: 6px;
  font-size: 16px;
  font-family: ${props => props.theme.fonts.main};
  font-weight: ${props => props.theme.fontWeights.bold};
  border: none;
  color: ${props => props.theme.colors.blue};
  background-color: ${props => props.theme.colors.transparent};
  cursor: pointer;
  :hover {
    box-shadow: ${props => props.theme.shadows.secondShadow};
  }
`;
export const ArrowLeft = styled.svg`
  stroke: ${props => props.theme.colors.blue};
  margin-right: 12px;
`;
export const BtnBackArrow = styled.button`
  height: 24px;
  width: 76px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 4px;
  padding-top: 6px;
  padding-bottom: 6px;
  font-size: 16px;
  font-family: ${props => props.theme.fonts.main};
  font-weight: ${props => props.theme.fontWeights.bold};
  border: none;
  color: ${props => props.theme.colors.blue};
  background-color: ${props => props.theme.colors.transparent};
  cursor: pointer;
  :hover {
    box-shadow: ${props => props.theme.shadows.secondShadow};
  }
`;
export const BtnAdd = styled.button`
  z-index: 50;
  position: absolute;
  top: 251px;
  right: 0;
  height: 80px;
  width: 80px;
  display: flex;
  flex-direction: column-reverse;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding-top: 18px;
  padding-bottom: 16px;
  border-radius: 50%;
  font-size: 12px;
  font-family: ${props => props.theme.fonts.main};
  font-weight: ${props => props.theme.fontWeights.semibold};
  border: none;
  background: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadows.mainShadow};

  @media screen and (${props => props.theme.media.md}) {
    position: static;
    height: 40px;
    width: 129px;
    padding-top: 9px;
    padding-bottom: 9px;
    padding-left: 16px;
    border-radius: 40px;
    font-size: 16px;
    font-weight: ${props => props.theme.fontWeights.bold};
  }

  cursor: pointer;
  :hover,
  :focus {
    background: ${props => props.theme.colors.blueGradient};
  }
`;

export const BtnAddUser = styled.button`
  height: 40px;
  width: 129px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 9px;
  padding-bottom: 9px;
  padding-left: 16px;
  border-radius: 40px;
  font-size: 16px;
  font-family: ${props => props.theme.fonts.main};
  font-weight: ${props => props.theme.fontWeights.bold};
  border: none;
  background: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.white};
  cursor: pointer;
  :hover,
  :focus {
    background: ${props => props.theme.colors.blueGradient};
  }
`;

export const Add = styled.svg`
  stroke: ${props => props.theme.colors.white};
`;
export const AddCurcle = styled.svg`
  stroke: ${props => props.theme.colors.white};
`;
export const BtnHeart = styled.button`
  height: 40px;
  width: 40px;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 13px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  background-color: ${props => props.theme.colors.blueLight};
  border: none;
  cursor: pointer;
  position: absolute;
  top: 12px;
  right: 12px;
  :hover {
    border: 2px solid ${props => props.theme.colors.blue};
  }
`;
export const FilterCurcle = styled.button`
  height: 40px;
  width: 40px;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 13px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  background-color: ${props => props.theme.colors.blueLight};
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  stroke: ${props => props.theme.colors.blue};
  fill: none;
  :hover,
  :focus & svg {
    stroke: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.white};
    border: none;
    background: ${props => props.theme.colors.blueGradient};
  }
  @media screen and (${props => props.theme.media.md}) {
    display: none;
  }
`;

export const Heart = styled.svg`
  fill: ${props => {
    return props.isFavorite ? props.theme.colors.blue : 'none';
  }};
  stroke: ${props => props.theme.colors.blue};
  :hover,
  :active {
    fill: ${props => props.theme.colors.blue};
  }
`;
export const BtnRegLog = styled.button`
  height: 48px;
  width: 458px;
  display: flex;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  justify-content: center;
  padding: 8px 78px;
  border-radius: 40px;
  background-color: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.white};
  font-size: 20px;
  line-height: 1, 35;
  letter-spacing: 0.04em;
  font-family: ${props => props.theme.fonts.main};
  font-weight: ${props => props.theme.fontWeights.semibold};
  border: none;
  cursor: pointer;

  :hover,
  :focus {
    background: ${props => props.theme.colors.blueGradient};
  }
`;
export const BtnFilter = styled.button`
  display: none;
  @media screen and (${props => props.theme.media.md}) {
    height: 40px;
    width: 129px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px;
    border-radius: 40px;
    border: 2px solid ${props => props.theme.colors.blue};
    color: ${props => props.theme.colors.blue};
    background-color: ${props => props.theme.colors.white};
    font-size: 16px;
    font-family: ${props => props.theme.fonts.main};
    font-weight: ${props => props.theme.fontWeights.bold};
    cursor: pointer;
    stroke: ${props => props.theme.colors.blue};
    fill: none;
    :hover,
    :focus & svg {
      stroke: ${props => props.theme.colors.white};
      color: ${props => props.theme.colors.white};
      border: none;
      background: ${props => props.theme.colors.blueGradient};
      transition-duration: 250ms;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
  }
`;

export const BtnOption = styled.button`
  height: 35px;
  border-radius: 40px;
  padding: 8px 16px;
  background-color: ${props => props.theme.colors.blueLight};
  border: none;
  color: ${props => props.theme.colors.blue};
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: 14px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  cursor: pointer;
  :hover,
  :focus,
  :active {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.blue};
  }
  margin: 0 8px 8px 0;
`;
export const BtnToHeart = styled.button`
  height: 40px;
  width: 256px;
  border-radius: 40px;
  padding-top: 9px;
  padding-bottom: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.blue};
  font-size: 16px;
  font-family: ${props => props.theme.fonts.main};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.white};
  border: none;
  cursor: pointer;
  :hover,
  :focus {
    background: ${props => props.theme.colors.blueGradient};
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
export const ToHeart = styled.svg`
  fill: ${props => (props.isFavorite ? props.theme.colors.white : 'none')};
  stroke: ${props => props.theme.colors.white};
  margin-left: 11px;
`;
export const BtnContact = styled.a`
  height: 40px;
  width: 256px;
  border-radius: 40px;
  padding-top: 9px;
  padding-bottom: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.white};
  font-size: 16px;
  font-family: ${props => props.theme.fonts.main};
  font-weight: ${props => props.theme.fontWeights.bold};
  letter-spacing: 0.04em;
  line-height: 1.35;
  color: ${props => props.theme.colors.blue};
  border: 2px solid ${props => props.theme.colors.blue};
  :hover {
    box-shadow: ${props => props.theme.shadows.secondShadow};
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
export const PetInfoStyle = styled.div`
  height: 28px;
  width: 80px;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.blueLight};
  border: none;
  color: ${props => props.theme.colors.black};
`;
export const PetInfoNoticesStyle = styled.div`
  height: 28px;
  width: 80px;
  border-radius: 16px;
  display: flex;
  padding-left: 4px;
  align-items: center;
  background-color: ${props => props.theme.colors.blueLight};
  border: none;
  color: ${props => props.theme.colors.black};
`;
export const PetCategoryStyle = styled.div`
  width: 126px;
  height: 32px;
  position: absolute;
  top: 16px;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.blueLight};
  border: none;
  color: ${props => props.theme.colors.black};
`;
export const City = styled.svg`
  fill: none;
  stroke: ${props => props.theme.colors.blue};
  margin-right: 4px;
`;
export const TexStyletInfo = styled.p`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
`;
export const TexCategoyInfo = styled.p`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
`;

export const YesBtn = styled.button`
  height: 40px;
  width: 100px;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 8px;
  padding-bottom: 8px;
  font-size: 16px;
  font-family: ${props => props.theme.fonts.main};
  font-weight: ${props => props.theme.fontWeights.bold};
  letter-spacing: 0.04em;
  line-height: 1.35;
  background-color: ${props => props.theme.colors.blue};
  border: none;
  cursor: pointer;
  color: ${props => props.theme.colors.white};
  :hover,
  :focus,
  :active {
    background: ${props => props.theme.colors.blueGradient};
  }

  @media screen and (${props => props.theme.media.md}) {
    width: 129px;
  }
`;

export const Delete = styled.svg`
  fill: none;
  stroke: ${props => props.theme.colors.white};
  margin-left: 8px;
`;

export const Logout = styled.svg`
  fill: none;
  stroke: ${props => props.theme.colors.white};
  margin-left: 11px;
`;

export const BtnClose = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  height: 24px;
  width: 24px;
  background-color: ${props => props.theme.colors.transparent};
  color: ${props => props.theme.colors.blue};
  border: none;
  cursor: pointer;
  :hover,
  :focus {
    color: ${props => props.theme.colors.black};
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  @media screen and (${props => props.theme.media.md}) {
    top: 24px;
    right: 24px;
  }
  @media screen and (${props => props.theme.media.lg}) {
    top: 23px;
    right: 26px;
  }
`;
export const Close = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  fill: ${props => props.theme.colors.currentColor};
  stroke: ${props => props.theme.colors.currentColor};
`;

export const BtnCloseStyled = styled.button`
  height: 40px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  border-radius: 40px;
  border: 2px solid ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.blue};
  background-color: ${props => props.theme.colors.clearWhite};
  font-size: 16px;
  font-family: ${props => props.theme.fonts.main};
  font-weight: ${props => props.theme.fontWeights.bold};
  cursor: pointer;
  :hover,
  :focus {
    color: ${props => props.theme.colors.white};
    border: none;
    background: ${props => props.theme.colors.blueGradient};
  }

  @media screen and (${props => props.theme.media.md}) {
    width: 129px;
  }
`;
export const Arrow = styled.svg`
  stroke: ${props => props.theme.colors.currentColor};
  fill: ${props => props.theme.colors.currentColor};
`;
export const Avatar = styled.svg`
  fill: none;
  stroke: ${props => props.theme.colors.orange};
`;

export const StyledEditPhotoBtn = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 94px;
  padding: 0;
  border: none;
  background-color: transparent;
  border: none;
  color: ${props => props.theme.colors.dark};
  font-weight: ${props => props.theme.fontWeights.regular};
  font-size: 12px;
  line-height: calc(22 / 12);
  letter-spacing: 0.04em;
  cursor: pointer;
`;

export const StyledConfirmPhotoBtn = styled(StyledEditPhotoBtn)`
  width: 79px;
  cursor: pointer;
`;

export const InputButton = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const SVG = styled.svg`
  fill: ${props => props.fill || 'none'};
  stroke: ${props => props.stroke || 'none'};
`;

export const LogOutTitle = styled.h3`
  display: flex;
  justify-content: space-between;
  font-style: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 21.86px;
  color: ${props => props.theme.colors.grey};
`;

export const LogOutWrapper = styled.button`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 96px;
  left: 10px;
  bottom: 25px;
  padding: 2px;
  border-radius: 3px;

  font-weight: ${props => props.theme.fontWeights.regular};
  font-size: 16px;
  line-height: 22px;

  background-color: ${props => props.theme.colors.transparent};

  outline: none;
  border: none;
  cursor: pointer;
  :hover {
    box-shadow: ${props => props.theme.shadows.secondShadow};
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }

  @media screen and (${props => props.theme.media.md}) {
    left: 20px;
    bottom: 21px;
  }

  @media screen and (${props => props.theme.media.lg}) {
    left: 16px;
    bottom: 20px;
  }
`;

export const DeletePet = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  padding-top: 5px;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: ${props => props.theme.colors.transparent};
  :hover {
    box-shadow: ${props => props.theme.shadows.secondShadow};
  }
`;

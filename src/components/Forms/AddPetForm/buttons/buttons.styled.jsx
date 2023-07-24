import styled from 'styled-components';

export const BtnLM = styled.button`
  height: 38px;
  width: 248px;
  display: flex;
  justify-content: center;
  padding: 8px 78px;
  border-radius: 40px;
  border: 2px solid #54adff;
  color: #54adff;
  background-color: #fdf7f2;
  font-size: 16px;
  font-family: 'Manrope', sans-serif;
  font-weight: 600;
  cursor: pointer;
  :hover,
  :focus {
    color: #fdf7f2;
    border: none;
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
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
  border: 2px solid #54adff;
  font-size: 16px;
  color: #54adff;
  background-color: #fdf7f2;
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  cursor: pointer;
  padding-left: 36px;
  :hover,
  :focus {
    background: #54adff;
    color: #fdf7f2;
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
  border: 2px solid #54adff;
  font-size: 16px;
  color: #54adff;
  background-color: #fdf7f2;
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  cursor: pointer;
  padding-left: 36px;
  :hover,
  :focus {
    background: #54adff;
    color: #fdf7f2;
    border: none;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  position: absolute;
  bottom: 24px;
  right: 16px;
  @media screen and (min-width: 768px) {
    right: 44px;
  }
  @media screen and (min-width: 1280px) {
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
  border: 2px solid #54adff;
  font-size: 16px;
  color: #ffffff;
  background-color: #54adff;
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  cursor: pointer;
  padding-left: 36px;
  :hover,
  :focus {
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
    border: none;
  }
`;

export const Pawprint = styled.svg`
  fill: #fdf7f2;
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
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  border: none;
  color: #54adff;
  background-color: transparent;
  cursor: pointer;
  :hover {
    box-shadow: 7px 13px 14px rgba(116, 177, 232, 0.24);
  }
`;
export const ArrowLeft = styled.svg`
  stroke: #54adff;
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
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  border: none;
  color: #54adff;
  background-color: transparent;
  cursor: pointer;
  :hover {
    box-shadow: 7px 13px 14px rgba(116, 177, 232, 0.24);
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
  font-family: 'Manrope', sans-serif;
  font-weight: 600;
  border: none;
  background: #54adff;
  color: #fdf7f2;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);

  @media screen and (min-width: 768px) {
    position: static;
    height: 40px;
    width: 129px;
    padding-top: 9px;
    padding-bottom: 9px;
    padding-left: 16px;
    border-radius: 40px;
    font-size: 16px;
    font-weight: 700;
  }

  cursor: pointer;
  :hover,
  :focus {
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
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
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  border: none;
  background: #54adff;
  color: #fdf7f2;
  cursor: pointer;
  :hover,
  :focus {
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
  }
`;

// export const Add = styled.svg`
//   stroke: #fdf7f2;
// `;
// export const AddCurcle = styled.svg`
//   stroke: #fdf7f2;
// // `;
// export const BtnHeart = styled.button`
//   height: 40px;
//   width: 40px;
//   border-radius: 40px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding-top: 13px;
//   padding-bottom: 11px;
//   padding-left: 11px;
//   padding-right: 11px;
//   background-color: #cce4fb;
//   border: none;
//   cursor: pointer;
//   position: absolute;
//   top: 12px;
//   right: 12px;
//   :hover {
//     border: 2px solid #54adff;
//   }
// // `;
// export const FilterCurcle = styled.button`
//   height: 40px;
//   width: 40px;
//   border-radius: 40px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding-top: 13px;
//   padding-bottom: 11px;
//   padding-left: 11px;
//   padding-right: 11px;
//   background-color: #cce4fb;
//   border: none;
//   cursor: pointer;
//   position: absolute;
//   top: 0;
//   right: 0;
//   stroke: #54adff;
//   fill: none;
//   :hover,
//   :focus & svg {
//     stroke: #fdf7f2;
//     color: #fdf7f2;
//     border: none;
//     background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
//   }
//   @media screen and (min-width: 768px) {
//     display: none;
//   }
// `;

// export const Heart = styled.svg`
//   fill: ${props => {
//     return props.isFavorite ? `#54ADFF` : 'none';
//   }};
//   stroke: #54adff;
//   :hover,
//   :active {
//     fill: #54adff;
//   }
// `;
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
  background-color: #54adff;
  color: #fdf7f2;
  font-size: 20px;
  line-height: 1, 35;
  letter-spacing: 0.04em;
  font-family: 'Manrope', sans-serif;
  font-weight: 600;
  border: none;
  cursor: pointer;

  :hover,
  :focus {
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
  }
  //
`;
// export const BtnFilter = styled.button`
//   display: none;
//   @media screen and (min-width: 768px) {
//     height: 40px;
//     width: 129px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     padding: 12px;
//     border-radius: 40px;
//     border: 2px solid #54adff;
//     color: #54adff;
//     background-color: #fdf7f2;
//     font-size: 16px;
//     font-family: 'Manrope', sans-serif;
//     font-weight: 700;
//     cursor: pointer;
//     stroke: #54adff;
//     fill: none;
//     :hover,
//     :focus & svg {
//       stroke: #fdf7f2;
//       color: #fdf7f2;
//       border: none;
//       background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
//       transition-duration: 250ms;
//       transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
//     }
//   }
// `;

export const BtnOption = styled.button`
  height: 35px;
  border-radius: 40px;
  padding: 8px 16px;
  background-color: #cce4fb;
  border: none;
  color: #54adff;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  cursor: pointer;
  :hover,
  :focus,
  :active {
    color: #fdf7f2;
    background-color: #54adff;
  }
  margin: 0 8px 8px 0;
  //
`;
// export const BtnToHeart = styled.button`
//   height: 40px;
//   width: 256px;
//   border-radius: 40px;
//   padding-top: 9px;
//   padding-bottom: 9px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: #54adff;
//   font-size: 16px;
//   font-family: 'Manrope', sans-serif;
//   font-weight: 700;
//   color: #fdf7f2;
//   border: none;
//   cursor: pointer;
//   :hover,
//   :focus {
//     background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
//     transition-duration: 250ms;
//     transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
//   }
// `;
// export const ToHeart = styled.svg`
//   fill: ${props => (props.isFavorite ? `#FDF7F2` : 'none')};
//   stroke: #fdf7f2;
//   margin-left: 11px;
// `;
export const BtnContact = styled.a`
  height: 40px;
  width: 256px;
  border-radius: 40px;
  padding-top: 9px;
  padding-bottom: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fdf7f2;
  font-size: 16px;
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  letter-spacing: 0.04em;
  line-height: 1.35;
  color: #54adff;
  border: 2px solid #54adff;
  :hover {
    box-shadow: 7px 13px 14px rgba(116, 177, 232, 0.24);
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
  background-color: #cce4fb;
  border: none;
  color: #111111;
`;
export const PetInfoNoticesStyle = styled.div`
  height: 28px;
  width: 80px;
  border-radius: 16px;
  display: flex;
  padding-left: 4px;
  align-items: center;
  background-color: #cce4fb;
  border: none;
  color: #111111;
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
  background-color: #cce4fb;
  border: none;
  color: #111111;
`;
export const City = styled.svg`
  fill: none;
  stroke: #54adff;
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
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  letter-spacing: 0.04em;
  line-height: 1.35;
  background-color: #54adff;
  border: none;
  cursor: pointer;
  color: #fdf7f2;
  :hover,
  :focus,
  :active {
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
  }

  @media screen and (min-width: 768px) {
    width: 129px;
  }
`;

export const BtnClose = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  height: 24px;
  width: 24px;
  background-color: transparent;
  color: #54adff;
  border: none;
  cursor: pointer;
  :hover,
  :focus {
    color: #111111;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  @media screen and (min-width: 768px) {
    top: 24px;
    right: 24px;
  }
  @media screen and (min-width: 1280px) {
    top: 23px;
    right: 26px;
  }
`;
export const Close = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  fill: currentColor;
  stroke: currentColor;
`;

export const BtnCloseStyled = styled.button`
  height: 40px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  border-radius: 40px;
  border: 2px solid #54adff;
  color: #54adff;
  background-color: #ffffff;
  font-size: 16px;
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  cursor: pointer;
  :hover,
  :focus {
    color: #fdf7f2;
    border: none;
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
  }

  @media screen and (min-width: 768px) {
    width: 129px;
  }
`;
export const Arrow = styled.svg`
  stroke: currentColor;
  fill: currentColor;
`;
export const Avatar = styled.svg`
  fill: none;
  stroke: #ffc107;
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
  color: #111111;
  font-weight: 400;
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
  color: #888888;
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

  font-weight: 400;
  font-size: 16px;
  line-height: 22px;

  background-color: transparent;

  outline: none;
  border: none;
  cursor: pointer;
  :hover {
    box-shadow: 7px 13px 14px rgba(116, 177, 232, 0.24);
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }

  @media screen and (min-width: 768px) {
    left: 20px;
    bottom: 21px;
  }

  @media screen and (min-width: 1280px) {
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
  background-color: transparent;
  :hover {
    box-shadow: 7px 13px 14px rgba(116, 177, 232, 0.24);
  }
`;

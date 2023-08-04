import styled from 'styled-components';

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
  border: 2px solid var(--main-clr-blue);
  font-size: 16px;
  color: var(--white-bckg-clr);
  background-color: var(--main-clr-blue);
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  cursor: pointer;
  svg {
    fill: var(--white-bckg-clr);
  }

  :hover {
    svg {
      fill: var(--white-bckg-clr);
    }
    background: var(--main-clr-gr_blue);
    border: none;
  }
`;

export const Pawprint = styled.svg`
  margin-left: 12px;
`;
export const BtnCancelArrow = styled.button`
  height: 40px;
  width: 124px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  border: none;
  color: var(--main-clr-blue);
  background-color: transparent;
  cursor: pointer;
  :hover {
    border: solid 2px var(--main-clr-blue);
    border-radius: 40px;
    box-shadow: 7px 13px 14px var(--big-shadow);
  }
`;
export const ArrowLeft = styled.svg`
  stroke: var(--main-clr-blue);
  margin-right: 12px;
`;
export const BtnBackArrow = styled.button`
  height: 40px;
  width: 124px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  border: none;
  color: var(--main-clr-blue);
  background-color: transparent;
  cursor: pointer;
  :hover {
    border: solid 2px var(--main-clr-blue);
    border-radius: 40px;
    box-shadow: 7px 13px 14px var(--big-shadow);
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
  background: var(--main-clr-blue);
  color: var(--main-bckg-clr);
  box-shadow: 3px 8px 14px var(--small-shadow);

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
    background: var(--main-clr-gr_blue);
  }
`;

export const PetInfoStyle = styled.div`
  height: 28px;
  width: 80px;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--main-clr-blue-light);
  border: none;
  color: var(--main-accent-text-clr);
`;
export const PetInfoNoticesStyle = styled.div`
  height: 28px;
  width: 80px;
  border-radius: 16px;
  display: flex;
  padding-left: 4px;
  align-items: center;
  background-color: var(--main-clr-blue-light);
  border: none;
  color: var(--main-accent-text-clr);
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
  background-color: var(--main-clr-blue-light);
  border: none;
  color: var(--main-accent-text-clr);
`;
export const City = styled.svg`
  fill: none;
  stroke: var(--main-clr-blue);
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

export const StyledEditPhotoBtn = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 94px;
  padding: 0;
  border: none;
  background-color: transparent;
  border: none;
  color: var(--main-accent-text-clr);
  font-weight: 400;
  font-size: 12px;
  line-height: calc(22 / 12);
  letter-spacing: 0.04em;
  cursor: pointer;
`;

export const SVG = styled.svg`
  fill: ${props => props.fill || 'none'};
  stroke: ${props => props.stroke || 'none'};
`;

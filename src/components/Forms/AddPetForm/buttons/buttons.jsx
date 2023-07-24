import icons from '../../../../images/Icons/sprite.svg';

import {
  ArrowLeft,
  PetFormBtn,
  BtnCancelArrow,
  BtnBackArrow,
  City,
  Pawprint,
  PetInfoStyle,
  TexStyletInfo,
  PetCategoryStyle,
  TexCategoyInfo,
  PetInfoNoticesStyle,
} from '../buttons/buttons.styled';

export const SvgPawprint = () => {
  return (
    <Pawprint width={24} height={24}>
      <use href={icons + '#pawprint 1'}></use>
    </Pawprint>
  );
};

export const SvgCancel = () => {
  return (
    <ArrowLeft width={24} height={24}>
      <use href={icons + '#arrow-left'}></use>
    </ArrowLeft>
  );
};

export const SvgLocation = () => {
  return (
    <City width={24} height={24}>
      <use href={icons + '#location-1'}></use>
    </City>
  );
};
export const SvgClock = () => {
  return (
    <City width={24} height={24}>
      <use href={icons + '#clock'}></use>
    </City>
  );
};
export const SvgMale = () => {
  return (
    <City width={24} height={24}>
      <use href={icons + '#male'}></use>
    </City>
  );
};
export const SvgFemale = () => {
  return (
    <City width={24} height={24}>
      <use href={icons + '#female'}></use>
    </City>
  );
};
export const SvgAge = () => {
  return (
    <City width={24} height={24}>
      <use href={icons + '#location-1'}></use>
    </City>
  );
};

export const PetInfo = ({ Svg, text, onClick }) => {
  return (
    <>
      <PetInfoStyle onClick={onClick}>
        <Svg />
        <TexStyletInfo> {text}</TexStyletInfo>
      </PetInfoStyle>
    </>
  );
};
export const PetNoticesInfo = ({ Svg, text, onClick }) => {
  return (
    <>
      <PetInfoNoticesStyle onClick={onClick}>
        <Svg />
        <TexStyletInfo> {text}</TexStyletInfo>
      </PetInfoNoticesStyle>
    </>
  );
};
export const PetCategory = ({ text, onClick }) => {
  return (
    <>
      <PetCategoryStyle onClick={onClick}>
        <TexCategoyInfo> {text}</TexCategoyInfo>
      </PetCategoryStyle>
    </>
  );
};

//

export const BtnDone = () => {
  return (
    <>
      <PetFormBtn type="submit">
        Done
        <SvgPawprint />
      </PetFormBtn>
    </>
  );
};
export const BtnNext = ({ onClick }) => {
  return (
    <>
      <PetFormBtn type="button" onClick={onClick}>
        Next
        <SvgPawprint />
      </PetFormBtn>
    </>
  );
};
export const BtnCancel = ({ onClick }) => {
  return (
    <>
      <BtnCancelArrow type="button" onClick={onClick}>
        <SvgCancel />
        Cancel
      </BtnCancelArrow>
    </>
  );
};
export const BtnBack = ({ onClick }) => {
  return (
    <>
      <BtnBackArrow type="button" onClick={onClick}>
        <SvgCancel />
        Back
      </BtnBackArrow>
    </>
  );
};

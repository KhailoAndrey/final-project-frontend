import { t } from 'i18next';
import icons from '../../../../images/Icons/sprite.svg';
import paw from '../../../../images/Icons/symbol-defs.svg';

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
  StyledEditPhotoBtn,
  SVG,
} from '../buttons/buttons.styled';

export const SvgPawprint = () => {
  return (
    <Pawprint width={24} height={24}>
      <use href={paw + '#icon-paw'}></use>
    </Pawprint>
  );
};

const EditPhotoIcon = props => {
  return (
    <SVG width={24} height={24} stroke={`#54adff`} {...props}>
      <use href={icons + '#camera'}></use>
    </SVG>
  );
};

export const EditPhotoBtn = ({ onClick, isEditingBlocked }) => {
  return (
    <>
      <StyledEditPhotoBtn
        type="button"
        onClick={onClick}
        disabled={isEditingBlocked}
      >
        <EditPhotoIcon />
        Edit Photo
      </StyledEditPhotoBtn>
    </>
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
    <City width={22} height={22}>
      <use href={icons + '#male'}></use>
    </City>
  );
};
export const SvgFemale = () => {
  return (
    <City width={22} height={22}>
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

export const BtnDone = () => {
  return (
    <>
      <PetFormBtn type="submit">
        {t('done')}
        <SvgPawprint />
      </PetFormBtn>
    </>
  );
};
export const BtnNext = ({ onClick }) => {
  return (
    <>
      <PetFormBtn type="button" onClick={onClick}>
        {t('next')}
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
        {t('cancel')}
      </BtnCancelArrow>
    </>
  );
};
export const BtnBack = ({ onClick }) => {
  return (
    <>
      <BtnBackArrow type="button" onClick={onClick}>
        <SvgCancel />
        {t('back')}
      </BtnBackArrow>
    </>
  );
};

import { NoPetsImg, NoPetsWrap } from './NoPetsContainer.styled';
import pets from '../../images/NoNotice/pets.gif';

export const NoPetsContainer = () => {
  return (
    <NoPetsWrap>
      <NoPetsImg alt="pets" src={pets} />
    </NoPetsWrap>
  );
};

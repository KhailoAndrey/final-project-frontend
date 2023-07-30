import styled from 'styled-components';

export const PetItem = styled.li`
  /* width: 280px; */
  padding: 16px 20px 40px 20px;
  box-shadow: 3px 8px 14px var(--small-shadow);
  background-color: var(--white-bckg-clr);
  border-radius: 20px;

  @media screen and (min-width: 768px) {
    height: 100%;
    max-width: 704px;
    display: flex;
    align-items: flex-start;
    padding: 20px;
    gap: 20px;
    border-radius: 40px;
  }

  @media screen and (min-width: 1280px) {
    /* width: 821px; */
    padding: 20px;
    gap: 32px;
  }

  &:hover,
  &:focus {
    box-shadow: 3px 8px 14px 0px var(--big-shadow);
  }
`;

export const ImgContainer = styled.div`
  width: 240px;
  height: 240px;

  @media screen and (min-width: 768px) {
    max-width: 128px;
    max-height: 128px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 161px;
    max-height: 161px;
  }
`;

export const PetPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  transition: transform var(--fast-animation);

  &:focus,
  &:hover {
    transform: scale(1.2);
  }
`;

export const ListPets = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 12px;

  @media screen and (min-width: 1280px) {
  }
`;

export const Title = styled.p`
  font-family: Manrope;
  font-weight: 700;
  font-size: 14px;

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    font-weight: 600;
  }
`;
export const Span = styled.span`
  font-family: Manrope;
  font-size: 14px;
  font-weight: 400;

  @media screen and (min-width: 1280px) {
    font-size: 16px;
  }
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
`;

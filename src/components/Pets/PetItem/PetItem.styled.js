import styled from 'styled-components';

export const PetItem = styled.li`
  width: 100%;
  padding-top: 16px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 40px;
  box-shadow: 3px 8px 14px var(--small-shadow);
  background-color: var(--white-bckg-clr);
  border-radius: 20px;
  @media (min-width: 768px) {
    padding: 20px;
    display: flex;
    align-items: center;
    gap: 30px;
    border-radius: 40px;
  }
`;
export const PetImage = styled.div`
  background-color: lightgrey;
  background-image: url(${props => props.src});
  background-size: cover;
  background-repeat: no-repeat;

  width: 240px;
  height: 240px;
  border-radius: 20px;

  @media (min-width: 768px) {
    width: 128px;
    height: 128px;
  }

  @media (min-width: 1280px) {
    width: 160px;
    /* height: 160px; */
    border-radius: 40px;
  }
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 16px;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;

  @media (min-width: 768px) {
    top: 4px;
    right: 4px;
  }
`;
export const ListPets = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;

  gap: 12px;
`;

export const Title = styled.div`
  font-family: 'Manrope';
  font-weight: 400;

  font-size: 14px;
  line-height: 1.57;

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28;
    color: var(--main-accent-text-clr);
  }
  @media (min-width: 1280px) {
    font-size: 16px;
    line-height: 1.375;
  }
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 20px;
`;

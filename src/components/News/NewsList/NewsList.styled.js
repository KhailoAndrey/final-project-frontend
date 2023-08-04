import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 60px;
  position: relative;
  margin-bottom: 68px;
`;

export const List = styled.ul`
  margin: 0 auto;
  padding: 0;
  display: flex;
  gap: 24px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media screen and (min-width: 768px) {
    gap: 31px;
    flex-direction: row;
    flex-wrap: wrap;
    width: 704px;
  }

  @media screen and (min-width: 1280px) {
    width: 1248px;
  }
`;

export const Notification = styled.div`
  font-size: 24px;
  color: black;
  margin: 0 auto;
  padding: 20px 0;
  display: flex;
  justify-content: center;
`;
export const NItem = styled.li`
  position: relative;
  height: 578px;
  background-color: var(--white-bckg-clr);
  box-shadow: 3px 8px 14px var(--small-shadow);
  border-radius: 20px;
  transition: var(--default-animation);

  &:hover,
  &:focus {
    transform: scale(1.05);
  }

  @media screen and (min-width: 768px) {
    height: 556px;
    flex-basis: calc((100% - 32px) / 2);
  }

  @media screen and (min-width: 1280px) {
    height: 534px;
    flex-basis: calc((100% - 62px) / 3);
  }
  animation: moveOut var(--slow-animation) forwards ;
  :hover:before {
    animation: moveIn var(--slow-animation) forwards;
    animation-iteration-count: 1;
    animation-direction: alternate;
  }
  
  ::before {
    animation: moveOut var(--slow-animation) forwards ;
    position: absolute;
    content: '';
    top: -20px;
    display: block;
    height: 8px;
    width: 100%;
    background: var(--main-clr-gr_blue);
    border-radius: 40px;
    opacity: 1;

    @media screen and (min-width: 768px) {
      top: -22px;
    }
  }

  @keyframes moveIn {
    0% {
      opacity: 1;
      transform: scaleX(1);
    }
    100% {
      opacity: 0;
      transform: scaleX(0);
    }    
  }
  @keyframes moveOut {
    0% {
      opacity: 0;
      transform: scaleX(0);
    }
    100% {
      opacity: 1;
      transform: scaleX(1);
    }    
  }
`;

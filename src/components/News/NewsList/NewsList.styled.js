import styled from 'styled-components';

// export const NWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-wrap: wrap;
//   gap: 20px;

//   @media screen and (min-width: 768px) {
//     gap: 32px;
//     max-width: 1280px;
//     margin-left: auto;
//     margin-right: auto;
//   }
// `;

export const Container = styled.div`
  margin-top: 60px;
  position: relative;
`;

export const List = styled.ul`
  margin: 0 auto;
  padding: 0;
  display: flex;
  gap: 24px;
  flex-direction: column;
  /* justify-content: center; */
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
  background-color: #ffffff;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
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

  :hover:before {
    animation-name: move;
    animation-duration: 600ms;
    animation-timing-function: ease-in-out;
    animation-iteration-count: 2;
    animation-direction: alternate;
  }

  ::before {
    position: absolute;
    content: '';
    top: -20px;
    display: block;
    height: 8px;
    width: 100%;
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
    border-radius: 40px;
    opacity: 1;

    @media screen and (min-width: 768px) {
      top: -22px;
    }
  }

  @keyframes move {
    0% {
      opacity: 1;
      transform: translate(0%, 0%);
    }
    100% {
      opacity: 0;
      transform: translate(0%, -40%);
    }
  }
`;

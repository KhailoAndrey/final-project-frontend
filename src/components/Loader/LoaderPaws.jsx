import React from 'react';
import styled, { keyframes } from 'styled-components';
import svg from '../../images/Icons/symbol-defs.svg';

const spinAnimation = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
  background-color: transparent;
`;

const LoaderContainer = styled.div`
  position: relative;
  width: 300px;
  height: 100px; /* Встановлюємо висоту, що дозволить нам розмістити лапки в два ряди */
  display: flex;
  flex-wrap: wrap; /* Підтримка упаковки лапок в два ряди */
`;

const Paw = styled.div`
  /* position: relative; */
  position: absolute;
  width: 40px;
  height: 40px;
  opacity: 0;
  animation: ${spinAnimation} 2050ms ease-in-out infinite;
  fill: var(--main-clr-blue);
  transform-origin: 50% 50%; /* Задаємо точку, навколо якої будуть обертатись лапки */
  transform: rotate(
    ${props => props.rotation || '0'}deg
  ); /* Використовуємо властивість rotation для повороту */
`;

const LoaderPaws = () => {

  const pawData = [
    {
      top: '60%',
      left: 0,
      marginLeft: '0',
      animationDelay: '0s',
      rotation: '100',
    },
    {
      top: '0',
      left: '20%',
      marginTop: '0',
      animationDelay: '0.15s',
      rotation: '80',
    },
    {
      top: '60%',
      left: '40%',
      marginTop: '0',
      animationDelay: '0.3s',
      rotation: '100',
    },
    {
      top: '0',
      left: '60%',
      marginLeft: '0',
      animationDelay: '0.45s',
      rotation: '80',
    },
    {
      top: '60%',
      left: '80%',
      marginTop: '0',
      animationDelay: '0.6s',
      rotation: '100',
    },
    {
      top: '0',
      left: '100%',
      marginTop: '0',
      animationDelay: '0.75s',
      rotation: '80',
    },
  ];

  return (
    <Container>
      <LoaderContainer>
        {pawData.map((paw, index) => (
          <Paw
            key={index}
            style={{ ...paw, animationDelay: paw.animationDelay }}
            rotation={paw.rotation}
          >
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <use
                href={`${svg}#icon-paw-load`}
                width={24}
                height={24}
                id="heart"
              />
            </svg>
          </Paw>
        ))}
      </LoaderContainer>
    </Container>
  );
};

export default LoaderPaws;

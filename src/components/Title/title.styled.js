import styled from 'styled-components';

export const SectionTitle = styled.h1`
  font-family: Manrope;
  font-size: 24px;
  font-weight: 700;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`;

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    width: 704px;
    margin-top: 80px;
  }

  @media screen and (min-width: 1280px) {
    width: 1248px;
  }
`;

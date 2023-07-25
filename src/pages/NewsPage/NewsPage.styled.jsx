import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;

  @media screen and (max-width: 767px) {
    padding: 0 20px;
  }
  @media screen and (min-width: 768px) {
    padding: 0 32px;
    width: 768px;
  }
  @media screen and (min-width: 1280px) {
    padding: 0 16px;
    width: 1280px;
  }
`;
export const NTitle = styled.h1`
  margin-top: 40px;
  margin-bottom: 24px;

  text-align: center;
  font-size: 24px;
  font-weight: 700;
  line-height: 66px;
  letter-spacing: 0.03em;
  color: var(--main-accent-text-clr);

  @media screen and (min-width: 768px) {
    font-size: 48px;
    margin-top: 70px;
    margin-bottom: 40px;
  }
`;

import styled from 'styled-components';

export const LangBox = styled.div`
  gap: 8px;
  display: flex;
  margin-left: auto;
  color: var(--main-accent-text-clr);
  margin-right: 10px;
  
  @media screen and (min-width: 768px) {
    gap: 0;
   }
  
  @media screen and (min-width: 1280px) {
    margin-right: 30px;
    gap: 8px;
  }

  button {
    cursor: pointer;
    border: none;
    background-color: var(--main-bckg-clr);
    width: 28px;
    height: 28px;
    border-radius: 50%;
    gap: 8px;
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.8px;
    color: var(--main-text-clr);
    :hover {
      background-color: var(--btn-clr-fon);
      color: var(--main-clr-blue);
      box-shadow: var(--big-shadow);
    }

    @media screen and (min-width: 768px) {
      width: 40px;
      height: 40px;
      font-size: 20px;
    }
    @media screen and (min-width: 1280px) {
         font-size: 22px;
  }
  }
  .active {
    color: var(--main-clr-yellow);
  }
`;

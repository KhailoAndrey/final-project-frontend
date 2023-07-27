import styled from 'styled-components';

export const LangBox = styled.div`
  gap: 8px;
  display: flex;
  margin-left: auto;
  margin-right: 10px;
  color: var(--main-accent-text-clr);

  button {
    cursor: pointer;
    border: none;
    background-color: var(--main-bckg-clr);
    width: 28px;
    height: 28px;
    border-radius: 50%;
    gap: 8px;
    font-family: Manrope;
    font-size: 20px;
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
      font-size: 24px;
    }
  }
  .active {
    color: var(--main-clr-yellow);
  }
  @media screen and (min-width: 1280px) {
    margin-right: 40px;
  }
`;

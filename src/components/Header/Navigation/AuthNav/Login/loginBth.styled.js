import styled from "styled-components";

export const ButtonLog = styled.button`
  border-radius: 40px;
  border: 2px solid var(--main-clr-yellow);
  background: var(--main-clr-yellow);
  display: flex;
  width: 165px;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;

  color: #fef9f9;
  font-family: Manrope;
  font-size: 16px;
  font-weight: 700;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;
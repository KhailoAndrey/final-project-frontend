import styled from "styled-components";

export const Button = styled.button`
  border-radius: 40px;
  background: var(--main-clr-blue);
  display: flex;
  width: 129px;
  /* justify-content: center;
  align-items: center; */
  gap: 8px;
  border: 0;
  text-decoration: none;
  cursor: pointer;

  padding: 8px 20px;
  /* justify-content: center;
  align-items: center;
  gap: 8px; */
  color: #fef9f9;
  font-family: Manrope;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.64px;

  &:hover,
  &:focus {
    background: linear-gradient(315deg, #419ef1 0%, #9bd0ff 100%);
  }
`;
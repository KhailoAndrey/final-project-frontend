import styled from "styled-components";

export const NoticeNavContainer = styled.div`
  display: flex;
  width: 280px;
  justify-content: space-between;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    width: 704px;
    margin-top: 40px;
  }

  @media screen and (min-width: 1280px) {
    width: 1248px;
  }
`;
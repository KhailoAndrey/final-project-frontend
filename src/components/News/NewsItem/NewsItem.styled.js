import styled from 'styled-components';

export const NContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 12px;
  height: 310px;
  @media screen and (min-width: 768px) {
    height: 266px;
  }
`;
export const NImgWrapper = styled.div`
  height: 252px;
  width: 100%;
  margin-bottom: 16px;
  position: relative;
`;
export const NImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 20px;

  @media screen and (min-width: 1280px) {
    border-radius: 0px;
  }
`;
export const NTitle = styled.h2`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; 
  white-space: pre-wrap; 
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: -0.01em;
  color: var(--main-accent-text-clr);
`;
export const NText = styled.p`
  margin-top: 16px;

  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: var(--main-accent-text-clr);
`;
export const NflexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const NDate = styled.span`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: var(--main-form-clr);
`;
export const NUrl = styled.a`
  text-decoration: none;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  text-align: right;
  color: var(--main-clr-blue);
  transition: var(--default-animation);

  &:hover,
  &:focus {
    color: var(--main-clr-yellow);
  }
`;

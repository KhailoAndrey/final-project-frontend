import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FIWrapper = styled.div`
  width: 280px;
  height: 240px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  border-radius: 40px;
  background: var(--white-bckg-clr, #fff);
  box-shadow: 3px 8px 14px 0px var(--small-shadow);
`;
export const FITitle = styled(Link)`
  text-decoration: none;
  color: var(--main-clr-blue);
  text-align: center;
  font-family: Manrope;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 16px;
`;
export const FIContainer = styled.div`
  margin-top: 16px;
  padding: 0 12px;
  display: flex;
  gap: 12px;
`;
export const FIImage = styled.div`
  width: 100px;
  height: 68px;
`;
export const FIInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const FIText = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FITTitle = styled.span`
  color: var(--main-accent-text-clr, #111);
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const FITData = styled.span`
  color: var(--main-accent-text-clr, #111);
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

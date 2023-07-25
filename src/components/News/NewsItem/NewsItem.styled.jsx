import styled from 'styled-components';
import { ReactComponent as Notify } from '../../../images/news/plugnews.svg';

export const ItemN = styled.li`
  width: 100%;
  position: relative;
  border-radius: 20px;
  background-color: rgb(253, 247, 242);
  box-shadow:  rgba(136, 198, 253, 0.19) 3px 8px 14px;
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: 0;
    width: 100%;
    height: 8px;
    border-radius: 4px;
    background: linear-gradient(290.46deg, rgb(65, 158, 241) 0%, rgb(155, 208, 255) 107.89%);;
    @media screen and (min-width: 768px) {
      top: -22px;
    }
  }
  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 32px) / 2);
  }
  @media screen and (min-width: 1280px) {
    flex-basis: calc((100% - 2 * 32px) / 3);
  }
  .title {
    margin-left: 0;
    margin-bottom: 16px;
    height:66px;
    font-weight: 700;
    font-size: 24px};
    line-height: 1.37;
    letter-spacing: -0.01em;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: rgb(17, 17, 17);
  }
  .descr {
    font-weight: 400;
    line-height: 1.37;
    color:rgb(17, 17, 17);
    height: 110px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }
`;

export const WrapImg = styled.div`
  overflow: hidden;
  margin-bottom: 16px;
  border-radius: 20px;
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
`;
export const Plug = styled(Notify)`
  width: 280px;
  height: 280px;
  fill: #54adff;
`;

export const Wrap = styled.div`
  margin-bottom: 40px;
  padding-left: 8px;
  padding-right: 8px;
`;

export const WrapBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  padding-left: 8px;
  padding-right: 8px;
`;
export const Date = styled.p`
  font-weight: 400;
  line-height: 1.37;
  color: rgb(136, 136, 136);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`;

export const Link = styled.a`
  padding: 0;
  line-height: 1.37;
  color: rgb(84, 173, 255);
  transition: transform 250ms ease-in-out, border 250ms ease-in-out;
  &:hover,
  &:focus {
    color: rgb(136, 136, 136);
  }
`;

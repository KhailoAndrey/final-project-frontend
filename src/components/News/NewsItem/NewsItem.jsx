import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import {
  NContent,
  NDate,
  NImg,
  NImgWrapper,
  NText,
  NTitle,
  NUrl,
  NflexContainer,
} from './NewsItem.styled';

const NewsItem = ({ news }) => {
  const { t } = useTranslation();

  const { url = '', text, title, imgUrl, date } = news;

  const formatDate = dateString => {
    const date = new Date(dateString);

    const day = date.getDate().toString().padStart(2, '0'); 
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
    const year = date.getFullYear().toString();

    const formattedDate = `${day}.${month}.${year}`;
    return formattedDate;
  };

  const formatedDate = formatDate(date);

  return (
    <>
      <NImgWrapper>
        <NImg src={imgUrl} alt="news" />
      </NImgWrapper>
      <NContent>
        <>
          <NTitle>{title}</NTitle>
          <NText>{text}</NText>
        </>
        <NflexContainer>
          <NDate>{formatedDate}</NDate>
          <NUrl target="_blank" rel="noreferrer" href={url}>
            {t('read_more')}
          </NUrl>
        </NflexContainer>
      </NContent>
    </>
  );
};

NewsItem.propTypes = {
  news: PropTypes.shape({
    url: PropTypes.string,
    text: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default NewsItem;

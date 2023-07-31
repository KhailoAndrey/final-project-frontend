import { useTranslation } from 'react-i18next';
import { nanoid } from 'nanoid';
import NewsItem from '../NewsItem/NewsItem';

import { Container, List, Notification, NItem } from './NewsList.styled';

const NewsList = ({ news }) => {
  const { t } = useTranslation();

  if (!news || news.length === 0) {
    return (
      <Container>
        <Notification>
          <p>{t('no_news')}</p>
        </Notification>
      </Container>
    );
  }

  const currentNews = news.slice(0, 12);

  return (
    <Container>
      <List>
        {currentNews.map(news => (
          <NItem key={nanoid()}>
            <NewsItem news={news} />
          </NItem>
        ))}
      </List>
    </Container>
  );
};

export default NewsList;

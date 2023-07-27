import NewsItem from '../NewsItem/NewsItem';
import { nanoid } from 'nanoid';
import { Container, List, Notification, NItem } from './NewsList.styled';

const NewsList = ({ news }) => {
  if (!news || news.length === 0) {
    return (
      <Container>
        <Notification>
          <p>No posts for your query</p>
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

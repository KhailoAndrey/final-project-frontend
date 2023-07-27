import { useTranslation } from 'react-i18next';
import { Title } from 'components/Title/title';
import News from 'components/News/News';
import { NewsPageContainer } from './NewsPage.styled';

const NewsPage = () => {
  const { t } = useTranslation();

  return (
    <NewsPageContainer>
      <Title text={`${t('header_news')}`} />
      <News />
    </NewsPageContainer>
  );
};

export default NewsPage;

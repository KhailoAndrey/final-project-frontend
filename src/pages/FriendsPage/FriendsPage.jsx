import { useTranslation } from 'react-i18next';
import { Title } from 'components/Title/title';
import OurFriends from 'components/OurFriends/OurFriends';

const FriendsPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Title text={`${t('our_friends')}`} />
      <OurFriends />
    </>
  );
};
export default FriendsPage;

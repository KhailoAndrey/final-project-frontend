import { useTranslation } from 'react-i18next';
import { NFText, NFImg, NFDivWrap, Button, PawIcon } from './NotFound.styled';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const onClick = () => {
    navigate('/');
  };

  return (
    <>
      <NFDivWrap>
        <NFText>{t('title_404')}</NFText>
        <NFImg />
        <Button type="button" onClick={() => onClick()}>
          {t('to_mane')}
          <PawIcon />
        </Button>
      </NFDivWrap>
    </>
  );
};

export default NotFound;

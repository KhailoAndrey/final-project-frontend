import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from 'redux/auth/selectors';
import { CatContainer, Input, Label } from './NoticesCatagoriesNav.styled';

const NoticesCatagoriesNav = ({ setCategory, setPage }) => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [selectedValue, setSelectedValue] = useState('sell');

  const params = useParams();

  useEffect(() => {
    if (params.categoryName) {
      setSelectedValue(params.categoryName);
    } else {
      setSelectedValue('sell');
    }
  }, [params.categoryName]);

  const handleRadioChange = () => {
    setSelectedValue(params.categoryName);
  };

  const onClick = e => {
    const category = e.target.value;
    setCategory(category);
    setPage(1);
    navigate(`/notices/${category}`);
  };

  return (
    <CatContainer>
      <Input
        onClick={e => onClick(e)}
        type="radio"
        id="radio1"
        name="radios"
        value="sell"
        checked={selectedValue === 'sell'}
        onChange={handleRadioChange}
      ></Input>
      <Label htmlFor="radio1">{t('sell')}</Label>

      <Input
        onClick={e => onClick(e)}
        type="radio"
        id="radio2"
        name="radios"
        value="lost-found"
        checked={selectedValue === 'lost-found'}
        onChange={handleRadioChange}
      ></Input>
      <Label htmlFor="radio2">{t('lost_found')}</Label>

      <Input
        onClick={e => onClick(e)}
        type="radio"
        id="radio3"
        name="radios"
        value="for-free"
        checked={selectedValue === 'for-free'}
        onChange={handleRadioChange}
      ></Input>
      <Label htmlFor="radio3">{t('in_good_hands')}</Label>

      {isLoggedIn && (
        <>
          <Input
            onClick={e => onClick(e)}
            type="radio"
            id="radio4"
            name="radios"
            value="favorite"
          ></Input>
          <Label htmlFor="radio4">{t('favorite_ads')}</Label>

          <Input
            onClick={e => onClick(e)}
            type="radio"
            id="radio5"
            name="radios"
            value="my-ads"
          ></Input>
          <Label htmlFor="radio5">{t('my_ads')}</Label>
        </>
      )}
    </CatContainer>
  );
};

export default NoticesCatagoriesNav;

import React, { useContext } from 'react';
import { LanguageContext } from 'utils/LanguageContext';
import { LangBox } from './LangBtn.styled';

const LangBtn = () => {
  const { currentLanguage, changeLanguage } = useContext(LanguageContext);
  const handleLanguageChange = lang => {
    changeLanguage(lang);
  };
  return (
    <LangBox>
      <button
        onClick={() => handleLanguageChange('ua')}
        className={`${currentLanguage === 'ua' ? 'active' : ''}`}
      >
        UA
      </button>
      <button
        onClick={() => handleLanguageChange('en')}
        className={`${currentLanguage === 'en' ? 'active' : ''}`}
      >
        EN
      </button>
    </LangBox>
  );
};

export default LangBtn;

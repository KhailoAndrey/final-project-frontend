import { useEffect, useState } from 'react';
import { ScrollBtn } from './ToTopBtn.styled';
import { useTranslation } from 'react-i18next';

const ToTopButton = () => {
  const { t } = useTranslation();
  const [isBtnShow, setIsBtnShow] = useState(false);

  const handleScroll = () => {
      if (window.scrollY>0) {
      setIsBtnShow(true);
      } else {
      setIsBtnShow(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      // left: 0,
      behavior: 'smooth',
    });
  };
    useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
      {isBtnShow && (
        <ScrollBtn type="button" onClick={scrollToTop}>
          {t('btn_up')}
        </ScrollBtn>
      )} 
    </div>
  );
};
export default ToTopButton;

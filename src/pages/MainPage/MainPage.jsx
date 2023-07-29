
import { useTranslation } from 'react-i18next';
import * as mainImg from '../../images/Home';
import { Wrapper, Title, Picture, Img } from './MainPage.styled';




const MainPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Wrapper>
        <Title>{t('main')}</Title>
        <Picture>
          <source
            srcSet={`${mainImg.home_mob} 1x, ${mainImg.home_mob2} 2x`}
            width="474"
            media="(max-width: 767px)"
            type="image/webp"
          />
          <source
            srcSet={`${mainImg.home_mobile_1x} 1x, ${mainImg.home_mobile_2x} 2x`}
            width="474"
            media="(max-width: 767px)"
          />
          <source
            srcSet={`${mainImg.home_tab} 1x, ${mainImg.home_tab2} 2x`}
            width="985"
            media="(max-width: 1279px)"
            type="image/webp"
          />
          <source
            srcSet={`${mainImg.home_tablet_1x} 1x, ${mainImg.home_tablet_2x} 2x`}
            width="985"
            media="(max-width: 1279px)"
          />
          <source
            srcSet={`${mainImg.home_desk} 1x, ${mainImg.home_desk2} 2x`}
            // width="985"
            media="(min-width: 1280px)"
            type="image/webp"
          />
          <Img
            srcSet={`${mainImg.home_desktop_1x} 1x, ${mainImg.home_desktop_2x} 2x`}
            src={`${mainImg.home_desktop_1x}`}
            alt="hero dog cat pets"
            loading="lazy"
          />
        </Picture>
      </Wrapper>
    </>
  );
};

export default MainPage;

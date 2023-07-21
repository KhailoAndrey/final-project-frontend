import {
  Section,
  Container,
  Wrapper,
  Title,
  Picture,
  Img,
} from './MainPage.styled';
import * as mainImg from '../../images/Home';

const MainPage = () => {
  return (
    <>
      <Section>
        <Container>
          <Wrapper>
            <Title>Take good care of your small pets</Title>
            <Picture>
              <source
                srcSet={`${mainImg.home_mobile_1x} 1x, ${mainImg.home_mobile_2x} 2x`}
                width="474"
                media="(max-width: 767px)"
              />
              <source
                srcSet={`${mainImg.home_tablet_1x} 1x, ${mainImg.home_tablet_2x} 2x`}
                width="985"
                media="(max-width: 1279px)"
              />
              <Img
                srcSet={`${mainImg.home_desktop_1x} 1x, ${mainImg.home_desktop_2x} 2x`}
                src={`${mainImg.home_desktop_1x}`}
                alt="hero dog cat pets"
                loading="lazy"
              />
            </Picture>
          </Wrapper>
        </Container>
      </Section>
    </>
  );
};

export default MainPage;

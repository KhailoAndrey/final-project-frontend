import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import {
  Stage,
  StageWrapper,
  Indicator,
  Wrapper,
} from './StageIndicator.styled';

export const StageIndicator = ({ stage, category }) => {
  const { t } = useTranslation();

  return (
    <Wrapper data-category={category}>
      <StageWrapper>
        <Stage stage={stage} datastage={1}>
          {t('choose_option')}
        </Stage>
        <Indicator stage={stage} datastage={1}></Indicator>
      </StageWrapper>
      <StageWrapper>
        <Stage stage={stage} datastage={2}>
          {t('details')}
        </Stage>
        <Indicator stage={stage} datastage={2}></Indicator>
      </StageWrapper>
      <StageWrapper>
        <Stage stage={stage} datastage={3}>
          {t('more_info')}
        </Stage>
        <Indicator stage={stage} datastage={3}></Indicator>
      </StageWrapper>
    </Wrapper>
  );
};

StageIndicator.propTypes = {
  stage: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
};

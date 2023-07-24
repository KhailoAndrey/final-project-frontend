import PropTypes from 'prop-types';
import {
  Stage,
  StageWrapper,
  Indicator,
  Wrapper,
} from './StageIndicator.styled';

export const StageIndicator = ({ stage, category }) => {
  return (
    <Wrapper data-category={category}>
      <StageWrapper>
        <Stage stage={stage} datastage={1}>
          Choose option
        </Stage>
        <Indicator stage={stage} datastage={1}></Indicator>
      </StageWrapper>
      <StageWrapper>
        <Stage stage={stage} datastage={2}>
          Personal details
        </Stage>
        <Indicator stage={stage} datastage={2}></Indicator>
      </StageWrapper>
      <StageWrapper>
        <Stage stage={stage} datastage={3}>
          More info
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

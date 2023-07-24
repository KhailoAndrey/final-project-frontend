import PropTypes from 'prop-types';
import { SectionTitle, ContainerTitle } from './title.styled';

export const Title = ({ text = 'Page title' }) => {
  return (
    <ContainerTitle>
      <SectionTitle>{text}</SectionTitle>
    </ContainerTitle>
  );
};

Title.propTypes = {
  text: PropTypes.string,
};

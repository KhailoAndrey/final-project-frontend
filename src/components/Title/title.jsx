import PropTypes from 'prop-types';
import { SectionTitle } from './title.styled';

export const Title = ({ text = "Page title"}) => {
    return <SectionTitle>{text}</SectionTitle>
}

Title.propTypes = {
    text: PropTypes.string,
};

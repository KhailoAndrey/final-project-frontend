import { t } from 'i18next';
import { CommentsLabel, CommentInput, ErrWrapper } from './CommentField.styled';
import PropTypes from 'prop-types';

export const CommentField = ({
  onChange,
  onBlur,
  value,
  errors,
  touched,
  category,
  emulTouch,
}) => {
  const isFieldInvalid =
    (errors.comments && touched.comments) ||
    (errors.comments && emulTouch.includes('comments'));
  return (
    <CommentsLabel>
      {t('comment')}
      <CommentInput
        name="comments"
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        placeholder={t('comment_ph')}
        data-invalid={isFieldInvalid}
        data-category={category}
      />
      {isFieldInvalid && <ErrWrapper>{errors.comments}</ErrWrapper>}
    </CommentsLabel>
  );
};

CommentField.propTypes = {
  emulTouch: PropTypes.arrayOf(PropTypes.string).isRequired,
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  category: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  value: PropTypes.string,
};

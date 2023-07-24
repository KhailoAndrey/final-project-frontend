import { useState } from 'react';
import { useFormikContext } from 'formik';
import { PlusIcon } from '../Icon/Icon';
import {
  PhotoWrapper,
  UploadFileLabel,
  UploadFile,
  Photo,
  ErrWrapper,
  PhotoPlaceWrapper,
} from './UploadInput.styled';
import PropTypes from 'prop-types';

export const UploadInput = ({ errors, touched, category }) => {
  const [photoPreview, SetPhotoPreview] = useState(null);
  const { setFieldValue } = useFormikContext();

  const handleUploadFile = e => {
    const uploadFile = e.currentTarget.files[0];
    setFieldValue('file', uploadFile);
    const preview = uploadFile ? URL.createObjectURL(uploadFile) : null;
    SetPhotoPreview(preview);
  };

  const isFieldInvalid = errors.file && touched.file;

  return (
    <UploadFileLabel data-category={category}>
      Add photo
      <UploadFile
        type="file"
        name="file"
        accept="image/*"
        id="file"
        onChange={handleUploadFile}
      />
      <PhotoPlaceWrapper>
        <PhotoWrapper>
          {photoPreview && <Photo src={photoPreview} />}
          {!photoPreview && <PlusIcon iconName="#icon-plus" />}
        </PhotoWrapper>
        {isFieldInvalid && <ErrWrapper>{errors.file}</ErrWrapper>}
      </PhotoPlaceWrapper>
    </UploadFileLabel>
  );
};

UploadInput.propTypes = {
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  category: PropTypes.string.isRequired,
};

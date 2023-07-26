import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import {
  AvatarBtn,
  AvatarContainer,
  ImgWrapper,
  PhotoWrapper,
} from './AvatarCard.styled';
import axios from 'axios';

function AvatarCard({ isEdit }) {
  const user = useSelector(state => state.auth.user);

  console.log(user._id);

  const [imageUrl, setImageUrl] = useState(null);
  const [file, setFile] = useState(null);
  const [editing, setEditing] = useState(false);

  const handleFileChange = e => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) {
      return;
    }

    if (!selectedFile.type.startsWith('image/')) {
      alert('Please select an image file.');
      return;
    }

    const imageUrl = URL.createObjectURL(selectedFile);
    setImageUrl(imageUrl);
    setFile(selectedFile);
    setEditing(true);
    console.log(`selectedFile: ${{ selectedFile }}`);
  };

  const handleConfirm = () => {
    // Here, you can save the image using the `file` object
    // For example, you can send it to the server or save it in the state.
    // For this example, we will just log the selected file.
    console.log('Image saved:', file);
    console.log(typeof file);

    // ====================================send
    const formData = new FormData();
    formData.append('_id', user._id);
    formData.append('avatar', file);
    axios.defaults.baseURL = 'https://final-project-backend-4o0r.onrender.com/';
    const patchAvatar = async () => {
      try {
        const res = await axios.patch(`api/users/avatar`, formData);
        const avatarURL = await res.data;
        console.log(`NewAvatarURL: ${avatarURL} `);
      } catch (error) {
        console.log(error.message);
      }
    };
    patchAvatar();
    // ====================================

    // Reset state to show the "Edit foto" button again
    setImageUrl(null);
    setFile(null);
    setEditing(false);
  };

  const handleRemove = () => {
    // Reset state to show the "Edit foto" button again
    setImageUrl(null);
    setFile(null);
    setEditing(false);
  };

  return (
    <AvatarContainer>
      <ImgWrapper>
        <PhotoWrapper>
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="Avatar"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : (
            <img
              src={user.avatarURL}
              alt="Avatar"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          )}
        </PhotoWrapper>

        {isEdit && !editing ? (
          <AvatarBtn>
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
            <label htmlFor="fileInput">Edit foto</label>
          </AvatarBtn>
        ) : null}

        {isEdit && editing ? (
          <AvatarBtn>
            <button onClick={handleConfirm}>Confirm</button>
            <button onClick={handleRemove}>Remove</button>
          </AvatarBtn>
        ) : null}
      </ImgWrapper>
    </AvatarContainer>
  );
}

export default AvatarCard;

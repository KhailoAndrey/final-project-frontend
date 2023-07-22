import { AddPetBtn } from 'helpers/AddPetButton/addPetBtn';
import { AttentionModal } from 'components/Modals/ModalAttention/modalAttention';
import { useState } from 'react';

const NoticesPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      NoticesPage
      <AddPetBtn setShowModal={setShowModal} />
      {showModal && <AttentionModal setShowModal={setShowModal} />}
    </>
  );
};

export default NoticesPage;

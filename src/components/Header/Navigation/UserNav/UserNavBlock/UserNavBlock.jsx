import { useState } from 'react';
import { useAuth } from 'redux/auth/selectors';
import svg from '../../../../../images/Icons/symbol-defs.svg';
import { UserBlock, UserIcon, UserName } from './UserNavBlock.styled';

const UserNavBlock = () => {
  const [isModalOpen, setisModalOpen] = useState(false);
  const { user } = useAuth();

  return (
    <UserBlock>
      <UserIcon onClick={() => setisModalOpen(isModalOpen)}>
        <svg width={28} height={28}>
          <use
            href={`${svg}#icon-user`}
            style={{ stroke: 'var(--main-clr-yellow)' }}
            width={28}
            height={28}
          />
        </svg>
      </UserIcon>
      <UserName>{user.name}</UserName>
    </UserBlock>
  );
};

export default UserNavBlock;

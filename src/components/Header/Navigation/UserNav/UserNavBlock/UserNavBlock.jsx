import { useNavigate } from 'react-router-dom';
import { useAuth } from 'redux/auth/selectors';
import svg from '../../../../../images/Icons/symbol-defs.svg';
import { UserBlock, UserIcon, UserName } from './UserNavBlock.styled';

const UserNavBlock = ({ showName }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <UserBlock>
      <UserIcon onClick={() => navigate('/user')}>
        <svg width={28} height={28}>
          <use
            href={`${svg}#icon-user`}
            style={{ stroke: 'var(--main-clr-yellow)' }}
            width={28}
            height={28}
          />
        </svg>
      </UserIcon>
      <UserName showName={showName}>{user.name}</UserName>
    </UserBlock>
  );
};

export default UserNavBlock;

import { useEffect, useState } from 'react';
import { FriendsContainer } from './OurFriends.styles';
import OurFriendsList from './OurFriendsList/OurFriendsList';
import fetchFriends from 'fetch/friends';

const OurFriends = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchFriends();
        setFriends(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <FriendsContainer>
        <OurFriendsList friends={friends} />
      </FriendsContainer>
    </>
  );
};
export default OurFriends;

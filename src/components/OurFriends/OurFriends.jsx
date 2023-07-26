import { useEffect, useState } from 'react';
import fetchFriends from 'fetch/friends';
import OurFriendsList from './OurFriendsList/OurFriendsList';
import { FriendsContainer } from './OurFriends.styled';

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

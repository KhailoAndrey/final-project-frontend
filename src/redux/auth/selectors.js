import { useSelector } from 'react-redux';

const selectIsRefreshing = state => state.auth.isRefreshing;
const selectIsLoggedIn = state => state.auth.isLoggedIn;
const selectToken = state => state.auth.token;
const selectError = state => state.auth.error;
const selectUser = state => state.auth.user;
const selectNewUser = state => state.auth.newUser;

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);
  const error = useSelector(selectError);
  const newUser = useSelector(selectNewUser);
  return {
    isLoggedIn,
    isRefreshing,
    user,
    token,
    error,
    newUser,
  };
};

import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { unwrapResult } from '@reduxjs/toolkit'
import { getUserAsync, selectUserData, selectUserStatus, selectUserToken } from '../../redux/features/user/userSlice'
import { useReduxNotification } from '../../Hooks/useNotification'

const useAuth = () => {
  const dispatch = useDispatch();
  const { addError } = useReduxNotification();

  const authToken = useSelector(selectUserToken);
  const user = useSelector(selectUserData);
  const status = useSelector(selectUserStatus);
  const role = !user ? null : user.role;
  const isAdmin = user && user.role === 'admin';
  const loading = status === 'loading';

  const signUp = useCallback(async ({ email, password, walletAddress, publicKey }) => {
    try {
      const unwrappedResults = await dispatch(getUserAsync({ email, password, walletAddress, publicKey }));
      const result = unwrapResult(unwrappedResults);
      localStorage.setItem('userData', JSON.stringify(result))
    }
    catch (e) {
      console.log(e);
      addError("Error while signup. Please try Again", "Auth Error")
    }
  }, [addError, dispatch])

  return {
    signUp,
    authToken,
    user,
    role,
    isAdmin,
    loading
  }
}

export default useAuth;
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { allActionCreators } from "../store/reducers/action-creators";
import { AuthActionCreators } from "../store/reducers/auth/action-creators";

import { ThunkDispatch } from "redux-thunk";

export const useActions = () => {
  const dispatch = useDispatch();
  const { login, ...syncCreators } = allActionCreators;

  return bindActionCreators({ ...syncCreators }, dispatch);
};

export const useAsyncActions = () => {
  const dispatch = useDispatch<ThunkDispatch<{}, {}, any>>();

  const login = useCallback(
    (email: string, password: string) =>
      dispatch(AuthActionCreators.login(email, password)),
    [dispatch]
  );

  return {
    login,
  };
};
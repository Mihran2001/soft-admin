import {
  AuthActionEnum,
  SetAuthAction,
  SetErrorAction,
  SetIsLoadingAction,
  SetUserAction,
  RemoveUserAction,
} from "./types";
import { IUser } from "../../../models/IUser";
import { AppDispatch } from "../../index";
import axios from "axios";
// import UserService from "../../../api/UserService";
import { instance } from "../../../api/instance";
import { setSession } from "../../../helpers/setSession";
import { removeSession } from "../../../helpers/removeSession";

export const AuthActionCreators = {
  setUser: (user: IUser): SetUserAction => ({
    type: AuthActionEnum.SET_USER,
    payload: user,
  }),
  removeUser: (isAuth: boolean): RemoveUserAction => ({
    type: AuthActionEnum.REMOVE_USER,
    payload: isAuth,
  }),

  setIsAuth: (auth: boolean): SetAuthAction => ({
    type: AuthActionEnum.SET_AUTH,
    payload: auth,
  }),
  setIsLoading: (payload: boolean): SetIsLoadingAction => ({
    type: AuthActionEnum.SET_IS_LOADING,
    payload,
  }),
  setError: (payload: string): SetErrorAction => ({
    type: AuthActionEnum.SET_ERROR,
    payload,
  }),
  login:
    (username: string, password: string) => async (dispatch: AppDispatch) => {
      dispatch(AuthActionCreators.setIsLoading(true));
      try {
        const { data } = await instance.post("/auth/login", {
          email: username,
          password,
        });
        dispatch(AuthActionCreators.setIsAuth(true));
        setSession(data.token);
        return data;
      } catch (e) {
        dispatch(
          AuthActionCreators.setError("An error occurred while logging in")
        );
        throw e;
      } finally {
        dispatch(AuthActionCreators.setIsLoading(false));
      }
    },
  logout: () => (dispatch: AppDispatch) => {
    removeSession();
    dispatch(AuthActionCreators.removeUser(false));
  },
};

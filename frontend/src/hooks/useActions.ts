import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { allActionCreators } from "../store/reducers/action-creators";
import { AuthActionCreators } from "../store/reducers/auth/action-creators";

import { ThunkDispatch } from "redux-thunk";
import { AdminActionCreators } from "store/reducers/posts/action-creators";
import { IPostTableData } from "store/reducers/posts/types";

export const useActions = () => {
  const dispatch = useDispatch();
  const { login, createPost, editPost, deletePost, ...syncCreators } =
    allActionCreators;

  return bindActionCreators({ ...syncCreators }, dispatch);
};

export const useAsyncActions = () => {
  const dispatch = useDispatch<ThunkDispatch<{}, {}, any>>();

  const login = useCallback(
    (email: string, password: string) =>
      dispatch(AuthActionCreators.login(email, password)),
    [dispatch]
  );

  const setTabaleData = useCallback(
    (data: IPostTableData[]) =>
      dispatch(AdminActionCreators.setPostsTableData(data)),
    [dispatch]
  );

  const createPost = useCallback(
    (cratePostData: IPostTableData) =>
      dispatch(AdminActionCreators.createPost(cratePostData)),
    [dispatch]
  );

  const editPost = useCallback(
    (editPostData: IPostTableData) =>
      dispatch(AdminActionCreators.editPost(editPostData)),
    [dispatch]
  );

  const deletePost = useCallback(
    (id: string) => dispatch(AdminActionCreators.deletePost(id)),
    [dispatch]
  );

  return {
    login,
    createPost,
    editPost,
    deletePost,
    setTabaleData,
  };
};

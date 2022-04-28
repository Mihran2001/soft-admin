import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { allActionCreators } from "../store/reducers/action-creators";
import { AuthActionCreators } from "../store/reducers/auth/action-creators";

import { ThunkDispatch } from "redux-thunk";
import { PostsActionCreators } from "store/reducers/posts/action-creators";
import { IPostTableData } from "store/reducers/posts/types";
import { INewsTableData } from "store/reducers/news/types";
import { NewsActionCreators } from "store/reducers/news/action-creators";

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

  const setPostsTabaleData = useCallback(
    (data: IPostTableData[]) =>
      dispatch(PostsActionCreators.setPostsTableData(data)),
    [dispatch]
  );

  const createPost = useCallback(
    (cratePostData: IPostTableData) =>
      dispatch(PostsActionCreators.createPost(cratePostData)),
    [dispatch]
  );

  const editPost = useCallback(
    (editPostData: IPostTableData) =>
      dispatch(PostsActionCreators.editPost(editPostData)),
    [dispatch]
  );

  const deletePost = useCallback(
    (id: string) => dispatch(PostsActionCreators.deletePost(id)),
    [dispatch]
  );

  const setNewsTabaleData = useCallback(
    (data: INewsTableData[]) =>
      dispatch(NewsActionCreators.setNewsTabaleData(data)),
    [dispatch]
  );

  const createNews = useCallback(
    (crateNewsData: IPostTableData) =>
      dispatch(NewsActionCreators.createNews(crateNewsData)),
    [dispatch]
  );

  const editNews = useCallback(
    (editNewsData: IPostTableData) =>
      dispatch(NewsActionCreators.editNews(editNewsData)),
    [dispatch]
  );

  const deleteNews = useCallback(
    (id: string) => dispatch(NewsActionCreators.deleteNews(id)),
    [dispatch]
  );

  return {
    login,
    createPost,
    editPost,
    deletePost,
    setPostsTabaleData,
    setNewsTabaleData,
    createNews,
    editNews,
    deleteNews,
  };
};

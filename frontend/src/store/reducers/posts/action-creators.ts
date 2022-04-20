import {
  IPostTableData,
  SetTableDataAction,
  PostsActionEnum,
  ICreatePost,
  IEditPost,
  IDeletePost,
} from "./types";

export const AdminActionCreators = {
  setPostsTableData: (
    postsTableData: IPostTableData[]
  ): SetTableDataAction => ({
    type: PostsActionEnum.SET_POSTS_TABLE_DATA,
    payload: postsTableData,
  }),

  createPost: (postData: any): ICreatePost => ({
    type: PostsActionEnum.CREATE_POST,
    payload: postData,
  }),

  editPost: (postData: any): IEditPost => {
    return {
      type: PostsActionEnum.EDIT_POST,
      payload: postData,
    };
  },
  deletePost: (id: string): IDeletePost => ({
    type: PostsActionEnum.DELETE_POST,
    payload: id,
  }),
};

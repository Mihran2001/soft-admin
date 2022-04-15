import {
  IPostTableData,
  SetTableDataAction,
  PostsActionEnum,
  ICratePost,
} from "./types";

export const AdminActionCreators = {
  setPostsTableData: (
    postsTableData: IPostTableData[]
  ): SetTableDataAction => ({
    type: PostsActionEnum.SET_POSTS_TABLE_DATA,
    payload: postsTableData,
  }),
  // createPost: (postData: IPostTableData): ICratePost
};

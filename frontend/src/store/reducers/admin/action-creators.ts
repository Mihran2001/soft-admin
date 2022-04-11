import { IPostTableData, SetTableDataAction, AdminActionEnum } from "./types";

export const AdminActionCreators = {
  setPostsTableData: (
    postsTableData: IPostTableData[]
  ): SetTableDataAction => ({
    type: AdminActionEnum.SET_POSTS_TABLE_DATA,
    payload: postsTableData,
  }),
};

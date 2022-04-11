export interface IPostTableData {
  id: string;
  title: string;
  content: string;
  category: string;
  parentCategory: string;
  titleTag: string;
  metaDescription: string;
  url: string;
  image: string;
}

export enum AdminActionEnum {
  SET_POSTS_TABLE_DATA = "SET_POSTS_TABLE_DATA",
}

export interface IAdminState {
  postsTableData: IPostTableData[];
}

export interface SetTableDataAction {
  type: AdminActionEnum.SET_POSTS_TABLE_DATA;
  payload: IPostTableData[];
}

export type AdminAction = SetTableDataAction;

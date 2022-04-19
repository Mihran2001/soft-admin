export interface IPostTableData {
  id?: string;
  title: string;
  content?: string;
  category: string;
  parentCategory?: string;
  titleTag: string;
  metaDescription: string;
  url: string;
  image?: string;
}

export enum PostsActionEnum {
  SET_POSTS_TABLE_DATA = "SET_POSTS_TABLE_DATA",
  CREATE_POST = "CREATE_POST",
  EDIT_POST = "EDIT_POST",
}

export interface IPostsState {
  postsTableData: IPostTableData[];
}

export interface SetTableDataAction {
  type: PostsActionEnum.SET_POSTS_TABLE_DATA;
  payload: IPostTableData[];
}

export interface ICreatePost {
  type: PostsActionEnum.CREATE_POST;
  payload: IPostTableData;
}

export interface IEditPost {
  type: PostsActionEnum.EDIT_POST;
  payload: IPostTableData;
}

export type PostsAction = SetTableDataAction | ICreatePost | IEditPost;

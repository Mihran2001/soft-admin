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
}

export interface IPostsState {
  postsTableData: IPostTableData[];
}

export interface SetTableDataAction {
  type: PostsActionEnum.SET_POSTS_TABLE_DATA;
  payload: IPostTableData[];
}

export interface ICratePost {
  type: PostsActionEnum.CREATE_POST;
  payload: IPostTableData;
}

export type PostsAction = SetTableDataAction | ICratePost;

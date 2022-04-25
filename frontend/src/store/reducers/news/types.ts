export interface INewsTableData {
  _id?: string;
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

export enum NewsActionEnum {
  SET_NEWS_TABLE_DATA = "SET_NEWS_TABLE_DATA",
  CREATE_NEWS = "CREATE_NEWS",
  EDIT_NEWS = "EDIT_NEWS",
  DELETE_NEWS = "DELETE_NEWS",
}

export interface INewsState {
  newsTableData: INewsTableData[];
}

export interface SetTableDataAction {
  type: NewsActionEnum.SET_NEWS_TABLE_DATA;
  payload: INewsTableData[];
}

export interface ICreateNews {
  type: NewsActionEnum.CREATE_NEWS;
  payload: INewsTableData;
}

export interface IEditNews {
  type: NewsActionEnum.EDIT_NEWS;
  payload: INewsTableData;
}

export interface IDeleteNews {
  type: NewsActionEnum.DELETE_NEWS;
  payload: string;
}

export type INewsAction =
  | SetTableDataAction
  | ICreateNews
  | IEditNews
  | IDeleteNews;

import {
  INewsTableData,
  SetTableDataAction,
  NewsActionEnum,
  ICreateNews,
  IEditNews,
  IDeleteNews,
} from "./types";

export const NewsActionCreators = {
  setNewsTabaleData: (
    postsTableData: INewsTableData[]
  ): SetTableDataAction => ({
    type: NewsActionEnum.SET_NEWS_TABLE_DATA,
    payload: postsTableData,
  }),

  createNews: (postData: INewsTableData): ICreateNews => ({
    type: NewsActionEnum.CREATE_NEWS,
    payload: postData,
  }),

  editNews: (postData: INewsTableData): IEditNews => {
    return {
      type: NewsActionEnum.EDIT_NEWS,
      payload: postData,
    };
  },
  deleteNews: (id: string): IDeleteNews => ({
    type: NewsActionEnum.DELETE_NEWS,
    payload: id,
  }),
};

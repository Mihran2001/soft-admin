import {
  INewsTableData,
  INewsAction,
  NewsActionEnum,
  INewsState,
} from "./types";

const initialState: INewsState = {
  newsTableData: [] as INewsTableData[],
};

export default function newsReducer(state = initialState, action: INewsAction) {
  switch (action.type) {
    case NewsActionEnum.SET_NEWS_TABLE_DATA:
      return {
        ...state,
        newsTableData: action.payload,
      };
    case NewsActionEnum.CREATE_NEWS:
      return {
        ...state,
        newsTableData: [...state.newsTableData, action.payload],
      };
    case NewsActionEnum.EDIT_NEWS:
      const id = action.payload._id;

      const editedPostsData = state.newsTableData.map((item) => {
        if (item._id === id) {
          return action.payload;
        }
        return item;
      });

      return {
        ...state,
        newsTableData: editedPostsData,
      };
    case NewsActionEnum.DELETE_NEWS:
      const filteredTableData = state.newsTableData.filter(
        (item) => action.payload !== item._id
      );

      return { ...state, newsTableData: filteredTableData };
    default:
      return state;
  }
}

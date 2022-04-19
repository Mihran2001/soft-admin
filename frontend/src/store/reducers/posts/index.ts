import {
  IPostTableData,
  PostsAction,
  PostsActionEnum,
  IPostsState,
} from "./types";

const initialState: IPostsState = {
  postsTableData: [] as IPostTableData[],
};

export default function adminReducer(
  state = initialState,
  action: PostsAction
) {
  switch (action.type) {
    case PostsActionEnum.SET_POSTS_TABLE_DATA:
      return {
        ...state,
        postsTableData: action.payload,
      };
    case PostsActionEnum.CREATE_POST:
      return {
        ...state,
        postsTableData: [...state.postsTableData, action.payload],
      };
    case PostsActionEnum.EDIT_POST:
      const id = action.payload.id;
      const editedPostsData = state.postsTableData.map((item) => {
        if (item.id === id) {
          return action.payload;
        }
        return item;
      });
      return {
        ...state,
        postsTableData: editedPostsData,
      };
    default:
      return state;
  }
}

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
      const id = (action.payload as any)._id;
      console.log("iddd", id);

      const editedPostsData = state.postsTableData.map((item) => {
        if ((item as any)._id === id) {
          return action.payload;
        }
        return item;
      });
      console.log("editedPostsData", editedPostsData);

      return {
        ...state,
        postsTableData: editedPostsData,
      };
    case PostsActionEnum.DELETE_POST:
      console.log(action.payload, state.postsTableData);

      const filteredTableData = state.postsTableData.filter(
        (item) => action.payload !== (item as any)._id
      );
      return { ...state, postsTableData: filteredTableData };
    default:
      return state;
  }
}

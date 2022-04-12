import {
  IPostTableData,
  AdminAction,
  AdminActionEnum,
  IAdminState,
} from "./types";

const initialState: IAdminState = {
  postsTableData: [] as IPostTableData[],
};

export default function adminReducer(
  state = initialState,
  action: AdminAction
) {
  switch (action.type) {
    case AdminActionEnum.SET_POSTS_TABLE_DATA:
      return {
        ...state,
        postsTableData: action.payload,
      };
    // case AdminActionEnum.CREATE_POST:
    //   return {
    //     state,
    //   };
    default:
      return state;
  }
}

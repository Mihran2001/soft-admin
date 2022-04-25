import { AuthActionCreators } from "./auth/action-creators";
import { NewsActionCreators } from "./news/action-creators";
import { PostsActionCreators } from "./posts/action-creators";

export const allActionCreators = {
  ...AuthActionCreators,
  ...PostsActionCreators,
  ...NewsActionCreators,
};

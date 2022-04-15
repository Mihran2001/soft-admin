import { AuthActionCreators } from "./auth/action-creators";
import { AdminActionCreators } from "./posts/action-creators";

export const allActionCreators = {
  ...AuthActionCreators,
  ...AdminActionCreators,
};

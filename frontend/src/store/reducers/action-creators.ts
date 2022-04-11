import { AuthActionCreators } from "./auth/action-creators";
import { AdminActionCreators } from "./admin/action-creators";

export const allActionCreators = {
  ...AuthActionCreators,
  ...AdminActionCreators,
};

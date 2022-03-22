import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { allActionCreators } from "../store/reducers/action-creators";
import { useMemo } from "react";

export const useActions = () => {
  const dispatch = useDispatch();
  console.log(
    "binded dispatch",
    bindActionCreators(allActionCreators, dispatch)
  );

  return bindActionCreators(allActionCreators, dispatch);
};

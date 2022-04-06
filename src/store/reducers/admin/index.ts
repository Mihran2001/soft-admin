import { AdminState } from "./types";

const initialState: AdminState = {
  id: "",
  title: "",
  content: "",
  category: "",
  parentCategory: "",
  titleTag: "",
  metaDescription: "",
  url: "",
  image: "",
};

export default function adminReducer(state = initialState, action: any) {}

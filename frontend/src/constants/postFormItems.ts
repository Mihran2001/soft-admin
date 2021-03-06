import { getInitialState } from "components/TextEditor";

export const formItems = [
  { name: "title", label: "Title" },
  { name: "url", label: "URL" },
  { name: "category", label: "Category" },
  { name: "parentCategory", label: "Parent Category" },
  { name: "metaDescription", label: "Meta Description" },
  { name: "titleTag", label: "Title Tag" },
];

export const postInitialData = {
  title: "",
  url: "",
  category: "",
  parentCategory: "",
  metaDescription: "",
  titleTag: "",
  content: getInitialState(),
};

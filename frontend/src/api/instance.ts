import axios from "axios";

export const instance = axios.create({
  // baseURL: "http://192.168.0.135:9001",
  // baseURL: "http://192.168.1.1:9001",
  baseURL: "http://127.0.0.1:9001",
});

export const createPostApi = async (postData: any, createPostDispatch: any) => {
  console.log("postDataaaaaa", postData);

  const { data } = await instance.post("admin/post", postData);
  createPostDispatch(data);
};

export const editPostApi = async (postData: any, editPostDispatch: any) => {
  console.log("postData.idddd", postData.id);

  const { data } = await instance.put(`admin/post/${postData.id}`, postData);
  editPostDispatch(data);
};

export const deletePostApi = async (id: string, deletePostDispatch: any) => {
  const { data } = await instance.delete(`admin/post/${id}`);
  deletePostDispatch(data.id);
};

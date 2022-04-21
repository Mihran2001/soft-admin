import axios from "axios";

export const instance = axios.create({
  baseURL: "http://127.0.0.1:9001",
});

export const createPostApi = async (postData: any, createPostDispatch: any) => {
  try {
    const { data } = await instance.post("admin/post", postData);
    createPostDispatch(data);
  } catch (e) {
    console.log(e);
  }
};

export const editPostApi = async (postData: any, editPostDispatch: any) => {
  try {
    const { data } = await instance.put(`admin/post/${postData.id}`, postData);
    editPostDispatch(data);
  } catch (e) {
    console.log(e);
  }
};

export const deletePostApi = async (id: string, deletePostDispatch: any) => {
  try {
    const { data } = await instance.delete(`admin/post/${id}`);
    deletePostDispatch((data as any)._id);
  } catch (e) {
    console.log(e);
  }
};

export const setPostsTableDataApi = async (setPostsTabledataDispatch: any) => {
  try {
    const { data } = await instance.get(`admin/posts`);
    setPostsTabledataDispatch(data);
  } catch (e) {
    console.log(e);
  }
};

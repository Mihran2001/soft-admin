import axios from "axios";
import { INewsTableData } from "store/reducers/news/types";
import { IPostTableData } from "store/reducers/posts/types";

export const instance = axios.create({
  baseURL: "http://127.0.0.1:9001",
});

export const createPostApi = async (
  postData: IPostTableData,
  createPostDispatch: any
) => {
  try {
    const { data } = await instance.post("admin/post", postData);
    console.log("somethig goen wrong");

    createPostDispatch(data);
  } catch (e) {
    console.log(e);
  }
};

export const editPostApi = async (
  postData: IPostTableData,
  editPostDispatch: any
) => {
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

export const setPostsTableDataApi = async (postsTabledataDispatch: any) => {
  try {
    const { data } = await instance.get(`admin/posts`);
    postsTabledataDispatch(data);
  } catch (e) {
    console.log(e);
  }
};

export const setNewsTableData = async (newsTabledataDispatch: any) => {
  try {
    const { data } = await instance.get(`admin/news`);
    newsTabledataDispatch(data);
  } catch (e) {
    console.log(e);
  }
};

export const createNewsApi = async (
  newsData: INewsTableData,
  createNewsDispatch: any
) => {
  try {
    const { data } = await instance.post("admin/news", newsData);
    createNewsDispatch(data);
  } catch (e) {
    console.log(e);
  }
};

export const editNewsApi = async (
  newsData: INewsTableData,
  editNewsDispatch: any
) => {
  try {
    const { data } = await instance.put(`admin/news/${newsData.id}`, newsData);
    editNewsDispatch(data);
  } catch (e) {
    console.log(e);
  }
};

export const deleteNewsApi = async (id: string, deleteNewsDispatch: any) => {
  try {
    const { data } = await instance.delete(`admin/news/${id}`);
    deleteNewsDispatch((data as any)._id);
  } catch (e) {
    console.log(e);
  }
};

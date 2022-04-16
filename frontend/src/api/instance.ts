import axios from "axios";

export const instance = axios.create({
  // baseURL: "http://192.168.0.135:9001",
  // baseURL: "http://192.168.1.1:9001",
  baseURL: "http://127.0.0.1:9001",
});

// export const createPost = (data: any) => {
//   return
// }

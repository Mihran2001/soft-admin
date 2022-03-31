import axios, { AxiosResponse } from "axios";
import { IUser } from "../models/IUser";

// export default class UserService {
//   static async getUsers(): Promise<AxiosResponse<IUser[]>> {
//     return axios.get<IUser[]>("./users.json");
//   }
// }

//  axios.interceptors.request.use(function (config: any) {
//   const token = localStorage.getItem("token");
//   config.headers.Authorization = token;

//   return config;
// });

export const instance = axios.create({
  baseURL: "http://192.168.0.112:9001",
});

// (function setSession() {
//   const token = localStorage.getItem("token");
//   if (token) {
//     axios.defaults.headers.common["Authorization"] = token;
//   } else {
//     delete axios.defaults.headers.common["Authorization"];
//   }
// })();

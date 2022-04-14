import { instance } from "../api/UserService";

export function setSession(token: string) {
  if (token) {
    localStorage.setItem("token", token);
    instance.defaults.headers.common["Authorization"] = token;
  } else {
    delete instance.defaults.headers.common["Authorization"];
  }
}

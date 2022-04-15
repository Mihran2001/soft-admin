import { instance } from "../api/instance";

export function setSession(token: string) {
  if (token) {
    localStorage.setItem("token", token);
    instance.defaults.headers.common["Authorization"] = token;
  } else {
    delete instance.defaults.headers.common["Authorization"];
  }
}

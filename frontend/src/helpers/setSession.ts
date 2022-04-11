import axios from "axios";

export function setSession(token: string) {
  localStorage.setItem("token", token);
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
}

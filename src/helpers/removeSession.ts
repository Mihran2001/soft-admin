export function removeSession() {
  localStorage.removeItem("auth");
  localStorage.removeItem("username");
}

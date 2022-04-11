import React from "react";
import "./App.css";
import AppRouter from "./components/AppRouter";
import "antd/dist/antd.css";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { setSession } from "./helpers/setSession";

function App() {
  const { isAuth } = useTypedSelector((state) => state.auth);
  const token: any = localStorage.getItem("token");
  if (isAuth) {
    setSession(token);
  }

  // const { postsTableData } = useTypedSelector((state) => state.admin);
  // console.log(postsTableData);

  return <AppRouter />;
}

export default App;

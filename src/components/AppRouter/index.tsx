import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "../../pages/Login";
import PrivateRoute from "../../PrivateRoute";
import GuestRoute from "../../GuestRoute";
import AdminPanel from "../../pages/AdminPanel";
import Posts from "../shared/Posts";
import News from "../shared/News";
import Articles from "../shared/Articles";
import PostEdit from "../shared/Posts/PostEdit";

const AppRouter: React.FC<{}> = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          // <PrivateRoute>
          <AdminPanel />
          // </PrivateRoute>
        }
      >
        <Route path="posts" element={<Posts />} />
        <Route path="articles" element={<Articles />} />
        <Route path="news" element={<News />} />
        <Route path="posts/edit" element={<PostEdit />} />
      </Route>
      <Route
        path="/auth"
        element={
          // <GuestRoute>
          <Login />
          // </GuestRoute>
        }
      />
    </Routes>
  );
};

export default AppRouter;

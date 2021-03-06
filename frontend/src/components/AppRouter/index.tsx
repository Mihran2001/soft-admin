import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "../../pages/Login";
import PrivateRoute from "../../PrivateRoute";
import GuestRoute from "../../GuestRoute";
import AdminPanel from "../../pages/AdminPanel";
import Posts from "../shared/Posts";
import News from "../shared/News";
import Articles from "../shared/Jobs";
import EditOrCreate from "../shared/EditOrCreate";
import PostEditOrCreate from "components/shared/Posts/PostEditOrCreate";
import NewsEditOrCreate from "components/shared/News/NewsEditOrCreate";

const AppRouter: React.FC<{}> = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <AdminPanel />
          </PrivateRoute>
        }
      >
        <Route path="posts" element={<Posts />} />
        <Route path="posts/:id" element={<PostEditOrCreate />} />
        <Route path="news" element={<News />} />
        <Route path="news/:id" element={<NewsEditOrCreate />} />
        {/* <Route path="news/add" element={<EditOrCreate />} /> */}
        <Route path="jobs" element={<Articles />} />
      </Route>
      <Route
        path="/auth"
        element={
          <GuestRoute>
            <Login />
          </GuestRoute>
        }
      />
    </Routes>
  );
};

export default AppRouter;

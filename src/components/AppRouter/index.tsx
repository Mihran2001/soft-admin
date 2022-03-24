import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "../../pages/Login";
import PrivateRoute from "../../PrivateRoute";
import GuestRoute from "../../GuestRoute";
import AdminPanel from "../../pages/AdminPanel";

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
      />
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

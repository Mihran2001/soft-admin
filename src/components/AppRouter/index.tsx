import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "../../pages/Login";
import PrivateRoute from "../../PrivateRoute";
import GuestRoute from "../../GuestRoute";

const AppRouter: React.FC<{}> = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <h1>ahaha</h1>
            </PrivateRoute>
          }
        />
        {/* <Route
          path="/auth/register"
          element={
            <GuestRoute>
              {" "}
              <Register />{" "}
            </GuestRoute>
          }
        /> */}
        <Route
          path="/auth"
          element={
            <GuestRoute>
              {" "}
              <Login />{" "}
            </GuestRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;

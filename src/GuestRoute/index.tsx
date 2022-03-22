import React from "react";
import { Navigate } from "react-router";
import { useSelector } from "react-redux";

type Props = {
  redirect?: string;
};

const GuestRoute: React.FC<Props> = ({ children, redirect = "/" }) => {
  const state = useSelector((state: any) => state.authReducer);
  console.log(state.isAuthenticated);

  return state.isAuthenticated ? <Navigate to={redirect} /> : <>{children}</>;
};

export default GuestRoute;

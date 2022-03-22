import React from "react";
import { Navigate, RouterProps } from "react-router";
import { useSelector } from "react-redux";

type Props = {
  redirect?: string;
};

const PrivateRoute: React.FC<Props> = ({
  children,
  redirect = "auth/login",
}) => {
  const state = useSelector((state: any) => state.authReducer);
  console.log(state.isAuthenticated);

  return state.isAuthenticated ? <>{children}</> : <Navigate to={redirect} />;
};

export default PrivateRoute;

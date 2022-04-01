import React from "react";
import { Navigate } from "react-router";
import { useTypedSelector } from "../hooks/useTypedSelector";

type Props = {
  redirect?: string;
};

const PrivateRoute: React.FC<Props> = ({ children, redirect = "/auth" }) => {
  const { isAuth } = useTypedSelector((state) => state.auth);
  // console.log(isAuth);

  return isAuth ? <>{children}</> : <Navigate to={redirect} />;
};

export default PrivateRoute;

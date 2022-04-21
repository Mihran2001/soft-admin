import React from "react";
import { Navigate } from "react-router";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useLocation, useNavigate } from "react-router-dom";

type Props = {
  redirect?: string;
};

const PrivateRoute: React.FC<Props> = ({ children, redirect = "/auth" }) => {
  const { isAuth } = useTypedSelector((state) => state.auth);
  let location = useLocation();

  return isAuth ? (
    <>{children}</>
  ) : (
    <Navigate to={redirect} state={{ from: location }} replace />
  );
};

export default PrivateRoute;

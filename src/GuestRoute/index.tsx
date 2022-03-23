import React from "react";
import { Navigate } from "react-router";
import { useTypedSelector } from "../hooks/useTypedSelector";

type Props = {
  redirect?: string;
};

const GuestRoute: React.FC<Props> = ({ children, redirect = "/auth" }) => {
  const { isAuth } = useTypedSelector((state) => state.auth);

  return isAuth ? <Navigate to={redirect} /> : <>{children}</>;
};

export default GuestRoute;

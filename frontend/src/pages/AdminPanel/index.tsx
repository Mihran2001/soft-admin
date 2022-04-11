import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import AdminLayout from "../../components/shared/AdminLayout";

const AdminPanel: FC = () => {
  return <AdminLayout>{<Outlet />}</AdminLayout>;
};

export default AdminPanel;

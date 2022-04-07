import React, { Children, FC, useEffect } from "react";
import { Layout, Menu, Button } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { SLayout, SHeader, SContent, SFooter, SSider } from "./styles";
import { Link } from "react-router-dom";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

const AdminLayout: FC = ({ children }) => {
  const { logout } = useActions();
  // const logOut = () => {
  //   localStorage.removeItem("token");
  // };

  return (
    <SLayout>
      <SSider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Link to={"/posts"}> Posts </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to={"/articles"}> Articles</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to={"/news"}> News</Link>
          </Menu.Item>
        </Menu>
      </SSider>
      <Layout>
        <SHeader className="site-layout-sub-header-background">
          <Button onClick={() => logout()}>
            {" "}
            <Link to="auth">Logout</Link>{" "}
          </Button>
        </SHeader>
        <SContent>{children}</SContent>
        <SFooter style={{ textAlign: "center" }}> Softconstruct</SFooter>
      </Layout>
    </SLayout>
  );
};

export default AdminLayout;

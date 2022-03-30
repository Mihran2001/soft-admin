import React, { Children, FC } from "react";
import { Layout, Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { SLayout } from "./styles";
import { Link } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

const AdminLayout: FC = ({ children }) => {
  return (
    <SLayout>
      <Sider
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
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
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
      </Sider>
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{ padding: 0 }}
        />
        <Content style={{ margin: "24px 16px 0" }}>{children}</Content>
        <Footer style={{ textAlign: "center" }}>Softconstruct</Footer>
      </Layout>
    </SLayout>
  );
};

export default AdminLayout;

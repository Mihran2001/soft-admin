import React, { FC } from "react";
import { Layout, Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { SLayout } from "./styles";
import Table from "../../Base/Table";
import { useNavigate } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

const AdminLayout: FC = () => {
  const navigate = useNavigate();
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
          <Menu.Item
            key="1"
            icon={<UserOutlined />}
            // onClick={() => navigate("/1")}
          >
            Posts
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            Jobs
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            News
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{ padding: 0 }}
        />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <Table />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Softconstruct</Footer>
      </Layout>
    </SLayout>
  );
};

export default AdminLayout;

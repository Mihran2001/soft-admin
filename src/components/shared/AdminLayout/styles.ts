import styled from "styled-components";
import { Layout } from "antd";

const { Header, Content, Footer, Sider } = Layout;

export const SLayout = styled(Layout)`
  min-height: 100vh;
  #components-layout-demo-responsive .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.2);
  }

  .site-layout-sub-header-background {
    background: #fff;
  }

  .site-layout-background {
    background: #fff;
  }
`;

export const SHeader = styled(Header)`
  display: flex;
  justify-content: end;
  padding: 15px;
`;

export const SContent = styled(Content)`
  margin: 24px 16px 0;
`;

export const SFooter = styled(Footer)``;

export const SSider = styled(Sider)``;

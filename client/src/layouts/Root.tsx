import { Outlet } from "react-router";
import { Layout } from "antd";
import "./root.scss";
import PFHeader from "../components/pfHeader/PFHeader";

export default function Root() {
  return (
    <Layout className="layout">
      <Layout.Content className="layout__content">
        <Outlet />
      </Layout.Content>
      <Layout.Header className="layout__header">
        <PFHeader />
      </Layout.Header>
    </Layout>
  );
}

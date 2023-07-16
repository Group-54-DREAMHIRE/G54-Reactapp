import Navbar from "../Components/navbar/Navbar";
import Sidebar from "../Components/sidebar/Sidebar";
import Footer from "../Components/footer/Footer";
import { Outlet } from "react-router-dom";
import { Layout, theme, Row, Col} from "antd";
const { Content } = Layout;

function RootLayout() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <Layout>
        <Row
          style={{
            height: "13vh",
            position: "sticky",
            top: "0",
            left: "0",
            display: "flex",
            alignItems: "center",}}>
          <Col span={24}>
            <Navbar />
          </Col>
        </Row>
        <Layout style={{ display: "flex", flexDirection: "row" }}>
          <Sidebar />
          <Layout >
            <Content
              style={{
                padding: 0,
                margin: 30,
                minHeight: 280,
                background: colorBgContainer,}}>
              <Outlet />
            </Content>
            <Footer/>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
}

export default RootLayout;

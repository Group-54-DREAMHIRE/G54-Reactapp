import Navbar from "../Components/navbar/Navbar";
import Sidebar from "../Components/sidebar/Sidebar";
import Footer from "../Components/footer/Footer";
import { Outlet } from "react-router-dom";
import { Layout, Row, Col,ConfigProvider } from "antd";
const { Content } = Layout;

function RootLayout() {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "rgb(30,136,229)",
            colorBgContainer: 'white',
          },
        }}
      >
        <Layout>
          <Row
            justify="center"
            style={{
              paddingTop: " 3vh",
              height: "12vh",
              position: "sticky",
              top: "0",
              left: "0",
              width: "100%",
              backgroundColor: "white",
              zIndex:'2',
            }}
          >
            <Col span={24}>
              <Navbar />
            </Col>
          </Row>
          <Layout style={{ display: "flex", flexDirection: "row" }}>
            <Sidebar />
            <Layout style={{ backgroundColor: "white" }}>
              <Content
                style={{
                  padding: 0,
                  margin: 30,
                  minHeight: 280,
                  backgroundColor: "white",
                  boxShadow: '0px 0px 5px  rgba(30,136,229,.4)',
                }}
              >
                <Outlet />
              </Content>
              <Footer />
            </Layout>
          </Layout>
        </Layout>
      </ConfigProvider>
    </>
  );
}

export default RootLayout;

import Navbar from "../Components/navbar/Navbar";
import Sidebar from "../Components/sidebar/Sidebar";
import Footer from "../Components/footer/Footer";
import { Outlet } from "react-router-dom";
import { Layout, Row, Col } from "antd";
import { useLocation } from "react-router-dom";
import CandidateDashboard from "../pages/candidate/CandidateDashboard";
import CompanyDashboard from '../pages/company/CompanyDashboard';
import AdminDashboard from '../pages/admin/AdminDashboard';
const { Content } = Layout;

function RootLayout() {
  const location = useLocation();
  const user = localStorage.getItem("USERTYPE");
  if(user==="company"){
    return (

      <>
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
              zIndex: "2",
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
                  padding: 30,
                  margin: 10,
                  minHeight: "85vh",
                  backgroundColor: "white",
                  boxShadow: "0px 0px 5px  rgba(0,0,0,.2)",
                }}
              >
                {location.pathname==="/"?<CompanyDashboard/>:<Outlet />}
              </Content>
              <Footer />
            </Layout>
          </Layout>
        </Layout>
      </>
    );
  }
 
  else if(user==="candidate"){
    return (

      <>
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
              zIndex: "2",
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
                  padding: 30,
                  margin: 10,
                  minHeight: "85vh",
                  backgroundColor: "white",
                  boxShadow: "0px 0px 5px  rgba(0,0,0,.2)",
                }}
              >
                {location.pathname==="/"?<CandidateDashboard/>:<Outlet />}
              </Content>
              <Footer />
            </Layout>
          </Layout>
        </Layout>
      </>
    );
  }
  else if(user==="admin"){
    return (

      <>
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
              zIndex: "2",
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
                  padding: 30,
                  margin: 10,
                  minHeight: "85vh",
                  backgroundColor: "white",
                  boxShadow: "0px 0px 5px  rgba(0,0,0,.2)",
                }}
              >
                {location.pathname==="/"?<AdminDashboard/>:<Outlet />}
              </Content>
              <Footer />
            </Layout>
          </Layout>
        </Layout>
      </>
    );
  }
}

export default RootLayout;

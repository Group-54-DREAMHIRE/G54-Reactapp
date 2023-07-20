import LandingNavbar from "../Components/navbar/LandingNavbar";

import LandingHome from "../pages/landing/LandingHome";
import LandingAboutUs from "../pages/landing/LandingAboutUs";

import Footer from "../Components/footer/Footer";

import { Layout, theme, Row, Col, ConfigProvider } from "antd";



const { Content } = Layout;

function DefaultMainLayout() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
    <ConfigProvider
        theme={{
          token: {
            colorPrimary: "rgb(30,136,229)",},}}>
        <Row
        justify="center"
        align="middle"
        style={{ 
        position: 'sticky',
        top: '0',
        height: '13vh',
        background: "#F2FAFA",
        zIndex: '2',
        marginTop: '4vh'}}>
        <Col span={24}>
          <LandingNavbar/>
        </Col>
      </Row>
      <Content
        style={{
          padding: 0,
          minHeight: 280,
          background:'#F2FAFA',
        }}>
      <Row id="1home">
        <LandingHome/>
      </Row>
      <Row id="2about" style={{paddingTop:'10%'}}>
       <LandingAboutUs/>
      </Row>
      </Content>
      <Row
        justify="center"
        align="middle"
        style={{ 
          backgroundColor: '#F2FAFA !important'}}>
        <Col span={24}>
          <Footer />
        </Col>
      </Row>
      </ConfigProvider>
    </>
  );
}

export default DefaultMainLayout;

import Footer from "../Components/footer/Footer";
import LandingNavbar from "../Components/navbar/LandingNavbar";

import { Layout, theme, Row, Col } from "antd";
import { useState } from "react";
import LandingHome from "../pages/landing/LandingHome";

const { Content } = Layout;

function DefaultMainLayout() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [sectionID, setSectionID] = useState("1");
  const onNavigate = ({ key }) => {
    console.log(key);
    setSectionID(key);
   
  };

  return (
    <>
        <Row
        justify="center"
        align="middle"
        style={{ 
        position: 'sticky',
        top: '0',
        height: '13vh',
        background: "#F2FAFA",
        zIndex: '2',
        padding: '4vh'}}>
        <Col span={24}>
          <LandingNavbar sectionID={sectionID} onNavigate={onNavigate} />
        </Col>
      </Row>
      <Content
        style={{
          padding: 0,
          minHeight: 280,
          background: colorBgContainer,
        }}>
      <Row>
        <LandingHome/>
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
    </>
  );
}

export default DefaultMainLayout;

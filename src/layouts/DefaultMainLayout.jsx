import Footer from "../Components/footer/Footer";
import LandingNavbar from "../Components/navbar/LandingNavbar";

import { Layout, theme, Row, Col } from "antd";
import { useState } from "react";

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
          height: "13vh",
          position: "sticky",
          top: "0",
          left: "0",
          display: "flex",
          width: "100% !important",
          alignItems: "center",}}>
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
        <h1>fjkygru</h1>
      </Content>
      <Row
        justify="center"
        align="middle"
        style={{
          }}>
        <Col span={24}>
          <Footer />
        </Col>
      </Row>
    </>
  );
}

export default DefaultMainLayout;

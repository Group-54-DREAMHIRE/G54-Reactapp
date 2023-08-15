import LandingNavbar from "../Components/navbar/LandingNavbar";

import LandingHome from "../pages/landing/LandingHome";
import LandingAboutUs from "../pages/landing/LandingAboutUs";
import LandingContactUs from "../pages/landing/LandingContactUs";
import PriceCard from '../pages/landing/cards/PriceCard';

import Footer from "../Components/footer/Footer";

import { Layout, Row, Col, ConfigProvider } from "antd";
import { LandingBlogs } from "../pages/landing/LandingBlogs";

const { Content } = Layout;

function DefaultMainLayout() {
  return (
    <>
        <Row
        justify="center"
        align="middle"
        style={{ 
        position: 'sticky',
        top: '0',
        height: '13vh',
        backgroundColor: "rgba(242, 250, 250, 1)",
        zIndex: '2',
        paddingTop: '4vh'}}>
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
      <Row id="1home" style={{paddingTop:'5%'}}>
        <LandingHome/>
      </Row>
      <Row id="2about" style={{paddingTop:'10%'}}>
       <LandingAboutUs/>
      </Row>
      <Row id="3blog" style={{paddingTop:'5%'}}>
       <LandingBlogs/>
      </Row>
      <Row id="4pricing" style={{paddingTop:'5%'}} justify='center'>
       <PriceCard/>
      </Row>
      <Row id="5contact" style={{paddingTop:'10%'}}>
       {/* <LandingContactUs/> */}
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

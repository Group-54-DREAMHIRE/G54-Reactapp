import Footer from '../Components/footer/Footer';
import Navbar from '../Components/navbar/Navbar';
import { Layout, theme, Row, Col } from "antd";

const { Content } = Layout;

function DefaultMainLayout() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
   
        <Row 
            justify= 'center'
            align= 'middle'
            style={{
            height: "13vh",
            position: "sticky",
            top: "0",
            left: "0",
            display: "flex",
            width: '100% !important',
            alignItems: "center",
            boxShadow: '0px 1px 8px #aaaaaa'}}>
         <Col span={24}>
         <Navbar />
         </Col>
        </Row>
        <Content
          style={{
            padding: 0,
            minHeight: 280,
            background: colorBgContainer,}}>
                 <h1>fjkygru</h1>
        </Content>
        <Row 
            justify= 'center'
            align= 'middle'
            style={{
            boxShadow: '1px 0px 8px #aaaaaa'}}>
         <Col span={24}>
            <Footer/> 
         </Col>
        </Row>
       
    </>
  );
}

export default DefaultMainLayout;

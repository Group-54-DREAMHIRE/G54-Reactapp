import logo from "../../assets/images/logo.png";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { Layout, theme, Row, Col, Typography } from "antd";
const { Text, Link } = Typography;

const Footer = () => {
  return (
    <>
      <Row style={{ boxShadow: '1px 0px 8px #aaaaaa',
                    borderBottom: 'none',
                    padding: '30px 0 60px',
                    width: '100%',
                    backgroundColor: 'rgb(248,249,250)'}}>
        <Col>
          <Row 
            justify= 'space-between'
            style={{padding: '0 80px 0'}}>
            <Col span={5} >
              <Row  gutter={[10,15]} >
                <Col>
                  <img src={logo} style={{ width: "50%" }} />
                </Col>
                <Col span={24}>
                  <label>
                    Funding freemium long tail hypotheses
                    <br />
                    first mover advantage assets ownership
                  </label>
                </Col>
                <Col span={24}>
                  <label htmlFor="">
                    <MailOutlined /> dreamhire@gmail.com
                  </label>
                </Col>
                <Col span={24}>
                  <label htmlFor="">
                    <PhoneOutlined />+12 3456 7890
                  </label>
                </Col>
              </Row>
            </Col>

            <Col span={4}>
              <Row gutter={[10,15]}>
                <Col span={24}>
                  <label 
                  style={{fontSize: '18px',
                        fontWeight: '500',
                        color: 'rgb(146,152,159)'}}>Services</label>
                </Col>
                <Col span={24}>
                  <label>Web Hosting</label>
                </Col>
                <Col span={24}>
                  <label>Domains</label>
                </Col>
                <Col span={24}>
                  <label>Premium Hosting</label>
                </Col>
                <Col span={24}>
                  <label>Private Server</label>
                </Col>
                <Col span={24}>
                  <label>E-mail Hosting</label>
                </Col>
              </Row>
            </Col>

            <Col span={4}>
              <Row gutter={[10,15]}>
                <Col span={24}>
                  <label  style={{fontSize: '18px',
                        fontWeight: '500',
                        color: 'rgb(146,152,159)'}}>Support</label>
                </Col>
                <Col span={24}>
                  <label>Pricing Plan</label>
                </Col>
                <Col span={24}>
                  <label>Documentation</label>
                </Col>
                <Col span={24}>
                  <label>Guide</label>
                </Col>
                <Col span={24}>
                  <label>Tutorial</label>
                </Col>
              </Row>
            </Col>

            <Col span={3}>
              <Row gutter={[10,15]}>
                <Col span={24}>
                  <label  style={{fontSize: '18px',
                        fontWeight: '500',
                        color: 'rgb(146,152,159)'}}>Company</label>
                </Col>
                <Col span={24}>
                  <label>About</label>
                </Col>
                <Col span={24}>
                  <label>Blog</label>
                </Col>
                <Col span={24}>
                  <label>Join Us</label>
                </Col>
                <Col span={24}>
                  <label>Press</label>
                </Col>
                <Col span={24}>
                  <label>Patners</label>
                </Col>
              </Row>
            </Col>

            <Col span={3}>
              <Row gutter={[10,15]}>
                <Col span={24}>
                  <label  style={{fontSize: '18px',
                        fontWeight: '500',
                        color: 'rgb(146,152,159)'}}>Legal</label>
                </Col>
                <Col span={24}>
                  <label>Claim</label>
                </Col>
                <Col span={24}>
                  <label>Privacy</label>
                </Col>
                <Col span={24}>
                  <label>Terms</label>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Footer;

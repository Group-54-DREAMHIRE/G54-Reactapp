import landing6 from "../../assets/images/landing6.png";
import { Row, Col, Typography, Image } from "antd";
const { Title, Text } = Typography;

const LandingAboutUs = () => {
  return (
    <>
      <Row
        style={{
          padding: "0 15% 0",
          zIndex: "1",
        }}
      >
        <Col span={24}>
          <Row>
            <Col span={15}>
              <Row>
                <Title style={{ marginBottom: "10%" }}>Who We Are? </Title>
                <Text style={{fontSize: '16px'}}>
                  Dedicated software engineering teams.We specialise in
                  recruiting, nurturing and managing top talent to work with you
                  seamlessly. With over two decades of experience, we can build
                  a team with the exact skills you need.We have an extensive
                  client base across Scandinavia and customers all over the
                  world. <br/> <br/>
                  Our success comes from a relentless focus on quality
                  and customer satisfaction, and most of our new business comes
                  from customer referrals.Dedicated software engineering
                  teams.We specialise in recruiting, nurturing and managing top
                  talent to work with you seamlessly. With over two decades of
                  experience, we can build a team with the exact skills you
                  need.
                </Text>
                <br />
              </Row>
            </Col>

            <Col span={9}>
              <Image preview={false} src={landing6} />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default LandingAboutUs;

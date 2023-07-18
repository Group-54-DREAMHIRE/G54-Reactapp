import landing6 from "../../assets/images/landing-6.png";
import { Row, Col, Typography } from "antd";
const { Title } = Typography;

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
                <Title style={{marginBottom: '10%'}}>Who We Are? </Title>
                <label>
                  Welcome to the National Hookah Community Association "NHCA".
                  We are a diverse alliance of businesses from all ends of the
                  Hookah experience, from manufacturers and importers of
                  molasses, pipes and accessories to distributors, Hookah
                  lounges and Hookah/shisha retail stores. 
                </label> <br/>
                <label>
                  If you are a Hookah business, please join us and help us
                  defend and protect your business, our culture and community.
                </label><br/>
                <label>
                  If you are an interested member of the public, welcome. Please
                  enjoy learning about Hookah and its unique culture and
                  practice.
                </label>
              </Row>
            </Col>

            <Col span={9}>
              <img src={landing6} style={{ width: "100%" }} />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default LandingAboutUs;

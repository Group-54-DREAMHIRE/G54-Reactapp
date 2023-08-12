import D_photo from "../../../assets/images/company.png";
import { Card, Button, Row, Col, Typography, Image, Space } from "antd";
const { Title, Text } = Typography;

const ApprovalsCard = () => {
  return (
    <Card style={{ boxShadow: "0 0 8px rgba(0,0,0,.1)", padding: "2%" }}>
      <Row gutter={[20,20]}>
        <Col span={16}>
          <Row gutter={[0, 20]} justify="end">
            <Col span={24}>
              <Title level={2} style={{ marginTop: "10px", marginBottom: "0" }}>
                Creative Software
              </Title>
            </Col>
            <Col span={24}>
              <Text style={{ fontSize: "16px", lineHeight: "25px" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                dolorum nesciunt, officia molestiae, doloribus aperiam
                voluptates quia corrupti voluptas debitis repellat atque
              </Text>
            </Col>
          </Row>
        </Col>
        <Col span={8}>
          <Image src={D_photo} alt="company_logo" preview={false} />
        </Col>
        <Col span={24}>
          <Row justify="end" gutter={20}>
            <Col>
              <Button style={{ borderRadius: "0" }} type="primary">
                View BR
              </Button>
            </Col>
            <Col>
              <Button style={{ borderRadius: "0" }} type="primary">
                Approve
              </Button>
            </Col>
            <Col>
              <Button style={{ borderRadius: "0" }} type="primary" danger>
                Reject
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

export default ApprovalsCard;

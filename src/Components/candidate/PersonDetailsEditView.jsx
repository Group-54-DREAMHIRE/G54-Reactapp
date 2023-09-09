import { Button, Card, Col, Row, Space, Typography } from "antd";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import { FiMapPin, FiEdit } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { openViewEditDetails } from "../../store/models/modelsSlice";
const { Title, Text, Link } = Typography;

export default function PersonDetailsEditView({ viewEditPersonalData }) {
  const dispatch = useDispatch();
  return (
    <>
      <Row onClick={() => dispatch(openViewEditDetails())}>
        <Col span={24}>
          <Card
            hoverable
            style={{
              boxShadow: "0 0 20px rgba(0,0,0,.1)",
              borderRadius: "20px",
            }}
          >
            <Row gutter={[0, 20]}>
              <Col span={24}>
                <Row justify="space-between">
                  <Text
                    style={{
                      margin: "0",
                      fontSize: "20px",
                      fontWeight: "800",
                      //color: "rgba(0,0,0,.4)",
                    }}
                  >
                    {viewEditPersonalData.name === null
                      ? "Your Name"
                      : viewEditPersonalData.name}
                  </Text>
                  <Button 
                    size="large"
                    icon={<FiEdit />}
                    onClick={() => dispatch(openViewEditDetails())}
                    style={{
                        borderRadius: '0',
                        border: '1px solid rgba(25,103,210,1)'}} />
                </Row>
              </Col>
              <Col span={24}>
                <Text
                  style={{
                    margin: "0",
                    fontSize: "16px",
                    color: "rgba(0,0,0,.4)",
                  }}
                >
                  <Space>
                    <MailOutlined />
                    {viewEditPersonalData.email === null
                      ? "Email"
                      : viewEditPersonalData.email}
                  </Space>
                </Text>
              </Col>
              <Col span={24}>
                <Text
                  style={{
                    margin: "0",
                    fontSize: "16px",
                    color: "rgba(0,0,0,.4)",
                  }}
                >
                  <Space>
                    <PhoneOutlined />
                    {viewEditPersonalData.phone === null
                      ? "Phone"
                      : viewEditPersonalData.phone}
                  </Space>
                </Text>
              </Col>
              <Col span={24}>
                <Text
                  style={{
                    margin: "0",
                    fontSize: "16px",
                    color: "rgba(0,0,0,.4)",
                  }}
                >
                  <Space>
                    <FiMapPin />
                    {viewEditPersonalData.address === null
                      ? "Address"
                      : viewEditPersonalData.address}
                  </Space>
                </Text>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
}

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
      <Row 
        className="personal-details-edit-view-w"
        onClick={() => dispatch(openViewEditDetails())}>
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
                    className={viewEditPersonalData.name === ""?"hasnot-name-w":"has-name-w"} 
                  >
                    {viewEditPersonalData.name === ""
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
                  className={viewEditPersonalData.email==""?"hasnot-content-w":"has-content-w"} 
                >
                  <Space>
                    <MailOutlined />
                    {viewEditPersonalData.email === ""
                      ? "Email"
                      : viewEditPersonalData.email}
                  </Space>
                </Text>
              </Col>
              <Col span={24}>
                <Text
                  className={viewEditPersonalData.phone===""?"hasnot-content-w":"has-content-w"}
                >
                  <Space>
                    <PhoneOutlined />
                    {viewEditPersonalData.phone === ""
                      ? "Phone"
                      : viewEditPersonalData.phone}
                  </Space>
                </Text>
              </Col>
              <Col span={24}>
                <Text
                  className={viewEditPersonalData.address===""?"hasnot-content-w":"has-content-w"}
                >
                  <Space>
                    <FiMapPin />
                    {viewEditPersonalData.address === ""
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
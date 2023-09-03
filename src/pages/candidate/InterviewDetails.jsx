import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Divider,
  Row,
  Space,
  Typography,
  Radio,
  Modal,
} from "antd";
const { Title, Text } = Typography;

const textStyle = {
  fontSize: "16px",
};
export default function InterviewDetails() {
  const [time, setTime] = useState(1);
  return (
    <>
      <Row>
        <Col style={{ padding: "2% 3%", minHeight: "75vh" }} span={24}>
          <Row gutter={[0, 20]} justify="space-between">
            <Col span={24}>
              <Title level={3} style={{ marginTop: "0", marginBottom: "10px" }}>
                Interview Details
              </Title>
              <hr style={{ border: "2px solid rgba(0,0,0,.4)" }} />
            </Col>
            <Col span={14}>
              <Row align="bottom" gutter={[0, 15]}>
                <Col span={14}>
                  <Text
                    style={{
                      marginRight: "6px",
                      fontSize: "20px",
                      fontWeight: "500",
                    }}
                  >
                    Company:
                  </Text>
                  <Text style={textStyle}>Creative Software</Text>
                </Col>
                <Col span={10}>
                  <Text
                    style={{
                      marginRight: "6px",
                      fontSize: "20px",
                      fontWeight: "500",
                    }}
                  >
                    Date:
                  </Text>
                  <Text style={textStyle}>2023.08.28</Text>
                </Col>
                <Col span={24}>
                  <Text
                    style={{
                      marginRight: "6px",
                      fontSize: "20px",
                      fontWeight: "500",
                    }}
                  >
                    Type:
                  </Text>
                  <Text style={textStyle}>HR Interview</Text>
                </Col>
                <Col span={24}>
                  <Text
                    style={{
                      marginRight: "6px",
                      fontSize: "20px",
                      fontWeight: "500",
                    }}
                  >
                    With:
                  </Text>
                  <Text style={textStyle}>Mrs. Vishmi</Text>
                </Col>
                <Col span={24}>
                  <Button
                    style={{
                      borderRadius: "0",
                      boxShadow: "0 0 8px rgba(0,0,0,.2)",
                      marginTop: "20px",
                    }}
                    type="primary"
                    disabled={false}
                  >
                    Interview Report
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col span={10}>
              <Row>
                <Col span={24}>
                  <Title style={{ margin: "0" }} level={4}>
                    Select a time slot and confirm
                  </Title>
                </Col>
                <Col span={16}>
                  <Card
                    style={{
                      borderRadius: "0",
                      boxShadow: "0 0 5px rgba(0,0,0,.2)",
                      marginTop: "20px",
                    }}
                  >
                    <Row gutter={[10, 10]}>
                      <Col span={24}>
                        <Radio.Group
                          onChange={(e) => setTime(e.target.value)}
                          value={time}
                        >
                          <Space direction="vertical">
                            <Radio value={1}>9.00 AM - 9.30 AM</Radio>
                            <Radio value={2}>9.30 AM - 10.00 AM</Radio>
                            <Radio value={3}>10.00 AM - 10.30 AM</Radio>
                            <Radio value={4}>10.30 AM - 11.00 AM</Radio>
                          </Space>
                        </Radio.Group>
                      </Col>
                      <Col>
                        <Button
                          style={{
                            borderRadius: "0",
                            boxShadow: "0 0 8px rgba(0,0,0,.2)",
                            marginTop: "20px",
                          }}
                          type="primary"
                          disabled={false}
                        >
                          Confirm
                        </Button>
                      </Col>
                      <Col>
                        <Button
                          style={{
                            borderRadius: "0",
                            boxShadow: "0 0 8px rgba(0,0,0,.2)",
                            marginTop: "20px",
                          }}
                          type="primary"
                          danger
                        >
                          Reject
                        </Button>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

import { Row, Col, Typography, Divider, Form, Input, Button } from "antd";
import { useState } from "react";
const { Title } = Typography;

export default function () {
  const [oldp, setOldp] = useState("");
  const [newp, setNewp] = useState("");
  const [confirmp, setConfirmp] = useState("");

  return (
    <>
      <Row style={{ padding: "3%", height: "75vh" }}>
        <Col span={24}>
          <Row justify="center">
            <Col span={22}>
              <Form>
                <Row>
                  <Col span={24}>
                    <Title level={2}>CHANGE PASSWORD</Title>
                    <Divider />
                  </Col>
                  <Col span={24}>
                    <Title level={4} style={{ marginTop: "5px" }}>
                      {" "}
                      Old Password
                    </Title>
                    <Input
                      value={oldp}
                      onChange={(e) => setOldp(e.target.value)}
                      style={{
                        boxShadow: "0 0 10px 0 rgba(30,136,229,.4)",
                        height: "40px",
                      }}
                    />
                  </Col>
                </Row>
                <Row justify='space-between'>
                  <Col span={11}>
                    <Title level={4}> New Password</Title>
                    <Input
                      value={newp}
                      onChange={(e) => setNewp(e.target.value)}
                      style={{
                        boxShadow: "0 0 10px 0 rgba(30,136,229,.4)",
                        height: "40px",
                      }}
                    />
                  </Col>
                  <Col span={11}>
                    <Title level={4}> Confirm New Password</Title>
                    <Input
                      value={confirmp}
                      onChange={(e) => setConfirmp(e.target.value)}
                      style={{
                        boxShadow: " 0 0 10px 0 rgba(30,136,229,.4)",
                        height: "40px",
                      }}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button 
                      style={{marginTop: '40%'}}
                      type="primary"
                      size="large">
                      Change
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

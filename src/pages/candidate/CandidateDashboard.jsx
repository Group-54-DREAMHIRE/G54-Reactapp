import {
  Calendar,
  Card,
  Col,
  Row,
  Space,
  Typography,
  Image,
  Avatar,
} from "antd";
import db1 from "../../assets/images/db1.png";
import db2 from "../../assets/images/db2.png";
import db3 from "../../assets/images/db3.png";
import db4 from "../../assets/images/db4.png";
import db5 from "../../assets/images/db5.png";
import user1 from "../../assets/images/user1.png";
import user2 from "../../assets/images/user2.png";
import user3 from "../../assets/images/user3.png";
import user4 from "../../assets/images/user4.png";

const { Title, Text } = Typography;

export default function CandidateDashboard() {
  return (
    <>
      <Row>
        <Col span={24}>
          <Row gutter={20}>
            <Col span={24}>
              <Space direction="vertical">
                <Title style={{ marginTop: "0", marginBottom: "0" }}>
                  Hello Dulanjana !
                </Title>
                <Text>It's good to see you again.</Text>
              </Space>
            </Col>

            <Col style={{ margin: "30px 0 30px" }} span={24}>
              <Row gutter={20}>
                <Col>
                  <Card
                    style={{
                      backgroundColor: "rgba(245, 245, 247, 1)",
                      boxShadow: "0 0 8px rgba(0,0,0,.2)",
                    }}
                  >
                    <Title style={{ margin: "0" }}>200</Title>
                    <Title level={4} style={{ margin: "0" }}>
                      Job Posts
                    </Title>
                  </Card>
                </Col>

                <Col>
                  <Card
                    style={{
                      backgroundColor: "rgba(245, 245, 247, 1)",
                      boxShadow: "0 0 8px rgba(0,0,0,.2)",
                    }}
                  >
                    <Title style={{ margin: "0" }}>11</Title>
                    <Title level={4} style={{ margin: "0" }}>
                      Applied Jobs
                    </Title>
                  </Card>
                </Col>
                <Col>
                  <Card
                    style={{
                      backgroundColor: "rgba(245, 245, 247, 1)",
                      boxShadow: "0 0 8px rgba(0,0,0,.2)",
                    }}
                  >
                    <Title style={{ margin: "0" }}>5</Title>
                    <Title level={4} style={{ margin: "0" }}>
                      Pending
                    </Title>
                  </Card>
                </Col>

                <Col>
                  <Card
                    style={{
                      backgroundColor: "rgba(245, 245, 247, 1)",
                      boxShadow: "0 0 8px rgba(0,0,0,.2)",
                    }}
                  >
                    <Title style={{ margin: "0" }}>2</Title>
                    <Title level={4} style={{ margin: "0" }}>
                      Short List
                    </Title>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col
              span={14}
              style={{ padding: "2", boxShadow: "0 0 8px rgba(0,0,0,.2)" }}
            >
              <Calendar />
            </Col>
            <Col span={10}>
              <Row justify="center">
                <Col span={20} style={{ padding: " 0 2%" }}>
                  <Card style={{boxShadow: '0 0 8px rgba(0,0,0,.1)'}}>
                    <Row>
                      <Col span={3}>
                        <Image preview={false} src={db5} />
                        <Image preview={false} src={db2} />
                      </Col>
                      <Col span={21}>
                        <Row>
                        <Col span={24}>
                        <Row align="bottom" gutter={[0, 10]}>
                          <Col span={24}>
                            <Row justify="space-between" align="bottom">
                              <Text
                                style={{ fontSize: "20px", fontWeight: "500" }}
                              >
                                Interview Creative Software
                              </Text>
                              <Text style={{ fontWeight: "500" }}>
                                9:00 AM
                              </Text>
                            </Row>
                          </Col>
                          <Col>
                            <Text style={{ fontWeight: "400", fontSize: '16px' }}>HR Interview</Text>
                          </Col>
                        </Row>
                        <Row
                          style={{ marginTop: "30px" }}
                          justify="space-between"
                          gutter={[0, 50]}
                        >
                          <Col>
                            <Avatar.Group>
                              <Avatar src={user2} />
                              <Avatar src={user1} />
                              <Avatar src={user3} />
                              <Avatar src={user4} />
                            </Avatar.Group>
                          </Col>
                          <Col>
                            <Image src={db4} preview={false}/>
                          </Col>
                          <Col span={24}>
                            <Image src={db3} preview={false} />
                            <Title
                              level={4}
                              style={{
                                color: "rgba(255,255,255,.8)",
                                margin: "0",
                                position: "absolute",
                                top: "10px",
                                left: "20px",
                                display: "inline-block",
                              }}
                            >
                              With Mr.Dulanjana 
                            </Title>

                            <Text
                              style={{
                                color: "rgba(255,255,255,.7)",
                                marginBottom: "0",
                                position: "absolute",
                                top: "40px",
                                left: "20px",
                                fontSize: "16px",
                              }}
                            >
                              Creative Software
                            </Text>
                          </Col>
                        </Row>
                      </Col>
                      <Col span={24}>
                        <Row align="bottom" gutter={[0, 10]}>
                          <Col span={24}>
                            <Row justify="space-between" align="bottom">
                              <Text
                                style={{ fontSize: "20px", fontWeight: "500" }}
                              >
                                Interview Creative Software
                              </Text>
                              <Text style={{ fontWeight: "500" }}>
                                9:00 AM
                              </Text>
                            </Row>
                          </Col>
                          <Col>
                            <Text style={{ fontWeight: "400", fontSize: '16px' }}>HR Interview</Text>
                          </Col>
                        </Row>
                        <Row
                          style={{ marginTop: "30px" }}
                          justify="space-between"
                          gutter={[0, 50]}
                        >
                          <Col>
                            <Avatar.Group>
                              <Avatar src={user2} />
                              <Avatar src={user1} />
                              <Avatar src={user3} />
                              <Avatar src={user4} />
                            </Avatar.Group>
                          </Col>
                          <Col>
                            <Image src={db4} preview={false} />
                          </Col>
                          <Col span={24}>
                            <Image src={db3} preview={false}/>
                            <Title
                              level={4}
                              style={{
                                color: "rgba(255,255,255,.8)",
                                margin: "0",
                                position: "absolute",
                                top: "10px",
                                left: "20px",
                                display: "inline-block",
                              }}
                            >
                              With Mr.Dulanjana 
                            </Title>

                            <Text
                              style={{
                                color: "rgba(255,255,255,.7)",
                                marginBottom: "0",
                                position: "absolute",
                                top: "40px",
                                left: "20px",
                                fontSize: "16px",
                              }}
                            >
                              Creative Software
                            </Text>
                          </Col>
                        </Row>
                      </Col>
                        </Row>
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

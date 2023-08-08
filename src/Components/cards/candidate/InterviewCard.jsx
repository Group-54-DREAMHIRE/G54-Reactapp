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
  import db1 from "../../../assets/images/db1.png";
  import db2 from "../../../assets/images/db2.png";
  import db3 from "../../../assets/images/db3.png";
  import db4 from "../../../assets/images/db4.png";
  import db5 from "../../../assets/images/db5.png";
  import db6 from "../../../assets/images/db6.png";
  import user1 from "../../../assets/images/user1.png";
  import user2 from "../../../assets/images/user2.png";
  import user3 from "../../../assets/images/user3.png";
  import user4 from "../../../assets/images/user4.png";
import { Link } from "react-router-dom";
  
  const { Title, Text } = Typography;

export default function InterviewCard() {
  return (
    <>
      <Link to= "/interviewdetails">
      <Card 
      style={{ boxShadow: "0 0 8px rgba(0,0,0,.1)" }}
      >
        <Row gutter={10}>
          <Col span={2}>
            <Row align='middle' justify='center'>
            <Image preview={false} src={db2} />
            <Image preview={false} src={db6} />
            </Row>
            
          </Col>
          <Col span={21}>
            <Row >
              <Col span={24}>
                <Row align="bottom" gutter={[0, 20]}>
                  <Col span={24}>
                    <Row justify="space-between" align="bottom">
                      <Text style={{ fontSize: "18px", fontWeight: "500" }}>
                        Interview Creative Software
                      </Text>
                      <Text style={{ fontWeight: "500" }}>9:00 AM</Text>
                    </Row>
                  </Col>
                  <Col>
                    <Text style={{ fontWeight: "400", fontSize: "16px" }}>
                      HR Interview
                    </Text>
                  </Col>
                </Row>
                <Row
                  style={{ marginTop: "40px" }}
                  justify="space-between"
                  gutter={[0, 80]}
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
            </Row>
          </Col>
        </Row>
      </Card>
      </Link>
    </>
  );
}

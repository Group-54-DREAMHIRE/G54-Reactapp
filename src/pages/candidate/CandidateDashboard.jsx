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
import db6 from "../../assets/images/db6.png";
import user1 from "../../assets/images/user1.png";
import user2 from "../../assets/images/user2.png";
import user3 from "../../assets/images/user3.png";
import user4 from "../../assets/images/user4.png";
import InterviewCard from "../../Components/cards/candidate/InterviewCard";

const { Title, Text } = Typography;

const items = [
  {
    company: "Creative Software",
    date: "2023.08.28",
    time: "9.00 AM",
    type: "HR Interview",
    with: "MRS. Vishmi"
  },
  {
    company: "Derect FN",
    date: "2023.09.05",
    time: "11.00 AM",
    type: "TECHNICAL Interview",
    with: "MR. Sampath"
  },
];
export default function CandidateDashboard() {
  return (
    <>
      <Row gutter={20} style={{ padding: "2%" }}>
        <Col span={15}>
          <Row>
            <Col span={24}>
              <Space direction="vertical">
                <Title style={{ marginTop: "0", marginBottom: "0" }}>
                  Hello Dulanjana !
                </Title>
                <Text>It's good to see you again.</Text>
              </Space>
            </Col>

            <Col style={{ margin: "30px 0 30px" }} span={24}>
              <Row gutter={[50, 40]}>
                <Col>
                  <Card
                    style={{
                      backgroundColor: "rgba(233, 245, 254, 1)",
                      boxShadow: "0 0 8px rgba(0,0,0,.1)",
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
                      backgroundColor: "rgba(233, 245, 254, 1)",
                      boxShadow: "0 0 8px rgba(0,0,0,.1)",
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
                      backgroundColor: "rgba(233, 245, 254, 1)",
                      boxShadow: "0 0 8px rgba(0,0,0,.1)",
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
                      backgroundColor: "rgba(233, 245, 254, 1)",
                      boxShadow: "0 0 8px rgba(0,0,0,.1)",
                    }}
                  >
                    <Title style={{ margin: "0" }}>2</Title>
                    <Title level={4} style={{ margin: "0" }}>
                      Short List
                    </Title>
                  </Card>
                </Col>
                <Col
                  span={22}
                  style={{ padding: "2", boxShadow: "0 0 8px rgba(0,0,0,.1)" }}
                >
                  <Calendar />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col span={9}>
          <Row gutter={[30, 30]}>
            {items.map((item) => {
              return (
                <Col span={24}>
                  <InterviewCard item={item} />
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </>
  );
}

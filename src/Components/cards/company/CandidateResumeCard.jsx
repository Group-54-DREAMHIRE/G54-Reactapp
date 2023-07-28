import { FaMapMarkerAlt, FaMoneyBillAlt } from "react-icons/fa";
import {
  ExclamationCircleFilled,
  CloseCircleFilled,
  CheckCircleFilled,
} from "@ant-design/icons";
import { Card, Col, Row, Typography, Button, Image, Modal } from "antd";

const { confirm } = Modal;
const { Title, Text } = Typography;

export default function CandidateResumeCard({ items }) {
  const showPromiseConfirm = () => {
    confirm({
      title: "Do you want to reject?",
      icon: <ExclamationCircleFilled />,
      content: "",
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log("Oops errors!"));
      },
      onCancel() {},
    });
  };

  return (
    <>
      <Card
        className="resume-card-w"
        style={{ boxShadow: "0 0 8px 0 rgba(30,136,229,.4)" }}
        hoverable
      >
        <Row justify="space-between">
          <Col span={13}>
            <Title level={4} style={{ marginBottom: "18px", marginTop: "0" }}>
              {items.name}
            </Title>
            <Text style={{ color: "rgb(30,136,229)" }}>{items.title}</Text>{" "}
            <Text>{items.company}.</Text> <br />
            <Title level={5} style={{ marginTop: "8px" }}>
              <Text
                style={{
                  marginTop: "0px",
                  marginRight: "10px",
                  color: "rgb(30,136,229)",
                }}
              >
                <FaMapMarkerAlt /> {items.address}.
              </Text>
              <Text style={{ marginTop: "0px", color: "rgb(30,136,229)" }}>
                <FaMoneyBillAlt /> {items.salary}
              </Text>
            </Title>
          </Col>
          <Col span={8}>
            <Image
              src={items.image}
              style={{ borderRadius: "10px", height: "100%", width: "100%" }}
            />
          </Col>
        </Row>
        <Row style={{ marginTop: "13px" }}>
          {items.tags.slice(0, 4).map((tag) => {
            return (
              <Button
                style={{
                  backgroundColor: "rgba(30,136,229,.19)",
                  color: "rgba(30,136,229,1)",
                  margin: "2px",
                }}
                key={tag.id}
              >
                {tag.label}
              </Button>
            );
          })}
        </Row>
        <Row style={{ marginTop: "15px" }} gutter={10} justify="end">
          <Col>
            <Button style={{ backgroundColor: "yellow" }}>Pending</Button>
          </Col>
          <Col>
            <Button
              icon={
                <CheckCircleFilled style={{ width: "100%", height: "100%" }} />
              }
              className="approve-w"
              style={{
                backgroundColor: "rgba(67, 138, 254, 0.12)",
                border: "1px solid #2196F3",
              }}
            >
              Approve
            </Button>
          </Col>
          <Col>
            <Button
              icon={<CloseCircleFilled />}
              className="reject-w"
              onClick={showPromiseConfirm}
              style={{
                backgroundColor: "rgba(102, 112, 133, 0.25",
                border: "1px solid #BBB",
              }}
            >
              Reject
            </Button>
          </Col>
        </Row>
      </Card>
    </>
  );
}

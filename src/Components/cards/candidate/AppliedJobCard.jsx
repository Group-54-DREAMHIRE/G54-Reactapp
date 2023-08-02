import { FaMapMarkerAlt, FaMoneyBillAlt } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import {
  ExclamationCircleFilled,
  CloseCircleFilled,
  CheckCircleFilled,
} from "@ant-design/icons";
import { Card, Col, Row, Typography, Button, Image } from "antd";

const { Title, Text } = Typography;

export default function AppliedJobCard({items}) {
  return (
    <>
      <Card
        className="resume-card-w"
        style={{ boxShadow: "0 0 8px 0 rgba(30,136,229,.4)" }}
        hoverable
      >
        <Row justify="space-between">
          <Col>
            <Title level={4} style={{ marginBottom: "18px", marginTop: "0" }}>
              {items.title}
            </Title>
            <Text style={{ color: "rgb(30,136,229)" }}>@{items.name}</Text>
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
        </Row>
        <Row style={{ marginTop: "13px" }}>
          {items.tags.slice(0, 4).map((tag) => {
            return (
              <Button
                style={{
                  backgroundColor: "rgba(30,136,229,.25)",
                  fontWeight: "600",
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
            <Button
              className="view-w"
              style={{
                border: "1px solid rgba(30,136,229,1)",
                color: "rgba(30,136,229,1)",
                fontWeight: "600",
              }}
            >
              View
            </Button>
          </Col>
        </Row>
      </Card>
    </>
  );
}

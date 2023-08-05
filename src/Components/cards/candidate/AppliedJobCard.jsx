import { FaMapMarkerAlt, FaMoneyBillAlt } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { handleTags } from "../JobPostCard";
import {
  ExclamationCircleFilled,
  CloseCircleFilled,
  CheckCircleFilled,
  BellOutlined,
  CheckCircleTwoTone,
} from "@ant-design/icons";
import {
  Card,
  Col,
  Row,
  Typography,
  Button,
  Image,
  Tag,
  Progress,
  Space,
} from "antd";
import Link from "antd/es/typography/Link";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

export default function AppliedJobCard({ items }) {
  const navigate = useNavigate();
  return (
    <>
      <Card
        // className="resume-card-w"
        style={{ boxShadow: "0 0 8px 0 rgba(0,0,0,.1)" }}
        hoverable
      >
        <Row justify="space-between">
          <Col>
            <Title level={4} style={{ marginBottom: "18px", marginTop: "0" }}>
              {items.title}
            </Title>
            <Title
              level={5}
              style={{ color: "rgb(31,31,51)", marginTop: "8px" }}
            >
              @ {items.name}
            </Title>
            <Title level={5} style={{ marginTop: "8px" }}>
              <Text
                style={{
                  marginTop: "0px",
                  marginRight: "10px",
                  color: "rgb(31,31,51)",
                }}
              >
                <FaMapMarkerAlt /> {items.address}.
              </Text>
              <Text style={{ marginTop: "0px", color: "rgb(31,31,51)" }}>
                <FaMoneyBillAlt /> {items.salary}
              </Text>
            </Title>
            <Space style={{ marginTop: "15px" }}>
              {items.tags.slice(0, 4).map((tag) => {
                return (
                 handleTags(tag)
                );
              })}
            </Space>
          </Col>
          <Col span={9}>
            <Image preview={false} width={200} height={130} src={items.image} />
          </Col>
        </Row>
        <Row style={{ marginTop: "0px" }} align="bottom" gutter={40} justify="end">
          <Col>
           { items.status && handleStatus(items.status)}
          </Col>
          <Col>
            <Button
            onClick={()=>navigate("/appliedjob")}
              className="view-w"
              type="primary"
              style={{
                borderRadius: "0",
              }}>
              View
            </Button>
          </Col>
        </Row>
      </Card>
    </>
  );
}
const statusStyles = {
  fontSize: '16px',
}

const handleStatus = (value) =>{
  if(value === "pending"){
    return (
      <Link style={statusStyles}>
        Application is in the pending list July 25
      </Link>
    )}
    if(value === "shortList"){
      return (
          <Text type="success" style={statusStyles}>
            Application is in the shortlist July 25
          </Text>
      )}
      if(value === "reject"){
        return (
            <Text type="danger" style={statusStyles}>
              Application is rejected July 25
            </Text>
        )}
      if(value === "close"){
          return (
              <Text type="danger" style={statusStyles}>
                Positions are  July 25
              </Text>
        )}
  }


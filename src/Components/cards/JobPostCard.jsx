import { FaMapMarkerAlt, FaMoneyBillAlt } from "react-icons/fa";
import { format } from "date-fns";
import moment from "moment/moment";
import { IoMdAddCircle } from "react-icons/io";
import jobpost from "../../assets/images/jobpost1.jpg";
import {
  ExclamationCircleFilled,
  CloseCircleFilled,
  CheckCircleFilled,
} from "@ant-design/icons";
import { Card, Col, Row, Typography, Button, Image, Modal, Tag } from "antd";
import Item from "antd/es/list/Item";
import { useNavigate } from "react-router-dom";
import { color } from "framer-motion";
import { useState, useEffect } from "react";

const { Title, Text } = Typography;

export default function JobPostCard({ items, status }) {
  const [taglist, setTagList] = useState([]);
  const [postDate, setPostDate] = useState();
  useEffect(() => {
    const date = moment(items.deadline);
    setPostDate(date.format("YYYY MMM DD"));

    const tag = items.tags.split(" ,");
    setTagList(tag);
    console.log("this", taglist);
  }, []);

  const navigate = useNavigate();
  return (
    <>
      <Card
        style={{ boxShadow: "0 0 8px 0 rgba(0,0,0,.1)" }}
        hoverable
        cover={<Image preview={false} src={items.cover} style={{height: '200px', width: '100%'}}/>}
      >
        <Row style={{ marginTop: "10px" }} gutter={20}>
          <Col>
            <Text strong>{items.companyName}</Text>
          </Col>
          <Col>
            <Text
              style={{
                fontSize: "16px",
                fontWeight: "500",
                color: "rgb(30,136,229)",
              }}
            >
              {postDate}
            </Text>
          </Col>
        </Row>
        <Row>
          <Title level={3}> {items.jobTitle}</Title>
        </Row>
        <Row>
          <Text style={{ fontSize: "16px" }}>{items.description}</Text>
        </Row>
        <Row style={{ marginTop: "13px" }} justify="start">
          {taglist.map((tag) => {
            return handleTags(tag);
          })}
        </Row>
        <Row style={{ marginTop: "15px" }} gutter={10} justify="end">
          {status.save && (
            <Col>
              <Button style={{ borderRadius: "0" }} type="primary">
                Save
              </Button>
            </Col>
          )}
          {status.more && (
            <Col>
              <Button
                style={{ borderRadius: "0" }}
                onClick={() => navigate(`/jobpost/${items.id}`)}
                type="primary"
              >
                View Job
              </Button>
            </Col>
          )}
        </Row>
      </Card>
    </>
  );
}
const tagStyles = {
  fontSize: "16px",
  fontWeight: "600",
};

export const handleTags = (value) => {
  if (value === "python") {
    return (
      <Tag style={tagStyles} color="blue" bordered={false}>
        Python
      </Tag>
    );
  }
  if (value === "java") {
    return (
      <Tag style={tagStyles} color="orange" bordered={false}>
        Java
      </Tag>
    );
  }
  if (value === "c++") {
    return (
      <Tag style={tagStyles} color="purple" bordered={false}>
        C++
      </Tag>
    );
  }
  if (value === "javascript") {
    return (
      <Tag style={tagStyles} color="yellow" bordered={false}>
        JavaScript
      </Tag>
    );
  }
  if (value === "ruby") {
    return (
      <Tag style={tagStyles} color="orange" bordered={false}>
        Ruby
      </Tag>
    );
  }
  if (value === "c#") {
    return (
      <Tag style={tagStyles} color="orange" bordered={false}>
        C#
      </Tag>
    );
  }
  if (value === "github") {
    return (
      <Tag style={{ ...tagStyles, color: "black" }} bordered={false}>
        GitHub
      </Tag>
    );
  }
  if (value === "bitbucket") {
    return (
      <Tag style={tagStyles} color="blue" bordered={false}>
        Bitbucket
      </Tag>
    );
  }

  if (value === "html") {
    return (
      <Tag style={tagStyles} color="orange" bordered={false}>
        HTML
      </Tag>
    );
  }
  if (value === "react") {
    return (
      <Tag style={tagStyles} color="blue" bordered={false}>
        React
      </Tag>
    );
  }
  if (value === "angular") {
    return (
      <Tag style={tagStyles} color="red" bordered={false}>
        Angular
      </Tag>
    );
  }
  if (value === "android") {
    return (
      <Tag style={tagStyles} color="green" bordered={false}>
        Android
      </Tag>
    );
  }
  if (value === "ios") {
    return (
      <Tag style={tagStyles} color="blue" bordered={false}>
        iOS
      </Tag>
    );
  }
  if (value === "flutter") {
    return (
      <Tag style={tagStyles} color="purple" bordered={false}>
        Flutter
      </Tag>
    );
  }
  if (value === "reactnative") {
    return (
      <Tag style={{ ...tagStyles, color: "#008080" }} bordered={false}>
        ReactNative
      </Tag>
    );
  }
  if (value === "aws") {
    return (
      <Tag style={tagStyles} color="orange" bordered={false}>
        AWS
      </Tag>
    );
  }
  if (value === "azure") {
    return (
      <Tag style={tagStyles} color="blue" bordered={false}>
        Azure
      </Tag>
    );
  }
  if (value === "googlecloud") {
    return (
      <Tag style={tagStyles} color="green" bordered={false}>
        GoogleCloud
      </Tag>
    );
  }
};

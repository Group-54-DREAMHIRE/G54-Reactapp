import { FaMapMarkerAlt, FaMoneyBillAlt } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
// import { handleTags } from "../EventCard";
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
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setActiveEventId, setAppliedActEvent } from "../../../store/company/applyEventSlice";
import moment from "moment";

const { Title, Text } = Typography;

export default function AppliedEventCard({ items }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [tags, setTags] = useState([]);
  const [post, setPost] = useState([]);
  const [company, setCompany] = useState([]);
  const [eventId, setEventId] = useState();
  useEffect(() => {
    let temp = [];
    if (typeof items.tags === "string" && items.tags) {
      temp = items.tags.split(" ,");
    } else {
      temp = [];
    }
    setPost(items.event);
    setCompany(items.event.company);
    setEventId(items.event.id);
    dispatch(setActiveEventId(items.event.id));
    dispatch(setAppliedActEvent(items));
  }, []);
  return (
    <>
      <Card
        // className="resume-card-w"
        style={{ boxShadow: "0 0 8px 0 rgba(0,0,0,.1)" }}
        hoverable
      >
        <Row justify="space-around">
          <Col>
            <Title level={4} style={{ marginBottom: "18px", marginTop: "0" }}>
              {post.title}
            </Title>
          </Col>
          <Col>
            <Title
              level={5}
              style={{ color: "rgb(31,31,51)", marginTop: "8px" }}
            >
              {company.name}
            </Title>
          </Col>
        </Row>
        <Row justify={"space-around"}>
          <Col>
            <Image preview={false} width={150} height={100} src={post.cover} />
          </Col>
          <Col>
          {moment(post.date).format("YYYY MMMM DD")}
          </Col>
        </Row>
      </Card >
    </>
  );
}
const statusStyles = {
  fontSize: '16px',
}

const handleStatus = (value, date) => {
  if (value === "pending") {
    return (
      <Text style={statusStyles}>
        Application is in the pending list {moment(date).format("YYYY MMMM DD")}
      </Text>
    )
  }
  if (value === "shortlist") {
    return (
      <Text type="success" style={statusStyles}>
        Application is in the shortlist {moment(date).format("YYYY MMMM DD")}
      </Text>
    )
  }
  if (value === "reject") {
    return (
      <Text type="danger" style={statusStyles}>
        Application is rejected {moment(date).format("YYYY MMMM DD")}
      </Text>
    )
  }
  if (value === "close") {
    return (
      <Text type="danger" style={statusStyles}>
        Positions are  {moment(date).format("YYYY MMMM DD")}
      </Text>
    )
  }
}


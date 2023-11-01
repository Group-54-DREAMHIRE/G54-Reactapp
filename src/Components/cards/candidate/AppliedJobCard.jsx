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
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setActiveJobId, setAppliedActJob } from "../../../store/company/applyJobSlice";
import moment from "moment";

const { Title, Text } = Typography;

export default function AppliedJobCard({ items }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [tags, setTags] = useState([]);
  const [post, setPost] = useState([]);
  const [company, setCompany] = useState([]);
  const [jobId, setJobId] = useState(0);
  useEffect(() => {
     let temp = [];
     if (typeof items.tags === "string" && items.tags) {
      temp = items.tags.split(" ,");
   } else {
    temp = [];
   }
     setTags(temp);
     setPost(items.jobPost);
     setCompany(items.jobPost.company);
     setJobId(items.jobPost.id);
     dispatch(setAppliedActJob(items));
   }, []);
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
              {post.jobTitle}
            </Title>
            <Title
              level={5}
              style={{ color: "rgb(31,31,51)", marginTop: "8px" }}
            >
              @ {company.name}
            </Title>
            <Title level={5} style={{ marginTop: "8px" }}>
              <Text
                style={{
                  marginTop: "0px",
                  marginRight: "10px",
                  color: "rgb(31,31,51)",
                }}
              >
                <FaMapMarkerAlt /> {company.address}.
              </Text>
              {/* <Text style={{ marginTop: "0px", color: "rgb(31,31,51)" }}>
                <FaMoneyBillAlt /> {post.currency} {post.minSalary} - {post.maxSalary}
              </Text> */}
            </Title>
            <Space style={{ marginTop: "15px" }}>
              {tags.slice(0, 4).map((tag) => {
                return (
                 handleTags(tag)
                );
              })}
            </Space>
          </Col>
          <Col span={8}>
            <Image preview={false} width={150} height={100} src={post.cover} />
          </Col>
        </Row>
        <Row style={{ marginTop: "0px" }} align="bottom"  justify="end">
          <Col span={20}>
           { items.candidateType && handleStatus(items.candidateType, items.appliedDate)}
          </Col>
          <Col span={4}>
            <Button
            onClick={()=>{navigate(`/appliedjob/${jobId}`); dispatch(setActiveJobId(jobId))}}
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

const handleStatus = (value,date) =>{
  if(value === "pending"){
    return (
      <Text type="warning" style={statusStyles}>
        Application is added to the pending list {moment(date).format("YYYY MMMM DD")}
      </Text>
    )}
    if(value === "shortlist"){
      return (
          <Text type="success" style={statusStyles}>
            Application is added to the shortlist {moment(date).format("YYYY MMMM DD")}
          </Text>
      )}
      if(value === "reject"){
        return (
            <Text type="danger" style={statusStyles}>
              Application added to rejected {moment(date).format("YYYY MMMM DD")}
            </Text>
        )}
      if(value === "close"){
          return (
              <Text type="danger" style={statusStyles}>
                Positions are  {moment(date).format("YYYY MMMM DD")}
              </Text>
        )}
  }


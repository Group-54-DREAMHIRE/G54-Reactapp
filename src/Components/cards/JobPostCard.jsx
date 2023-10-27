import { FaMapMarkerAlt, FaMoneyBillAlt } from "react-icons/fa";
import { BsFillBookmarkCheckFill, BsBookmark } from "react-icons/bs";
import { format } from "date-fns";
import moment from "moment/moment";
import { IoMdAddCircle } from "react-icons/io";
import jobpost from "../../assets/images/jobpost1.jpg";
import {
  ExclamationCircleFilled,
  CloseCircleFilled,
  CheckCircleFilled,
} from "@ant-design/icons";
import { Card, Col, Row, Typography, Button, Image, Modal, Tag, Space, message } from "antd";
import Item from "antd/es/list/Item";
import { useNavigate } from "react-router-dom";
import { color } from "framer-motion";
import { useState, useEffect } from "react";
import { fetchUserData } from "../../api/authenticationService";

const { Title, Text } = Typography;

export default function JobPostCard({ items, status }) {
  const user = JSON.parse(localStorage.getItem("USER"));
  const id = user.id;
  const [taglist, setTagList] = useState([]);
  const [postDate, setPostDate] = useState();
  const [save, setSave] = useState(false);
  useEffect(() => {
    const date = moment(items.deadline);
    setPostDate(date.format("YYYY MMMM DD"));

    const tag = items.tags.split(" ,");
    setTagList(tag);
    console.log("this", taglist);
  }, []);

  const navigate = useNavigate();
  const handleSave = async() =>{
    setSave(true);
    const sendData = {
      jobId:items.id
    }
    let data = {
      url: `/api/v1/savedJobs/save/${id}`,
      data:sendData, 
      method: "post",
    };
    try {
      const response = await fetchUserData(data);
      if (response.status === 200) {
        message.success("Job is saved successfully");
        
      }else{
        message.error("Saved error! Try again!");
        setSave(false);
      }
    } catch (e) {
      console.log(e);
      setSave(false);
      message.error("Saved error! Try again!");
    }

  }
  const handleDelete = async() =>{
    setSave(false);
  }
  return (
    <>
      <Card
        style={{ boxShadow: "0 0 8px 0 rgba(0,0,0,.1)" }}
        hoverable
        cover={<Image preview={false} src={items.cover} style={{height: '200px', width: '100%'}}/>}
      >
        <Row style={{ marginTop: "10px" }} gutter={[20,20]}>
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
             Posted {postDate}
            </Text>
          </Col>
          <Col span={24}>
          <Row justify='space-between' align='bottom'>
          <Col span={18}>
          <Title style={{margin:'0'}} level={3}> {items.jobTitle}</Title>
          </Col>
         {user.systemUser.userType === "company"?null:
          <Col>
          {save?<BsFillBookmarkCheckFill onClick={handleDelete}/>:<BsBookmark onClick={handleSave} />}
          </Col>
         }
        </Row>
          </Col>
          <Col span={24}>
          {taglist.slice(0,5).map((tag) => {
            return handleTags(tag);
          })}
          </Col>
          <Col span={24}>
          <Text style={{ fontSize: "16px" }}>{items.description.substring(0,120)} ...</Text>
          </Col>
          <Col span={24}>
          <Row style={{ marginTop: "15px" }} gutter={10} justify="end">
            <Col>
              <Button
                style={{ borderRadius: "0" }}
                onClick={() => navigate(`/jobpost/${items.id}`)}
                type="primary">
                See more...
              </Button>
            </Col>
        </Row>
          </Col>
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

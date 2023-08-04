import { FaMapMarkerAlt, FaMoneyBillAlt } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import jobpost from '../../assets/images/jobpost1.jpg';
import {
  ExclamationCircleFilled,
  CloseCircleFilled,
  CheckCircleFilled,
} from "@ant-design/icons";
import { Card, Col, Row, Typography, Button, Image, Modal, Tag } from "antd";
import Item from "antd/es/list/Item";
import { useNavigate } from "react-router-dom";
import { color } from "framer-motion";
import { useState } from "react";

const { Title, Text } = Typography;

export default function JobPostCard({ items, status }) {

  const navigate = useNavigate();
  return (
    <>
      <Card
        style={{ boxShadow: "0 0 8px 0 rgba(0,0,0,.1)" }}
        hoverable
      >
        <Row justify="space-between">
          <Col span={24}>
            <Image
                preview={false}
                src={jobpost}
                style={{ height: "100%", width: "100%" }}
            />
          </Col>
        </Row>
        <Row style={{marginTop: '10px'}} gutter={20}>
           <Col>
           <Text strong>{items.name}</Text>
           
           </Col> 
           <Col>
           <Text style={{fontSize:'16px', fontWeight: '500', color: 'rgb(30,136,229)'}}>{items.date}</Text>
           </Col>
        </Row>
        <Row>
          <Title level={3}> {items.title}</Title>
        </Row>
        <Row>
            <Text style={{fontSize: '16px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, obcaecati in.</Text>
        </Row>
        <Row style={{ marginTop: "13px" }} justify='start'>
          {items.tags.slice(0, 4).map((tag) => {
            return (              
              handleTags(tag) 
            );
          })}
        </Row>
        <Row style={{ marginTop: "15px" }} gutter={10} justify="end">
         {status.save && <Col>
            <Button
              style={{borderRadius: '0'}}
              type="primary"
            >
              Save
            </Button>
          </Col>}
          {status.more && <Col>
            <Button
              style={{borderRadius: '0'}}
              onClick={()=>navigate("/jobpost")}
              type="primary"
            >
              View Job
            </Button> 
          </Col>}
        </Row>
      </Card>
    </>
  );
}
const tagStyles = {
  fontSize: '16px',
  fontWeight: '600'
}

export const handleTags = (value)=>{
  if(value == "react"){
    return(
      <Tag style={tagStyles} color="orange" bordered={false}>React</Tag>
    )
  }
  if(value == "java"){
    return(
      <Tag  style={tagStyles}  color="green" bordered={false}>Java</Tag>
    )
  }
  if(value == "python"){
    return(
      <Tag style={tagStyles}  color="lime" bordered={false}>Python</Tag>
    )
  }
  if(value == "angular"){
    return(
      <Tag style={tagStyles}  color="magenta" bordered={false}>Angular</Tag>
    )
  }
  
}
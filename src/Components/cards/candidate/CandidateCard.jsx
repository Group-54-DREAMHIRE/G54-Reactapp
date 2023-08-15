import React from "react";
import { Card, Space, Button, Row, Col, Image, Typography } from "antd";
import { DollarOutlined, HomeOutlined } from "@ant-design/icons";
import { handleTags } from "../JobPostCard";
const { Title } = Typography;

function CandidateCard({ items }) {
  const cardStyle = {
    boxShadow: "0 0 8px rgba(0, 0, 0, 0.1)", // Adding a subtle shadow
  };

  const imageStyle = {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    border: "2px solid #fff",
  };

  return (
    <>
      <Card style={cardStyle}>
        <Row gutter={[20,20]}>
          <Col span={8}>
            <Row justify='center'>
            <Image
              src={items.profileImageUrl}
              alt="Profile"
              style={imageStyle}
            />
            </Row>
          </Col>
        <Col span={16}>
        <Row gutter={[0,20]}>
        <Col>
            <Title level={4} style={{margin: '0',textAlign:'center'}}>{items.name}</Title>
          </Col>
          <Col span={24}>
            <span>{items.jobTitle}</span>
          </Col>
          <Col span={24}>
            {items.skills.slice(0,3).map((skill, index) => handleTags(skill))}
          </Col>
          <Col span={24}>
          <Space>
            <HomeOutlined />
            <span>{items.location}</span>
            <DollarOutlined />
            <span>{items.currency}{items.minSalary}-{items.currency}{items.maxSalary}</span>
          </Space>
          </Col>
          <Button 
            block
            style={{borderRadius: '0'}}
            type="primary">
          View Profile
        </Button>
        </Row>
        </Col>
        </Row>
      </Card>
    </>
  );
}

export default CandidateCard;

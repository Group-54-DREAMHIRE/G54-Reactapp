import React from "react";
import { Card, Space, Button, Row, Col, Image, Typography } from "antd";
import { DollarOutlined, HomeOutlined } from "@ant-design/icons";
import { handleTags } from "../JobPostCard";
import { useNavigate } from "react-router-dom";
const { Title } = Typography;

function CandidateCard({ items }) {
  const navigate = useNavigate();
  const id = items.id;
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
        <Row gutter={[20, 20]}>
          <Col span={8}>
            <Row justify="center">
              <Image
                src={items.profilePicture}
                alt="Profile"
                style={imageStyle}
              />
            </Row>
          </Col>
          <Col span={16}>
            <Row gutter={[0, 20]}>
              <Col>
                <Title level={4} style={{ margin: "0 0 2px 0", textAlign: "center" }}>
                  {items.name}
                </Title>
                <span>{items.jobTitle}</span>
              </Col>
              {/* <Col span={24}>
                {items.skills.map((skill, index) => handleTags(skill))}
              </Col> */}
              <Col span={24}>
                <Space>
                  <HomeOutlined />
                  <span>{items.city}</span>
                  {/* <DollarOutlined /> */}
                  <span>
                    {items.currency}
                    {items.minSalary} - {items.maxSalary}
                  </span>
                </Space>
              </Col>
              <Button
              onClick={()=>navigate(`/candidate/${id}`)}
               block style={{ borderRadius: "0" }} 
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

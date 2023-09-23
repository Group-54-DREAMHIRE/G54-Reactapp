import React from "react";
import { Card, Row, Col, Button, Image, Typography } from "antd";
import { useNavigate } from "react-router-dom";
const { Title } = Typography;
const { Meta } = Card;

const CompanyCard = ({ company }) => {
  const id = company.id;
  const navigate = useNavigate();
  return (
    <Col style={{ marginBottom: "16px" }}>
      <Card
        hoverable
        style={{
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Row justify='space-between'>
          <Col span={15}>
            <Meta
              title={
                <Title level={2} style={{ marginBottom: '10px', marginTop: '0' }}>
                  {company.name}
                </Title>
              }
              description={<span>{company.description}</span>}
            />
           
          </Col>
          <Col span={8}>
            <Image alt="Card" src={company.logo} />
            <Row justify='end'>
            <Button
            onClick={()=>navigate(`/company/${id}`)}
              type="primary"
              style={{ marginTop: "20px", borderRadius: "0" }}
            >
              View More
            </Button>
            </Row>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default CompanyCard;

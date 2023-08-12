import React from "react";
import { Card, Row, Col, Button } from "antd";

const { Meta } = Card;

const CompanyCard = ({ title, paragraph, imageUrl }) => {
  return (
    <Col
      xs={24}
      md={window.innerWidth < 766 ? 24 : 12}
      style={{ marginBottom: "16px" }}
    >
      <Card
        hoverable
        style={{
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          width: "100%",
          height: "100%",
        }}
      >
        <Row>
          <Col span={16}>
            <Meta
              title={<h2 style={{ fontSize: "28px", margin: 0 }}>{title}</h2>}
              description={
                <p style={{ fontSize: "16px", margin: "8px 0" }}>{paragraph}</p>
              }
            />
            <Button type="primary" style={{ marginTop: "16px" }}>
              View More
            </Button>
          </Col>
          <Col span={8}>
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                alt="Card"
                src={imageUrl}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default CompanyCard;

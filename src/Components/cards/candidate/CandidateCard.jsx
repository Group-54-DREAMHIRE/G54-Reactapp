import React from "react";
import { Card, Space, Button } from "antd";
import { DollarOutlined, HomeOutlined } from "@ant-design/icons";

function CandidateCard(props) {
  const { profileImageUrl, name, jobTitle, skills, location, salary } = props;

  const cardStyle = {
    width: "300px", // Adjusted width
    height: "400px", // Adjusted height
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Adding a subtle shadow
    textAlign: "center",
    padding: "20px", // Add padding to create space
  };

  const titleStyle = {
    marginTop: "10px", // Adjust as needed
    fontSize: "18px", // Adjust as needed
    fontWeight: "bold",
  };

  const descriptionStyle = {
    marginTop: "15px", // Adjust as needed
    fontSize: "14px", // Adjust as needed
    color: "#555", // Adjust color if needed
  };

  const tagContainerStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px", // Adjust as needed
  };

  const tagStyle = {
    backgroundColor: "#f5f5f5", // Light ash color
    color: "#555", // Adjust color if needed
    fontSize: "12px",
    padding: "3px 10px",
    borderRadius: "20px",
    margin: "0 5px", // Adjust spacing as needed
  };

  const additionalTextStyle = {
    marginTop: "15px", // Adjust as needed
    fontSize: "14px", // Adjust as needed
    color: "#888", // Adjust color if needed
    textAlign: "center",
  };

  const buttonStyle = {
    marginTop: "15px", // Adjust as needed
    width: "250px", // Increase button width
    height: "50px", // Increase button height
  };

  const imageStyle = {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    border: "2px solid #fff",
  };

  return (
    <div>
      <Card style={cardStyle}>
        <div>
          <img
            src={profileImageUrl}
            alt="Profile"
            style={{ ...imageStyle, marginBottom: "15px" }}
          />
        </div>
        <div style={titleStyle}>{name}</div>
        <div style={descriptionStyle}>{jobTitle}</div>
        <div style={tagContainerStyle}>
          {skills.map((skill, index) => (
            <div key={index} style={tagStyle}>
              {skill}
            </div>
          ))}
        </div>

        <div style={additionalTextStyle}>
          <Space>
            <HomeOutlined />
            <span>{location}</span>
            <DollarOutlined />
            <span>{salary}</span>
          </Space>
        </div>
        <Button type="primary" style={buttonStyle}>
          View Profile
        </Button>
      </Card>
    </div>
  );
}

export default CandidateCard;

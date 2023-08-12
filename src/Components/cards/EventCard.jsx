import React from "react";
import { Card, Tag, Button } from "antd";

const EventCard = ({ imageUrl, title, description, date, tags }) => {
  return (
    <Card
      cover={
        <img
          src={imageUrl}
          alt="Card Cover"
          style={{ objectFit: "cover", height: "200px" }}
        />
      }
      style={{ width: "900px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
    >
      <a href="your_link_url">{title}</a>
      <h3 style={{ marginBottom: "12px" }}>{title}</h3>
      <p>{description}</p>

      <div style={{ marginBottom: "12px" }}>
        {tags.map((tag) => (
          <Tag key={tag} color="blue">
            {tag}
          </Tag>
        ))}
      </div>
      <p>Date: {date}</p>

      {/* Add more content as needed */}
      <Button type="primary" style={{ marginTop: "8px" }}>
        Register
      </Button>
    </Card>
  );
};

export default EventCard;

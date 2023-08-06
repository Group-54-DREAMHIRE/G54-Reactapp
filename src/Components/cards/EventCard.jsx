import React from "react";
import { Card, Tag, Button } from "antd";

const EventCard = () => {
  return (
    <Card
      cover={
        <img
          src="https://images.unsplash.com/photo-1516882058351-3601a7f420cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2lkZSUyMGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
          alt="Card Cover"
        />
      }
      style={{ width: "900px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
    >
      <a href="your_link_url">Creative Software</a>
      <h3>Career Fair - UCSC</h3>
      <p>
        Come explore the endless career opportunities at our career fair with
        SimCentric Technologies! Don't miss out on the chance to turn your
        dreams into ...
      </p>

      
      <div style={{ marginBottom: "12px" }}>
        <Tag color="blue">Creative software</Tag>
        <Tag color="green">Belvantage</Tag>
        <Tag color="purple">LayUp</Tag>
        {/* Add more tags as needed */}
      </div>
      <Button type="primary" style={{ marginTop: "8px" }}>
        Register
      </Button>
    </Card>
  );
};

export default EventCard;

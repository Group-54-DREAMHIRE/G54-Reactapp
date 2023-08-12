import React from "react";
import { Card, Tag, Button } from "antd";

export default function EventCard ({event}) {

  return (
  
    <Card
      cover={
        <img
          src={imageUrl}
          alt="Card Cover"
          style={{ objectFit: "cover", height: "200px" }}
        />
      }
      style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
    >
      
      <a href="your_link_url">{event.company}</a>
      <h3>{event.title}</h3>
      <p>
        {event.description}
      </p>

      <div style={{ marginBottom: "12px" }}>
        {event.participates.map((item, index)=>{
          return(
            <Tag color="blue" key={index}>
              {item}
            </Tag>
          )
        })}
      </div>
      <Button 
        size="large" 
        type="primary" 
        style={{ 
          marginTop: "8px", 
          marginRight: '20px',
          borderRadius: '0' }}>
        Save
      </Button>
      <Button size="large" type="primary" style={{ marginTop: "8px", borderRadius: '0' }}>
        View More..
      </Button>
    </Card>
  );
};



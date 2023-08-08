import React from "react";
import { Card, Tag, Button } from "antd";

export default function EventCard ({event}) {

  return (
  
    <Card
      cover={
        <img
          src="https://images.unsplash.com/photo-1516882058351-3601a7f420cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2lkZSUyMGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
          alt="Card Cover"
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



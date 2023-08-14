import React from "react";
import { Card, Tag, Button } from "antd";
import { useNavigate } from "react-router-dom";
import job from '../../assets/images/jobpost1.jpg';

export default function EventCard ({event,status}) {
  const navigate = useNavigate();
  return (
  
    <Card
      cover={
        <img
          src={job}
          alt="Card Cover"
          style={{ objectFit: "cover", height: "220px" }}
        />
      }
      style={{ boxShadow: "0 0 8px rgba(0, 0, 0, 0.1)" }}
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
      {status.save && <Button 
        size="large" 
        type="primary" 
        style={{ 
          marginTop: "8px", 
          marginRight: '20px',
          borderRadius: '0' }}>
        Save
      </Button>}
      { status.more && 
      <Button 
      size="large" 
      type="primary" 
      style={{ 
        marginTop: "8px", 
        borderRadius: '0' 
        }}
      onClick={()=> navigate("/event")}>
        View More..
      </Button>}
    </Card>
  );
};



import React, { useEffect, useState } from "react";
import { Card, Tag, Button } from "antd";
import { useNavigate } from "react-router-dom";
import moment from "moment/moment";

export default function EventCard ({items,status}) {
  
  const [postDate, setPostDate] = useState();
  useEffect(() => {
    const date = moment(items.date);
    setPostDate(date.format("YYYY MM DD"));
  }, []);
  const navigate = useNavigate();
  return (

    <Card
      cover={
        <img
          src={items.cover}
          alt="Card Cover"
          style={{ objectFit: "cover", height: "220px" }}
        />
      }
      style={{ boxShadow: "0 0 8px rgba(0, 0, 0, 0.1)" }}
    >
      
      <a href="your_link_url">{items.companyName}</a>
      <h3>{items.title}</h3>
      <p>
        {items.description}
      </p>

      <div style={{ marginBottom: "12px" }}>
        {items.participates.map((item, index)=>{
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



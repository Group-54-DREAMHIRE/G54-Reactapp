import React from "react";
import { Card, Tag, Button } from "antd";

const OneFullCard = () => {
  return (
    <Card style={{ width: "900px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
      <a href="your_link_url">Creative Software</a>
      <h3>Career Fair - UCSC</h3>
      <p >Date: September 15, 2023</p><br></br>
      <p>
        <span style={{ marginRight: "150px" }}>Start Time: 10:00 AM</span>
        <span>End Time: 4:00 PM</span>
      </p>
      <br></br>
      <p>
        “Anything is possible when you have the right people there to support
        you.” <br></br>
        <br></br>
        UCSC Career Fair 2023, organized by the University of Colombo School of
        Computing in collaboration with the Professional Development Centre of
        UCSC was successfully completed on the 27th of January.<br></br>
        <br></br> As the organizing committee, we would like to express our
        gratitude to our partner organizations who helped us to make this event
        a success.<br></br>
        <br></br> It was an absolute pleasure having you on board with us.
      </p>

      {/* Card Cover */}
      <div style={{ height: "200px", overflow: "hidden" }}>
        <img
          src="https://images.unsplash.com/photo-1516882058351-3601a7f420cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2lkZSUyMGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
          alt="Card Cover"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </div>

      <h4>Contact</h4>
      <p>Email: info@example.com</p>
      <p>Contact Number: (123) 456-7890</p>
      <div style={{ marginTop: "24px" }}>
        {/* Tags */}
        <Tag color="blue">Creative software</Tag>
        <Tag color="green">Belvantage</Tag>
        <Tag color="purple">LayUp</Tag>
        {/* Add more tags as needed */}
      </div>

      {/* Add space after the tags */}
      <div style={{ marginBottom: "12px" }} />

      <Button type="primary" style={{ marginTop: "8px" }}>
        Register
      </Button>
    </Card>
  );
};

export default OneFullCard;

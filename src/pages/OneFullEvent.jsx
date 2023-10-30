import React from "react";
import { Card, Tag, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getData } from "../api/authenticationService";
import moment from "moment/moment";
 
const OneFullCard = () => {
  const userType = localStorage.getItem("USERTYPE");
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [event, setEvent] = useState([]);
  const [eventDate, setEventDate] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
      getData(`/api/v1/event/getEvent/${id}`)
        .then((response) => {
          console.log(response.data);
          setEvent(response.data);
          setLoading(false);
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        })
        .catch((error) => {
          console.error("Error fetching user profile:", error);
          setLoading(false);
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        });
      console.log(event);
  }, []);

useEffect(() => {
  if(event) {
    const dateObj = moment(event.eventDate);
      setEventDate(dateObj.format("MMM DD YYYY"));
  }
})
  return (
    <Card>
      <a href="your_link_url">{event.companyName}</a>
      <h3>{event.title}</h3>
      <p >Date: {eventDate}</p>
      <p>
        <span style={{ marginRight: "150px" }}>Start Time: {event.startTime}</span>
        <span>End Time: {event.endTime}</span>
      </p>
      <p>
        {/* “Anything is possible when you have the right people there to support
        you.” <br></br>
        <br></br>
        UCSC Career Fair 2023, organized by the University of Colombo School of
        Computing in collaboration with the Professional Development Centre of
        UCSC was successfully completed on the 27th of January.<br></br>
        <br></br> As the organizing committee, we would like to express our
        gratitude to our partner organizations who helped us to make this event
        a success.<br></br>
        <br></br> It was an absolute pleasure having you on board with us. */}
        {event.description}
      </p>

      {/* Card Cover */}
      <div style={{ height: "300px", overflow: "hidden" }}>
        <img
          src={event.cover}
          alt="Card Cover"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </div>

      <h4>Contact</h4>
      <p>Email: {event.email}</p>
      <p>Contact Number: {event.contactNumber}</p>
      {/* <div style={{ marginTop: "24px" }}> */}
        {/* Tags */}
        {/* <Tag color="blue">Creative software</Tag>
        <Tag color="green">Belvantage</Tag>
        <Tag color="purple">LayUp</Tag> */}
        {/* Add more tags as needed */}
      {/* </div> */}

      {/* Add space after the tags */}
      <div style={{ marginBottom: "12px" }} />

      <Button 
        type="primary"
        onClick={()=> navigate("/registerevent")}
        style={{ marginTop: "8px",borderRadius: '0' }}>
        
        Register
      </Button>
    </Card>
  );
};

export default OneFullCard;

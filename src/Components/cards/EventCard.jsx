import React, { useEffect, useState } from "react";
import { Card, Tag, Button, Col, message } from "antd";
import { useNavigate } from "react-router-dom";
import moment from "moment/moment";
import { fetchUserData } from "../../api/authenticationService";
import { BsFillBookmarkCheckFill, BsBookmark } from "react-icons/bs";

export default function EventCard({ item, status }) {
  const user = JSON.parse(localStorage.getItem("USER"));
  const id = user.id;
  const [postDate, setPostDate] = useState();
  const [save, setSave] = useState(false);

  useEffect(() => {
    const date = moment(item.date);
    setPostDate(date.format("YYYY MM DD"));
  }, []);
  const navigate = useNavigate();
  const handleSave = async () => {
    setSave(true);
    const sendData = {
      eventId: item.id
    }
    let data = {
      url: `/api/v1/savedEvents/save/${id}`,
      data: sendData,
      method: "post",
    };
    try {
      const response = await fetchUserData(data);
      if (response.status === 200) {
        message.success("Event is saved successfully");

      } else {
        message.error("Saved error! Try again!");
        setSave(false);
      }
    } catch (e) {
      console.log(e);
      setSave(false);
      message.error("Saved error! Try again!");
    }

  }
  const handleDelete = async () => {
    setSave(false);
  }
  return (

    <Card
      cover={
        <img
          src={item.cover}
          alt="Card Cover"
          style={{ objectFit: "cover", height: "220px" }}
        />
      }
      style={{ boxShadow: "0 0 8px rgba(0, 0, 0, 0.1)" }}
    >

      <a href="your_link_url">{item.companyName}</a>
      <h3>{item.title}</h3>
      <Col>
        {save ? <BsFillBookmarkCheckFill onClick={handleDelete} /> : <BsBookmark onClick={handleSave} />}
      </Col>
      <p>
        {item.description}
      </p>

      {/* <div style={{ marginBottom: "12px" }}>
        {items.participates.map((item, index)=>{
          return(
            <Tag color="blue" key={index}>
              {item}
            </Tag>
          )
        })}
      </div> */}
      {/* {status.save && <Button
        size="large"
        type="primary"
        style={{
          marginTop: "8px",
          marginRight: '20px',
          borderRadius: '0'
        }}>
        Save
      </Button>} */}
      {status.more &&
      <Button
          size="large"
          type="primary"
          style={{
            marginTop: "8px",
            borderRadius: '0'
          }}
          onClick={() => navigate(`/event/${item.id}`)}>
          View More..
        </Button>}
    </Card>
  );
};



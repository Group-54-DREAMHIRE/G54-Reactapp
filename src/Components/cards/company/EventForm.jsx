import React from 'react';
import { Form, Input, Space, Typography, Button, Card, Select, Upload, DatePicker, TimePicker, Row, Col, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import { storage } from "../../../api/firebase";
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useState, useEffect } from "react";
import { fetchUserData, getProfileData } from "../../../api/authenticationService";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { saveEvent, setEvents } from "../../../store/event/eventSlice";
import axios from 'axios';

const { Option } = Select;
const { Title } = Typography

function EventForm() {
  const user = JSON.parse(localStorage.getItem("USER"));
  const id = user.id;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [companyName, setCompanyName] = useState("");
  const [title, setTitle] = useState("");
  const [imageUpload, setImageUpload] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [date, setDate] = useState(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setCompanyName(user.name);
  }, [id]);

  const handleImage = (info) => {
    setImageUpload(info.file.originFileObj);
    console.log(imageUpload);
    if (imageUpload) {
      info.file.status = "done";
    }
  };
  const handleSubmit = async () => {
    console.log("submit button is clicked");
    if (imageUpload) {
      setLoading(true);
      window.scrollTo({
        top: 0,
        behaviour: "smooth",
      });
      const imageRef = ref(
        storage,
        `dreamhire/companies/${companyName}/events/${imageUpload.name}`
      );
      let coverURL = null;
      await uploadBytes(imageRef, imageUpload).then(() => {
        console.log(imageUpload);
      }).catch((error) => {
        console.log(error.message);
      });

      await getDownloadURL(imageRef)
        .then((url) => {
          coverURL = url;
          console.log(coverURL);
        })
        .catch((error) => {
          console.log(error.message);
        });

        if(coverURL){
          let eventData = {
            systemUserID: user.systemUser.id,
            companyName,
            title,
            cover: coverURL,
            startTime,
            endTime,
            date,
            email,
            contactNumber
          };
    
    
          let data = {
            url: `/api/v1/event/save/${id}`,
            data: eventData,
            method: "post",
          };
          try {
            const response = await fetchUserData(data);
            if (response.status === 200) {
              message.success("Successfully Updated");
              setLoading(false);
              console.log("before");
              navigate("/events");
              console.log("after");
              // dispatch(saveEvent(response.data));
            } else {
              message.error("Invalid Data!");
              navigate("/events");
              setLoading(false);
            }
          } catch (e) {
            console.log(e);
            setLoading(false);
          }
        }
      
    }
  }
  

  // const onFinish = (values) => {
  //   console.log('Form values:', values);
  //   // You can handle the form submission here
  // };

  return (
    <>
      <Card
        style={{
          width: 900,
          margin: "auto",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Form name="event_form" onFinish={handleSubmit} layout="vertical">
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: "Please enter a title" }]}
          >
            <Input onChange={(e) => setTitle(e.target.value)}
              value={title} />
          </Form.Item>

          <Form.Item
            name="image"
            label="Image"
            // valuePropName="fileList"
            // getValueFromEvent={(e) => e.fileList}
            rules={[{ required: true, message: "Please upload an image" }]}
          >
            <Upload
              onChange={handleImage}
              name="image"
              action="" // Replace with your API endpoint for file upload
              listType="picture"
              // beforeUpload={() => false} // To prevent automatic upload, we handle the file in getValueFromEvent
            >
              <Button icon={<UploadOutlined />}>Select Image</Button>
            </Upload>
          </Form.Item>

          {/* <Form.Item
            name="tags"
            label="Tags"
            rules={[{ required: true, message: "Please enter tags" }]}
          >
            <Select
              mode="tags"
              style={{ width: "100%" }}
              placeholder="Enter tags separated by commas"
            > */}
          {/* You can add predefined tags here, or leave it empty for user input */}
          {/* <Option value="tag1">Tag 1</Option>
              <Option value="tag2">Tag 2</Option>
              ...
            </Select>
          </Form.Item> */}

          <Row gutter={16}>
            
            <Col span={12}>
              <Form.Item
                name="date"
                label="Date"
                rules={[{ required: true, message: "Please select a date" }]}
              >
                <DatePicker style={{ width: "100%" }} onChange={(date) => setDate(date)} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>

            <Col span={6}>

              <Form.Item
                name="startTime"
                label="Start Time"
                rules={[{ required: true, message: "Please select start time" }]}
              >
                <TimePicker style={{ width: "100%" }} onChange={(time) => setStartTime(time) }
                  picker="startTime"/>
              </Form.Item>
            </Col>
            <Col span={6}>
              
              <Form.Item
                name="endTime"
                label="End Time"
                rules={[{ required: true, message: "Please select end time" }]}
              >
                <TimePicker style={{ width: "100%" }} onChange={(time) => setEndTime(time)}
                  
                  picker="endTime" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  { required: true, message: "Please enter an email" },
                  { type: "email", message: "Please enter a valid email" },
                ]}
              >
                <Input onChange={(e) => setEmail(e.target.value)} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="contactNumber"
                label="Contact Number"
                rules={[
                  { required: true, message: "Please enter a contact number" },
                ]}
              >
                <Input onChange={(e) => setContactNumber(e.target.value)} />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
              }
export default EventForm;
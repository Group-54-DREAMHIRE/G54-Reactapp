import React from 'react';
import { Form, Input, Button, Card, Select, Upload, DatePicker, TimePicker, Row, Col, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import { storage } from "../../../api/firebase";
import { useState, useEffect } from "react";
import { fetchUserData, getProfileData } from "../../../api/authenticationService";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveEvent, setEvents } from "../../../store/event/eventSlice";
import axios from 'axios';

const { Option } = Select;

const EventForm = () => {
  const user = JSON.parse(localStorage.getItem("USER"));
  const id = user.id;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [companyName, setCompanyName] = useState("");
  const [title, setEventTitle] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setCompanyName(user.name);
  }, [id]); 

  const handleSubmit = async () => {
    const eventData = {
      systemUserID: user.systemUser.id,
      companyName,
      title
    };

    let data = {
      url: `/api/v1/event/save/${id}`,
      data: eventData,
      method: "post",
    };
    try {
      const response = await fetchUserData(data);
      if(response.status === 200){
        message.success("Successfully Updated");
        setLoading(false);
        console.log("before");
        navigate("/jobposts");
        console.log("after");
        dispatch(saveEvent(response.data));
      } else {
        message.error("Invalid Data!");
        navigate("/jobposts");
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  // const onFinish = (values) => {
  //   console.log('Form values:', values);
  //   // You can handle the form submission here
  // };

  return (
    <Card
      style={{
        width: 900,
        margin: "auto",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Form name="event_form" onFinish={handleSubmit}layout="vertical">
        <Form.Item
          name="title"
          label="Title"
          rules={[{ required: true, message: "Please enter a title" }]}
        >
          <Input onChange={(e) => setEventTitle(e.target.value)}
          value={title}/>
        </Form.Item>

        {/* <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true, message: "Please enter a description" }]}
        >
          <Input.TextArea />
        </Form.Item> */}

        {/* <Form.Item
          name="image"
          label="Image"
          valuePropName="fileList"
          getValueFromEvent={(e) => e.fileList}
          rules={[{ required: true, message: "Please upload an image" }]}
        >
          <Upload
            name="image"
            action="/upload" // Replace with your API endpoint for file upload
            listType="picture"
            beforeUpload={() => false} // To prevent automatic upload, we handle the file in getValueFromEvent
          >
            <Button icon={<UploadOutlined />}>Select Image</Button>
          </Upload>
        </Form.Item> */}

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
            ... */}
          {/* </Select>
        </Form.Item> */}

        <Row gutter={16}>
          {/* <Col span={12}>
           <Form.Item
              name="startTime"
              label="Start Time"
              rules={[
                { required: true, message: "Please select the start time" },
              ]}
            >
              <TimePicker
                onChange={(time)=>console.log(time.format('HH:mm') )}
                format="HH:mm" />
            </Form.Item>
          </Col> */}
          {/* <Col span={12}>
            <Form.Item
              name="endTime"
              label="End Time"
              rules={[
                { required: true, message: "Please select the end time" },
              ]}
            >
              <TimePicker
              onChange={(time, timeString)=>console.log(time)}
              format="HH:mm" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="date"
              label="Date"
              rules={[{ required: true, message: "Please select a date" }]}
            >
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>
          </Col> */}
        </Row>

        <Row gutter={16}>
          {/* <Col span={12}>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: "Please enter an email" },
                { type: "email", message: "Please enter a valid email" },
              ]}
            >
              <Input />
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
              <Input />
            </Form.Item>
          </Col> */}
        </Row>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default EventForm;

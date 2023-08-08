import React, { useState } from 'react';
import { Form, Input, DatePicker, TimePicker, Button, Table, Col, Row } from 'antd';
import '../../assets/styles/InterviewScheduling.scss';

const InterviewScheduling = () => {
  const [interviewDetails, setInterviewDetails] = useState([]);
  const [formData, setFormData] = useState({
    date: null,
    startTime: null,
    endTime: null,
    location: '',
    instructions: '',
  });

  const handleDateChange = (date, dateString) => {
    setFormData({ ...formData, date });
  };

  const handleStartTimeChange = (time, timeString) => {
    setFormData({ ...formData, startTime: time });
  };

  const handleEndTimeChange = (time, timeString) => {
    setFormData({ ...formData, endTime: time });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleScheduling = () => {
    const newInterview = {
      id: interviewDetails.length + 1,
      date: formData.date.format('YYYY-MM-DD'),
      startTime: formData.startTime.format('HH:mm'),
      endTime: formData.endTime.format('HH:mm'),
      location: formData.location,
      instructions: formData.instructions,
    };
    setInterviewDetails([...interviewDetails, newInterview]);
    setFormData({
      date: null,
      startTime: null,
      endTime: null,
      location: '',
      instructions: '',
    });
  };
  
  const columns = [
    {
      title: 'Slot ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location'
    },
    {
      title: 'instructions',
      dataIndex: 'instructions',
      key: 'instructions'
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date'
    },
    {
      title: 'Start Time',
      dataIndex: 'startTime',
      key: 'startTime'
    },
    {
      title: 'End Time',
      dataIndex: 'endTime',
      key: 'endTime'
    },
  ];

  return (
    <div className="interview-scheduling-n">
      <h2>Interview Scheduling</h2>

      <Form className="interview-form" layout='vertical'>
        <Col span={12}>
          <Form.Item label="location">
            <Input name="location" value={formData.location} onChange={handleInputChange} />
          </Form.Item>
          <Form.Item label="Instructions">
            <Input name="instructions" value={formData.instructions} onChange={handleInputChange} />
          </Form.Item>
        </Col>
        <Row>
          <Col span={8}>
            <Form.Item label="Date">
              <DatePicker onChange={handleDateChange} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Start Time">
              <TimePicker onChange={handleStartTimeChange} format="HH:mm" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="End Time">
              <TimePicker onChange={handleEndTimeChange} format="HH:mm" />
            </Form.Item>
          </Col>
          <Form.Item>
            <Button type="primary" onClick={handleScheduling}>Schedule Interview</Button>
          </Form.Item>
        </Row>
      </Form>


      <h2>Scheduled Time Slots</h2>
      <Table className="interview-table" dataSource={interviewDetails} columns={columns} />
    </div>
  );
};

export default InterviewScheduling;


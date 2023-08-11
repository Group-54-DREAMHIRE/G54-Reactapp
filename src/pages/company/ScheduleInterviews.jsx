import React, { useState } from 'react';
import { Form, DatePicker, Button, Select, List, Col, Row, TimePicker, InputNumber, Input } from 'antd';
import '../../assets/styles/InterviewScheduling.scss';

const InterviewScheduling = () => {
  const [interviewSlots, setInterviewSlots] = useState([]);
  const [formData, setFormData] = useState({
    interviewId: 0,
    date: null,
    candidateCount: 0,
    location: '',
    instructions: '',
    interviewDuration: 30,
    interviewStartTime: null,
    interviewEndTime: null,
    intervalStartTime: null,
    intervalEndTime: null,
  });

  const handleDateChange = (date) => {
    setFormData({ ...formData, date });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDurationChange = (value) => {
    setFormData({ ...formData, interviewDuration: value });
  };

  const handleStartTimeChange = (time) => {
    setFormData({ ...formData, interviewStartTime: time });
  };

  const handleEndTimeChange = (time) => {
    setFormData({ ...formData, interviewEndTime: time });
  };

  const handleIntervalStartChange = (time) => {
    setFormData({ ...formData, intervalStartTime: time });
  };

  const handleIntervalEndChange = (time) => {
    setFormData({ ...formData, intervalEndTime: time });
  };

  const handleCandidateCountChange = (value) => {
    setFormData({ ...formData, candidateCount: value });
  };

  const handleInterviewIdChange = (value) => {
    setFormData({ ...formData, interviewId: value });
  };

  const handleScheduling = () => {
    const interviewStartTime = formData.interviewStartTime.toDate();
    const interviewEndTime = formData.interviewEndTime.toDate();
    const intervalStartTime = formData.intervalStartTime.toDate();
    const intervalEndTime = formData.intervalEndTime.toDate();
    const interviewDurationMs = formData.interviewDuration * 60000;

    const maxSlots = formData.candidateCount;

    const slots = [];
    let slotId = 1;

    while (interviewStartTime < interviewEndTime && slots.length < maxSlots) {
      if (interviewStartTime >= intervalEndTime || interviewStartTime < intervalStartTime) {
        slots.push({
          id: slotId,
          startTime: interviewStartTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          endTime: (new Date(interviewStartTime.getTime() + interviewDurationMs)).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        });
        slotId++;
      }

      interviewStartTime.setTime(interviewStartTime.getTime() + interviewDurationMs);

      if (interviewStartTime >= intervalStartTime && interviewStartTime < intervalEndTime) {
        interviewStartTime.setTime(intervalEndTime.getTime());
      }
    }

    setInterviewSlots(slots);
    setFormData({
      InterviewId: 0,
      date: null,
      location: '',
      instructions: '',
      candidateCount: 0,
      interviewDuration: 30,
      interviewStartTime: null,
      interviewEndTime: null,
      intervalStartTime: null,
      intervalEndTime: null,
    });
  };

  return (
    <div className="interview-scheduling-n">
      <h2>Interview Scheduling</h2>

      <Form className="interview-form" layout="vertical">
        <Row>
          <Col span={24}>
            <Row>
              <Col span={12} style={{ width: '100%' }}>
                <Form.Item label="Interview ID">
                  <InputNumber name="interviewId" value={formData.interviewId} onChange={handleInterviewIdChange} min={0} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="No. of Candidates">
                  <InputNumber name="candidateCount" value={formData.candidateCount} onChange={handleCandidateCountChange} min={0} />
                </Form.Item>
              </Col>
            </Row>

            <Row>
              <Col span={12}>
                <Form.Item label="Instructions">
                  <textarea name="instructions" value={formData.instructions} onChange={handleInputChange} />
                </Form.Item>
              </Col>
            </Row>

            <Row>
              <Col span={12}>
                <Form.Item label="Date">
                  <DatePicker onChange={handleDateChange} />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label="Interview Duration">
                  <Select value={formData.interviewDuration} onChange={handleDurationChange}>
                    <Select.Option value={20}>20 minutes</Select.Option>
                    <Select.Option value={30}>30 minutes</Select.Option>
                    <Select.Option value={40}>40 minutes</Select.Option>
                    <Select.Option value={50}>50 minutes</Select.Option>
                    <Select.Option value={60}>1 hour</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Row>
              <Col span={12}>
                <Form.Item label="Interview Start Time">
                  <TimePicker
                    value={formData.interviewStartTime}
                    onChange={handleStartTimeChange}
                    format="HH:mm"
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Interview End Time">
                  <TimePicker
                    value={formData.interviewEndTime}
                    onChange={handleEndTimeChange}
                    format="HH:mm"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Form.Item label="Interval Start Time">
                  <TimePicker
                    value={formData.intervalStartTime}
                    onChange={handleIntervalStartChange}
                    format="HH:mm"
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Interval End Time">
                  <TimePicker
                    value={formData.intervalEndTime}
                    onChange={handleIntervalEndChange}
                    format="HH:mm"
                  />
                </Form.Item>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form >

      <Button type="primary" onClick={handleScheduling}>Generate Interview Slots</Button>


      <h2>Interview Time Slots</h2>
      <List
        dataSource={interviewSlots}
        renderItem={(slot) => (
          <List.Item>
            {`${slot.id}. ${slot.startTime} - ${slot.endTime}`}
          </List.Item>
        )}
      />
    </div >
  );
};

export default InterviewScheduling;
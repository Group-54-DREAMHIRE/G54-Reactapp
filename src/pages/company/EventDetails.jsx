import React, { useState } from 'react';
import { Button, Modal, Form, Input } from 'antd';
import '../../assets/styles/EventDetails.scss';

const EventDetails = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Replace this with your own logic to fetch the event details from your backend
  const [eventDetails, setEventDetails] = useState({
    id: 1,
    name: 'COMEXPO',
    venue: '1B De Fonseka Place Colombo, WP Colombo 04, Sri Lank',
    date: '2023-09-01',
    startTime: '09:00',
    endTime: '17:00',
    imageUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    description: 'This is a description of the event.',
    organizer: 'Organizer 1',
    contactEmail: 'organizer@example.com',
    contactPhone: '123-456-7890',
    website: 'https://example.com',
  });

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleInputChange = (e) => {
    setEventDetails({
      ...eventDetails,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="event-profile-card-n">
      <div className="header">
        <h1 className="event-name">{eventDetails.name}</h1>
        <img className="event-image" src={eventDetails.imageUrl} alt={eventDetails.name} />
      </div>
      <div className="content">
        <div className="details-container">
          <div class="venue-date">
            <p className="venue">Venue: {eventDetails.venue}</p>
            <p classname="date">Date: {eventDetails.date}</p>
          </div>
          <div className="time-container">
            <p className="time">
              <span className="label">Start Time:</span> {eventDetails.startTime}
            </p>
            <p className="time">
              <span className="label">End Time:</span> {eventDetails.endTime}
            </p>
          </div>
          <p className="description">{eventDetails.description}</p>
          <div class="contact-details">
            <p className="contact">
              <span className="label">Email:</span> {eventDetails.contactEmail}
            </p>
            <p className="contact">
              <span className="label">Contact Number:</span> {eventDetails.contactPhone}
            </p>
          </div>
          <p className="website">
            <span className="label">Website:</span>{' '}
            <a href={eventDetails.website}>{eventDetails.website}</a>
          </p>
        </div>
      </div>
      <Button className="edit-button" type="primary" onClick={showModal}>
        Edit
      </Button>
      <Modal
        title="Edit Event Details"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form>
          <Form.Item label="Name">
            <Input name="name" value={eventDetails.name} onChange={handleInputChange} />
          </Form.Item>
          <Form.Item label="Venue">
            <Input name="venue" value={eventDetails.venue} onChange={handleInputChange} />
          </Form.Item>
          <Form.Item label="Date">
            <Input name="date" value={eventDetails.date} onChange={handleInputChange} />
          </Form.Item>
          <Form.Item label="Start Time">
            <Input name="startTime" value={eventDetails.startTime} onChange={handleInputChange} />
          </Form.Item>
          <Form.Item label="End Time">
            <Input name="endTime" value={eventDetails.endTime} onChange={handleInputChange} />
          </Form.Item>
          <Form.Item label="Description">
            <Input name="description" value={eventDetails.description} onChange={handleInputChange} />
          </Form.Item>
          <Form.Item label="Contact Email">
            <Input name="contactEmail" value={eventDetails.contactEmail} onChange={handleInputChange} />
          </Form.Item>
          <Form.Item label="Contact Number">
            <Input name="contactPhone" value={eventDetails.contactPhone} onChange={handleInputChange} />
          </Form.Item>
          <Form.Item label="Website">
            <Input name="website" value={eventDetails.website} onChange={handleInputChange} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default EventDetails;

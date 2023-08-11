import React from 'react';
import { Typography, List, Button } from 'antd';
import { Link } from 'react-router-dom';
import '../../assets/styles/PendingTimeSlots.scss';

const { Title } = Typography;

function PendingTimeSlots() {
  const pendingTimeSlots = [
    { id: 1, time: '2023-08-15 09:00 AM' },
    { id: 2, time: '2023-08-15 10:30 AM' },
    { id: 3, time: '2023-08-15 02:00 PM' },
    // Add more dummy time slots as needed
  ];

  return (
    <>
      <div className='pending-time-slots-n'>
        <Title className='title'>Pending Time Slots</Title>
        <List
          itemLayout='horizontal'
          dataSource={pendingTimeSlots}
          renderItem={item => (
            <List.Item className='list-item'>
              <List.Item.Meta
                title={`Time Slot ID: ${item.id}`}
                description={`Time: ${item.time}`}
                className='list-item-meta'
              />
            </List.Item>
          )}
        />
      </div>
    </>
  );
}

export default PendingTimeSlots;

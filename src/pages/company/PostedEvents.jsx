import React from 'react';
import { Card, Button, Row, Col, Typography, Space, Divider } from 'antd';
import { Link } from 'react-router-dom';
import '../../assets/styles/PostedEvents.scss';
const { Title } = Typography;

const FutureEvents = () => {
  const { Meta } = Card;

  const events = [
    {
      id: 1,
      name: 'COMEXPO ',
      venue: '1B De Fonseka Place Colombo, WP Colombo 04, Sri Lanka',
      startTime: '2023-09-01 09:00',
      endTime: '2023-09-01 17:00',
      imageUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      id: 2,
      name: 'SCREEN PRINT SRI LANKA',
      venue: '50/1, Park St, Colombo 00700, Sri lanka',
      startTime: '2023-08-20 09:00',
      endTime: '2022-08-20 17:00',
      imageUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      id: 3,
      name: 'CAREER FAIR',
      venue: 'UCSC Building Complex, 35 Reid Ave, Colombo 00700',
      startTime: '2023-10-04 09:00',
      endTime: '2022-10-04 17:00',
      imageUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      id: 4,
      name: 'COMEXPO',
      venue: '1B De Fonseka Place Colombo, WP Colombo 04, Sri Lanka',
      startTime: '2023-09-01 09:00',
      endTime: '2023-09-01 17:00',
      imageUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      id: 5,
      name: 'SCREEN PRINT SRI LANKA',
      venue: '50/1, Park St, Colombo 00700, Sri lanka',
      startTime: '2023-08-20 09:00',
      endTime: '2022-08-20 17:00',
      imageUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      id: 6,
      name: 'CAREER FAIR',
      venue: 'UCSC Building Complex, 35 Reid Ave, Colombo 00700',
      startTime: '2023-10-04 09:00',
      endTime: '2022-10-04 17:00',
      imageUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ];

  return (
    <>
      <div className="company-postedEvents-n">

        <Row>
          <Col span={24}>
            <Row>
              <Col span={12} style={{
                display: 'flex',
                justifyContent: 'left',
                alignItems: 'center',
              }}>
                <Title style={{
                  fontSize: '25px',
                  fontWeight: 600,
                }}>
                  POSTED EVENTS
                </Title>
              </Col>
              <Col span={6}>
              </Col>

              <Col span={6}>
              </Col>
            </Row>
            <Divider />
            <Row gutter={16}>
              {events.map((event) => (
                <Col span={8} key={event.id}>
                  <Card
                    hoverable
                    cover={<img alt={event.name} src={event.imageUrl} style={{ height: '200px' }} />}
                  >
                    <Meta title={event.name} description={event.venue} />
                    <p>{event.startTime} - {event.endTime}</p>
                    <Button type="primary" style={{ marginRight: '10px' }}>
                      <Link to={`/postedevents/${event.id}/details`}>View Details</Link>
                    </Button>
                    <Button type="primary">
                      <Link to={`/postedevents/registeredcandidates`}>View Candidates</Link>
                    </Button>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default FutureEvents;

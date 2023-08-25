import { Table, Typography, Button, Row, Col, Divider, Input, Space, Tag, Switch } from 'antd';
import { useState, useEffect } from 'react';
import { EditOutlined, DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
// import { pageanimation } from '../assets/animations/pageanimation';

const { Title } = Typography;
const { Search } = Input;

function AdvertisementList() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const columns = [
    {
      title: 'Event Name',
      dataIndex: 'eventName',
      key: 'eventName',
    },
    {
      title: 'Venue',
      dataIndex: 'venue',
      key: 'venue'
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Time',
      dataIndex: 'time',
      key: 'time'
    },
    {
      title: "Registered Candidates",
      key: "egisteredCandidates",
      render: (text, record) => (
        <Button type="primary" >
          <Link to={`/postedevents/registeredcandidates`}>{record.registeredCandidates}</Link>
        </Button>
      ),
    },
    {
      title: "View",
      key: "view",
      render: (text, record) => (
        <Button type="primary">
          <Link to={`/postedevents/registeredcandidates`}>View</Link>
        </Button>
      ),
    },
  ];

  const [dataSource, setDataSource] = useState([
    {
      key: '1',
      eventName: 'TechConnect Summit',
      date: 'September 10, 2023',
      time: '9:00 AM - 6:00 PM',
      venue: 'Colombo Convention Centre',
      registeredCandidates: 20
    },
    {
      key: '2',
      eventName: 'CodeFest Lanka"',
      date: 'September 20, 2023',
      time: '10:00 AM - 7:00 PM',
      venue: 'University of Moratuwa, Colombo',
      registeredCandidates: 25
    },
    {
      key: '3',
      eventName: 'AI Expo Lanka',
      date: 'October 13, 2023',
      time: '09:30 AM - 04:30 PM',
      venue: 'Hilton Colombo',
      registeredCandidates: 12
    },
    {
      key: '4',
      eventName: 'E-Commerce Accelerate',
      date: 'October 20, 2023',
      time: '10:00 AM - 07:00 PM',
      venue: 'Galadari Hotel, Colombo',
      registeredCandidates: 33
    },
    {
      key: '5',
      eventName: 'Cybersecurity Symposium',
      date: 'November 25, 2023',
      time: '10:00 AM - 02:00 PM',
      venue: 'Cinnamon Grand Colombo',
      registeredCandidates: 14
    },
  ]);

  const handleViewAdvertisement = (id) => {
    console.log("View advertisement with ID:", id);
  };

  const handleStatusChange = (id) => {
    // Handle logic for changing advertisement status
    console.log("Change status of advertisement with ID:", id);
  };

  return (
    <>
      <div className='container-n'>
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

              <Col span={6} style={{
                display: 'flex',
                justifyContent: 'right',
                alignItems: 'center'
              }}>
                <Search placeholder="Search event name" enterButton />
              </Col>
            </Row>

            <Divider />
            <Row>
              <Col span={24}>
                <Table className='tables-n'
                  dataSource={dataSource}
                  columns={columns}
                  pagination={{
                    current: page,
                    pageSize: pageSize,
                    onChange: (page, pageSize) => {
                      setPage(page);
                      setPageSize(pageSize);
                    }
                  }}
                >
                </Table>
              </Col>
            </Row>
          </Col>
        </Row >
      </div >
    </>
  )
}



export default AdvertisementList;

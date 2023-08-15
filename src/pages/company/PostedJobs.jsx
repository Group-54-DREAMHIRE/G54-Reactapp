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
      title: 'Job Title',
      dataIndex: 'jobTitle',
      key: 'jobTitle',
      render: (text, record) => (
        <>
          {text}
          <br />
          {record.skills.map((skill) => (
            <Tag color="blue" key={skill}>
              {skill}
            </Tag>
          ))}
        </>
      ),
    },
    {
      title: 'No of Vacancies',
      dataIndex: 'vacancies',
      key: 'vacancies',
    },
    {
      title: 'Date Posted',
      dataIndex: 'datePosted',
      key: 'datePosted'
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status, record) => (
        <Switch
          checked={status}
          checkedChildren="Completed"
          unCheckedChildren="Pending"
          onChange={() => handleStatusChange(record.id)}
        />
      ),
    },
    {
      title: "View Candidate Requests",
      key: "view",
      render: (text, record) => (
        <Button type="primary">
          <Link to={`/pendingresumes`}>{record.applications}</Link>
        </Button>
      ),
    },
    {
      key: 'action',
      title: 'Action',
      render: () => {
        return (
          <>
            <EditOutlined
              style={{
                backgroundColor: "rgba(30,136,229,.5)",
                color: "white",
                marginLeft: 10,
                padding: "5px",
                borderRadius: "5px"
              }} />
            <DeleteOutlined
              style={{
                backgroundColor: "red",
                color: "white",
                marginLeft: 10,
                padding: "5px",
                borderRadius: "5px"
              }}
            />
          </>
        )
      }
    }];

  const [dataSource, setDataSource] = useState([
    {
      key: '1',
      jobTitle: 'Software Engineer',
      vacancies: 15,
      datePosted: 'December 15, 2022',
      status: true,
      skills: ["Java", "Python", "PHP"],
      applications: 15,
    },
    {
      key: '2',
      jobTitle: 'Software Engineer',
      vacancies: 10,
      datePosted: 'December 15, 2022',
      status: true,
      skills: ["Java", "Python", "PHP"],
      applications: 10,
    },
    {
      key: '3',
      jobTitle: 'Web Developer',
      vacancies: 4,
      datePosted: 'December 15, 2022',
      status: false,
      skills: ["HTML", "CSS", "JavaScript"],
      applications: 3,
    },
    {
      key: '4',
      jobTitle: 'Software Engineer',
      vacancies: 3,
      datePosted: 'December 15, 2022',
      status: true,
      skills: ["Java", "Python", "PHP"],
      applications: 3,
    },
    {
      key: '5',
      jobTitle: 'Web Developer',
      vacancies: 4,
      datePosted: 'December 15, 2022',
      status: false,
      skills: ["HTML", "CSS", "JavaScript"],
      applications: 3,
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
                  POSTED JOBS
                </Title>
              </Col>
              <Col span={6}>
              </Col>

              <Col span={6} style={{
                display: 'flex',
                justifyContent: 'right',
                alignItems: 'center'
              }}>
                <Button type="primary"
                >+ Add Job</Button>
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

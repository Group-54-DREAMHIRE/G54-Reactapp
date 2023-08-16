import { Table, Typography, Button, Row, Col, Divider, Input, Space, Tag, Switch } from 'antd';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
      width: '25%',
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
      title: 'No. of vacancies',
      dataIndex: 'vacancies',
      key: 'vacancies',
    },
    {
      title: 'No. of Candidates',
      dataIndex: 'applications',
      key: 'applications',
    },
    {
      title: "Schedule Interview",
      key: "scheduleInterview",
      render: (text, record) => (
        <Button type="primary">
          <Link to={`/interviews/scheduleinterviews`}>Shedule</Link>
        </Button>
      ),
    },
  ];

  const [dataSource, setDataSource] = useState([
    {
      key: '1',
      jobTitle: 'Software Engineer',
      vacancies: 20,
      applications: 15,
      skills: ["Java", "Python", "PHP"],
    },
    {
      key: '2',
      jobTitle: 'Web Developer',
      vacancies: 13,
      applications: 10,
      skills: ["HTML", "CSS", "JavaScript","Node.js"],
    },
    {
      key: '3',
      jobTitle: 'Database Administrator',
      vacancies: 8,
      applications: 4,
      skills: ["PostgreSQL", "Oracle"],
    },
    {
      key: '4',
      jobTitle: 'Cybersecurity Analyst',
      vacancies: 5,
      applications: 3,
      skills: ["Wireshark", "Nessus"],
    },
    {
      key: '5',
      jobTitle: 'Network Engineer',
      vacancies: 20,
      applications: 4,
      skills: [""],
    },
  ]);

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
                  SCHEDULE INTERVIEWS
                </Title>
              </Col>
              <Col span={6}>
              </Col>

              <Col span={6} style={{
                display: 'flex',
                justifyContent: 'right',
                alignItems: 'center'
              }}>
                <Search placeholder="Search by job title" enterButton />
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
                      // Make the api call here with page and page size
                    }
                  }}
                >

                </Table>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  )
}



export default AdvertisementList;

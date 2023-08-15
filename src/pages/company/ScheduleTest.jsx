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
      title: 'No of vacancies',
      dataIndex: 'vacancies',
      key: 'vacancies',
    },
    {
      title: 'No of Applications',
      dataIndex: 'applications',
      key: 'applications',
    },
    {
      title: "View",
      key: "view",
      render: (text, record) => (
        <Button type="primary" onClick={() => handleViewAdvertisement(record.id)}>
          View
        </Button>
      ),
    },
    {
      title: "Selection Test",
      key: "selectionTest",
      render: (text, record) => (
        <Button type="primary">
          <Link to={`/scheduletests/createtest`}>Create</Link>
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
      jobTitle: 'Software Engineer',
      vacancies: 13,
      applications: 10,
      skills: ["Java", "Python", "PHP"],
    },
    {
      key: '3',
      jobTitle: 'Web Developer',
      vacancies: 8,
      applications: 4,
      skills: ["HTML", "CSS", "JavaScript"],
    },
    {
      key: '4',
      jobTitle: 'Software Engineer',
      vacancies: 5,
      applications: 3,
      skills: ["Java", "Python", "PHP"],
    },
    {
      key: '5',
      jobTitle: 'Web Developer',
      vacancies: 10,
      applications: 4,
      skills: ["HTML", "CSS", "JavaScript"],
    },
  ]);

  const handleViewAdvertisement = (id) => {
    console.log("View advertisement with ID:", id);
  };

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.6 }}>
        <div className='container-n'>
          <Row style={{
            marginTop: "10px",
          }}>
            <Col span={12} style={{
              display: 'flex',
              justifyContent: 'left',
              alignItems: 'center',
            }}>
              <Title style={{
                fontSize: '25px',
                fontWeight: 600,
              }}>
                Selection Tests
              </Title>
            </Col>
            <Col span={6}>
            </Col>

            <Col span={6} style={{
              display: 'flex',
              justifyContent: 'right',
              alignItems: 'center'
            }}>
            </Col>
          </Row>
          <Divider />

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
        </div>


      </motion.div>


    </>
  )
}



export default AdvertisementList;


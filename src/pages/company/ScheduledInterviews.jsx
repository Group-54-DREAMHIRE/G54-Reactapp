import { Table, Typography, Button, Row, Col, Divider, Input, Space, Tag, Switch } from 'antd';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { spaceChildren } from 'antd/es/button';
// import { pageanimation } from '../assets/animations/pageanimation';

const { Title } = Typography;
const { Search } = Input;

function ScheduledInterviews() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const columns = [
    {
      title: 'Interview ID',
      dataIndex: 'interviewId',
      key: 'interviewId',
    },
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
      title: "Designated Candidates",
      key: "designatedCandidates",
      render: (record) => (
        <Button type="primary">
          <Link to={`/scheduledinterviews/assignedCandidates`}>{record.designatedCandidates}</Link>
        </Button>
      ),
    },
    {
      title: "Reserved Slot Candidates",
      key: "reservedSlotCandidates",
      render: (record) => (
        <Button type="primary">
          <Link to={`/scheduledinterviews/selectedtimeslots`}>{record.reservedSlotCandidates}</Link>
        </Button>
      ),
    },
    {
      title: "Pending Candidates",
      key: "pendingCandidates",
      render: (record) => (
        <Button type="primary">
          <Link to={`/scheduledinterviews/rejectedCandidates`}>{record.pendingCandidates}</Link>
        </Button>
      ),
    },
    {
      title: "Pending Timeslots",
      key: "pendingCandidates",
      render: (record) => (
        <Button type="primary">
          <Link to={`/scheduledinterviews/pendingTimeslots`}>{record.pendingTimeslots}</Link>
        </Button>
      ),
    },

  ];

  const [dataSource, setDataSource] = useState([
    {
      key: '1',
      interviewId: '001',
      jobTitle: 'Software Engineer',
      designatedCandidates: 10,
      reservedSlotCandidates: 5,
      pendingCandidates: 3,
      pendingTimeslots: 3,
      skills: ["Java", "Python", "PHP"],
    },
    {
      key: '2',
      interviewId: '002',
      jobTitle: 'Web Developer',
      designatedCandidates: 8,
      reservedSlotCandidates: 3,
      pendingCandidates: 5,
      pendingTimeslots: 5,
      skills: ["HTML", "CSS", "JavaScript","Node.js"],
    },
    {
      key: '3',
      interviewId: '003',
      jobTitle: 'Database Administrator',
      designatedCandidates: 10,
      reservedSlotCandidates: 2,
      pendingCandidates: 3,
      pendingTimeslots: 2,
      skills: ["PostgreSQL", "Oracle"],
    },
    {
      key: '4',
      interviewId: '004',
      jobTitle: 'Cybersecurity Analyst',
      designatedCandidates: 10,
      reservedSlotCandidates: 2,
      pendingCandidates: 3,
      pendingTimeslots: 4,
      skills: ["Wireshark", "Nessus"],
    },
    {
      key: '5',
      interviewId: '005',
      jobTitle: 'Network Engineer',
      designatedCandidates: 10,
      reservedSlotCandidates: 2,
      pendingCandidates: 3,
      pendingTimeslots: 4,
      skills: [""],
    },
  ]);

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
                SCHEDULED INTERIVEWS
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



export default ScheduledInterviews;

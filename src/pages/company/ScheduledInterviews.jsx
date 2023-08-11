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
        title: "Assigned Candidates",
        key: "assifnedCandidates",
        render: (record) => (
          <Button type="primary">
            <Link to={`/scheduledinterviews/assignedcandidates`}>{record.assignedCandidates}</Link>
          </Button>
        ),
      },
    {
      title: "Pending Timeslots",
      key: "pendingTimeslots",
      render: (record) => (
        <Button type="primary">
          <Link to={`/scheduledinterviews/pendingtimeslots`}>{record.pendingTimeSlots}</Link>
        </Button>
      ),
    },
    {
      title: "Selected Timeslots",
      key: "selectedTimeSlots",
      render: (record) => (
        <Button type="primary">
          <Link to={`/scheduledinterviews/selectedtimeslots`}>{record.selectedTimeSlots}</Link>
        </Button>
      ),
    },
    {
      title: "Rejected Candidates",
      key: "rejectedCandidates",
      render: (record) => (
        <Button type="primary">
          <Link to={`/scheduledinterviews/rejectedcandidates`}>{record.rejectedCandidates}</Link>
        </Button>
      ),
    },
    ];

  const [dataSource, setDataSource] = useState([
    {
      key: '1',
      interviewId: '001',
      jobTitle: 'Software Engineer',
      assignedCandidates: 10,
      selectedTimeSlots: 2,
      pendingTimeSlots: 3,
      rejectedCandidates: 4,
      skills: ["Java", "Python", "PHP"],
    },
    {
      key: '2',
      interviewId: '002',
      jobTitle: 'Software Engineer',
      assignedCandidates: 10,
      selectedTimeSlots: 2,
      pendingTimeSlots: 3,
      rejectedCandidates: 4,
      skills: ["Java", "Python", "PHP"],
    },
    {
      key: '3',
      interviewId: '003',
      jobTitle: 'Web Developer',
      assignedCandidates: 10,
      selectedTimeSlots: 2,
      pendingTimeSlots: 3,
      rejectedCandidates: 4,
      skills: ["HTML", "CSS", "JavaScript"],
    },
    {
      key: '4',
      interviewId: '004',
      jobTitle: 'Software Engineer',
      assignedCandidates: 10,
      selectedTimeSlots: 2,
      pendingTimeSlots: 3,
      rejectedCandidates: 4,
      skills: ["Java", "Python", "PHP"],
    },
    {
      key: '5',
      interviewId: '005',
      jobTitle: 'Web Developer',
      assignedCandidates: 10,
      selectedTimeSlots: 2,
      pendingTimeSlots: 3,
      rejectedCandidates: 4,
      skills: ["HTML", "CSS", "JavaScript"],
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
                Scheduled Interviews
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



export default ScheduledInterviews;

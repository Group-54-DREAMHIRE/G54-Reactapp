import { Table, Typography, Button, Row, Col, Divider, Input, Space, Tag, Switch } from 'antd';
import { useState, useEffect } from 'react';
import { EditOutlined, DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getData } from '../../api/authenticationService';
// import { pageanimation } from '../assets/animations/pageanimation';

const { Title } = Typography;
const { Search } = Input;

function AdvertisementList() {
  const user = JSON.parse(localStorage.getItem("USER"));
  const id = user.id;

  const [page, setPage] = useState(1);
  const [jobPosts, setJobPosts] = ([]);
  const [pageSize, setPageSize] = useState(5);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);
      getData(`/api/v1/jobpost/getAllJobsByCompanyId/${id}`)
        .then((response) => {
          console.log(response.data);
          setJobPosts(response.data);
        
        })
        .catch((error) => {
          console.error("Error fetching user profile:", error);
        });
  }, []);
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
      title: 'No. of Vacancies',
      dataIndex: 'vacancies',
      key: 'vacancies',
    },
    {
      title: 'Closing Date',
      dataIndex: 'closingDate',
      key: 'closingDate'
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
      title: "No. of Applications",
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
          <Link to={`/postedjobs/editjobpost`}>
            <EditOutlined
              style={{
                backgroundColor: "rgba(30,136,229,.5)",
                color: "white",
                marginLeft: 10,
                padding: "5px",
                borderRadius: "5px"
              }} /></Link>
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
      closingDate: 'September 15, 2023',
      status: true,
      skills: ["Java", "Python", "PHP"],
      applications: 15,
    },
    {
      key: '2',
      jobTitle: 'Web Developer',
      vacancies: 4,
      closingDate: 'September 20, 2023',
      status: false,
      skills: ["HTML", "CSS", "JavaScript","Node.js"],
      applications: 3,
    },
    {
      key: '3',
      jobTitle: 'Database Administrator',
      vacancies: 3,
      closingDate: 'October 15, 2023',
      status: true,
      skills: ["PostgreSQL", "Oracle"],
      applications: 3,
    },
    {
      key: '4',
      jobTitle: 'Cybersecurity Analyst',
      vacancies: 2,
      closingDate: 'December 15, 2023',
      status: false,
      skills: ["Wireshark", "Nessus"],
      applications: 1,
    },
    {
      key: '5',
      jobTitle: 'Network Engineer',
      vacancies: 3,
      closingDate: 'December 15, 2023',
      status: false,
      skills: [""],
      applications: 2,
    }
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
    {id}
        <Row  className='container-n'justify='center' >
          <Col span={22}>
            <Row justify='space-between'>
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
              <Col span={6} style={{
                display: 'flex',
                justifyContent: 'right',
                alignItems: 'center'
              }}>
                <Search placeholder="Search by job title" enterButton />
              </Col>
            </Row>

            <hr style={{ border: "2px solid rgba(0,0,0,.4)" }} />
            <Row style={{marginTop: '5%'}}> 
              <Col span={24}>
              <Table 
                className='tables-n'
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
    </>
  )
}



export default AdvertisementList;

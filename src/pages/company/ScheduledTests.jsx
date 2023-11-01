import { Table, Typography, Button, Row, Col, Divider, Input, Space, Tag, Switch } from 'antd';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getData } from '../../api/authenticationService';
import moment from 'moment';
// import { pageanimation } from '../assets/animations/pageanimation';

const { Title } = Typography;
const { Search } = Input;

function AdvertisementList() {

  const user = JSON.parse(localStorage.getItem("USER"));
  const id = user.id;
  const [tests, setTests] =useState ([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  useEffect(() => {
      getData(`/api/v1/test/getTests/${id}`)
        .then((response) => {
          setTests(response.data);
          
        })
        .catch((error) => {
          console.error("Error fetching user profile:", error);
        });
  }, [id]);
  useEffect(() => {
    const tempArray = [];
    for(let i=0; i<tests.length; i++){
      const data = tests[i];
      let tempskills = [];
      console.log(data);
      if (typeof data.tags === "string" && data.tags) {
         tempskills = data.tags.split(" ,");
      } else {
        tempskills = [];
      }
      const listData ={
        id:data.jobPostId,
        jobTitle: data.jobPost.jobTitle,
        vacancies: data.numberOfVacancies,
        date:moment(data.date).format("YYYY-MM-DD") ,
        time:moment(data.date).format("HH:mm A"),
        status: !data.validate,
        skills: tempskills,
        applications: data.numberOfApplicants,
        duration: data.duration,
        testId:data.id
      }
      tempArray.push(listData);
    
     }
     setDataSource(tempArray);
  }, [tests]);
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
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Time',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: 'Duration',
      dataIndex: 'duration',
      key: 'duration',
    },
    {
      title: "Question Paper",
      key: "testId",
      render: (text, record) => (
        <Button type="primary">
          <Link to={`questionpaper/${record.testId}`}>View</Link>        
          </Button>
      ),
    },
    ];

  const [dataSource, setDataSource] = useState([
    {
      key: '1',
      jobTitle: 'Software Engineer',
      date: '20 october 2023',
      time: '8:00AM - 8:30AM',
      skills: ["Java", "Python", "PHP"],
    },
    {
      key: '2',
      jobTitle: 'Software Engineer',
      date: '20 october 2023',
      time: '8:00AM - 8:30AM',
      skills: ["Java", "Python", "PHP"],
    },
    {
      key: '3',
      jobTitle: 'Web Developer',
      date: '20 october 2023',
      time: '8:00AM - 8:30AM',
      skills: ["HTML", "CSS", "JavaScript"],
    },
    {
      key: '4',
      jobTitle: 'Software Engineer',
      date: '20 october 2023',
      time: '8:00AM - 8:30AM',
      skills: ["Java", "Python", "PHP"],
    },
    {
      key: '5',
      jobTitle: 'Web Developer',
      date: '20 october 2023',
      time: '8:00AM - 8:30AM',
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
                Scheduled Selection Tests
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


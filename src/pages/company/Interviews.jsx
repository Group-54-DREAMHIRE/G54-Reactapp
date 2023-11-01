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
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [jobPosts, setJobPosts] =useState ([]);
  const user = JSON.parse(localStorage.getItem("USER"));
  const id = user.id;
  useEffect(() => {
      getData(`/api/v1/jobpost/getjobs/${id}`)
        .then((response) => {
         setJobPosts(response.data);
          
        })
        .catch((error) => {
          console.error("Error fetching user profile:", error);
        });
  }, [id]);
  useEffect(() => {
    const tempArray = [];
    for(let i=0; i<jobPosts.length; i++){
      const data = jobPosts[i];
      let tempskills = [];
      console.log(data);
      if (typeof data.tags === "string" && data.tags) {
         tempskills = data.tags.split(" ,");
      } else {
        tempskills = [];
      }
      const listData ={
        jobTitle: data.jobTitle,
        vacancies: data.numberOfVacancies,
        closingDate:moment(data.deadline).format("YYYY-MM-DD") ,
        status: !data.validate,
        skills: tempskills,
        applications: data.numberOfApplicants,
        jobId:data.jobPostId
      }
      tempArray.push(listData);
    //  const dataItem = [...dataSource]
    //  dataItem[i]=listData;
    
     }
     setDataSource(tempArray);
     console.log(tempArray, "Dulaaaa");
  }, [jobPosts]);
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
          {record.skills.slice(0,3).map((skill) => (
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
      key: "jobId",
      render: (text, record) => (
        <Button 
          type="primary"
          style={{borderRadius: '0'}}
        >
          <Link to={`/interviews/scheduleinterviews/${record.jobId}`}>Shedule</Link>
        </Button>
      ),
    },
  ];

  const [dataSource, setDataSource] = useState([]);
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

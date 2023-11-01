import { Table, Typography, Button, Row, Col, Divider, Input, Space, Tag, Switch } from 'antd';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getData } from '../../api/authenticationService';
import moment from 'moment';
import { setActJobId } from '../../store/company/testSlice';
import { useDispatch, useSelector } from 'react-redux';
// import { pageanimation } from '../assets/animations/pageanimation';

const { Title } = Typography;
const { Search } = Input;

function AdvertisementList() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("USER"));
  const id = user.id;
  const [jobPosts, setJobPosts] =useState ([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  
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
        id:data.jobPostId,
        jobTitle: data.jobTitle,
        vacancies: data.numberOfVacancies,
        closingDate:moment(data.deadline).format("YYYY-MM-DD") ,
        status: !data.validate,
        skills: tempskills,
        applications: data.numberOfApplicants,
        createTest:data.jobPostId
      }
      tempArray.push(listData);
    //  const dataItem = [...dataSource]
    //  dataItem[i]=listData;
    
     }
     setDataSource(tempArray);
  }, [jobPosts]);
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
      title: "Selection Test",
      key: "createTest",
      render: (text, record) => (
        <Button type="primary" onClick={()=>dispatch(setActJobId(record.createTest))}>
          <Link to={`/scheduletests/createtest/${record.createTest}`}>Create</Link>
        </Button>
      ),
    },
    ];
  const [dataSource, setDataSource] = useState([]);
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
            {}
            <Col span={12} style={{
              display: 'flex',
              justifyContent: 'left',
              alignItems: 'center',
            }}>
              <Title style={{
                fontSize: '25px',
                fontWeight: 600,
              }}>
                Schedule Selection Tests
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


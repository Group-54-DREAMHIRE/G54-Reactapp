import { Table, Typography, Button, Row, Col, Divider, Input, Space, Tag, Switch } from 'antd';
import { useState, useEffect } from 'react';
import { EditOutlined, DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getData } from '../../api/authenticationService';
import moment from "moment";
import { useDispatch } from 'react-redux';
import { setActiveId } from '../../store/jobpost/jobSlice';
// import { pageanimation } from '../assets/animations/pageanimation';

const { Title } = Typography;
const { Search } = Input;

function AdvertisementList() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("USER"));
  const id = user.id;

  const [page, setPage] = useState(1);
  const [jobPosts, setJobPosts] =useState ([]);
  const [pageSize, setPageSize] = useState(5);
  const [loading, setLoading] = useState(false);
  const [skillList, setSkillList] = useState([]);
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    setLoading(true);
      getData(`/api/v1/jobpost/getjobs/${id}`)
        .then((response) => {
         setJobPosts(response.data);
          
        })
        .catch((error) => {
          console.error("Error fetching user profile:", error);
        });
  }, [id]);
  useEffect(() => {
    setLoading(true);
    for(let i=0; i<jobPosts.length; i++){
      const data = jobPosts[i];
      console.log(data);
      if (typeof data.tags === "string") {
        const val = data.tags.split(" ,");
        setSkillList(val)
      } else {
        setSkillList([]);
      }
      const listData ={
        id:data.jobPostId,
        jobTitle: data.jobTitle,
        vacancies: data.numberOfVacancies,
        closingDate:moment(data.deadline).format("YYYY-MM-DD") ,
        status: !data.validate,
        skills: skillList,
        applications: data.numberOfApplicants,
      }
     const dataItem = [...dataSource]
     dataItem[i]=listData;
     setDataSource(dataItem);
     }
  }, [jobPosts]);
  const columns = [
    {
      title: 'Job Title',
      dataIndex: 'jobTitle',
      key: 'skills',
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
      title: 'No. of Vacancies',
      dataIndex: 'vacancies',
      key: 'numberOfVacancies',
    },
    {
      title: 'Closing Date',
      dataIndex: 'closingDate',
      key: 'deadline'
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'validate',
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
      key: "numberOfVacancies",
      render: (text, record) => (
        <Button type="primary" onClick={()=>dispatch(setActiveId(record.id))}>
          <Link to={`/pendingresumes/${record.id}`}>{record.applications}</Link>
        </Button>
      ),
    },
    {
      key: 'jobPostId',
      title: 'Action',
      render: () => {
        return (
          <>
          <Link to={`/postedjobs/editjobpost/${id}`}>
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

 

  const handleViewAdvertisement = (id) => {
    console.log("View advertisement with ID:", id);
  };

  const handleStatusChange = (id) => {
    // Handle logic for changing advertisement status
    console.log("Change status of advertisement with ID:", id);
  };

  return (
    <>
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

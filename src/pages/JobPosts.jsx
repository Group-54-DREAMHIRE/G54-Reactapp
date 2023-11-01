import JobPostCard from "../Components/cards/JobPostCard";
import { List } from "react-content-loader";
import axios from "axios";
import {
  Row,
  Col,
  Divider,
  Typography,
  Select,
  Space,
  Button,
  Image,
  Empty,
  Form,
} from "antd";
import { DollarOutlined, PlusOutlined } from "@ant-design/icons";
import { salary } from "../store/demo/profile";
import { jobExperience } from "../store/demo/jobExperience";
import { jobTitles } from "../store/demo/jobTitles";
import { jobTypes } from "../store/demo/jobTypes";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  fetchUserData,
  getData,
  getDataByParam,
  getToken,
} from "../api/authenticationService";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobPosts, setJobPosts } from "../store/jobpost/jobSlice";
import { qualifications } from "../store/demo/quqlifications";
import flter from "../assets/images/flter.png";
const { Title } = Typography;

export default function JobPosts() {
  const dispatch = useDispatch();
  const [allJobList, setAllJobList] = useState([]);
  const [filter, setFilter] = useState(false);
  const [loading, setLoading] = useState(false);
  const jobs = useSelector(getAllJobPosts);
  const collapsed = useSelector((state) => state.models.collapsed);
  const [jobTitle, setJobTitle] = useState(null);
  const [jobType, setJobType] = useState(null);
  const [experience, setExperience] = useState(null);
  const [salary, setSalary] = useState(null);
  const [paramList, setParamList] = useState([]);
  useEffect(() => {
    setLoading(true);
    if (jobs === null) {
      getData("/api/v1/jobpost/getalljobs")
        .then((response) => {
          console.log(response.data);
          setAllJobList(response.data);
          dispatch(setJobPosts(response.data));
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching user profile:", error);
        });
      console.log(allJobList);
    } else {
      setAllJobList(jobs);
      setLoading(false);
    }
  }, []);

  const handleSearchJobs = async () => {
  
    // const objectFromList = paramList.reduce((acc, item) => {
    //   acc[item.key] = item.value;
    //   return acc;
    // }, {});

   
    // console.log(objectFromList);
    // setLoading(true);
    // let data = {
    //   url: "/api/v1/jobpost/getSearchJob",
    //   data:objectFromList,
    //   method:"post"
    // }
    // fetchUserData(data)
    // .then((response) => {
    //     console.log(response.data,"Dulaaa");
    //     setAllJobList(response.data);
    //     dispatch(setJobPosts(response.data));
    //     setLoading(false);
    //     console.log(allJobList);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching user profile:", error);
    //     setLoading(false);
    //   });
  };

  const navigate = useNavigate();
  const userType = localStorage.getItem("USERTYPE");
  let status = {
    save: userType === "candidate" ? true : false,
    more: true,
  };
  const auth = userType === "company" ? true : false;
  return (
    <>
      {loading ? (
        <List />
      ) : (
        <Row>
          <Col span={24}>
            <Row>
              <Col span={24}>
                <Row justify="space-between" align="top">
                  <Col>
                    <Title style={{ marginTop: "0", marginBottom: "0" }}>
                      Jobs
                    </Title>
                  </Col>
                  <Col>
                    <Row align="top" gutter={20}>
                      <Col>
                        <Image
                          onClick={() => {
                            setFilter(!filter);
                          }}
                          preview={false}
                          width={50}
                          style={{ cursor: "pointer" }}
                          src={flter}
                        />
                      </Col>

                      {auth && (
                        <Col>
                          <Button
                            icon={<PlusOutlined />}
                            size="large"
                            type="primary"
                            onClick={() => navigate("/addjobpost")}
                            style={{ borderRadius: "0" }}
                          >
                            Add Post
                          </Button>
                        </Col>
                      )}
                    </Row>
                  </Col>
                </Row>
                <Col span={24}>
                  <hr />
                </Col>
              </Col>
            </Row>
            {filter && (
              <Row justify="end" style={{ margin: "20px 0 30px" }}>
                <Form onFinish={handleSearchJobs}>
                <Space size="large" wrap>
                  <Select
                    style={{
                      width: 200,
                      boxShadow: "0 0 8px rgba(0,0,0,.1)",
                      borderRadius: "0 !important",
                    }}
                    allowClear
                    showSearch
                    onChange={(num) => {
                      setJobTitle(num);
                      let temp = [...paramList];
                      let data = {key:jobTitle,value:`${num}`}
                      setParamList(...paramList,data);
                    }}
                    value={jobTitle}
                    size="large"
                    placeholder="Job Title"
                    options={jobTitles}
                    maxTagCount={10}
                  />
                  <Select
                    size="large"
                    placeholder="Job Type"
                    onChange={(num) => {
                      setJobType(num);
                      let temp = [...paramList];
                      let data = {key:jobType,value:`${num}`}
                      setParamList(...paramList,data);
                    }}
                    value={jobType}
                    style={{
                      width: 150,
                      boxShadow: "0 0 8px rgba(0,0,0,.1)",
                      borderRadius: "0 !important",
                    }}
                    options={jobTypes}
                    maxTagCount={3}
                  />
                  <Select
                    suffixIcon={
                      <Title style={{ margin: "0" }} level={4}>
                        <DollarOutlined />
                      </Title>
                    }
                    size="large"
                    placeholder="Salary"
                    onChange={(num) => {
                      setSalary(num);
                      let temp = [...paramList];
                      let data = {key:salary,value:`${num}`}
                      setParamList(...paramList,data);
                    }}
                    value={salary}
                    style={{
                      width: 150,
                      boxShadow: "0 0 8px rgba(0,0,0,.1)",
                      borderRadius: "0 !important",
                    }}
                    maxTagCount={5}
                    options={salary}
                  />
                  {/* <Select
                    size="large"
                    placeholder="Qualifications"
                    options={qualifications}
                    style={{
                      width: 150,
                      boxShadow: "0 0 8px rgba(0,0,0,.1)",
                      borderRadius: "0 !important",
                    }}
                    maxTagCount={5}
                  /> */}
                  <Select
                    size="large"
                    placeholder="Experience"
                    onChange={(num) => {
                      setExperience(num);
                      let temp = [...paramList];
                      let data = {key:experience,value:`${num}`}
                      setParamList(...paramList,data);
                    }}
                    value={experience}
                    options={jobExperience}
                    style={{
                      width: 150,
                      boxShadow: "0 0 8px rgba(0,0,0,.1)",
                      borderRadius: "0 !important",
                    }}
                    maxTagCount={5}
                  />
                  <Button
                    htmlType="submit"
                    style={{ borderRadius: "0" }}
                    size="large"
                    type="primary"
                  >
                    Search
                  </Button>
                </Space>
                </Form>
              </Row>
            )}
            <Row style={{ marginTop: "20px" }} gutter={[25, 25]}>
              {allJobList.length === 0 ? (
                <Col span={24}>
                  <Empty />
                </Col>
              ) : (
                allJobList.map((item, index) => {
                  return (
                    <Col lg={collapsed ? 6 : 8}>
                      <JobPostCard key={index} items={item} status={status} />
                    </Col>
                  );
                })
              )}
            </Row>
          </Col>
        </Row>
      )}
    </>
  );
}

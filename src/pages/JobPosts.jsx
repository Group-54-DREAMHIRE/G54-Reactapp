import JobPostCard from "../Components/cards/JobPostCard";
import { List } from "react-content-loader";
import {
  Row,
  Col,
  Divider,
  Typography,
  Select,
  Space,
  Button,
  Image,
  Empty
} from "antd";
import { DollarOutlined, PlusOutlined } from "@ant-design/icons";
import { salary } from "../store/demo/profile";
import { jobExperience } from "../store/demo/jobExperience";
import { jobTitles } from "../store/demo/jobTitles";
import { jobTypes } from "../store/demo/jobTypes";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchUserData, getData } from "../api/authenticationService";
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

  const navigate = useNavigate();
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

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
                <Space size="large" wrap>
                  <Select
                    style={{
                      width: 200,
                      boxShadow: "0 0 8px rgba(0,0,0,.1)",
                      borderRadius: "0 !important",
                    }}
                    allowClear
                    showSearch
                    size="large"
                    placeholder="Job Title"
                    onChange={handleChange}
                    options={jobTitles}
                    maxTagCount={10}
                  />
                  <Select
                    size="large"
                    placeholder="Job Type"
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
                    style={{
                      width: 150,
                      boxShadow: "0 0 8px rgba(0,0,0,.1)",
                      borderRadius: "0 !important",
                    }}
                    maxTagCount={5}
                    options={salary}
                  />
                  <Select
                    size="large"
                    placeholder="Qualifications"
                    options={qualifications}
                    style={{
                      width: 150,
                      boxShadow: "0 0 8px rgba(0,0,0,.1)",
                      borderRadius: "0 !important",
                    }}
                    maxTagCount={5}
                  />
                  <Select
                    size="large"
                    placeholder="Experience"
                    options={jobExperience}
                    style={{
                      width: 150,
                      boxShadow: "0 0 8px rgba(0,0,0,.1)",
                      borderRadius: "0 !important",
                    }}
                    maxTagCount={5}
                  />
                  <Button
                    style={{ borderRadius: "0" }}
                    size="large"
                    type="primary"
                  >
                    Search
                  </Button>
                </Space>
              </Row>
            )}
            <Row style={{ marginTop: "20px" }} gutter={[25, 25]}>
              {JSON.stringify(allJobList) === "[]" ? (
                <Col span={24}>
                  <Empty />
                </Col>
              ) : (
                allJobList.map((item, index) => {
                  return (
                    <Col lg={collapsed ? 8 : 10} md={10} sm={12} xs={24}>
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

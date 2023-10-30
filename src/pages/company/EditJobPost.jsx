import { FiMapPin } from "react-icons/fi";
import { BsCurrencyDollar } from "react-icons/bs";
import ApplyJob from "../../pages/candidate/ApplyJob";
import moment from "moment/moment";
import { useParams } from "react-router-dom";
import { Button, Col, Image, Row, Space, Typography, message, Form } from "antd";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { fetchUserData, getData, updateUserData } from "../../api/authenticationService";
import { List } from 'react-content-loader';
import axios from "axios";

const { Title, Text } = Typography;
export default function EditJobPost() {
  const userType = localStorage.getItem("USERTYPE");
  const { id } = useParams();
  const dispatch = useDispatch();

  const [jobPost, setJobPost] = useState([]);

  const [address, setAddress] = useState(null);
  const [description, setDescription] = useState(null);
  const [howToApply, setHowToApply] = useState(null);

  const [deadline, setDeadline] = useState();
  const [postDate, setPostDate] = useState();
  const [listRequirements, setListRequirements] = useState([""]);
  const [change, setChange] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    setLoading(true);
    getData(`/api/v1/jobpost/getjobpost/${id}`)
      .then((response) => {
        console.log(response.data);
        setJobPost(response.data);
        setLoading(false);
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      })
      .catch((error) => {
        console.error("Error fetching user profile:", error);
        setLoading(false);
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      });
    console.log(jobPost);
  }, []);

  useEffect(() => {
    if (jobPost) {
      if (typeof jobPost.jobRequirements === "string") {
        const val = jobPost.jobRequirements.split("/ ");
        setListRequirements(val);
        console.log(listRequirements);
      } else {
        setListRequirements([]);
      }
      const dateObj = moment(jobPost.deadline);
      setDeadline(dateObj.format("MMM DD YYYY"));
      const date = moment(jobPost.postedDate);
      setPostDate(date.format("MMM DD YYYY"));
      setDescription(jobPost.description);
      setHowToApply(jobPost.howToApply);
    }
  }, [jobPost]);

  const handleAddress = (value) => {
    setAddress(value);
    setChange(true);
  }

  const handleDescription = (value) => {
    setDescription(value);
    console.log("Description updated:", value);
    setChange(true);
  }

  const handleHowToApply = (value) => {
    setHowToApply(value);
    setChange(true);
  }


  const handleSubmit = async () => {
    setLoading(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    try {
      let jobPostData = {
        description,
        howToApply,
      };

      // let data = {
      //   url: `/api/v1/jobPost/updateJobPost/${id}`,
      //   data: jobPostData,
      //   method: "post",
      // };

      const response = await axios.post(`/api/v1/jobPost/updateJobPost/${id}`,jobPostData) 
      console.log(response.jobPostData);
      if (response.status === 200) {
        setJobPost(null);
        setLoading(false);

        message.success("Successfully Updated");
      } else {
        setLoading(false);
        message.error("Data is invalid");
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }}

  return (
    <>
      {loading ? <List /> :

        (<Form onFinish={handleSubmit}>
          <Row
            style={{ padding: "5%" }}
            justify="space-between"
            className="jobpost-w"
            gutter={10}
          >
            <Col span={8}>
              <Row gutter={[0, 5]}>
                <Col span={24}>
                  <Image height={200} src={jobPost.cover} preview={false} />
                </Col>
                <Col span={24}>
                  <Row>
                    <Title
                      level={3}
                      style={{ fontFamily: "Rubik,sans-serif", fontWeight: "500" }}
                    >
                      Job Details
                    </Title>
                  </Row>
                  <Row gutter={[0, 10]}>
                    <Col span={24}>
                      <Row gutter={5}>
                        <Col span={2}>
                          <Title level={3}>
                            <FiMapPin />
                          </Title>
                        </Col>
                        <Col span={22}>
                          <Title level={4}>Address</Title>
                          <Text className="job-text-w"
                            editable={{ onChange: handleAddress }}>{jobPost.address === null ? "address" : jobPost.address}</Text>
                        </Col>
                      </Row>
                    </Col>
                    <Col span={24}>
                      <Row gutter={5}>
                        <Col span={2}>
                          <Title level={3}>
                            <BsCurrencyDollar />
                          </Title>
                        </Col>
                        <Col span={22}>
                          <Title level={4}>Salary</Title>
                          <Text className="job-text-w">
                            {" "}
                            {jobPost.currency}&nbsp;&nbsp;{jobPost.minSalary}-
                            {jobPost.maxSalary} Monthly
                          </Text>
                        </Col>
                      </Row>
                    </Col>
                    <Col span={24}>
                      <Row>
                        <Col span={2}></Col>
                        <Col>
                          <Title level={4}>Experience</Title>
                          <Text className="job-text-w">
                            {jobPost.experience} Experience
                          </Text>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col span={16}>
              <Row>
                <Col span={24}>
                  <Title level={2} style={{ marginTop: "0" }}>
                    {jobPost.jobTitle}
                  </Title>
                  <Text className="job-text-w" strong>
                    Education &nbsp;{" "}
                  </Text>
                  <Text className="job-text-w">
                    {jobPost.education} &nbsp;&nbsp;&nbsp;{" "}
                  </Text>
                  <Text className="job-text-w" strong>
                    Deadline{" "}
                  </Text>
                  <Text className="job-text-w">{deadline} </Text> &nbsp;&nbsp;&nbsp;
                  <Text className="job-text-w" strong>
                    Posted On:{" "}
                  </Text>
                  <Text className="job-text-w">{postDate} </Text>
                  <br /> <br />
                  <Text className="job-text-w"
                    editable={{ onChange: handleDescription }}>
                    {description === null ? "Description" : description}</Text>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Title
                    level={3}
                    style={{ fontFamily: "Rubik,sans-serif", fontWeight: "500" }}>
                    How to Apply
                  </Title>
                  <hr style={{ borderBottom: "2px solid rgba(0,0,0,0.3)" }} />
                  <br />
                  <Text className="job-text-w">{howToApply === null ? "HowToApply" : howToApply}</Text>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Title
                    level={3}
                    style={{ fontFamily: "Rubik,sans-serif", fontWeight: "500" }}>
                    Job Requirements
                  </Title>
                  <hr style={{ borderBottom: "2px solid rgba(0,0,0,0.3)" }} />
                  <br />
                  {listRequirements.map((item, index) => {
                    return (
                      <>
                        <Row>
                          <Col>
                            <Text className="job-text-w" style={{ marginRight: '20px' }}>{index + 1}</Text>
                          </Col>
                          <Col span={22}>
                            <Text className="job-text-w" key={index}>{item}</Text> <br />
                          </Col>
                        </Row>


                      </>
                    );
                  })}
                </Col>
              </Row>
              {/* {userType==="company"?(null):(
          
          )} */}
              <Row style={{ marginTop: "30px" }}>
                <Button
                  disabled={!change}
                  htmlType="submit"
                  size="large"
                  type="primary"
                  style={{ borderRadius: "0" }}
                >Save
                </Button>
              </Row>
              <ApplyJob jobID={id} />
            </Col>
          </Row>
        </Form>)
      }
    </>
  );
}

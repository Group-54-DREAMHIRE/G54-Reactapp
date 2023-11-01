
import {
  Calendar,
  Card,
  Col,
  Row,
  Space,
  Typography,
  Image,
  Avatar,
} from "antd";
import InterviewCard from "../../Components/cards/candidate/InterviewCard";
import { useState,useEffect } from "react";
import { getData } from "../../api/authenticationService";
import moment from "moment";
const { Title, Text } = Typography;


const items = [
  {
    company: "Creative Software",
    date: "2023.08.28",
    time: "9.00 AM",
    type: "HR Interview",
    with: "MRS. Vishmi"
  },
  {
    company: "Derect FN",
    date: "2023.09.05",
    time: "11.00 AM",
    type: "TECHNICAL Interview",
    with: "MR. Sampath"
  },
];

export default function CandidateDashboard() {
  const user = JSON.parse(localStorage.getItem("USER"));
  const [name, setName] = useState("");
  const [interviewList, setInterviewList] = useState([]);
const [convertIntList, setConvertIntList] = useState([]);
useEffect(() => {
  // setLoading(true);
  getData(`/api/v1/interviewCan/getAllScheduledInterviews/${user.id}`)
    .then((response) => {
      console.log(response);
      setInterviewList(response.data);
    })
    .catch((e) => {
      console.log(e);
    });
}, []);

useEffect(() => {
  let tempArr = [];
  for (let i = 0; i < interviewList.length; i++) {
    const newData = {
      company: interviewList[i].interview.jobPost.companyName,
      date: moment(interviewList[i].interview.startTime).format("YYYY MMMM DD"),
      time: moment(interviewList[i].interview.startTime).format("hh.mm A"),
      type: interviewList[i].interview.type,
      with: interviewList[i].interview.withInt,
    };
    tempArr.push(newData);
  }
  setConvertIntList(tempArr.sort((a,b)=>a.date-b.date));
}, [interviewList]);
  useEffect(() => {
    setName(user.name);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [user]);
  return (
    <>
      <Row gutter={20} style={{ padding: "2%" }}>
        <Col span={15}>
          <Row>
            <Col span={24}>
              <Space direction="vertical">
                <Title style={{ marginTop: "0", marginBottom: "0" }}>
                 HI {name===null?"User !": name}
                </Title>
                <Text>It's good to see you again.</Text>
              </Space>
            </Col>

            <Col style={{ margin: "30px 0 30px" }} span={24}>
              <Row gutter={[50, 40]}>
                <Col>
                  <Card
                    style={{
                      backgroundColor: "rgba(233, 245, 254, 1)",
                      boxShadow: "0 0 8px rgba(0,0,0,.1)",
                    }}
                  >
                    <Title style={{ margin: "0" }}>200</Title>
                    <Title level={4} style={{ margin: "0" }}>
                      Job Posts
                    </Title>
                  </Card>
                </Col>

                <Col>
                  <Card
                    style={{
                      backgroundColor: "rgba(233, 245, 254, 1)",
                      boxShadow: "0 0 8px rgba(0,0,0,.1)",
                    }}
                  >
                    <Title style={{ margin: "0" }}>11</Title>
                    <Title level={4} style={{ margin: "0" }}>
                      Applied Jobs
                    </Title>
                  </Card>
                </Col>
                <Col>
                  <Card
                    style={{
                      backgroundColor: "rgba(233, 245, 254, 1)",
                      boxShadow: "0 0 8px rgba(0,0,0,.1)",
                    }}
                  >
                    <Title style={{ margin: "0" }}>5</Title>
                    <Title level={4} style={{ margin: "0" }}>
                      Pending
                    </Title>
                  </Card>
                </Col>

                <Col>
                  <Card
                    style={{
                      backgroundColor: "rgba(233, 245, 254, 1)",
                      boxShadow: "0 0 8px rgba(0,0,0,.1)",
                    }}
                  >
                    <Title style={{ margin: "0" }}>2</Title>
                    <Title level={4} style={{ margin: "0" }}>
                      Short List
                    </Title>
                  </Card>
                </Col>
                <Col
                  span={22}
                  style={{ padding: "2", boxShadow: "0 0 8px rgba(0,0,0,.1)" }}
                >
                  <Calendar />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col span={9}>
          <Row gutter={[30, 30]}>
            <Col span={24}>
              <Title level={3} style={{marginBottom:0}}>
                Upcoming Scheduled Interviews
              </Title>
            </Col>
            {convertIntList.slice(0,2).map((item) => {
              return (
                <Col span={24}>
                  <InterviewCard item={item} />
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </>
  );
}

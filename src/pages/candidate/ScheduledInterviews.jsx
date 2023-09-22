import { Row, Divider, Typography, Tabs, Col } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import InterviewCard from "../../Components/cards/candidate/InterviewCard";
import {
  fetchUserData,
  getData,
  getToken,
} from "../../api/authenticationService";
import moment from "moment";
import { useState, useEffect } from "react";
const { Title } = Typography;

export default function ScheduledInterviews() {
  const navigate = useNavigate();
  const onChange = (key) => {
    console.log(key);
    navigate(key);
  };
  const user = JSON.parse(localStorage.getItem("USER"));
  const id = user.id;
  const [interviewList, setInterviewList] = useState([]);
  const [convertIntList, setConvertIntList] = useState([]);
  useEffect(() => {
    // setLoading(true);
    getData(`/api/v1/interviewCan/getAllScheduledInterviews/${id}`)
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
    setConvertIntList(tempArr);
  }, [interviewList]);

  const items = [
    {
      company: "Derect FN",
      date: "2023.09.05",
      time: "11.00 AM",
      type: "TECH Interview",
      with: "MR. Sampath",
    },
  ];
  return (
    <>
      <Row style={{ padding: "2%" }}>
        <Col span={24}>
          <Title level={2}>SCHEDULED INTERVIEWS</Title>
          <hr style={{ border: "2px solid rgba(0,0,0,.4)" }} />
        </Col>
      </Row>
      <Row>
        {convertIntList.map((item) => {
          return(
            <Col span={8}>
            <InterviewCard item={item} />
          </Col>
          )
        })}
      </Row>
    </>
  );
}

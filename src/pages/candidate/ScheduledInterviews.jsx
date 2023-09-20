import { Row, Divider, Typography, Tabs, Col } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import InterviewCard from "../../Components/cards/candidate/InterviewCard";
import { fetchUserData, getData, getToken } from "../../api/authenticationService";
import moment from "moment";
import { useState, useEffect } from "react";
import axios from "axios";
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
  const [showHrList, setShowHrList] = useState([]);
  const [asgSlot, setAsgSlot] = useState({});
  const [dateList, setDateList] = useState({});
  const [showList, setShowList] = useState([]);
  const [showTechList, setShowTechList] = useState([]);
  useEffect(() => {
    // setLoading(true);
    const sendData = {
      jobId: 1,
    };
    let data = {
      url: `/api/v1/interview/getScheduledInterviews/${id}`,
      data: sendData,
      method: "get",
    };
      fetchUserData(data).then((response)=>{
        console.log(response);
      }).catch((e)=>{
        console.log(e);
      })
  }, []);

  // useEffect(() => {
  //   let key = 0;
  //   let tempDateList = {
  //     id: key,
  //     intId: asgSlot.id,
  //     date: asgSlot.startTime,
  //     type: asgSlot.type,
  //     withInt: asgSlot.withInt,
  //     times: [
  //       {
  //         startTime: asgSlot.startTime,
  //         duration: asgSlot.duration,
  //       },
  //     ],
  //   };
  //   const initialShowList = [tempDateList];
  //   for (let i = 0; i < interviewList.length; i++) {
  //     if (i < interviewList.length - 1) {
  //       const nextInterview = interviewList[i + 1];

  //       // Compare the dates (you may need to adjust the date comparison logic)
  //       if (
  //         moment(tempDateList.date).isSame(
  //           moment(nextInterview.startTime),
  //           "day"
  //         )
  //       ) {
  //         const tempData = {
  //           startTime: nextInterview.startTime,
  //           duration: nextInterview.duration,
  //         };
  //         tempDateList.times.push(tempData);
  //       } else {
  //         key = key + 1;
  //         const newDateList = {
  //           id: key,
  //           intId: nextInterview.id,
  //           date: nextInterview.startTime,
  //           type: nextInterview.type,
  //           withInt: nextInterview.withInt,
  //           times: [
  //             {
  //               startTime: nextInterview.startTime,
  //               duration: nextInterview.duration,
  //             },
  //           ],
  //         };
  //         initialShowList.push(newDateList);
  //         tempDateList = newDateList;
  //       }
  //     }
  //   }
  //   console.log(initialShowList);
  //   setShowList(initialShowList);
  //   setShowHrList(initialShowList.filter((item) => item.type === "hr"));
  //   setShowTechList(
  //     initialShowList.filter((item) => item.type === "technical")
  //   );
  // }, [interviewList, asgSlot]);
  const items = [
    {
      company: "Creative Software",
      type: "HR interview",
      role: "Business Analyst",
    },

    {
      company: "Cloud Solution International",
      type: "TECH interview",
      role: "Full stack developer",
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
        <Col span={8}>
          <InterviewCard item={items[0]} />
        </Col>
      </Row>
    </>
  );
}

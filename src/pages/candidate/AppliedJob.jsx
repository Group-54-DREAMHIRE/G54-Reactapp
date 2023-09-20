import { Col, Row, Steps, Typography,Divider,Tabs } from "antd";
import AppliedJobCard from "../../Components/cards/candidate/AppliedJobCard";
import InterviewCard from "../../Components/cards/candidate/InterviewCard";
import { useNavigate, useParams,Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { getData } from "../../api/authenticationService";
import moment from "moment";
import ShowInterview from "../../Components/cards/candidate/ShowInterview";
import ShowTest from "../../Components/cards/candidate/ShowTest";
const { Title, Text } = Typography;
const description = "This is a description";
const items = [
  {
    company: "Creative Software",
    date: "2023.08.28",
    time: "9.00 AM",
    type: "HR Interview",
    with: "MRS. Vishmi",
  },
  {
    company: "Derect FN",
    date: "2023.09.05",
    time: "11.00 AM",
    type: "TECH Interview",
    with: "MR. Sampath",
  },
];
export default function AppliedJob() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [interviewList, setInterviewList] = useState([]);
  const [showHrList, setShowHrList] = useState([]);
  const [asgSlot, setAsgSlot] = useState({});
  const [dateList, setDateList] = useState({});
  const [showList, setShowList] = useState([]);
  const [showTechList, setShowTechList] = useState([]);

  useEffect(() => {
    // setLoading(true);
    getData(`/api/v1/interview/getScheduledInterviews/${id}`)
      .then((response) => {
        console.log(response.data);
        setInterviewList(response.data);
        setAsgSlot(response.data[0]);
      })
      .catch((error) => {
        console.error("Error fetching user profile:", error);
      });
  }, []);

  useEffect(() => {
    let key = 0;
    let tempDateList = {
      id: key,
      intId: asgSlot.id,
      date: asgSlot.startTime,
      type: asgSlot.type,
      withInt: asgSlot.withInt,
      times: [
        {
          startTime: asgSlot.startTime,
          duration: asgSlot.duration,
        },
      ],
    };
    const initialShowList = [tempDateList];
    for (let i = 0; i < interviewList.length; i++) {
      if (i < interviewList.length - 1) {
        const nextInterview = interviewList[i + 1];

        // Compare the dates (you may need to adjust the date comparison logic)
        if (
          moment(tempDateList.date).isSame(
            moment(nextInterview.startTime),
            "day"
          )
        ) {
          const tempData = {
            startTime: nextInterview.startTime,
            duration: nextInterview.duration,
          };
          tempDateList.times.push(tempData);
        } else {
          key = key + 1;
          const newDateList = {
            id: key,
            intId: nextInterview.id,
            date: nextInterview.startTime,
            type: nextInterview.type,
            withInt: nextInterview.withInt,
            times: [
              {
                startTime: nextInterview.startTime,
                duration: nextInterview.duration,
              },
            ],
          };
          initialShowList.push(newDateList);
          tempDateList = newDateList;
        }
      }
    }
    console.log(initialShowList);
    setShowList(initialShowList);
    setShowHrList(initialShowList.filter((item) => item.type === "hr"));
    setShowTechList(
      initialShowList.filter((item) => item.type === "technical")
    );
  }, [interviewList, asgSlot]);

  const onChange = (key) => {
    console.log(key);
    navigate(key);
  };
  return (
    <>
      <Row>
        <Col span={24}>
          <Row align="bottom" justify="space-between" gutter={[30, 30]}>
            <Col>
              <Text style={{ fontSize: "30px", fontWeight: "800" }}>
                Cloud Solutions International
              </Text>
              <br />
              <br />
              <Text style={{ fontSize: "23px", fontWeight: "700" }}>
                Software Engineer
              </Text>
            </Col>
            <Col span={24}>
              <Steps
                responsive
                current={1}
                status="error"
                items={[
                  {
                    title: "Finished",
                    description: "Successfully Applied the job",
                  },
                  {
                    title: "Rejected",
                    description: "Your resume is rejected",
                  },
                  {
                    title: "Waiting",
                    description,
                  },
                  {
                    title: "Waiting",
                    description,
                  },
                ]}
              />
            </Col>
            <Col span={24}>
             <Row gutter={20}>
              <Col span={6} 
                onClick={()=>
                  navigate("/scheduledappjobinterviews")}>
              <ShowInterview/>
              </Col>
              <Col  onClick={()=>
                  navigate("/scheduledtest")}
                   span={6}>
              <ShowTest/>
              </Col>
             </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

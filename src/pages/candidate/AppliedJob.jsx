import { Col, Row, Steps, Typography,Divider,Tabs } from "antd";
import AppliedJobCard from "../../Components/cards/candidate/AppliedJobCard";
import InterviewCard from "../../Components/cards/candidate/InterviewCard";
import { useNavigate, useParams,Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchUserData, getData } from "../../api/authenticationService";
import moment from "moment";
import ShowInterview from "../../Components/cards/candidate/ShowInterview";
import ShowTest from "../../Components/cards/candidate/ShowTest";
import { useSelector } from "react-redux";
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
  const user = JSON.parse(localStorage.getItem("USER"));
  const canId = user.id;
  const { id } = useParams();
  const [stepList, setStepList] = useState([]);
  const [status, setStatus] = useState();
  const [currState, setCurrState] = useState();
  const job = useSelector((state)=>state.applyJob.appliedActJob);
  useEffect(() => {
    if(job.candidateType === "reject"){
      setStatus("error");
      setCurrState(1);
      const data = 
        [
          {
            title: "Finished",
            description: "Successfully Applied the job",
          },
          {
            title: "Rejected",
            description: "Sorry! your resume has been rejected",
          }
        ]
        setStepList(data);
    }
    if(job.candidateType === "pending"){
      setStatus("process");
      setCurrState(1);
      const data = 
        [
          {
            title: "Finished",
            description: "Successfully Applied the job",
          },
          {
            title: "Waiting",
            description: "You will be informed after added to the short list",
          }
        ]
        setStepList(data);
    }
    if(job.candidateType === "shortlist"){
      setStatus("process");
      setCurrState(2);
      const data = 
        [
          {
            title: "Applied",
            description: "Successfully Applied the job",
          },
          {
            title: "Short Listed",
            description: "You are in the shortlist",
          },
          {
            title: "Waiting",
            description: "for interview or selection test",
          }
        ]
        setStepList(data);
    }
    if(job.candidateType === "passed"){
      setStatus("process");
      setCurrState(3);
      const data = 
        [
          {
            title: "Applied",
            description: "Successfully Applied the job",
          },
          {
            title: "Short Listed",
            description: "You are in the shortlist",
          },
          {
            title: "Passed",
            description: "Passed the Selection test",
          },
          {
            title: "Waiting",
            description: "for interview",
          }
        ]
        setStepList(data);
    }
  }, [job]);
  return (
    <>
      <Row>
        <Col span={24}>
          <Row align="bottom" justify="space-between" gutter={[30, 30]}>
            <Col span={24}>
              <Text style={{ fontSize: "30px", fontWeight: "800" }}>
                {job.jobPost.companyName}
              </Text>
              <br />
              <br />
              <Text style={{ fontSize: "23px", fontWeight: "700" }}>
              {job.jobPost.jobTitle}
              </Text>
            </Col>
            <Col span={(job.candidateType === "reject" || job.candidateType === "pending")?12:24}>
              <Steps
                responsive
                current={currState}
                status={status}
                items={stepList}
              />
            </Col>
            <Col span={24}>
             <Row gutter={20}>
              <Col span={6} 
                onClick={()=>
                  navigate(`/scheduledappjobinterviews/${id}`)}>
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

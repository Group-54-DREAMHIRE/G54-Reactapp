import { Col, Row } from "antd";
import InterviewCard from "../../../Components/cards/candidate/InterviewCard";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {setApplyJobId} from '../../../store/company/applyJobSlice';
import { useEffect, useState } from "react";
import { fetchUserData } from "../../../api/authenticationService";
import moment from "moment";
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
    type: "TECH Interview",
    with: "MR. Sampath"
  },
];
export default function Interviews() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("USER"));
  const id = user.id;
  const [interviewList, setInterviewList] = useState([]);
  const jobId = useSelector((state)=>state.applyJob.activeJobId);
  const [convertIntList, setConvertIntList] = useState([]);
  useEffect(() => {
    const sendData = {
      jobId
    }
    let data ={
      url:`/api/v1/interviewCan/getAppliedJobInterviews/${id}`,
      data:sendData,
      method: 'post'
    }
    fetchUserData(data)
      .then((response) => {
        console.log(response);
        setInterviewList(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  // useEffect(() => {
  //   let tempArr = [];
  //   for (let i = 0; i < interviewList.length; i++) {
  //     const newData = {
  //       company: interviewList[i].interview.jobPost.companyName,
  //       date: moment(interviewList[i].interview.startTime).format("YYYY MMMM DD"),
  //       time: moment(interviewList[i].interview.startTime).format("hh.mm A"),
  //       type: interviewList[i].interview.type,
  //       with: interviewList[i].interview.withInt,
  //     };
  //     tempArr.push(newData);
  //   }
  //   setConvertIntList(tempArr);
  // }, [interviewList]);
  return (
    <>
      <Row gutter={[30, 30]}>
            {items.map((item) => {
              return (
                <Col span={9}
                  onClick={()=>navigate(`/interviewdetails/${jobId}`)}>
                 <InterviewCard
                 item={item} />
                </Col>
              );
            })}
          </Row>
      
    </>
  )
}

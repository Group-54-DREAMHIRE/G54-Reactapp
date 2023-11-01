import { Col, Row } from "antd";
import InterviewCard from "../../../Components/cards/candidate/InterviewCard";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {setApplyJobId} from '../../../store/company/applyJobSlice';
import { useEffect, useState } from "react";
import { fetchUserData } from "../../../api/authenticationService";
import moment from "moment";
export default function Interviews() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("USER"));
  const userId = user.id;
  const [interviewList, setInterviewList] = useState([]);
  const {id} = useParams();

  const [convertIntList, setConvertIntList] = useState([]);
  useEffect(() => {
    const sendData = {
      jobId:id
    }
    let data ={
      url:`/api/v1/interviewCan/getAppliedJobScheduledInterviews/${userId}`,
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

  useEffect(() => {
    let tempArr = [];
    for (let i = 0; i < interviewList.length; i++) {
      const newData = {
        id:interviewList[i].intId,
        company: interviewList[i].companyName,
        date: moment(interviewList[i].startTime).format("YYYY MMMM DD"),
        time: moment(interviewList[i].startTime).format("hh.mm A"),
        type: interviewList[i].type,
        with: interviewList[i].intWith,
      };
      tempArr.push(newData);
    }
    setConvertIntList(tempArr);
  }, [interviewList]);
  return (
    <>
      <Row gutter={[30, 30]}>
            {convertIntList.map((item) => {
              return (
                <Col span={9} onClick={()=>{navigate(`/scheduledinterview/${item.id}`)}}>
                 <InterviewCard
                 item={item} />
                </Col>
              );
            })}
          </Row>
      
    </>
  )
}

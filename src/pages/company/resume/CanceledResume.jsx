import CandidateResumeCard from "../../../Components/cards/company/CandidateResumeCard";
import {Row,Col, Divider, Typography} from 'antd';
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { items } from "../../../store/demo/candidateResume";
import { getData } from "../../../api/authenticationService";

export default function CanceledResume() {
  const [resumeList, setResumeList] = useState([]);
  const {id} = useParams();
  useEffect(() => {
    getData(`/api/v1/applyjobcandidate/getCanceledCandidates/${id}`)
      .then((response) => {
        setResumeList(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user profile:", error);
      });
}, []);
  let status = {
    reject: false,
    approve: false,
    pending: false,
  }
  return (
    <>
    <Row style={{padding: '2%'}} gutter={[20,20]}>
        {resumeList.map((item)=>{
          return(
            <Col span={12} >
              <CandidateResumeCard items= {item} status={status}/>
            </Col>
          )
        })}
    </Row>    
    </>
  )
}

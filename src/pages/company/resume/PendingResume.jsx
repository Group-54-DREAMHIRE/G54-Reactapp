import CandidateResumeCard from "../../../Components/cards/company/CandidateResumeCard";
import {Row,Col, Divider, Typography} from 'antd';
import { items } from "../../../store/demo/candidateResume";
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { getData } from "../../../api/authenticationService";

export default function PendingResumes() {
  const [resumeList, setResumeList] = useState([]);
  let status = {
    reject: true,
    approve: true,
    pending: false,
  }
  const {id} = useParams();
  useEffect(() => {
      getData(`/api/v1/applyjobcandidate/getPendingCandidates/${id}`)
        .then((response) => {
          setResumeList(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error fetching user profile:", error);
        });
  }, []);
  
 
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

import CandidateResumeCard from "../../../Components/cards/company/CandidateResumeCard";
import {Row,Col, Divider, Typography} from 'antd';
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { items } from "../../../store/demo/candidateResume";
import { getData } from "../../../api/authenticationService";

export default function ShortListResume() {
  const [resumeList, setResumeList] = useState([]);
  const {id} = useParams();
  useEffect(() => {
    getData(`/api/v1/applyjobcandidate/getShortListedCandidates/${id}`)
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
        pending: true,
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

import CandidateResumeCard from "../../../Components/cards/company/CandidateResumeCard";
import {Row,Col, Divider, Typography} from 'antd';
import { items } from "../../../store/demo/candidateResume";

export default function ShortListResume() {
    let status = {
        reject: false,
        approve: false,
    }
  return (
    <>
        <Row style={{padding: '2%'}} gutter={[20,20]}>
        {items.map((item)=>{
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

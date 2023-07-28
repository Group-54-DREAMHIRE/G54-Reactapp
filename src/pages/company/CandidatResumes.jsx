import CandidateResumeCard from "../../Components/cards/company/CandidateResumeCard";
import {Row,Col, Divider, Typography} from 'antd';
import { items } from "../../store/demo/candidateResume";
const { Title, } = Typography;


export default function CandidatResumes() {
  return (
    <>
    <Row style={{padding: '2%'}}>
      <Title level={2}>RESUME</Title>
      <Divider style={{ margin: "0" }} />
    </Row>
    <Row style={{padding: '2%'}} gutter={[20,20]}>
        {items.map((item)=>{
          return(
            <Col span={12} >
              <CandidateResumeCard items= {item}/>
            </Col>
          )
        })}
    </Row>    
    </>
  )
}

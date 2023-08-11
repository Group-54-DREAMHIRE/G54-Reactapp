import { Col, Row } from "antd";
import InterviewCard from "../../Components/cards/candidate/InterviewCard";

export default function Interviews() {
  return (
    <>
      <h1>This is interviews in candidate side</h1>
      <Row >
        <Col span={18}>
        <Row  justify='space-between' gutter={20}>
        <Col span={12}>
        <InterviewCard/>
        </Col>
        <Col span={12}>
        <InterviewCard/>
        </Col>
        </Row>
        </Col>
        
      </Row>
      
    </>
  )
}

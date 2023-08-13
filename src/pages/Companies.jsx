import { Col, Row } from "antd";
import CompanyCard from '../Components/cards/company/CompanyCard';

const list = {
  name: "Creative Software",
  description:"Creative Software builds and manages high-performing software development teams to bring big ideas to life.Whether you want to extend your in-house team or need assistance with developing, quality assuring, or supporting your application, we can help.",
  cover: "https://img.freepik.com/premium-photo/man-sits-desk-front-night-cityscape_897419-115.jpg?w=1060",

}
export default function Companies() {
  return (
    <>
      <Row>
        <Col span={16}>
        <CompanyCard item={list} />
        
        </Col>
      </Row>
    </>
  )
}

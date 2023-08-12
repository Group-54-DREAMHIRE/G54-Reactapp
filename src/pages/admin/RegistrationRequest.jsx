
import { Col, Row } from "antd";
import ApprovalsCard from "../../Components/cards/admin/ApprovalsCard";

export default function RegistrationRequest() {
  return (
    <>
      <Row gutter={[0,30]}>
        <Col span={14}>
        <ApprovalsCard/>
        </Col>
        <Col span={14}>
        <ApprovalsCard/>
        </Col>
      </Row>
    </>
  )
}
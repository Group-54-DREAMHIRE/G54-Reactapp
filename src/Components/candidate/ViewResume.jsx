import { Col, Row } from "antd";
import EditPersonalDetails from "./EditPersonalDetails";
import Resume from "../../pages/candidate/Resume";

export default function ViewResume() {

  return (
    <>
    <Row gutter={10}>
      <Col span={12}>
      <Row>
        <Col span={22}>
          <EditPersonalDetails/>
        </Col>
      </Row>
      </Col>
      <Col span={12}>
          <Resume/>
      </Col>
    </Row>
    </>
  )
}

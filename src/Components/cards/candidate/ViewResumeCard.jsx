import { Card, Col, Image, Row, Typography } from "antd";
import addDoc from "../../../assets/images/viewCV.png";
import { useNavigate } from "react-router-dom";
const { Title, Text, Link } = Typography;
export default function ViewResumeCard() {
    const navigate = useNavigate();
  return (
    <>
      <Row style={{ cursor: "pointer" }} onClick={()=>navigate("/createresume")}>
        <Card hoverable>
          <Col span={24}>
            <Image width={100} preview={false} src={addDoc} />
          </Col>
          <Col span={24}>
            <Row justify='center'>
            <span>Resume</span>
            </Row>
           
          </Col>
        </Card>
      </Row>
    </>
  );
}

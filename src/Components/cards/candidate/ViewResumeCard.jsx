import { Card, Col, Image, Row, Typography } from "antd";
import addDoc from "../../../assets/images/CREATECV.png";
import { useNavigate } from "react-router-dom";
const { Title, Text, Link } = Typography;
export default function ViewResumeCard() {
    const navigate = useNavigate();
  return (
    <>
      <Row style={{ cursor: "pointer" }} onClick={()=>navigate("/viewresume")}>
        <Card hoverable>
          <Col span={24}>
            <Title >
                VIEW RESUME
            </Title>
          </Col>
         
        </Card>
      </Row>
    </>
  );
}

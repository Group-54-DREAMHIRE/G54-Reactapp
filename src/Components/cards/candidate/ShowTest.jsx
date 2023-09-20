import { Col, Row, Typography } from 'antd'
import { useNavigate } from 'react-router-dom';
const {Title} = Typography;

export default function ShowTest() {
    const navigate = useNavigate();
  return (
    <>
    <Row 
        style={{
            backgroundColor:'rgba(25,103,210,.4)', cursor:'pointer'}}>
        <Col span={24}>
            <Title>
                Test
            </Title>
        </Col>
    </Row>
    </>
  )
}

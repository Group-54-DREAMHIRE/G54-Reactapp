import { Card, Col, Image, Row, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import test from "../../../assets/images/test.png";
const { Title,Text } = Typography;

export default function ShowTest() {
  const navigate = useNavigate();
  return (
    <>
      <Row
        style={{
          cursor: "pointer",
        }}
      >
        <Col span={24}>
        <Card style={{boxShadow:"0 0 8px rgba(0,0,0,.2)"}}>
         <Row justify='center'>
         <Col span={24}>
            <Image preview={false} src={test} />
          </Col>
          <Col>
            <Text style={{fontSize:18}} strong >
                Test
            </Text>
          </Col>
         </Row>
        </Card>
        </Col>
        
      </Row>
    </>
  );
}

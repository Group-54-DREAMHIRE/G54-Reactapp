import { Col, Row,Card,Image, Typography } from 'antd'
import { useNavigate } from 'react-router-dom';
import interview from '../../../assets/images/interview.png';
const {Title,Text} = Typography;

export default function ShowInterview() {
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
            <Image preview={false} src={interview} />
          </Col>
          <Col>
            <Text style={{fontSize:18}} strong >
                Interviews
            </Text>
          </Col>
         </Row>
        </Card>
        </Col>
        
      </Row>
    </>
  )
}

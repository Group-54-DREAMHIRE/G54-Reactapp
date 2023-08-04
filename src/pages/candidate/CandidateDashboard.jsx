import { Calendar, Card, Col, Row,Space,Typography } from "antd";
const { Title, Text } = Typography;

export default function CandidateDashboard() {
  return (
    <>
       <Row>
        <Col span={24}>
          <Row>
           <Col span={24}>
           <Space direction="vertical">
           <Title style={{ marginTop: '0', marginBottom: '0'}}>Hello Dulanjana !</Title>
            <Text>It's good to see you again.</Text>
           </Space>
           </Col>
        
            <Col style={{marginTop: '30px'}} span={12}>
              <Space direction="horizontal">
                <Card style={{backgroundColor: 'rgba(245, 245, 247, 1)'}} >
                  <Title style={{margin: '0'}}>11</Title>
                  <Title level={4} style={{margin: '0'}}>Applied Jobs</Title>
                </Card>
                <Card style={{backgroundColor: 'rgba(245, 245, 247, 1)'}} >
                  <Title style={{margin: '0'}}>200</Title>
                  <Title level={4} style={{margin: '0'}}>Job Posts</Title>
                </Card>
              </Space>
              <Space style={{marginTop: '80px'}}>
              <Calendar />
              </Space>
              
            </Col>
            <Col span={9}>
            
            </Col>
          </Row>
        </Col>
       </Row>
    </>
  )
}

import { Row, Col, Typography, Divider, Form, Input, Button } from "antd";
const { Title } = Typography;

export default function () {
  return (
    <>
      <Row style={{ padding: "3%",  height: '75vh' }}>
        <Col span={24}>
          <Row justify="space-between">
            <Col span={22}>
              <Row>
                <Col span={24}>
                  <Title level={4}>
                    CHANGE PASSWORD
                  </Title>
                  <Divider/>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                <Form>
                        <Row>
                            <Col span={24}>
                            <Title level={5} style={{marginTop: '5px'}} > Old Password</Title>
                            <Input style={{boxShadow: '0 0 10px 0 rgba(30,136,229,.4)'}}/>
                            </Col>
                        </Row>
                        <Row justify= 'space-between'>
                            <Col span={10}>
                            <Title level={5} > New Password</Title>
                            <Input style={{boxShadow: '0 0 10px 0 rgba(30,136,229,.4)'}}/>
                            </Col>
                            <Col span={10}>
                            <Title level={5}> Confirm New Password</Title>
                            <Input style={{boxShadow: ' 0 0 10px 0 rgba(30,136,229,.4)'}}/>
                            </Col>
                        </Row>
                        <Row style={{marginTop: '5%'}}>
                            <Col>
                            <Button 
                            type="primary"
                            size="large">
                                Update
                            </Button>
                            </Col>
                        </Row>                      
                   
                </Form>                
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

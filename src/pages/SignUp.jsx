import{GoogleOutlined } from '@ant-design/icons';
import { Form, Input, Button, Modal, Checkbox, Row, Col, Typography, Menu, } from 'antd';
const { Text, Link, Title } = Typography;


const SignUp = ({ signUp, cancelSignUp}) => {

  return (
    <>
      <Modal
        style={{top: '4vh'}}      
        open={signUp}
        onCancel={cancelSignUp}
        footer={[]}
      >
        <Row block style={{padding: '30px'}}>
          <Col span={24}>
            <Row block
              justify='center'
              style={{ margin: '20px 0px 25px' }}
            >
              <Title level={2}>
                REGISTER TO DREAMHIRE
              </Title>
            </Row>
            <Row>
                <Menu />
            </Row>
            <Form
              layout='vertical'
              onFinish
              onFinishFailed
              autoComplete="off"
            >

              <Form.Item
                label="Email"
                name="email">
                <Input style={{
                  padding: '10px 15px 10px',
                  marginBottom: '15px',
                  fontSize: 'medium'}}
                  allowClear />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password">
                <Input.Password
                  style={{
                    padding: '10px 15px 10px',
                    marginBottom: '15px',
                    fontSize: 'medium'}}
                  allowClear />
              </Form.Item>

              <Row justify='space-between' block>
                <Form.Item
                  name="remember"
                  valuePropName="checked">
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <Link onClick={() => { console.log("click forget") }}>
                  Forget Password
                </Link>
              </Row>

              <Form.Item
                wrapperCol={{
                  span: 24,}}>
                <Button block type='primary'
                  style={{
                    padding: '10px 0 35px',
                    fontSize: 'medium',
                    fontWeight: '500',
                    marginBottom: '10px'}}>
                  Log In
                </Button>
              </Form.Item>
            </Form>
            <Row block>
              <Button
              icon={<GoogleOutlined />}
                  style={{
                    padding: '15px 0 40px',
                    fontSize: 'medium',
                    fontWeight: '400'
                  }}
              block>
                Sign in with Google
              </Button>
            </Row>
          </Col>
        </Row>
      </Modal>
    </>
  )
}
export default SignUp


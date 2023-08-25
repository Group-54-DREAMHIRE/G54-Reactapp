import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import loginPic from '../assets/images/landing-1.png';

import { success } from "../store/auth/userSlice";
import { loginUser } from "../store/auth/userSlice";

import {
  Form,
  Image,
  Input,
  Button,
  Checkbox,
  Row,
  Col,
  Typography,
  Alert,
} from "antd";
const {Link, Title } = Typography;


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {loading, error, message} = useSelector((state)=> state.user)

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const submitHandler = async () => {
      let userCredentials = {
        email: email,
        password: password
      };
      dispatch(loginUser(userCredentials)).then((result)=> {
        if(result.payload==200){
          setEmail('');
          setPassword('');
          setTimeout(
            () => {
              dispatch(success());
              clearTimeout();
            },
            1000
          );
          navigate("/dashboard");
          window.location.reload();
        }else{
          setEmail('');
          setPassword('');
          setTimeout(
            () => {
              dispatch(success());
              clearTimeout();
            },
            1000
          );
        }
      })
    };
  
  return (
    <>
      <Row style={{height: '100vh',backgroundColor: '#F2FAFA'}} align='middle'>
        <Col span={24}>
          <Row>
            <Col span={11}>
                <Image preview={false} src={loginPic}/>
            </Col>
            <Col span={12} >
              <Row justify='center' align='middle' style={{paddingTop: '8%'}}>
                <Col span={18} style={{padding: '5% ',backgroundColor:  'white',borderRadius: '15px' ,boxShadow:
              "0px 24px 83px 0px rgba(0, 0, 0, 0.10), 0px 5px 18px 0px rgba(0, 0, 0, 0.06), 0px 2px 6px 0px rgba(0, 0, 0, 0.04)",}}>
                  <Row
                    style={{ marginBottom: "20px" }}
                  >
                    <Title style={{marginTop: '15px'}} level={2}>LOGIN TO DREAMHIRE</Title>
                  </Row>
                  <Form
                    layout="vertical"
                    onFinish={submitHandler}
                    autoComplete="off"
                  >
                    <Form.Item label="Email" name="email">
                      <Input
                        style={{
                          padding: "10px 15px 10px",
                          marginBottom: "15px",
                          fontSize: "medium",
                        }}
                        required
                        allowClear
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Form.Item>

                    <Form.Item label="Password" name="password">
                      <Input.Password
                      required
                        style={{
                          padding: "10px 15px 10px",
                          marginBottom: "15px",
                          fontSize: "medium",
                        }}
                        allowClear
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Form.Item>

                    <Row justify="space-between" block>
                      <Form.Item name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                      </Form.Item>
                      <Link
                        onClick={() => {
                          console.log("click forget");
                        }}
                      >
                        Forget Password
                      </Link>
                    </Row>

                    <Form.Item
                      wrapperCol={{
                        span: 24,
                      }}
                    >
                      <Button
                        loading={loading}
                        type="primary"
                        htmlType="submit"
                        block
                        style={{
                          padding: "5px 0 30px",
                          fontSize: "medium",
                          fontWeight: "500",
                          marginBottom: "10px",
                        }}
                      >
                        Log In
                      </Button>
                    </Form.Item>
                  </Form>
                  <Button onClick={()=>navigate("/")}>Back to Home</Button>
                  {message && (
                    <Alert message={message} type="success" showIcon />
                  )}
                  {error && <Alert message={error} type="error" showIcon />}
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

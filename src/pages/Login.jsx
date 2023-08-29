import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import loginPic from '../assets/images/landing-1.png';

import { getUser, success } from "../store/auth/userSlice";
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
  message,
} from "antd";
import { userLogin } from "../api/authenticationService";
const {Link, Title, Text } = Typography;


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [loading, setLoading] = useState(false);

    const validateEmail = (email) => {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    };
  
    const handleEmailChange = (e) => {
      const newEmail = e.target.value;
      setEmail(newEmail);
      setIsValidEmail(validateEmail(newEmail));
    };
    const navigate = useNavigate();
    const dispatch = useDispatch();
;
    
    const submitHandler = async () => {
      setLoading(true);
      if(validateEmail){
        let userCredentials = {
          email: email,
          password: password
        };
          try{
            const response = await userLogin(userCredentials);
            if(response.status == 200){
            localStorage.setItem("USER",JSON.stringify(response.data.user));
            localStorage.setItem("USERTYPE", response.data.user.systemUser.userType);
            localStorage.setItem("TOKEN",response.data.accessToken);
            window.location.href = "dashboard";
            setLoading(false);
            setEmail('');
            setPassword('');
            }else{
            message.error("Invalid Usernae or password!");
            setEmail('');
            setPassword('');
            setLoading(false);
          }
          }catch(e){
            console.log(e.message);
            message.error("Invalid Usernae or password!");
            setEmail('');
            setPassword('');
            setLoading(false);
          }
      }else{
        message.error("Email is invalid!");
        setLoading(false);
        setEmail('');
        setPassword('');
      }

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
                        value={email}
                        style={{
                          padding: "10px 15px 10px",
                          marginBottom: "15px",
                          fontSize: "medium",
                        }}
                        required
                        allowClear
                        onChange={handleEmailChange}
                      />
                      { email &&
                    (isValidEmail ? <Text type="success">Email is valid</Text> : <Text type='danger'>Email is not valid!</Text>)}
                    </Form.Item>

                    <Form.Item label="Password" name="password">
                      <Input.Password
                        required
                        value={password}
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
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

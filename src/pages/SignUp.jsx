import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import loginPic from '../assets/images/landing-1.png';
import { registerUser } from "../store/auth/userSlice";
import { loginUser } from "../store/auth/userSlice";

import {
  Form,
  Image,
  Input,
  Button,
  Checkbox,
  Radio,
  Row,
  Col,
  Typography,
  Alert,
} from "antd";
const {Link, Title } = Typography;


export default function SignUp() {

  const options = [
    { label: "Candidate", value: "candidate" },
    { label: "Company", value: "company" },
  ];
  const [userType, setUserType] = useState("candidate");
  const onChange = ({ target: { value } }) => {
    setUserType(value);
  };
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {loading, error, message} = useSelector((state)=> state.user)

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userRegister = async (e) =>{
      console.log("clicked");
      let register = {
          email: email,
          password: password,
          userType: userType,
      }
      dispatch(registerUser(register)).then((result)=>{
        console.log(result);
          navigate("/login")
      })
    }  
  
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
                    <Title style={{marginTop: '15px'}} level={2}>REGISTER TO DREAMHIRE</Title>
                  </Row>
                  <Row block justify="center">
              <Radio.Group
                options={options}
                onChange={onChange}
                value={userType}
                optionType="button"
                buttonStyle="solid"
                style={{ width: "100%", margin: "10px 0 30px" }}
                className="user-type-w"/>
            </Row>
            <Form layout="vertical"
             onFinish={userRegister}
             autoComplete="off">
              <Form.Item label="Email" name="email">
                <Input
                  value={email}
                  onChange={(e)=> setEmail(e.target.value)}
                  style={{
                    padding: "10px 15px 10px",
                    marginBottom: "15px",
                    fontSize: "medium",}}
                  allowClear/>
              </Form.Item>

              <Form.Item label="Password" name="password">
                <Input.Password
                  value={password}
                  onChange={(e)=> setPassword(e.target.value)}
                  style={{
                    padding: "10px 15px 10px",
                    marginBottom: "15px",
                    fontSize: "medium",
                  }}
                  allowClear
                />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  span: 24,}}>
                <Button
                  htmlType="submit"
                  block
                  type="primary"
                  loading={loading}
                  style={{
                    padding: "10px 0 35px",
                    fontSize: "medium",
                    fontWeight: "500",
                    marginBottom: "10px",}}>
                  Register
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

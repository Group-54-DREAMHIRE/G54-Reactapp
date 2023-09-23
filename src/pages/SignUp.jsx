import { useState } from "react";
import { userRegister } from "../api/authenticationService";
import { useNavigate } from "react-router-dom";
import loginPic from "../assets/images/landing-1.png";

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
  message,
  Spin,
} from "antd";
const { Link, Title, Text } = Typography;

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
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(false);
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
  const validatePassword = (password) => {
    // At least 8 characters, at least one uppercase letter, one lowercase letter, and one digit
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return passwordPattern.test(password);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setIsValidPassword(validatePassword(newPassword));
  };
  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    setPasswordsMatch(newConfirmPassword === password);
  };
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setLoading(true);
    if(validateEmail && validatePassword && passwordsMatch){
      let register = {
        email: email,
        password: password,
        userType: userType,
      };
        try{
          const response = await userRegister(register);
          if (response.status === 200) {
            setEmail('');
            setPassword('');
            setLoading(false);
            window.location.href = "login";
          } else {
            message.error("Please try again!");
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setLoading(false);
          }
        }catch(e){
          console.log(e.message);
          message.error("Please try again!");
          setEmail('');
          setPassword('');
          setConfirmPassword('');
          setLoading(false);
        }
       
    }else{
      message.error("Please fill all and try again!");
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setLoading(false);
    }
    
  };

  return (
    <>
      <Spin spinning={loading}>
      <Row
        style={{ height: "100vh", backgroundColor: "#F2FAFA" }}
        align="middle"
      >
        <Col span={24}>
          <Row>
            <Col span={11}>
              <Image preview={false} src={loginPic} />
            </Col>
            <Col span={12}>
              <Row justify="center" align="middle" style={{ paddingTop: "8%" }}>
                <Col
                  span={18}
                  style={{
                    padding: "5% ",
                    backgroundColor: "white",
                    borderRadius: "15px",
                    boxShadow:
                      "0px 24px 83px 0px rgba(0, 0, 0, 0.10), 0px 5px 18px 0px rgba(0, 0, 0, 0.06), 0px 2px 6px 0px rgba(0, 0, 0, 0.04)",
                  }}
                >
                  <Row style={{ marginBottom: "20px" }}>
                    <Title style={{ marginTop: "15px" }} level={2}>
                      REGISTER TO DREAMHIRE
                    </Title>
                  </Row>
                  <Row block justify="center">
                    <Radio.Group
                      options={options}
                      onChange={onChange}
                      value={userType}
                      optionType="button"
                      buttonStyle="solid"
                      style={{ width: "100%", margin: "10px 0 30px" }}
                      className="user-type-w"
                    />
                  </Row>
                  <Form
                    layout="vertical"
                    onFinish={handleSubmit}
                    autoComplete="off"
                  >
                    <Form.Item
                      required
                      className="no-star"
                      label="Email"
                      name="email"
                    >
                      <Input
                        required
                        onChange={handleEmailChange}
                        style={{
                          padding: "10px 15px 10px",
                          marginBottom: "15px",
                          fontSize: "medium",
                        }}
                        allowClear
                      />
                    { email &&
                    (isValidEmail ? <Text type="success">Email is valid</Text> : <Text type='danger'>Email is not valid!</Text>)}
                    </Form.Item>
                    
                    <Form.Item
                      required
                      className="no-star"
                      label="Password"
                      name="password"
                    >
                      <Input.Password
                        value={password}
                        onChange={handlePasswordChange}
                        style={{
                          padding: "10px 15px 10px",
                          marginBottom: "15px",
                          fontSize: "medium",
                        }}
                        allowClear
                        
                      />
                  { password &&    
                    ( isValidPassword ? 
                    <Text 
                      type="success">
                        Password is strong
                      </Text> : 
                      <Text 
                        type='danger'>
                          Create a strong password with a mix of letters, numbers and symbols with at least 8 characters
                      </Text>)}
                    </Form.Item>

                    <Form.Item
                      required
                      className="no-star"
                      label="Confirm Password"
                      name="password"
                    >
                      <Input.Password
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        style={{
                          padding: "10px 15px 10px",
                          marginBottom: "15px",
                          fontSize: "medium",
                        }}
                        allowClear
                      />
                      {confirmPassword && (passwordsMatch ? <Text type="success">Passwords match</Text> : <Text type='danger'>Passwords do not match</Text>)}
                    </Form.Item>

                    <Form.Item
                      wrapperCol={{
                        span: 24,
                      }}
                    >
                      <Button
                        htmlType="submit"
                        block
                        type="primary"
                        loading={loading}
                        style={{
                          padding: "10px 0 35px",
                          fontSize: "medium",
                          fontWeight: "500",
                          marginBottom: "10px",
                        }}
                      >
                        Register
                      </Button>
                    </Form.Item>
                  </Form>
                  <Button onClick={() => navigate("/")}>Back to Home</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      </Spin>
    </>
  );
}

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeSignUp } from "../store/models/modelsSlice";
import { registerUser } from "../store/auth/userSlice";
import { useNavigate } from "react-router-dom";
import {
  Form,
  Input,
  Button,
  Modal,
  Row,
  Col,
  Typography,
  Radio,
  Alert,
} from "antd";

const { Text, Link, Title } = Typography;

const options = [
  { label: "Candidate", value: "candidate" },
  { label: "Company", value: "company" },
];

const SignUp = () => {

   const navigate = useNavigate();
  const {loading, error, message} = useSelector((state)=> state.user)
  const dispatch = useDispatch();
  const isOpen = useSelector((state)=> state.models.signUp);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("candidate");
  const onChange = ({ target: { value } }) => {
    setUserType(value);
  };
  const userRegister = async (e) =>{
    console.log("clicked");
    let register = {
        email: email,
        password: password,
        userType: userType,
    }
    dispatch(registerUser(register)).then((result)=>{
      console.log(result);
        navigate("/profile")
    })


  }
  return (
    <>
      <Modal
        style={{ top: "4vh" }}
        open={isOpen}
        onCancel={()=> dispatch(closeSignUp())}
        footer={[]}
      >
        <Row block style={{ padding: "30px" }}>
          <Col span={24}>
            <Row block justify="center" style={{ margin: "0px 0px 10px" }}>
              <Title level={2}>REGISTER TO DREAMHIRE</Title>
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
                  Log In
                </Button>
              </Form.Item>
            </Form>
            { message && <Alert message={message} type="success" showIcon />}
           { error && <Alert message={error} type="error" showIcon/> }
          </Col>
        </Row>
      </Modal>
    </>
  );
};
export default SignUp;

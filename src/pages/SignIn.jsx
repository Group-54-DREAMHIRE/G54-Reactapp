import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { closeSignIn } from "../store/models/modelsSlice";

import { GoogleOutlined } from "@ant-design/icons";
import {
  Form,
  Input,
  Button,
  Modal,
  Checkbox,
  Row,
  Col,
  Typography,
  Alert,
} from "antd";
import { loginUser } from "../store/auth/userSlice";
const { Text, Link, Title } = Typography;

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {loading, error, message} = useSelector((state)=> state.user)

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isOpen = useSelector((state)=> state.models.signIn);
  const submitHandler = async (e) => {
    let userCredentials = {
      email,
      password,
    };
    dispatch(loginUser(userCredentials)).then((result)=> {
      if(result.payload){
        setEmail('');
        setPassword('');
        navigate("/home");
      }
    })
   
  };

  return (
    <>
      <Modal
        style={{ top: "4vh" }}
        open={isOpen}
        onCancel={()=>dispatch(closeSignIn())}
        footer={[]}
      >
        <Row block style={{ padding: "30px" }}>
          <Col span={24}>
            <Row block justify="center" style={{ margin: "20px 0px 25px" }}>
              <Title level={2}>LOGIN TO DREAMHIRE</Title>
            </Row>
            <Form
              layout="vertical"
              onFinish={submitHandler}
              onFinishFailed
              autoComplete="off"
            >
              <Form.Item label="Email" name="email">
                <Input
                  style={{
                    padding: "10px 15px 10px",
                    marginBottom: "15px",
                    fontSize: "medium",
                  }}
                  allowClear
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Item>

              <Form.Item label="Password" name="password">
                <Input.Password
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
                  block
                  type="primary"
                  htmlType="submit"
                  style={{
                    padding: "10px 0 35px",
                    fontSize: "medium",
                    fontWeight: "500",
                    marginBottom: "10px",
                  }}
                >
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
export default SignIn;

import { useState } from "react";
import { GoogleOutlined } from "@ant-design/icons";
import {
  Form,
  Input,
  Button,
  Modal,
  Row,
  Col,
  Typography,
  Radio,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { closeSignUp } from "../store/models/modelsSlice";
const { Text, Link, Title } = Typography;

const options = [
  { label: "Candidate", value: "candidate" },
  { label: "Company", value: "company" },
];

const SignUp = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state)=> state.models.signUp);
  const [value, setValue] = useState("candidate");
  const onChange = ({ target: { value } }) => {
    console.log(value);
    setValue(value);
  };
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
                value={value}
                optionType="button"
                buttonStyle="solid"
                style={{ width: "100%", margin: "10px 0 30px" }}
                className="user-type-w"/>
            </Row>
            <Form layout="vertical" onFinish onFinishFailed autoComplete="off">
              <Form.Item label="Email" name="email">
                <Input
                  style={{
                    padding: "10px 15px 10px",
                    marginBottom: "15px",
                    fontSize: "medium",}}
                  allowClear/>
              </Form.Item>

              <Form.Item label="Password" name="password">
                <Input.Password
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
                  block
                  type="primary"
                  style={{
                    padding: "10px 0 35px",
                    fontSize: "medium",
                    fontWeight: "500",
                    marginBottom: "10px",}}>
                  Log In
                </Button>
              </Form.Item>
            </Form>
            <Row block>
              <Button
                icon={<GoogleOutlined />}
                style={{
                  padding: "15px 0 40px",
                  fontSize: "medium",
                  fontWeight: "400",}}
                block>
                Sign in with Google
              </Button>
            </Row>
          </Col>
        </Row>
      </Modal>
    </>
  );
};
export default SignUp;

import {
  Row,
  Col,
  Typography,
  Divider,
  Form,
  Input,
  Button,
  Alert,
} from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePasswordUser, getUser, success } from "../store/auth/userSlice";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

export default function () {
  const dispatch = useDispatch();
  const { error, messageChange } = useSelector((state) => state.user);
  const user = JSON.parse(useSelector(getUser));

  const navigate = useNavigate();
  const [oldp, setOldp] = useState("");
  const [newp, setNewp] = useState("");
  const [confirmp, setConfirmp] = useState("");

  const handleChangePassword = async () => {
    let change = {
      email: user.email,
      oldPassword: oldp,
      newPassword: newp,
    };
    console.log(user.email);
    dispatch(changePasswordUser(change)).then((result) => {
      if (result.payload) {
        setOldp("");
        setNewp("");
        setConfirmp("");
        setTimeout(
          () => {
            dispatch(success());
            clearTimeout();
          },
          500,
          1000
        );
      }
    });
  };

  return (
    <>
      <Row style={{ padding: "3%", height: "75vh" }}>
        <Col span={24}>
          <Row justify="center">
            <Col span={22}>
              <Form onFinish={handleChangePassword}>
                <Row>
                  <Col span={24}>
                    <Title level={2}>CHANGE PASSWORD</Title>
                    <Divider />
                  </Col>
                  <Col span={24}>
                    <Title level={4} style={{ marginTop: "5px" }}>
                      Old Password
                    </Title>
                    <Input
                      type="password"
                      value={oldp}
                      onChange={(e) => setOldp(e.target.value)}
                      style={{
                        boxShadow: "0 0 10px 0 rgba(0,0,0,.1)",
                        borderRadius: '0',
                        height: "40px",
                      }}
                    />
                  </Col>
                </Row>
                <Row justify="space-between">
                  <Col span={11}>
                    <Title level={4}> New Password</Title>
                    <Input
                      type="password"
                      value={newp}
                      onChange={(e) => setNewp(e.target.value)}
                      style={{
                        boxShadow: "0 0 10px 0 rgba(0,0,0,.1)",
                        borderRadius: '0',
                        height: "40px",
                      }}
                    />
                  </Col>
                  <Col span={11}>
                    <Title level={4}> Confirm New Password</Title>
                    <Input
                      type="password"
                      value={confirmp}
                      onChange={(e) => setConfirmp(e.target.value)}
                      style={{
                        boxShadow: "0 0 10px 0 rgba(0,0,0,.1)",
                        borderRadius: '0',
                        height: "40px",
                      }}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button
                      htmlType="submit"
                      style={{ marginTop: "40%", borderRadius:'0' }}
                      type="primary"
                      size="large"
                    >
                      Change
                    </Button>
                  </Col>
                </Row>
              </Form>
              {messageChange && (
                <Alert message={messageChange} type="success" showIcon />
              )}
              {error && <Alert message={error} type="error" showIcon />}
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

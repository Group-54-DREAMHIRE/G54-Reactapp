import { Row, Col, Typography, Divider, Form, Input, Button, Alert } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePasswordUser, getUser } from "../store/auth/userSlice";
import { useNavigate } from "react-router-dom";
import { getToken, userChangePassword } from "../api/authenticationService";
const { Title } = Typography;

export default function () {
  const dispatch = useDispatch();
  const {error, messageChange} = useSelector((state)=>state.user);
  const user = useSelector(getUser);

  const navigate = useNavigate()
  const [oldp, setOldp] = useState("");
  const [newp, setNewp] = useState("");
  const [confirmp, setConfirmp] = useState("");



  const handleChangePassword = async (e) =>{
    let change = {
      email: "sampath",
      oldPassword: oldp,
      newPassword: newp,
    }
    console.log(user.email);
  const response = await  userChangePassword(change);
      
        setOldp("");
        setNewp("");
        setConfirmp("");
        navigate("/home")
      
  }

  const token= getToken();
  return (
    <>
      <Row style={{ padding: "3%", height: "75vh" }}>
        <Col span={24}>
          <Row justify="center">
            <Col span={22}>
              <h1>{token}</h1>
              <Form onFinish={handleChangePassword}>
                <Row>
                  <Col span={24}>
                    <Title level={2}>CHANGE PASSWORD</Title>
                    <Divider />
                  </Col>
                  <Col span={24}>
                    <Title level={4} style={{ marginTop: "5px" }}>
                      {" "}
                      Old Password
                    </Title>
                    <Input
                    type="password"
                      value={oldp}
                      onChange={(e) => setOldp(e.target.value)}
                      style={{
                        boxShadow: "0 0 10px 0 rgba(30,136,229,.4)",
                        height: "40px",
                      }}
                    />
                  </Col>
                </Row>
                <Row justify='space-between'>
                  <Col span={11}>
                    <Title level={4}> New Password</Title>
                    <Input
                    type="password"
                      value={newp}
                      onChange={(e) => setNewp(e.target.value)}
                      style={{
                        boxShadow: "0 0 10px 0 rgba(30,136,229,.4)",
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
                        boxShadow: " 0 0 10px 0 rgba(30,136,229,.4)",
                        height: "40px",
                      }}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button 
                      htmlType="submit"
                      style={{marginTop: '40%'}}
                      type="primary"
                      size="large">
                      Change
                    </Button>
                  </Col>
                </Row>
              </Form>
              { messageChange && <Alert message={messageChange} type="success" showIcon />}
              { error && <Alert message={error} type="error" showIcon/> }
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

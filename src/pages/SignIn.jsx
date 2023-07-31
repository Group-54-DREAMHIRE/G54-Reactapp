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
      email: email,
      password: password,
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
         
        </Row>
      </Modal>
    </>
  );
};
export default SignIn;

import React, { useState } from "react";
import {
  Button,
  Modal,
  Form,
  Input,
  Select,
  Radio,
  Checkbox,
  DatePicker,
  InputNumber,
  Row,
  Col,
  Divider,
  Typography,
  Spin,
  Space,
  TimePicker,
} from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  CameraOutlined,
  PlusOutlined,
  LoadingOutlined,
  UploadOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { BsCircle, BsCheckCircleFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setDutation,
  setNumOfQuetions,
  setPassingMark,
  setTestDate,
  setTestDetails,
  setTime,
  setTitle,
  setType,
} from "../../store/company/testSlice";

const { Title, Text } = Typography;

const { Option } = Select;
const { TextArea } = Input;

function ShowQuestions() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [ans1, setAns1] = useState(false);
  const [ans2, setAns2] = useState(false);
  const [ans3, setAns3] = useState(false);
  const [ans4, setAns4] = useState(false);
  const questions = useSelector((state) => state.test.questions);

  return (
    <>
      <Spin spinning={false}>
        <Row
          gutter={[0, 30]}
          style={{ padding: "2%" }}
          className="addmcq-w"
          justify="end"
        >
          <Col span={24}>
                {questions &&
                questions.map((item)=>{
                    return(
                        <>
                        <span>{item.question}</span><br/>
                        <span>{item.answ1}</span><br/>
                        <span>{item.answ2}</span><br/>
                        <span>{item.answ3}</span><br/>
                        <span>{item.answ4}</span><br/>
                        </>
                    )
                })}
          </Col>
        </Row>
      </Spin>
    </>
  );
}

export default ShowQuestions;

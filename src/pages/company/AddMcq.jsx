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
  addQuestion,
  increaseQuestionCount,
  resetCount,
  setDutation,
  setNumOfQuetions,
  setPassingMark,
  setTestDate,
  setTestDetails,
  setTime,
  setTitle,
  setType,
} from "../../store/company/testSlice";
import { scrollUp } from "../../api/handleWindowEvents";

const { Title, Text } = Typography;

const { Option } = Select;
const { TextArea } = Input;

function AddMcq() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [ans1, setAns1] = useState(false);
  const [ans2, setAns2] = useState(false);
  const [ans3, setAns3] = useState(false);
  const [ans4, setAns4] = useState(false);
  const [quesVal, setQuesVal] = useState(null);
  const [ansVa1, setAnsVal1] = useState(null);
  const [ansVa2, setAnsVal2] = useState(null);
  const [ansVa3, setAnsVal3] = useState(null);
  const [ansVa4, setAnsVal4] = useState(null);
  const [answers, setAnswers] = useState([]);
  const quesCount = useSelector(
    (state) => state.test.testDetails.questionCount
  );
  const numQues = useSelector((state) => state.test.testDetails.numOfQue);

  const handleAnsw = (e, value) => {
    let ansList = [...answers];
    if (e.target.checked) {
      ansList.push(value);
      setAnswers(ansList.sort((a, b) => a - b));
    } else {
      let temp = [];
      temp = ansList.filter((item) => item != value);
      setAnswers(temp.sort((a, b) => a - b));
    }
  };

  const clearData = () => {
    setAns1(null);
    setAns2(null);
    setAns3(null);
    setAns4(null);
    setQuesVal(null);
    setAnsVal2(null);
    setAnsVal3(null);
    setAnsVal4(null);
    setAnsVal1(null);
    setAnswers([]);
  };

  const handleAdd = () => {
    let data = {
      question: quesVal,
      answ1: ansVa1,
      answ2: ansVa2,
      answ3: ansVa3,
      answ4: ansVa4,
      answers: [...answers],
    };
    dispatch(addQuestion(data));
    clearData();
    dispatch(increaseQuestionCount());
    scrollUp();
  };
  return (
    <>
      <Spin spinning={false}>
        <Row
          gutter={[0, 30]}
          style={{ padding: "2%" }}
          className="addmcq-w"
          justify="end"
        >
          {quesCount < numQues ? (
            <>
              <Col span={24}>
                <Text strong>Check The answer after defining</Text>
              </Col>
              <Col span={24}>
                <Title level={4} style={{ marginTop: 0 }}>
                  Question {quesCount + 1} :
                </Title>
                <TextArea
                  value={quesVal}
                  onChange={(e) => setQuesVal(e.target.value)}
                  allowClear
                  style={{
                    boxShadow: "0 0 8px 0 rgba(0,0,0,.05)",
                    borderRadius: "0",
                  }}
                />
              </Col>
              <Col span={23}>
                <Row gutter={[10, 30]}>
                  <Col span={24}>
                    <Title level={4} style={{ marginTop: 0 }}>
                      Answer 01:
                    </Title>
                    <Row align="bottom" gutter={[5, 30]}>
                      <Col>
                        <Checkbox
                          onChange={(e) => {
                            setAns1(e.target.checked);
                            handleAnsw(e, 1);
                          }}
                          value={ans1}
                        >
                          <Title
                            className={ans1 ? "checkCircle" : "circle"}
                            level={3}
                          >
                            {ans1 ? <BsCheckCircleFill /> : <BsCircle />}
                          </Title>
                        </Checkbox>
                      </Col>
                      <Col span={16}>
                        <Input
                          value={ansVa1}
                          onChange={(e) => setAnsVal1(e.target.value)}
                          allowClear
                          style={{
                            boxShadow: "0 0 8px 0 rgba(0,0,0,.05)",
                            borderRadius: "0",
                          }}
                        />
                      </Col>
                    </Row>
                  </Col>
                  <Col span={23}>
                    <Title level={4} style={{ marginTop: 0 }}>
                      Answer 02:
                    </Title>
                    <Row align="bottom" gutter={[5, 30]}>
                      <Col>
                        <Checkbox
                          onChange={(e) => {
                            setAns2(e.target.checked);
                            handleAnsw(e, 2);
                          }}
                          value={ans2}
                        >
                          <Title
                            level={3}
                            className={ans2 ? "checkCircle" : "circle"}
                          >
                            {ans2 ? <BsCheckCircleFill /> : <BsCircle />}
                          </Title>
                        </Checkbox>
                      </Col>
                      <Col span={16}>
                        <Input
                          value={ansVa2}
                          onChange={(e) => setAnsVal2(e.target.value)}
                          allowClear
                          style={{
                            boxShadow: "0 0 8px 0 rgba(0,0,0,.05)",
                            borderRadius: "0",
                          }}
                        />
                      </Col>
                    </Row>
                  </Col>
                  <Col span={23}>
                    <Title level={4} style={{ marginTop: 0 }}>
                      Answer 3:
                    </Title>
                    <Row align="bottom" gutter={[5, 30]}>
                      <Col>
                        <Checkbox
                          onChange={(e) => {
                            setAns3(e.target.checked);
                            handleAnsw(e, 3);
                          }}
                          value={ans3}
                        >
                          <Title
                            level={3}
                            className={ans3 ? "checkCircle" : "circle"}
                          >
                            {ans3 ? <BsCheckCircleFill /> : <BsCircle />}
                          </Title>
                        </Checkbox>
                      </Col>
                      <Col span={16}>
                        <Input
                          value={ansVa3}
                          onChange={(e) => setAnsVal3(e.target.value)}
                          allowClear
                          style={{
                            boxShadow: "0 0 8px 0 rgba(0,0,0,.05)",
                            borderRadius: "0",
                          }}
                        />
                      </Col>
                    </Row>
                  </Col>
                  <Col span={23}>
                    <Title level={4} style={{ marginTop: 0 }}>
                      Answer 04:
                    </Title>
                    <Row align="bottom" gutter={[5, 30]}>
                      <Col>
                        <Checkbox
                          onChange={(e) => {
                            setAns4(e.target.checked);
                            handleAnsw(e, 4);
                          }}
                          value={ans4}
                        >
                          <Title
                            level={3}
                            className={ans4 ? "checkCircle" : "circle"}
                          >
                            {ans4 ? <BsCheckCircleFill /> : <BsCircle />}
                          </Title>
                        </Checkbox>
                      </Col>
                      <Col span={16}>
                        <Input
                          value={ansVa4}
                          onChange={(e) => setAnsVal4(e.target.value)}
                          allowClear
                          style={{
                            boxShadow: "0 0 8px 0 rgba(0,0,0,.05)",
                            borderRadius: "0",
                          }}
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </>
          ):null}
          <Col span={24}>
            <Row gutter={15}>
              {quesCount < numQues ?  (
                <Col>
                  <Button
                    style={{ borderRadius: 0 }}
                    size="large"
                    type="primary"
                    onClick={handleAdd}
                  >
                    Add Question
                  </Button>
                </Col>
              ):null}
              <Col>
                <Button
                  disabled={quesCount === numQues ? false:true}
                  style={{ borderRadius: 0 }}
                  size="large"
                  type="primary"
                  onClick={()=>dispatch(resetCount())}
                >
                  Submit
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Spin>
    </>
  );
}

export default AddMcq;

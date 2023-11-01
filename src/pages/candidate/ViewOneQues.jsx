import { useEffect, useState } from "react";
import { Col, Divider, Image, Row, Typography, Checkbox, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { BsCircle, BsCheckCircleFill } from "react-icons/bs";
import { decreaseQuestionCount, increaseQuestionCount } from "../../store/company/testSlice";
const { Title, Text, Link } = Typography;

export default function ViewOneQues() {
    const dispatch = useDispatch();
    let activQues = useSelector((state)=>state.test.testDetails.questionCount);
    let numOfQues = useSelector((state)=>state.test.testDetails.numOfQue);
    let questions = useSelector((state)=>state.test.questions);
  const [ans1, setAns1] = useState(false);
  const [ans2, setAns2] = useState(false);
  const [ans3, setAns3] = useState(false);
  const [ans4, setAns4] = useState(false);
  const handleNext=()=>{
    dispatch(increaseQuestionCount());
    setAns1(false);
    setAns2(false);
    setAns3(false);
    setAns4(false);
  }
  const handlePre=()=>{
    dispatch(decreaseQuestionCount());
    setAns1(false);
    setAns2(false);
    setAns3(false);
    setAns4(false);
  }
  return (
    <>
      <Row className="view-one-ques-w">
        <Col span={24}>
          <Row style={{ padding: "2% 3%" }} justify="end">
            { questions[activQues].question &&
            <>
            <Col span={24}>
              <Row gutter={20}>
                <Col>
                  <Title style={{ marginTop: 0 }}>1.</Title>
                </Col>
                <Col span={22}>
                  <Title style={{ marginTop: 0 }}>
                    {questions[activQues].question || ""}
                  </Title>
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <Divider />
            </Col>
            </>}

            {questions[activQues].question &&
                <Col span={22}>
                <Row gutter={[0, 25]}>
                  <Col
                    span={13}
                    className={ans1 ? "checkedansw" : "uncheckedansw"}
                  >
                    <Row align="bottom">
                      <Col>
                        <Checkbox
                          onChange={(e) => {
                            setAns1(e.target.checked);
                            // handleAnsw(e, 1);
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
                        <Title level={3} style={{ margin: 0 }}>
                          {questions[activQues].answ1 || ""}
                        </Title>
                      </Col>
                    </Row>
                  </Col>
                  <Col
                    span={13}
                    className={ans2 ? "checkedansw" : "uncheckedansw"}
                  >
                    <Row align="bottom">
                      <Col>
                        <Checkbox
                          onChange={(e) => {
                            setAns2(e.target.checked);
                            // handleAnsw(e, 1);
                          }}
                          value={ans2}
                        >
                          <Title
                            className={ans2 ? "checkCircle" : "circle"}
                            level={3}
                          >
                            {ans2 ? <BsCheckCircleFill /> : <BsCircle />}
                          </Title>
                        </Checkbox>
                      </Col>
                      <Col span={16}>
                        <Title level={3} style={{ margin: 0 }}>
                          {questions[activQues].answ2 || ""}
                        </Title>
                      </Col>
                    </Row>
                  </Col>
                  <Col
                    span={13}
                    className={ans3 ? "checkedansw" : "uncheckedansw"}
                  >
                    <Row align="bottom">
                      <Col>
                        <Checkbox
                          onChange={(e) => {
                            setAns3(e.target.checked);
                            // handleAnsw(e, 1);
                          }}
                          value={ans3}
                        >
                          <Title
                            className={ans3 ? "checkCircle" : "circle"}
                            level={3}
                          >
                            {ans3 ? <BsCheckCircleFill /> : <BsCircle />}
                          </Title>
                        </Checkbox>
                      </Col>
                      <Col span={16}>
                        <Title level={3} style={{ margin: 0 }}>
                          {questions[activQues].answ3 || ""}
                        </Title>
                      </Col>
                    </Row>
                  </Col>
                  <Col
                    span={13}
                    className={ans4 ? "checkedansw" : "uncheckedansw"}
                  >
                    <Row align="bottom">
                      <Col>
                        <Checkbox
                          onChange={(e) => {
                            setAns4(e.target.checked);
                            // handleAnsw(e, 1);
                          }}
                          value={ans4}
                        >
                          <Title
                            className={ans4 ? "checkCircle" : "circle"}
                            level={3}
                          >
                            {ans4 ? <BsCheckCircleFill /> : <BsCircle />}
                          </Title>
                        </Checkbox>
                      </Col>
                      <Col span={16}>
                        <Title level={3} style={{ margin: 0 }}>
                          {questions[activQues].answ4 || ""}
                        </Title>
                      </Col>
                    </Row>
                  </Col>
                  <Col span={20}>
                    <Row justify="end" gutter={15}>
                      <Col>
                           <Button 
                           disabled={(activQues===0)?true:false}
                            onClick={handlePre}
                              size="large"
                              type="primary" 
                              style={{borderRadius:0}}>
                              Prev
                          </Button>
                      </Col>
                      {(numOfQues < activQues || numOfQues -1 === activQues)?null:
                        <Col>
                        <Button 
                          onClick={handleNext}
                          size="large"
                          type="primary" 
                          style={{borderRadius:0, width:100}} >
                          Next
                      </Button>
                      </Col>}
                     {numOfQues -1 === activQues?
                      <Col>
                        <Button 
                          size="large"
                          type="primary" 
                          style={{borderRadius:0, width:100}} >
                          Submit
                      </Button>
                      </Col>:null}
                    </Row>
                  </Col>
                </Row>
              </Col>
            }
          </Row>
        </Col>
      </Row>
    </>
  );
}

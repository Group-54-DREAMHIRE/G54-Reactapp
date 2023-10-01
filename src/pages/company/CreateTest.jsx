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
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setDutation, setInstructions, setNumOfQuetions, setPassingMark, setTestDate, setTestDetails, setTime, setTitle, setType } from "../../store/company/testSlice";

const { Title } = Typography;

const { Option } = Select;
const { TextArea } = Input;

function AddTestDetails() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
  const testDetailsImpl = useSelector((state)=>state.test.testDetails);
  return ( 
    <>
      <Spin spinning={false}>
        <Row gutter={[0, 30]} style={{ padding: "2%" }}>
          <Col span={24}>
            <Title level={2} style={{ margin: "0" }}>
              CREATE TEST
            </Title>
            <hr style={{ border: "2px solid rgba(0,0,0,.4)" }} />
          </Col>
          <Col span={24}>
            <Form>
              <Row>
                <Col span={24}>
                  <Row justify="space-between" gutter={[0, 30]}>
                    <Col span={11}>
                      <Title level={4} style={{ margin: "0 0 10px 0" }}>
                        Test Title:
                      </Title>
                      <Input
                        onChange={(e)=>dispatch(setTitle(e.target.value))}
                        allowClear
                        value={testDetailsImpl.title}
                        style={{
                          width: "100%",
                          boxShadow: "0 0 8px 0 rgba(0,0,0,.05)",
                          borderRadius: "0",
                          fontSize: "medium",
                          borderRadius: "0",
                          fontFamily: "arial",
                        }}
                      />
                    </Col>
                    <Col span={12}>
                      <Title level={4} style={{ margin: "0 0 10px 0" }}>
                        Test Type:
                      </Title>
                      <Select
                        size="large"
                        allowClear
                        value={testDetailsImpl.type}
                        onChange={(value)=>dispatch(setType(value))}
                        style={{
                          width: "100%",
                          boxShadow: "0 0 8px 0 rgba(0,0,0,.05)",
                          borderRadius: "0",
                          fontSize: "medium",
                          borderRadius: "0",
                          fontFamily: "arial",
                        }}
                        placeholder="Question Type"
                        options={[
                          { label: "Multiple Choice Question", value: "MCQ" },
                          { label: "Short Answers Questions", value: "Short Answers" ,disabled:true },
                          { label: "Both", value: "MCQ With Shorts" ,disabled:true},
                          
                        ]}
                      />
                    </Col>
                    <Col span={11}>
                      <Title level={4} style={{ margin: "0 0 10px 0" }}>
                        Date:
                      </Title>
                      <DatePicker 
                        size="large"
                        value={testDetailsImpl.date}
                        onChange={(date)=>dispatch(setTestDate(date))}
                        allowClear
                        style={{
                          boxShadow: "0 0 8px 0 rgba(0,0,0,.05)",
                          borderRadius: "0",
                          fontSize: "medium",
                          borderRadius: "0",
                          fontFamily: "arial",
                        }}
                      />
                    </Col>
                    <Col span={12}>
                      <Title level={4} style={{ margin: "0 0 10px 0" }}>
                        Time:
                      </Title>
                      <TimePicker format="HH:mm" 
                      onChange={(date)=>dispatch(setTime(date))}
                      value={testDetailsImpl.time}
                        allowClear
                        size="large"
                        style={{
                          boxShadow: "0 0 8px 0 rgba(0,0,0,.05)",
                          borderRadius: "0",
                          fontSize: "medium",
                          borderRadius: "0",
                          fontFamily: "arial",
                        }}
                      />
                    </Col>
                    <Col span={11}>
                      <Title level={4} style={{ margin: "0 0 10px 0" }}>
                        Duration:
                      </Title>
                      <Select
                      value={testDetailsImpl.duration}
                        size="large"
                        onChange={(value)=>dispatch(setDutation(value))}
                        allowClear
                        style={{
                          width: "100%",
                          boxShadow: "0 0 8px 0 rgba(0,0,0,.05)",
                          borderRadius: "0",
                          fontSize: "medium",
                          borderRadius: "0",
                          fontFamily: "arial",
                        }}
                        placeholder="Duration"
                        options={[
                          {
                            label: "15 Min",
                            value: 15,
                          },
                          { label: "20 Min", value: 20 },
                          { label: "25Min", value: 25 },
                          { label: "30Min", value: 30 },
                          { label: "45Min", value: 45 },
                          { label: "1 Hour", value: 60 },
                        ]}
                      />
                    </Col>
                    <Col span={12}>
                      <Title level={4} style={{ margin: "0 0 10px 0" }}>
                        Passing Mark:
                      </Title>
                      <Select
                      value={testDetailsImpl.passingMark}
                        size="large"
                        onChange={(value)=>dispatch(setPassingMark(value))}
                        allowClear
                        style={{
                          width: "100%",
                          boxShadow: "0 0 8px 0 rgba(0,0,0,.05)",
                          borderRadius: "0",
                          fontSize: "medium",
                          borderRadius: "0",
                          fontFamily: "arial",
                        }}
                        placeholder="Passing Mark"
                        options={[
                            {
                              label: "50",
                              value: 50,
                            },
                            { label: "60", value: 60 },
                            { label: "65", value: 65 },
                            { label: "70", value: 70 },
                            { label: "75", value: 75 },
                            { label: "80 ", value: 80 },
                          ]}
                        />
                    </Col>
                    <Col span={11}>
                      <Title level={4} style={{ margin: "0 0 10px 0" }}>
                        Number Of Questions:
                      </Title>
                      <Select
                        size="large"
                        value={testDetailsImpl.numOfQue}
                        onChange={(value)=>dispatch(setNumOfQuetions(value))}
                        allowClear
                        style={{
                          width: "100%",
                          boxShadow: "0 0 8px 0 rgba(0,0,0,.05)",
                          borderRadius: "0",
                          fontSize: "medium",
                          borderRadius: "0",
                          fontFamily: "arial",
                        }}
                        placeholder="Passing Mark"
                        options={[
                            {
                              label: "15",
                              value: 15,
                            },
                            { label: "20", value: 20 },
                            { label: "25", value: 25 },
                            { label: "30", value: 30 },
                            { label: "35", value: 35 },
                            { label: "40 ", value: 40 },
                            { label: "45", value: 45 },
                            { label: "50", value: 50 },
                          ]}
                        />
                    </Col>
                    <Col span={12}>
                    <Title level={4} style={{ margin: "0 0 10px 0" }}>
                        Instructions:
                      </Title>
                      <Input
                        size="large"
                        value={testDetailsImpl.instructions}
                        onChange={(e)=>dispatch(setInstructions(e.target.value))}
                        allowClear
                        style={{
                          width: "100%",
                          boxShadow: "0 0 8px 0 rgba(0,0,0,.05)",
                          borderRadius: "0",
                          fontSize: "medium",
                          borderRadius: "0",
                          fontFamily: "arial",
                        }}
                        placeholder="Instructions"
                        />
                    </Col>
                    <Col span={5}>
                    <Button 
                        size="large"
                        style={{borderRadius:0}}
                        type="primary">
                            <Link to={"/addquestions"}>
                            Next
                            </Link>
                    </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Spin>
    </>
  );
}

export default AddTestDetails;

{
  /* <Row className="create-test-n">
                <Col span={24}>
                    <Form className="selection-test-form" layout="vertical">
                        <Row>
                            <Col span={12} style={{
                                display: 'flex',
                                justifyContent: 'left',
                                alignItems: 'center',
                            }}>
                                <Title style={{
                                    fontSize: '25px',
                                    fontWeight: 600,
                                }}>
                                    SELECTION TEST DETAILS
                                </Title>
                            </Col>
                            <Col span={6}>
                            </Col>
                            <Col span={6}>
                            </Col>

                        </Row>

                        <Divider />
                        <Row>
                            <Col span={24}>
                                <Form.Item label="Quiz Title" style={{ width: '100%' }}>
                                    <Input name='title' value={title} onChange={(value) => setTitle(value)} />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={20}>
                            <Col span={12}>
                                <Form.Item label="Date">
                                    <DatePicker style={{ width: '100%' }} onChange={(date) => setDate(date)} />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label="Passing Mark">
                                    <Select value={passingMark} style={{ width: '100%' }} onChange={(value) => setPassingMark(value)} >
                                    <Select.Option value={60}>60</Select.Option>
                                    <Select.Option value={70}>70</Select.Option>
                                    <Select.Option value={80}>80</Select.Option>
                                    <Select.Option value={90}>90</Select.Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={20}>
                            <Col span={12}>
                                <Form.Item label="Number of Questions">
                                    <Select value={numberOfQuestions} style={{ width: '100%' }} onChange={(value) => setNumberOfQuestions(value)} >
                                        <Select.Option value={10}>10</Select.Option>
                                        <Select.Option value={20}>20</Select.Option>
                                        <Select.Option value={30}>30</Select.Option>
                                        <Select.Option value={40}>40</Select.Option>
                                        <Select.Option value={50}>50</Select.Option>
                                    </Select>

                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label="Duration">
                                    <Select value={duration} style={{ width: '100%' }} onChange={(value) => setDuration(value)}>
                                        <Select.Option value={20}>20 minutes</Select.Option>
                                        <Select.Option value={30}>30 minutes</Select.Option>
                                        <Select.Option value={40}>40 minutes</Select.Option>
                                        <Select.Option value={50}>50 minutes</Select.Option>
                                        <Select.Option value={60}>1 hour</Select.Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <Form.Item label="Instructions">
                                    <Input.TextArea name='instructions' value={instructions} style={{ width: '100%' }} onChange={(value) => setInstructions(value)} />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Form.Item>
                                <Button type="primary">
                                    <Link to={`/scheduletests/addquestions`}>Next</Link>
                                </Button>
                            </Form.Item>
                        </Row>
                    </Form>
                </Col>
            </Row> */
}

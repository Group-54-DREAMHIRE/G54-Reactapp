import React, { useState } from 'react';
import { Button, Modal, Form, Input, Select, Radio, Checkbox, DatePicker, InputNumber, Row, Col, Divider, Typography } from 'antd';
import { Link } from 'react-router-dom'

const { Title } = Typography;

const { Option } = Select;
const { TextArea } = Input;

function AddTestDetails() {
    const [form] = Form.useForm();

    const [title, setTitle] = useState("");
    const [date, setDate] = useState(null);
    const [numberOfQuestions, setNumberOfQuestions] = useState(20);
    const [duration, setDuration] = useState();
    const [passingMark, setPassingMark] = useState();
    const [instructions, setInstructions] = useState("");

    return (
        <div className="create-test-n">
            <Row>
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
                                    <Link to={`/scheduleTests/addquestions`}>Next</Link>
                                </Button>
                            </Form.Item>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </div>

    );
}

export default AddTestDetails;

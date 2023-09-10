import React, { useState } from 'react';
import { Button, Modal, Form, Input, Select, Radio, Checkbox, DatePicker, InputNumber, Row, Col, Divider, Typography } from 'antd';
import { Link } from 'react-router-dom'

const { Title } = Typography;

const { Option } = Select;
const { TextArea } = Input;

function AddTestDetails() {
    const [form] = Form.useForm();


    const [quizDetails, setQuizDetails] = useState({
        title: '',
        date: '',
        numberOfQuestions: '',
        duration: '',
        passingMark: '',
        instructions: ''
    });

    const handleInputChange = (e) => {
        setQuizDetails({
            ...quizDetails,
            [e.target.name]: e.target.value
        })
    }

    const handleDurationChange = (value) => {
        setQuizDetails({ ...quizDetails, interviewDuration: value });
    };

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
                                    <Input name='title' value={quizDetails.title} onChange={handleInputChange} />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={20}>
                            <Col span={12}>
                                <Form.Item label="Date">
                                    <DatePicker style={{ width: '100%' }} onChange={(date, dateString) => setQuizDetails({ ...quizDetails, date: dateString })} />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label="Passing Mark">
                                    <InputNumber name="passingMark" value={quizDetails.passingMark} style={{ width: '100%' }} onChange={handleInputChange} />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={20}>
                            <Col span={12}>
                                <Form.Item label="Number of Questions">
                                    <InputNumber name='numberOfQuestions' value={quizDetails.numberOfQuestions} style={{ width: '100%' }} onChange={handleInputChange} />

                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label="Duration">
                                    <Select value={quizDetails.interviewDuration} style={{ width: '100%' }} onChange={handleDurationChange}>
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
                                    <Input.TextArea name='instructions' value={quizDetails.instructions} style={{ width: '100%' }} onChange={handleInputChange} />
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

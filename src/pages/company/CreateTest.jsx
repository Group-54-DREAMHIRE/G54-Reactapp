import React, { useState } from 'react';
import { Button, Modal, Form, Input, Select, Radio, Checkbox, DatePicker } from 'antd';
import '../../assets/styles/AddQuestions.scss';

const { Option } = Select;
const { TextArea } = Input;

function AddQuestions() {
    const [questions, setQuestions] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [form] = Form.useForm();
    const [questionNumber, setQuestionNumber] = useState(1);

    const onFinish = (values) => {
        const newQuestion = {
            questionType: values.questionType,
            question: values.question,
            options: values.questionType === 'Multiple Choice' ? values.options : null,
            answer: values.answer,
            number: questionNumber
        };
        setQuestions([...questions, newQuestion]);
        setQuestionNumber(questionNumber + 1);
        form.resetFields();
        setModalVisible(false);
    };

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

    return (
        <>
            <div class="add-questions">
                <h1>Add Quiz Details</h1>
                <Form layout='vertical'>
                    <Form.Item>
                        <label>
                            Quiz title:
                            <input type="text" name='title' value={quizDetails.title} onChange={handleInputChange} />
                        </label>
                    </Form.Item>
                    <Form.Item>
                        <label>
                            Date:
                            <DatePicker onChange={(date, dateString) => setQuizDetails({ ...quizDetails, date: dateString })} />
                        </label>
                    </Form.Item>
                    <Form.Item>
                        <label>
                            Number of Questions:
                            <input type="number" name='numberOfQuestions' value={quizDetails.numberOfQuestions} onChange={handleInputChange} />
                        </label>
                    </Form.Item>
                    <Form.Item>
                        <label>
                            Duration:
                            <input type="text" name='duration' value={quizDetails.duration} onChange={handleInputChange} />
                        </label>
                    </Form.Item>
                    <Form.Item>
                        <label>
                            Passing Mark:
                            <input type="number" name='passingMark' value={quizDetails.passingMark} onChange={handleInputChange} />
                        </label>
                    </Form.Item>
                    <Form.Item>
                        <label>
                            Instructions:
                            <textarea name='instructions' value={quizDetails.instructions} onChange={handleInputChange} />
                        </label>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" onClick={() => setModalVisible(true)}>
                            Add New Question
                        </Button>
                    </Form.Item>
                </Form>
                <Modal
                    title="Add New Question"
                    visible={modalVisible}
                    onCancel={() => setModalVisible(false)}
                    footer={null}
                >
                    <Form form={form} onFinish={onFinish}>
                        <Form.Item
                            label="Question"
                            name="question"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your question!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item name="questionType" label="Question Type" rules={[{ required: true }]}>
                            <Radio.Group>
                                <Radio value="Multiple Choice">Multiple Choice</Radio>
                                <Radio value="Short Answer">Short Answer</Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item
                            noStyle
                            shouldUpdate={(prevValues, currentValues) => prevValues.questionType !== currentValues.questionType}
                        >
                            {({ getFieldValue }) =>
                                getFieldValue('questionType') === 'Multiple Choice' ? (
                                    <Form.Item
                                        name="options"
                                        label="Options"
                                        rules={[{ required: true, message: 'Please add options!', type: 'array' }]}
                                    >
                                        <Select mode="tags" style={{ width: '100%' }} placeholder="Options" />
                                    </Form.Item>
                                ) : null
                            }
                        </Form.Item>
                        {/* <Form.Item
                            label="Answer"
                            name="answer"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input the answer!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item> */}
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
                <TakeQuiz questions={questions} quizDetails={quizDetails} />
            </div>
        </>
    );
}

function TakeQuiz({ questions, quizDetails }) {
    const [answers, setAnswers] = useState([]);

    const onAnswerChange = (questionIndex, answer) => {
        const newAnswers = [...answers];
        newAnswers[questionIndex] = answer;
        setAnswers(newAnswers);
    };

    return (
        <div>
            <h1>{quizDetails.title}</h1>
            <p>{quizDetails.instructions}</p>
            <Form>
                {questions.map((question, i) => (
                    <Form.Item key={i}>
                        <h3>Q{question.number}: {question.question}</h3> {/* Display question number here */}
                        {question.questionType === 'Multiple Choice' ? (
                            <Checkbox.Group
                                options={question.options}
                                onChange={(checkedValues) => onAnswerChange(i, checkedValues)}
                            />
                        ) : (
                            <TextArea rows={4} onChange={(e) => onAnswerChange(i, e.target.value)} />
                        )}
                    </Form.Item>
                ))}
                <Form.Item>
                    <Button type="primary" onClick={() => evaluateQuiz(answers)}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

function evaluateQuiz(answers) {
    // Implement your quiz evaluation logic here
}

export default AddQuestions;
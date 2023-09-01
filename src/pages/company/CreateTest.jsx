import React, { useState } from 'react';
import { Button, Modal, Form, Input, Select, Radio, Checkbox, DatePicker } from 'antd';
import {Link} from 'react-router-dom'
import ShowQuestions from '../../Components/DisplayTest.jsx'

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

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={{ width: '50%', backgroundColor: '#f8f8f8', padding: '20px', borderRadius: '10px' }}>
                <h1>Add Quiz Details</h1>
                <Form>
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
                        <Button type="primary">
                        <Link to={`/scheduleTests/addquestions`}>Next</Link>
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default AddTestDetails;

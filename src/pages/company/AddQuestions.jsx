import React, { useState } from 'react';
import { Button, Modal, Form, Input, Select, Radio, Checkbox } from 'antd';

const { Option } = Select;
const { TextArea } = Input;
const { Group: RadioGroup, Button: RadioButton } = Radio;

function AddQuestions() {
  const [questions, setQuestions] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [selectedQuestionType, setSelectedQuestionType] = useState(null);
  const [modalQuestionType, setModalQuestionType] = useState(null);

  const onFinish = (values) => {
    const newQuestion = {
      questionType: modalQuestionType || selectedQuestionType,
      question: values.question,
      options: (modalQuestionType || selectedQuestionType) === 'Multiple Choice' ? values.options : null,
      answer: values.answer,
    };
    setQuestions([...questions, newQuestion]);
    form.resetFields();
    setModalVisible(false);
    setModalQuestionType(null);
  };

  const handleSelectQuestionType = (value) => {
    setSelectedQuestionType(value);
    setModalVisible(true);
  };

  const handleModalQuestionType = (e) => {
    setModalQuestionType(e.target.value);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '50%', backgroundColor: '#f8f8f8', padding: '20px', borderRadius: '10px' }}>
        <h1>Add Questions</h1>
        <Form>
          <Form.Item>
            <label>
              Question Type:
              <Select onChange={handleSelectQuestionType} placeholder="Select question type">
                <Option value="Short Answer">Short Answer</Option>
                <Option value="Multiple Choice">Multiple Choice</Option>
                <Option value="Both">Both</Option>
              </Select>
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
            {selectedQuestionType === 'Both' && (
              <Form.Item>
                <label>
                  <RadioGroup onChange={handleModalQuestionType}>
                    <RadioButton value="Short Answer">Short Answer</RadioButton>
                    <RadioButton value="Multiple Choice">Multiple Choice</RadioButton>
                  </RadioGroup>
                </label>
              </Form.Item>
            )}
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

            {(modalQuestionType || selectedQuestionType) === 'Multiple Choice' && (
              <Form.Item
                name="options"
                label="Options"
                rules={[{ required: true, message: 'Please add options!', type: 'array' }]}
              >
                <Select mode="tags" style={{ width: '100%' }} placeholder="Options" />
              </Form.Item>
            )}

            <Form.Item>
              <Button type="primary" htmlType="submit">
                ADD
              </Button>
            </Form.Item>
          </Form>
        </Modal>
        <TakeQuiz questions={questions} />
      </div>
    </div>
  );
}

function TakeQuiz({ questions}) {
    const [answers, setAnswers] = useState([]);
    const [submitted, setSubmitted] = useState(false);

    const onSubmit = () => {
        setSubmitted(true);
    };

    const onAnswerChange = (questionIndex, answer) => {
        const newAnswers = [...answers];
        newAnswers[questionIndex] = answer;
        setAnswers(newAnswers);
    };

    return (
        <div>
            
            <Form>
                {questions.map((question, i) => (
                    <Form.Item key={i}>
                        <h3>{question.question}</h3>
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
                    <Button type="primary" onClick={onSubmit}>
                        Submit
                    </Button>
                </Form.Item> 
            </Form>
        </div>
    );
}

export default AddQuestions;

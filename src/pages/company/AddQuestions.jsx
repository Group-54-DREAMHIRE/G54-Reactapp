import React, { useState, useEffect } from "react";
import {
  Button,
  Row,
  Col,
  Modal,
  Form,
  Input,
  Select,
  Radio,
  Checkbox,
  Pagination,
  Typography,
} from "antd";
import ViewTestPage from "./ViewTestPage";
import { useSelector } from "react-redux";
import moment from "moment";
import AddMcq from "./AddMcq";
import ShowQuestions from "./ShowQuestions";

const { Option } = Select;
const { TextArea } = Input;
const { Group: RadioGroup, Button: RadioButton } = Radio;
const { Title, Text } = Typography;
function AddQuestions() {
  const [questions, setQuestions] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [selectedQuestionType, setSelectedQuestionType] = useState(null);
  const [modalQuestionType, setModalQuestionType] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(2);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [questionsPerPage, setQuestionsPerPage] = useState(2);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const onFinish = (values) => {
    const newQuestion = {
      questionNumber,
      questionType: modalQuestionType || selectedQuestionType,
      question: values.question,
      options:
        (modalQuestionType || selectedQuestionType) === "Multiple Choice"
          ? values.options
          : null,
      answer: values.answer,
    };
    setQuestions([newQuestion, ...questions]); // Add new question to the beginning of the list
    form.resetFields();
    setModalVisible(false);
    setModalQuestionType(null);
    setQuestionNumber(questionNumber + 1);
  };

  const handleSelectQuestionType = (value) => {
    setSelectedQuestionType(value);
    setModalVisible(true);
  };

  const handleModalQuestionType = (e) => {
    setModalQuestionType(e.target.value);
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = questions.slice(
    indexOfFirstQuestion,
    indexOfLastQuestion
  );

  const testDetails = useSelector((state) => state.test.testDetails);
  return (
    <>
      <Row style={{ padding: "3%" }}>
        <Col span={24}>
          <Row>
            <Col span={24}>
              <Row gutter={[20, 20]}>
                <Col span={24}>
                  <Title level={3} style={{ margin: "0" }}>
                    {testDetails.title}
                  </Title>
                </Col>
                <Col span={12}>
                  <Title level={4} style={{ margin: "0" }}>
                    {testDetails.instructions}
                  </Title>
                </Col>
                <Col span={12}>
                  <Row gutter={[0,10]}>
                  {testDetails.date &&
                  <Col span={24}>
                  <Title level={5} style={{ margin: 0 }}>
                  Date:  {moment(testDetails.date).format("YYYY MMMM DD")}
                  </Title>
                </Col>}
               
                <Col span={24}>
                  <Title level={5} style={{ margin: "0" }}>
                   Type: {testDetails.type}
                  </Title>
                </Col>
                
                {testDetails.time &&
                  <Col span={24}>
                  <Title level={5} style={{ margin: "0" }}>
                   Time: {moment(new Date(testDetails.time)).format("HH:mm A")}
                  </Title>
                </Col>}
                {testDetails.duration &&
                  <Col span={24}>
                  <Title level={5} style={{ margin: "0" }}>
                   Duration: {testDetails.duration} Min
                  </Title>
                </Col>}
                {testDetails.passingMark &&
                <Col span={24}>
                  <Title level={5} style={{ margin: "0" }}>
                   Passing Mark: {testDetails.passingMark}
                  </Title>
                </Col>}
                {testDetails.numOfQue &&
                  <Col span={24}>
                  <Title level={5} style={{ margin: "0" }}>
                   Questions:  {testDetails.numOfQue}
                  </Title>
                </Col>}
                  </Row>
                </Col>
               
              </Row>
            </Col>
            <Col span={24}>
              <ShowQuestions/>
            </Col>
            <Col span={18}>
              <AddMcq/>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

{
  /* <div className='add-questions-n'>
<div className='add-questions'>
<h1 style={{margin: '5px 0px'}}>Add Questions</h1>
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
</div>
<div className='take-quiz'>
<TakeQuiz questions={currentQuestions} />
<Pagination
  currentPage={currentPage}
  pageSize={pageSize}
  onChange={(currentPage, pageSize) => {
    setCurrentPage(currentPage);
    setPageSize(pageSize);
  }}
  defaultCurrent={1} 
  total={10}
/>
</div>
</div> */
}

function TakeQuiz({ questions }) {
  const [answers, setAnswers] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const onAnswerChange = (questionIndex, answer) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = answer;
    setAnswers(newAnswers);
  };

  const onSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div>
      <Form>
        <h1 style={{ margin: "5px 0px" }}>Selection Test</h1>
        {questions.map((question, i) => (
          <Form.Item key={i}>
            <h4>
              {question.questionNumber}.{question.question}
            </h4>
            {question.questionType === "Multiple Choice" ? (
              <Checkbox.Group
                options={question.options}
                onChange={(checkedValues) => onAnswerChange(i, checkedValues)}
              />
            ) : (
              <TextArea
                rows={2}
                onChange={(e) => onAnswerChange(i, e.target.value)}
              />
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

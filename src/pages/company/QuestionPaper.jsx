import React from 'react';
import { Button, Form, Checkbox, Input, Radio, Typography } from 'antd';
// import moment from 'moment';
import '../../assets/styles/QuestionPaper.scss';

const { Title, Text } = Typography;

const QuestionPaper = ({ quizDetails, questions, answers, onAnswerChange, onSubmit }) => {
  const { title, instructions } = quizDetails;

  return (
    <div className="question-paper">
      <div className="quiz-details">
        <Title level={3}>{title}</Title>
        {/* <Text>{moment(quizDetails.date).format('MMM DD, YYYY')}</Text> */}
        <Text>Duration: {quizDetails.duration}</Text>
        <Text>Passing Mark: {quizDetails.passingMark}</Text>
      </div>
      <div className="instructions">
        <Title level={4}>Instructions:</Title>
        <Text>{instructions}</Text>
      </div>
      <Form>
        {questions.map((question, i) => (
          <div className="question-card" key={i}>
            <div className="question">
              <Title level={5}>Q{i + 1}. {question.question}</Title>
            </div>
            {question.questionType === 'Multiple Choice' ? (
              <Form.Item name={`answer${i}`} rules={[{ required: true, message: 'Please select an answer!' }]}>
                <Checkbox.Group
                  options={question.options}
                  onChange={(checkedValues) => onAnswerChange(i, checkedValues)}
                />
              </Form.Item>
            ) : (
              <Form.Item name={`answer${i}`} rules={[{ required: true, message: 'Please enter your answer!' }]}>
                <Input.TextArea rows={4} onChange={(e) => onAnswerChange(i, e.target.value)} />
              </Form.Item>
            )}
          </div>
        ))}
        <Form.Item>
          <Button type="primary" onClick={onSubmit}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default QuestionPaper;

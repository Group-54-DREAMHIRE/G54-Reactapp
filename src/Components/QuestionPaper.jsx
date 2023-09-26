import React, { useState } from 'react';
import { Card, Checkbox, Input, Button, List, Pagination } from 'antd';

const { TextArea } = Input;

function CompanyQuestionPaper() {
  const [questionsPerPage, setQuestionsPerPage] = useState(4); 
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [questions, setQuestions] = useState([
    {
      type: 'multiple-choice',
      text: 'What is the primary goal of a loop in programming?',
      options: [
        { label: 'Repeating a set of instructions', value: 'Repeating a set of instructions' },
        { label: 'Stopping the program', value: 'Stopping the program' },
        { label: 'Printing the program code', value: 'Printing the program code' },
      ],
      userAnswer: [],
    },
    {
      type: 'single-choice',
      text: 'Which of the following is NOT a frontend programming language?',
      options: [
        { label: 'HTML', value: 'HTML' },
        { label: 'JavaScript', value: 'JavaScript' },
        { label: 'Python', value: 'Python' },
        { label: 'CSS', value: 'CSS' },
      ],
      userAnswer: null,
    },
    {
      type: 'short-answer',
      text: 'What is the purpose of SQL?',
      userAnswer: '',
    },
    {
      type: 'multiple-choice',
      text: 'What is the primary goal of a loop in programming?',
      options: [
        { label: 'Repeating a set of instructions', value: 'Repeating a set of instructions' },
        { label: 'Stopping the program', value: 'Stopping the program' },
        { label: 'Printing the program code', value: 'Printing the program code' },
      ],
      userAnswer: [],
    },
    {
      type: 'single-choice',
      text: 'Which of the following is NOT a frontend programming language?',
      options: [
        { label: 'HTML', value: 'HTML' },
        { label: 'JavaScript', value: 'JavaScript' },
        { label: 'Python', value: 'Python' },
        { label: 'CSS', value: 'CSS' },
      ],
      userAnswer: null,
    },
    {
      type: 'short-answer',
      text: 'What is the purpose of SQL?',
      userAnswer: '',
    },
  ]);

  const handleMultipleChoiceChange = (questionIndex, selectedOptions) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].userAnswer = selectedOptions;
    setQuestions(updatedQuestions);
  };

  const handleSingleChoiceChange = (questionIndex, selectedOption) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].userAnswer = selectedOption;
    setQuestions(updatedQuestions);
  };

  const handleShortAnswerChange = (questionIndex, answer) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].userAnswer = answer;
    setQuestions(updatedQuestions);
  };

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  // Calculate the start and end index for questions to display on the current page
  const startIndex = (currentPage - 1) * questionsPerPage;
  const endIndex = startIndex + questionsPerPage;

  // Filter questions to display only those on the current page
  const questionsToDisplay = questions.slice(startIndex, endIndex);

  return (
    <>

      <h2>Create Question Paper</h2>
      {questionsToDisplay.map((question, index) => (
        <Card key={index} title={`Question ${startIndex + index + 1}`}>
          <p>{question.text}</p>
          {question.type === 'multiple-choice' && (
            <Checkbox.Group
              options={question.options}
              onChange={(selectedOptions) => handleMultipleChoiceChange(startIndex + index, selectedOptions)}
              value={question.userAnswer}
            />
          )}
          {question.type === 'single-choice' && (
            <Checkbox.Group
              options={question.options}
              onChange={(selectedOptions) => handleSingleChoiceChange(startIndex + index, selectedOptions[0])}
              value={question.userAnswer}
            />
          )}
          {question.type === 'short-answer' && (
            <TextArea
              rows={4}
              placeholder="Enter your answer"
              onChange={(e) => handleShortAnswerChange(startIndex + index, e.target.value)}
              value={question.userAnswer}
            />
          )}
        </Card>
      ))}
        <Pagination
          currentPage={currentPage}
          pageSize={pageSize}
          onChange={(currentPage, pageSize) => {
            setCurrentPage(currentPage);
            setPageSize(pageSize);
          }}
          defaultCurrent={1}
          total={20}
        />
    </>
  );
}

export default CompanyQuestionPaper;

import React, { useState, useEffect } from 'react';
import { Card, List } from 'antd';

const DisplayQuestions = () => {
    const [quizDetails, setQuizDetails] = useState({});
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        // Retrieve data from localStorage
        const retrievedQuizDetails = localStorage.getItem('quizDetails');
        const retrievedQuestions = localStorage.getItem('questions');

        if (retrievedQuizDetails && retrievedQuestions) {
            setQuizDetails(JSON.parse(retrievedQuizDetails));
            setQuestions(JSON.parse(retrievedQuestions));
        }
    }, []);

    return (
        <div className="display-questions">
            <h1>{quizDetails.title}</h1>
            <p>Date: {quizDetails.date}</p>
            <p>Number of Questions: {quizDetails.numberOfQuestions}</p>
            <p>Duration: {quizDetails.duration}</p>
            <p>Passing Mark: {quizDetails.passingMark}</p>
            <p>Instructions: {quizDetails.instructions}</p>
            <List
                itemLayout="horizontal"
                dataSource={questions}
                renderItem={question => (
                    <List.Item>
                        <Card title={`Question ${question.number}`}>
                            <p>Question: {question.question}</p>
                            <p>Question Type: {question.questionType}</p>
                            {question.questionType === 'Multiple Choice' && (
                                <div>
                                    <p>Options:</p>
                                    <ul>
                                        {question.options.map((option, index) => (
                                            <li key={index}>{option}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            <p>Answer: {question.answer}</p>
                        </Card>
                    </List.Item>
                )}
            />
        </div>
    );
};

export default DisplayQuestions;

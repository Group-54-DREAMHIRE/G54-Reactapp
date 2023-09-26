function ShowQuestions({ questions, quizDetails }) {
    return (
        <div>
            <h1>{quizDetails.title}</h1>
            <p>Date: {quizDetails.date}</p>
            <p>Number of Questions: {quizDetails.numberOfQuestions}</p>
            <p>Duration: {quizDetails.duration}</p>
            <p>Passing Mark: {quizDetails.passingMark}</p>
            <p>Instructions: {quizDetails.instructions}</p>

            {questions.map((question, index) => (
                <div key={index}>
                    <h2>Question {index + 1}</h2>
                    <p>{question.question}</p>
                    {question.questionType === "Multiple Choice" && (
                        <ul>
                            {question.options.map((option, index) => (
                                <li key={index}>{option}</li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
}
export default ShowQuestions;
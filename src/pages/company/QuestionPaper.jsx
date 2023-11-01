import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getData } from '../../api/authenticationService';
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
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import AddMcq from "./AddMcq";
import ShowQuestions from "./ShowQuestions";
import { setDisDetails } from '../../store/company/testSlice';

const { Option } = Select;
const { Group: RadioGroup, Button: RadioButton } = Radio;
const { Title, Text } = Typography;

const { TextArea } = Input;

function QuestionPaper() {

  const dispatch = useDispatch();
  const {id} = useParams();
  const [questionsPerPage, setQuestionsPerPage] = useState(4); 
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [testDetailsData, setTestDetailsData] = useState({});
  const [testDetails ,setTestDetails ] = useState({});
  const [disQues, setDisQues] = useState([]);
  useEffect(() => {
      getData(`/api/v1/test/getTest/${id}`)
        .then((response) => {
          console.log(response.data);
          setTestDetailsData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching user profile:", error);
        });
  }, [id]);
  useEffect(() => {
   if(testDetailsData){
    const temp = {
      title:testDetailsData.title,
      instructions:testDetailsData.instructions,
      type:testDetailsData.type,
      date:testDetailsData.date,
      duration:testDetailsData.duration,
      passMark:testDetailsData.passMark,
      numOfQuestions:testDetailsData.numOfQuestionsv,
    }
    setTestDetails(temp);
    if(testDetailsData.questions){
      setQuestions(JSON.parse(testDetailsData.questions));
    }
    
   }
}, [testDetailsData]);

  const [questions, setQuestions] = useState([]);

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
          
          {testDetails.date &&
            <Col span={24}>
            <Title level={5} style={{ margin: "0" }}>
             Time: {moment(testDetails.date).format("HH:mm A")}
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
      {questions &&
                questions.map((item, index)=>{
                    return(
                        <>
                        <span>{index+1}) {""}{item.question}</span><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>{item.answ1}</span><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>{item.answ2}</span><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>{item.answ3}</span><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>{item.answ4}</span><br/>
                        <br/> <br/>
                        </>
                    )
                })}
      </Col>
    </Row>
  </Col>
</Row>
</>
  );
}

export default QuestionPaper;


{/* <>
{JSON.stringify(disQues)}
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
</> */}
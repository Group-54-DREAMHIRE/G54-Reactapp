import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from '../../store/auth/userSlice';
import { fetchUserData } from "../../api/authenticationService";
import {
  Form,
  Input,
  Button,
  Modal,
  Row,
  Col,
  Typography,
  Select,
  message,
} from "antd";
import { currencies, salary, tagItems } from "../../store/demo/jobApply";
import { closeApplyJob } from "../../store/models/modelsSlice";
import { useNavigate } from "react-router-dom";
const { Text, Link, Title } = Typography;

export default function ApplyJob({jobID}) {

  const user = JSON.parse(useSelector(getUser));
  const id = user.id;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isOpen = useSelector((state) => state.models.applyJob);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [currency, setCurrency] = useState("USD$");
  const [exsalary, setExSalary] = useState("");
  const [tags, setTags] = useState([]);
  const [tagList, setTaglist] = useState([""]);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [messageApi, contextHolder] = message.useMessage();
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");

  const handleApply = async() => {
    let applyJobData = {
        jobID,
        candidateName: name,
        candidatePhone: phone,
        candidateEmail: email,
        candidateCity: city,
        currency,
        expectSalary: exsalary,
        tags: tagList,
    }

    let data = {
      url: `/api/v1/applyjobcandidate/save/${id}`,
      data: applyJobData,
      method: "post",
    };
    const response = await fetchUserData(data);
    console.log(response.data);
    if (response.status === 200) {
      console.log(response.data);
      setTimeout(
        () => {
          setTimeout(
            ()=>{
              messageApi.open({
                type: 'success',
                content: 'Apply Successfully',
              });
            },1000
          )
      setName("");
      setCity("");
      setCurrency("");
      setExSalary("");
      setTaglist([""]);
      setTags([]);
      setEmail("");
      setPhone("");
      navigate("/jobposts");
        },
        2000
      );
      
      
    }
    else{
      messageApi.open({
        type: 'error',
        content: 'Invalid data',
      });
    }
  }; 
    
  return (
    <>
      <Modal
        style={{ top: "0" }}
        open={isOpen}
        onCancel={() => dispatch(closeApplyJob())}
        footer={[]}
      >
        {id}
        <Row block style={{ padding: "0px 20px" }}>
          <Col>
            <Row block justify="center">
              {contextHolder}
              <Title level={3} style={{ margin: "0" }}>
                Apply Job
              </Title>
            </Row>
            <Row>
              <Form onFinish={handleApply}>
                <Col>
                  <Row justify="space-between">
                    <Col span={24}>
                      <Title level={5}> Name</Title>
                      <Input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={{
                          boxShadow: " 0 0 10px 0 rgba(0,0,0,.1)",
                          borderRadius: "0",
                          height: "35px",
                        }}
                      />
                    </Col>
                    <Col span={24}>
                      <Title level={5}> City</Title>
                      <Input
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        style={{
                          boxShadow: " 0 0 10px 0 rgba(0,0,0,.1)",
                          borderRadius: "0",
                          height: "35px",
                        }}
                      />
                    </Col>
                    <Col span={5}>
                      <Title level={5} style={{}}>
                        Currency
                      </Title>
                      <Select
                        value={currency}
                        onChange={(value) => setCurrency(value)}
                        style={{
                          width: "100%",
                          boxShadow: " 0 0 10px 0 rgba(0,0,0,.1)",
                          borderRadius: "0",
                          fontSize: "medium",
                          fontFamily: "arial",
                        }}
                        options={currencies}
                      />
                    </Col>
                    <Col span={18}>
                      <Title level={5} style={{ textAlign: "right" }}>
                        Expect Salary
                      </Title>
                      <Select
                        allowClear
                        value={exsalary}
                        onChange={(values) => setExSalary(values)}
                        options={salary}
                        style={{
                          width: "100%",
                          boxShadow: " 0 0 10px 0 rgba(0,0,0,.1)",
                          borderRadius: "0",
                          fontSize: "medium",
                          fontFamily: "arial",
                        }}
                      />
                    </Col>
                    <Col span={24}>
                      <Title level={5}>Tags:</Title>
                      <Select
                        value={tags}
                        onChange={(values) => {
                          setTags(values);
                          setTaglist(tags.join(', '));
                          console.log(tags.join(', '));
                          setTimeout(
                            () => {
                              messageApi.open({
                                type: 'success',
                                content: `${values}`,
                              });
                            },
                            1500,
                          );
                        }}
                        options={tagItems}
                        mode="multiple"
                        style={{
                          width: "100%",
                          boxShadow: " 0 0 10px 0 rgba(0,0,0,.1)",
                          borderRadius: "0",
                        }}
                        placeholder="Select Tags"
                      />
                    </Col>
                    <Col span={24}>
                      <Title level={5}> Phone</Title>
                      <Input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        style={{
                          boxShadow: " 0 0 10px 0 rgba(0,0,0,.1)",
                          borderRadius: "0",
                          height: "35px",
                        }}
                      />
                    </Col>
                    <Col span={24}>
                      <Title level={5}> Email</Title>
                      <Input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{
                          boxShadow: " 0 0 10px 0 rgba(0,0,0,.1)",
                          borderRadius: "0",
                          height: "35px",
                          marginBottom: "5%",
                        }}
                      />
                    </Col>
                  </Row>
                  <Row justify="end">
                    <Button size="medium" type="primary" htmlType="submit ">
                      Apply
                    </Button>
                  </Row>
                </Col>
              </Form>
            </Row>
          </Col>
        </Row>
      </Modal>
    </>
  );
}

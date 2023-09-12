import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  Alert,
  Spin,
  message,
} from "antd";
import { currencies, salary } from "../../store/demo/salary";
import { tagItems } from "../../store/demo/tagItems";
import { closeApplyJob } from "../../store/models/modelsSlice";
import { useNavigate } from "react-router-dom";
const { Text, Link, Title } = Typography;

export default function ApplyJob({ jobID }) {
  const user = JSON.parse(localStorage.getItem("USER"));
  const id = user.id;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isOpen = useSelector((state) => state.models.applyJob);
  const [name, setName] = useState(null);
  const [title, setTitle] = useState(null)
  const [city, setCity] = useState(null);
  const [tags, setTags] = useState([]);
  const [tagList, setTaglist] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  let change = name && city && email && phone;

  const handleApply = async () => {
    setLoading(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
      setLoading(true);
      let applyJobData = {
        jobID,
        candidateName: name,
        candidatePhone: phone,
        candidateEmail: email,
        candidateCity: city,
        tags: tagList,
        jobTitle: title,
      };
      let data = {
        url: `/api/v1/applyjobcandidate/save/${id}`,
        data: applyJobData,
        method: "post",
      };
      try {
        const response = await fetchUserData(data);
        if (response.status === 200) {
          setName("");
          setCity("");
          setTaglist([""]);
          setTags([]);
          setEmail("");
          setPhone("");
          navigate("/jobposts");
          message.success("Succesfully Applied");
          setLoading(false);
        }
      } catch (e) {
        console.log(e.message);
        if (e) {
          dispatch(closeApplyJob());
          message.error("You are already registerd with this job!");
          navigate(`/jobpost/${jobID}`);
          setLoading(false);
          setName("");
          setCity("");
          setTaglist([]);
          setTags([]);
          setEmail("");
          setPhone("");
          console.log(e);
          setLoading(false);
        }
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
        <Spin spinning={loading}>
        <Row block style={{ padding: "0px 20px" }}>
          <Col>
            <Row block justify="center">
              <Title level={3} style={{ margin: "0" }}>
                Apply Job
              </Title>
              {errorMsg &&
               ( <Col span={24}>
                  <Alert
                    closable
                    message="Error"
                    description={errorMsg}
                    type="error"
                    showIcon
                  />
                </Col>)}
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
                      <Title level={5}> Title</Title>
                      <Input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
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
                    <Col span={24}>
                      <Title level={5}>Tags:</Title>
                      <Select
                        value={tags}
                        onChange={(values) => {
                          setTags(values);
                          setTaglist(tags.join(", "));
                          console.log(tags.join(", "));
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
                    <Button
                      disabled={!change}
                      style={{ borderRadius: "0" }}
                      size="medium"
                      type="primary"
                      htmlType="submit "
                    >
                      Apply
                    </Button>
                  </Row>
                </Col>
              </Form>
            </Row>
          </Col>
        </Row>
        </Spin>
      </Modal>
    </>
  );
}

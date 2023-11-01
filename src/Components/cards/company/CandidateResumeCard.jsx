import { FaMapMarkerAlt, FaMoneyBillAlt } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import {
  ExclamationCircleFilled,
  CloseCircleFilled,
  QuestionCircleOutlined,
  CheckCircleFilled,
  CheckOutlined,
} from "@ant-design/icons";
import {
  Card,
  Col,
  Row,
  Typography,
  Button,
  Image,
  Modal,
  Spin,
  Form,
} from "antd";
import { Popconfirm, message } from "antd";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAction } from "../../../api/authenticationService";

const { Title, Text } = Typography;

export default function CandidateResumeCard({ items, status }) {
  const navigate = useNavigate();
  const [tagList, setTaglist] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (typeof items.tags === "string") {
      const val = items.tags.split(", ");
      setTaglist(val);
      console.log(tagList);
    } else {
      setTaglist([]);
    }
  }, []);
  const cancel = (e) => {
    console.log(e);
  };

<<<<<<< HEAD
  const handleReject = async () => {
=======
  const handleApprove = async() =>{
    setLoading(true);
    try{
      const url = "api/v1/applyjobcandidate/shortlist"
      const data = {
        jobId:items.jobPost.id,
        canId:items.candidate.id
      }
      const response = await getAction(url,data);
      if(response.status == 200){
        setLoading(false);
        message.success("Successfull");
      }else{
        setLoading(false);
        message.error("Try again!");
      }
    }catch(e){
      console.log(e.message);
      setLoading(false);
      message.error("Try again!");

    }
  }
  const handlePending = async() =>{
    setLoading(true);
    try{
      const url = "api/v1/applyjobcandidate/pending"
      const data = {
        jobId:items.jobPost.id,
        canId:items.candidate.id
      }
      const response = await getAction(url,data);
      if(response.status == 200){
        setLoading(false);
        message.success("Successfull");
      }else{
        setLoading(false);
        message.error("Try again!");
      }
    }catch(e){
      console.log(e.message);
      setLoading(false);
      message.error("Try again!");

    }
  }
  const handleReject = async() =>{
>>>>>>> dulanjana
    setLoading(true);
    try {
      const url = "api/v1/applyjobcandidate/reject";
      const data = {
        jobId: items.jobPost.id,
        canId: items.candidate.id,
      };
      const response = await getAction(url, data);
      if (response.status == 200) {
        setLoading(false);
        message.success("Successfully Rejected");
      } else {
        setLoading(false);
        message.error("Try again!");
      }
    } catch (e) {
      console.log(e.message);
      setLoading(false);
      message.error("Try again!");
    }
  };


  return (
    <>
      <Spin spinning={loading}>
        <Card
          className="resume-card-w"
          style={{ boxShadow: "0 0 8px 0 rgba(0,0,0,.1)" }}
        >
          <Form>
            <Row justify="space-between">
              <Col span={16}>
                <Title
                  level={4}
                  style={{ marginBottom: "18px", marginTop: "0" }}
                >
                  {items.candidateName}
                </Title>
                <Text style={{ color: "rgb(30,136,229)" }}>
                  {items.jobTitle}
                </Text>
                <Title level={5} style={{ marginTop: "8px" }}>
                  <Text
                    style={{
                      marginTop: "0px",
                      marginRight: "10px",
                      color: "rgb(30,136,229)",
                    }}
                  >
<<<<<<< HEAD
                    <FaMapMarkerAlt /> {items.candidateCity}.{" "}
                  </Text>
                  {/* <Text style={{ marginTop: "0px", color: "rgb(30,136,229)" }}>
                <FaMoneyBillAlt /> {items.salary}
              </Text> */}
                </Title>
                <Col style={{ marginTop: "25px" }}>
                  {tagList.slice(0, 4).map((tag, index) => {
                    return (
                      <Button
                        style={{
                          backgroundColor: "rgba(30,136,229,.25)",
                          fontWeight: "600",
                          color: "rgba(30,136,229,1)",
                          margin: "2px",
                        }}
                        key={index}
                      >
                        {tag}
                      </Button>
                    );
                  })}
                </Col>
              </Col>
              <Col span={8}>
                <Image
                  src={items.candidate.profilePicture}
=======
                    {tag}
                  </Button>
                );
              })}
            </Col>
          </Col>
          <Col span={8}>
            <Image
              src={items.candidate.profilePicture}
              style={{ borderRadius: "10px", height: "100%", width: "100%" }}
            />
          </Col>
        </Row>
        <Row style={{ marginTop: "13px" }}></Row>
        <Row style={{ marginTop: "15px" }} gutter={10} justify="end">
          <Col>
            <Button
              onClick={() => navigate(`/viewcanresume/${items.candidate.id}`)}
                className="view-w"
                style={{
                border: "1px solid rgba(30,136,229,1)",
                color: "rgba(30,136,229,1)",
                fontWeight: "600",
              }}
            >
              {" "}
              View{" "}
            </Button>
          </Col>
          {status.approve && (
            <Col>
              <Popconfirm
                onConfirm={handleApprove}
                htmlType="submit"
                Popconfirm
                title="Shortlist the resume"
                description="Are you sure to Shortlist this resume?"
                icon={
                  <  CheckCircleFilled

                    style={{
                      color: "green",
                    }}
                  />
                }
              >
                <Button
                  icon={
                    <CheckCircleFilled
                      style={{ width: "100%", height: "100%" }}
                    />
                  }
                  className="approve-w"
>>>>>>> dulanjana
                  style={{
                    borderRadius: "10px",
                    height: "100%",
                    width: "100%",
                  }}
<<<<<<< HEAD
                />
              </Col>
            </Row>
            <Row style={{ marginTop: "13px" }}></Row>
            <Row style={{ marginTop: "15px" }} gutter={10} justify="end">
              <Col>
                <Button
                  onClick={() =>
                    navigate(`/viewcanresume/${items.candidate.id}`)
                  }
                  className="view-w"
=======
                >
                  Approve
                </Button>
              </Popconfirm>
            </Col>
          )}
          {status.pending && (
            <Col>
              <Popconfirm
                title="Add this resume to pendinglist"
                description="Are you sure to add resume to the pendinglist?"
                onConfirm={handlePending}
                onCancel={cancel}
                okText="Yes"
                cancelText="No"
              >
                <Button
                  htmlType="submit"
                  icon={<IoMdAddCircle />}
                  className="addtopending-w"
>>>>>>> dulanjana
                  style={{
                    border: "1px solid rgba(30,136,229,1)",
                    color: "rgba(30,136,229,1)",
                    fontWeight: "600",
                  }}
                >
                  {" "}
                  View{" "}
                </Button>
              </Col>
              {status.approve && (
                <Col>
                  <Popconfirm
                    Popconfirm
                    title="Shortlist the resume"
                    description="Are you sure to Shortlist this resume?"
                    icon={
                      <CheckCircleFilled
                        style={{
                          color: "green",
                        }}
                      />
                    }
                  >
                    <Button
                      icon={
                        <CheckCircleFilled
                          style={{ width: "100%", height: "100%" }}
                        />
                      }
                      className="approve-w"
                      style={{
                        border: "1px solid green",
                        color: "green",
                        fontWeight: "600",
                      }}
                    >
                      Approve
                    </Button>
                  </Popconfirm>
                </Col>
              )}
              {status.pending && (
                <Col>
                  <Popconfirm
                    title="Add this resume to pendinglist"
                    description="Are you sure to add resume to the pendinglist?"
                    onConfirm={confirm}
                    onCancel={cancel}
                    okText="Yes"
                    cancelText="No"
                  >
                    <Button
                      icon={<IoMdAddCircle />}
                      className="addtopending-w"
                      style={{
                        border: "1px solid rgb(250,173,20)",
                        color: "rgb(250,173,20)",
                        fontWeight: "600",
                      }}
                    >
                      Add to Pending
                    </Button>
                  </Popconfirm>
                </Col>
              )}

<<<<<<< HEAD
              {status.reject && (
                <Col>
                  <Popconfirm
                    Popconfirm
                    onConfirm={handleReject}
                    title="Reject this resume"
                    description="Are you sure to reject this resume?"
                    icon={
                      <QuestionCircleOutlined
                        style={{
                          color: "red",
                        }}
                      />
                    }
                  >
                    <Button
                      htmlType="submit"
                      icon={<CloseCircleFilled />}
                      className="reject-w"
                      style={{
                        border: "1px solid red",
                        color: "red",
                        fontWeight: "600",
                      }}
                    >
                      Reject
                    </Button>
                  </Popconfirm>
                </Col>
              )}
            </Row>
          </Form>
        </Card>
=======
          {status.reject && (
            <Col>
              <Popconfirm
                Popconfirm
                onConfirm={handleReject}
                title="Reject this resume"
                description="Are you sure to reject this resume?"
                icon={
                  <QuestionCircleOutlined
                    style={{
                      color: "red",
                    }}
                  />
                }
              >
                <Button
                  htmlType="submit"
                  icon={<CloseCircleFilled />}
                  className="reject-w"  
                  style={{
                    border: "1px solid red",
                    color: "red",
                    fontWeight: "600",
                  }}
                >
                  Reject
                </Button>
              </Popconfirm>
            </Col>
          )}
        </Row>
        </Form>
      </Card>
>>>>>>> dulanjana
      </Spin>
    </>
  );
}

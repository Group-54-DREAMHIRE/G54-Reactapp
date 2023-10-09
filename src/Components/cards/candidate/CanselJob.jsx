import {
  Col,
  Row,
  Steps,
  Typography,
  Divider,
  Tabs,
  Button,
  Modal,
  Checkbox,
  Space,
  Radio,
  Form,
  message,
  Spin,
} from "antd";
import { useNavigate, useParams, Outlet } from "react-router-dom";
import { fetchUserData, getData } from "../../../api/authenticationService";
import { useDispatch, useSelector } from "react-redux";
import { closeCanselJob } from "../../../store/models/modelsSlice";
import { useState } from "react";
import { async } from "q";
import { setAppliedJobs } from "../../../store/company/applyJobSlice";
const { Title, Text } = Typography;
export default function CanselJob() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [reson, setReason] = useState([]);
  const [sendReasons, setSendReasons] = useState(null);
  const user = JSON.parse(localStorage.getItem("USER"));
  const userId = user.id;
  const [loading, setLoading] = useState(false);
  const options = [
    {
      label:
        " I received and accepted another job offer that aligns better with my career goals and preferences.",
      value: "Accepted Another Offer",
    },
    {
      label:
        " Unforeseen personal circumstances, such as a family relocation, a health issue, or a family emergency, have arisen, making it impossible for me to continue with the application process at this time.",
      value: "Changed Circumstances",
    },
    {
      label:
        " Upon further research, I discovered information about the company's reputation, culture, or practices that I find incompatible with my values and career aspirations.",
      value: "Company Reputation",
    },
    {
      label:
        " The offered salary or benefits package does not meet my financial expectations or the requirements of my personal situation.",
      value: "Salary or Benefits",
    },
    {
      label:
        " I believe that the job does not offer sufficient opportunities for personal or professional growth, and I'm seeking a role that better aligns with my career development goals.",
      value: "Personal Growth",
    },
    {
      label:
        " I have reevaluated my long-term career goals and determined that this specific job opportunity no longer aligns with my revised career path.",
      value: "Change in Career Goals",
    },
    {
      label:
        " After interacting with the company, attending interviews, or assessing the company culture, I have concluded that I do not fit well with the organization's values and work environment.",
      value: "Lack of Fit",
    },
    {
      label:
        " I have come across another job opportunity that better matches my skills, interests, and long-term career aspirations, leading me to reconsider my application with your company.",
      value: "Better Fit Found",
    },
    {
      label:
        "Upon further reflection and discussions with trusted friends or mentors, I have decided that canceling my job application is the best course of action for my career at this moment.",
      value: "Reconsideration",
    },
  ];
  const onChange = (e, value) => {
    let resonList = [...reson];
    if (e.target.checked) {
      resonList.push(value);
      setReason(resonList);
      setSendReasons(resonList.join("/ "));
    } else {
      let temp = [];
      temp = resonList.filter((item) => item != value);
      setReason(temp);
      setSendReasons(temp.join("/ "));
    }
    console.log(sendReasons);
  };

  const handleSend = async () => {
    setLoading(true);
    if (sendReasons) {
      let sendData = {
        reason: sendReasons,
        jobId: id,
        canselDate: new Date(),
      };
      let data = {
        url: `/api/v1/applyjobcandidate/cansel/${userId}`,
        data: sendData,
        method: "post",
      };
      await fetchUserData(data)
        .then((response) => {
          if (response.status === 200) {
            setLoading(false);
            message.success("Successfully Updated");
            navigate("/appliedjobs");
            dispatch(setAppliedJobs([]));
          } else {
            setLoading(false);
            message.error("Data is invalid!");
            setReason([]);
            setSendReasons(null);
          }
        })
        .catch((error) => {
          setLoading(false);
          console.log(error.message);
        });
    } else {
      setLoading(false);
      message.error("Select at least one reson!");
    }
  };
  return (
    <>
      <Spin spinning={loading}>
        <Row>
          <Col span={24}>
            <Form onFinish={handleSend}>
              <Row gutter={[0, 20]}>
                <Col span={24}>
                  <Title
                    level={2}
                    style={{ marginTop: "0", marginBottom: "10px" }}
                  >
                    CANSEL JOB
                  </Title>
                  <hr style={{ border: "2px solid rgba(0,0,0,.4)" }} />
                </Col>
                <Col span={24}>
                  <Title
                    level={3}
                    style={{ marginTop: "0", marginBottom: "10px" }}
                  >
                    Give Resons for cansel this job
                  </Title>
                </Col>
                <Col span={20}>
                  <Row gutter={[0, 20]} justify="end">
                    <Col span={22}>
                      <Row gutter={[0, 20]}>
                        {options.map((item) => {
                          return (
                            <Col span={24}>
                              <Checkbox
                                onChange={(e) => onChange(e, item.value)}
                              >
                                <Title
                                  level={4}
                                  style={{ margin: "0", marginBottom: "10px" }}
                                >
                                  {item.value}
                                </Title>
                              </Checkbox>
                              <br />
                              <Space style={{ marginLeft: "5%" }}>
                                <Text style={{ fontSize: "16px" }}>
                                  {item.label}
                                </Text>
                              </Space>
                            </Col>
                          );
                        })}
                        <Col span={24}>
                          <Row justify='end'>
                          <Button
                            htmlType="submit"
                            style={{ borderRadius: "0" }}
                            type="primary"
                          >
                            Send
                          </Button>
                          </Row>
                          
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Spin>
    </>
  );
}

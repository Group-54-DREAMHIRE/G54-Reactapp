import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  Col,
  Divider,
  Row,
  Space,
  Typography,
  Radio,
  Modal,
  message,
  Form,
} from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { fetchUserData, getData } from "../../api/authenticationService";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { getTimeList } from "../../store/company/applyJobSlice";
import { lastDayOfDecade } from "date-fns";
const { Title, Text } = Typography;

const textStyle = {
  fontSize: "16px",
  textTransform: "capitalize",
};
export default function ScheduledInterview() {
  const { id } = useParams();
  const user = JSON.parse(localStorage.getItem("USER"));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const timeList = useSelector((state) => state.applyJob.activeList);
  const [intDetails, setIntDetails] = useState(null);
  const [companyName, setCompanyName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [withInt, setWithInt] = useState("");
  const [link, setLink] = useState("");
  const [intType, setIntType] = useState("");
  const [report, setReport] = useState("");
  useEffect(() => {
    // setLoading(true);
    getData(`/api/v1/interviewCan/getInterview/${id}`)
      .then((response) => {
        console.log(response.data, "DUlaa");
        setIntDetails(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  useEffect(() => {
    if (intDetails) {
      setCompanyName(intDetails.interview.jobPost.companyName);
      setDate(moment(intDetails.interview.startTime).format("YYYY MMMM DD"));
      setTime(moment(intDetails.interview.startTime).format("hh.mm A"));
      setWithInt(intDetails.interview.withInt);
      setLink(intDetails.interview.meetingLink);
      setIntType(intDetails.interview.type);
    }
  }, [intDetails]);

  return (
    <>
      <Row className="interview-details-w">
        <Form>
          <Col style={{ padding: "2% 3%", minHeight: "75vh" }} span={24}>
            <Row gutter={[0, 20]}>
              <Col span={24}>
                <Title
                  level={3}
                  style={{ marginTop: "0", marginBottom: "10px" }}
                >
                  Interview Details
                </Title>
                <hr style={{ border: "2px solid rgba(0,0,0,.4)" }} />
              </Col>
              <Col span={12}>
                <Row align="bottom" gutter={[0, 15]}>
                  <Col span={24}>
                    <Text
                      style={{
                        marginRight: "6px",
                        fontSize: "20px",
                        fontWeight: "500",
                      }}
                    >
                      Company:
                    </Text>
                    <Text style={textStyle}>{companyName}</Text>
                  </Col>
                  <Col span={24}>
                    <Text
                      style={{
                        marginRight: "6px",
                        fontSize: "20px",
                        fontWeight: "500",
                      }}
                    >
                      Date:
                    </Text>
                    <Text style={textStyle}>{date}</Text>
                  </Col>
                  <Col span={24}>
                    <Text
                      style={{
                        marginRight: "6px",
                        fontSize: "20px",
                        fontWeight: "500",
                      }}
                    >
                      Time:
                    </Text>
                    <Text style={textStyle}>{time}</Text>
                  </Col>
                  <Col span={24}>
                    <Text
                      style={{
                        marginRight: "6px",
                        fontSize: "20px",
                        fontWeight: "500",
                      }}
                    >
                      Type:
                    </Text>
                    <Text style={textStyle}>{intType} Interview</Text>
                  </Col>
                  <Col span={24}>
                    <Text
                      style={{
                        marginRight: "6px",
                        fontSize: "20px",
                        fontWeight: "500",
                      }}
                    >
                      With:
                    </Text>
                    <Text style={textStyle}>{withInt} </Text>
                  </Col>
                  <Col span={24}>
                    <Button
                      style={{
                        borderRadius: "0",
                        boxShadow: "0 0 8px rgba(0,0,0,.2)",
                        marginTop: "20px",
                      }}
                      type="primary"
                      disabled={report ==""?true:false}
                    >
                      Interview Report
                    </Button>
                  </Col>
                </Row>
              </Col>
              <Col span={12}>
                <Row gutter={[0, 30]}>
                  <Col span={24}>
                    <Title style={{ margin: "0" }} level={4}>
                      Join the meeting
                    </Title>
                  </Col>
                  <Col span={24}>
                    <Button
                      size="large"
                      href={link}
                      target="_blank"
                      type="primary"
                      style={{ borderRadius: 0 }}
                    >
                      Join
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Form>
      </Row>
    </>
  );
}

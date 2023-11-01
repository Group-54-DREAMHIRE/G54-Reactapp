import {
  Calendar,
  Card,
  Col,
  Row,
  Space,
  Typography,
  Image,
  Avatar,
  Button,
} from "antd";
import moment from "moment/moment";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setQuestions, setTestDetails } from "../../../store/company/testSlice";

const { Title, Text } = Typography;

export default function ScheduledTestCard({ item }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const testDetails = {
        title: item.title,
        type: item.type,
        date: item.date,
        time: item.time,
        duration: item.duration,
        passingMark:item.passMark,
        numOfQue:item.numOfQuestions,
        instructions:item.instructions,
        questionCount:0,
    };
    dispatch(setTestDetails(testDetails));
    dispatch(setQuestions(JSON.parse(item.questions)));
  }, []);
  return (
    <>
      <Row justify="center">
        <Col span={23} style={{ padding: " 0 10%" }}>
          <Card style={{ boxShadow: "0 0 8px 0 rgba(0,0,0,.1)" }} hoverable>
            <Row style={{ marginTop: "10px" }} gutter={[20, 5]}>
              <Col>
              <Title style={{ margin: "0" }} level={4}>
                      {" "}
                     {item.title}
                    </Title>
              </Col>
              <Col span={24}></Col>
              <Col span={24}>
                <Row gutter={[0,10]} justify="space-between" align="bottom">
                  <Col >
                    <Title style={{ margin: "0" }} level={5}>
                      Date: {" "}
                      { moment(item.date).format("YYYY MMMM DD")}
                    </Title>
                  </Col>
                  <Col >
                    <Title style={{ margin: "0" }} level={5}>
                      Time:{" "} {moment(item.date).format("hh:mm A")}
                    </Title>
                  </Col>
                </Row>
              </Col>
              <Col span={24}>
                <Text style={{ fontSize: "16px" }}>Duration: {item.duration} Min </Text>
              </Col>
              <Col span={24}>
                <Row style={{ marginTop: "15px" }} gutter={10} justify="end">
                  <Col>
                    <Button
                      style={{ borderRadius: "0" }}
                      onClick={() => navigate(`/questionpaper`)}
                      type="primary"
                    >
                      Start
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
}

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
import { fetchUserData } from "../../api/authenticationService";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { getTimeList } from "../../store/company/applyJobSlice";
import { lastDayOfDecade } from "date-fns";
const { Title, Text } = Typography;

const textStyle = {
  fontSize: "16px",
  textTransform: "capitalize",
};
export default function InterviewDetails() {
  const { id } = useParams();
  const user = JSON.parse(localStorage.getItem("USER"));
  const userId =user.id;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const timeList = useSelector((state) => state.applyJob.activeList);
  const [time, setTime] = useState(null);
  const [method, setMethod] = useState(null);

  const handleSubmit = async() => {
    if(method==="confirm"){
      if(time){
        const sendData = {
          intId:time,
        };
        let data = {
          url: `/api/v1/interviewCan/confirmInterview/${userId}`,
          data: sendData,
          method: "post",
        };
        try{
          await fetchUserData(data).then((response)=>{
            if(response.status===200){
              message.success("Succesfully Applied");
              navigate(-2);
            }
          })
        }catch(e){
          message.error("Error! Try again");
        }
      }
    }
  }
  return (
    <>
      <Row className="interview-details-w">
      <Form onFinish={handleSubmit}>
        <Col style={{ padding: "2% 3%", minHeight: "75vh" }} span={24}>
          <Row gutter={[0, 20]}>
            <Col span={24}>
              <Title level={3} style={{ marginTop: "0", marginBottom: "10px" }}>
                Interview Details
              </Title>
              <hr style={{ border: "2px solid rgba(0,0,0,.4)" }} />
            </Col>
            <Col span={8}>
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
                  <Text style={textStyle}>{timeList[0].companyName}</Text>
                </Col>
                {/* <Col span={24}>
                  <Text
                    style={{
                      marginRight: "6px",
                      fontSize: "20px",
                      fontWeight: "500",
                    }}
                  >
                    Date:
                  </Text>
                  <Text style={textStyle}>2023.08.28</Text>
                </Col> */}
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
                  <Text style={textStyle}>{timeList[0].type} Interview</Text>
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
                  <Text style={textStyle}>{timeList[0].withInt}</Text>
                </Col>
                {/* <Col span={24}>
                  <Button
                    style={{
                      borderRadius: "0",
                      boxShadow: "0 0 8px rgba(0,0,0,.2)",
                      marginTop: "20px",
                    }}
                    type="primary"
                    disabled={false}
                  >
                    Interview Report
                  </Button>
                </Col> */}
              </Row>
            </Col>
            <Col span={16}>
              <Row>
                <Col span={24}>
                  <Title style={{ margin: "0" }} level={4}>
                    Select a time slot and confirm
                  </Title>
                </Col>
                <Col span={24}>
                  <Card
                    style={{
                      borderRadius: "0",
                      boxShadow: "0 0 5px rgba(0,0,0,.2)",
                      marginTop: "20px",
                    }}
                  >
                    <Row gutter={[10, 10]}>
                     
                     <Col span={24}>
                      <Row justify='space-between'>
                        {timeList.map((item) => {
                          return (
                           <Col span={12}  >
                            <Radio.Group
                              onChange={(e) => setTime(e.target.value)}
                              value={time}
                            >
                              <Space direction="vertical">
                              <Title level={5} style={{margin:'0'}}>
                                {moment(item.date).format("YYYY MMMM DD")}
                              </Title>
                                {item.times.map((time) => {
                                  return (
                                    <Radio  buttonStyle="solid" value={time.intId}>
                                      {moment(time.startTime).format("hh:mm A")} - 
                                      {moment(time.startTime).add(time.duration, "minutes").format("hh:mm A")}
                                    </Radio>
                                  );
                                })}
                              </Space>
                            </Radio.Group>
                            <br/> <br/>
                           </Col>
                          );
                        })}
                      </Row>
                       
                      </Col>
                     <Col span={24}>
                      <Row gutter={10}>
                      <Col>
                        <Button
                          onClick={()=>setMethod("confirm")}
                          htmlType="submit"
                          style={{
                            borderRadius: "0",
                            boxShadow: "0 0 8px rgba(0,0,0,.2)",
                            marginTop: "20px",
                          }}
                          type="primary"
                          disabled={time===null?true:false}
                        >
                          Confirm
                        </Button>
                      </Col>
                      <Col>
                        <Button
                          disabled={true}
                          htmlType="submit"
                          onClick={()=>setMethod("reject")}
                          style={{
                            borderRadius: "0",
                            boxShadow: "0 0 8px rgba(0,0,0,.2)",
                            marginTop: "20px",
                          }}
                          type="primary"
                          danger
                        >
                          Reject
                        </Button>
                      </Col>
                      </Row>
                     </Col>
                     
                    </Row>
                  </Card>
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

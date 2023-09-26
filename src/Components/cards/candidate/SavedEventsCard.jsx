import {
    Calendar,
    Card,
    Col,
    Row,
    Space,
    Typography,
    Image,
    Avatar,
  } from "antd";
  import db1 from "../../../assets/images/db1.png";
  import db2 from "../../../assets/images/db2.png";
  import db3 from "../../../assets/images/db3.png";
  import db4 from "../../../assets/images/db4.png";
  import db5 from "../../../assets/images/db5.png";
  import db6 from "../../../assets/images/db6.png";
import clock from "../../../assets/images/clock.png";

const { Title, Text } = Typography;

export default function SavedEventsCard({item}) {
  return (
    <>
      <Row justify="center">
        <Col span={23} style={{ padding: " 0 10%" }}>
          <Card hoverable style={{ boxShadow: "0 0 8px rgba(25,103,210,255)",cursor:'pointer' }}>
            <Row>
             
              <Col span={24}>
                <Row>
                  <Col span={24}>
                    <Row align="bottom" gutter={[0, 10]}>
                      <Col span={24}>
                        <Row justify="center" align="bottom">
                          <Text style={{ fontSize: "25px", fontWeight: "700" }}>
                            {item.type}
                          </Text>
                          
                          <Col span={24}></Col>
                        </Row>
                      </Col>
                      <Col>
                        <Text style={{ fontWeight: "480", fontSize: "18px", color: "rgba(25,103,210,255)" }}>
                          {item.company}
                        </Text>
                      </Col>
                      <Col span={24}></Col>
                      <Row>
                        <Text style={{ fontWeight: "400", fontSize: "14px"}}>
                        Job Role - {item.role}
                        </Text>
                      </Row>
                      
                    </Row>
                    <Row
                      style={{ marginTop: ".1px" }}
                      justify="space-between"
                      gutter={[0, 50]}
                    >

                      <Col span={20}>
                        <Image src={clock} preview={false} />
      
                       
                      </Col>
                    </Row>
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

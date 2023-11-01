import {
  Layout,
  Row,
  Col,
  Typography,
  Divider,
  Image,
  Button,
  Space,
} from "antd";
import ShowSubContent from "./ShowSubContent";
const { Title, Text, Link } = Typography;
export default function ShowContent({ item, contentData }) {
  if (item.title === "Profile") {
    if (item.isAval) {
      return (
        <>
          <Row justify="space-between" gutter={[15, 15]}>
            <Col span={24}>
              <Title level={3}>{item.title}</Title>
              <hr style={{ border: "2px solid rgba(0,0,0,.6)" }} />
              <Text>{item.description}</Text>
            </Col>
          </Row>
        </>
      );
    }
  } else {
    {
      if (item.isAval) {
        return (
          <>
            <Row>
              <Col span={24}>
                <Row>
                  <Col span={24}>
                    <Row justify="space-between" gutter={[15, 15]}>
                      <Col span={24}>
                        <Title level={3}>{item.title}</Title>
                        <hr style={{ border: "2px solid rgba(0,0,0,.6)", margin:'0' }}  />
                      </Col>
                      <Col span={24}>
                        {item.children &&
                          item.children.map((item) => {
                            let content = {
                              contentData,
                              item,
                            };
                            return <ShowSubContent content={content} />;
                          })}
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </>
        );
      }
    }
  }
}
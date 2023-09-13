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
import moment from "moment";
const { Title, Text, Link } = Typography;

export default function ShowSubContent({ content }) {
  return (
    <>
      <Row className="show-sub-content-w">
        <Col span={24}>
          <Row justify="space-between">
            <Col span={17}>
              <Row>
                <Col span={24}>
                  <Link
                    href={
                      
                        content.item.link
                    }
                  >
                    <Text strong>
                      {content.item.title}
                    </Text>
                  </Link>
                  <Text>
                    {content.item.subTitle}
                  </Text>
                </Col>
               
              </Row>
            </Col>
            <Col span={7}>
              <Row justify="end">
                <Col span={24}>
                  <Row justify="end">
                    <Text style={{ textAlign: "right" }}>
                      <Space>
                        {content.item.hasStart
                          ? (content.item.showStartMonth
                            ?(content.item.start===null?null:content.item.start.format("YYYY")) 
                            : (content.item.start===null?null:content.item.start.format("MMMM YYYY")))
                          : null}

                        {content.item.hasStart && content.item.hasEnd
                          ? "-"
                          : null}

                        {content.item.hasEnd
                          ? (content.item.present
                            ? "Present"
                            : (content.item.showEndMonth
                            ?(content.item.end===null?null:content.item.end.format("YYYY") )
                            :( content.item.end===null?null:content.item.end.format("MMMM YYYY"))))
                          : null}
                      </Space>
                    </Text>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row justify="end">
                    <Text>
                      {content.item.city}
                      , {""}
                      {content.item.country}
                    </Text>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
          <Col span={24} style={{ width: "500px !important" }}>
                  <div
                    className=" format-text-w"
                    dangerouslySetInnerHTML={{
                      __html: content.item.description,
                    }}
                  />
                </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

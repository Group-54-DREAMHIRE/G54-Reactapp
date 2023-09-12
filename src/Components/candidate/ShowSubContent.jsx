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
                      JSON.stringify(content.contentData) === "[]"
                        ? ""
                        : content.item.link
                    }
                  >
                    <Text strong>
                      {JSON.stringify(content.contentData) === "[]"
                        ? ""
                        : content.item.title}
                    </Text>
                  </Link>
                  <Text>
                    {JSON.stringify(content.contentData) === "[]"
                      ? ""
                      : content.item.subTitle}
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
                        {JSON.stringify(content.contentData) === "[]"
                          ? false
                          : content.item.hasStart
                          ? JSON.stringify(content.contentData) === "[]"
                            ? false
                            : content.item.showStartMonth
                            ? content.item.start.format("YYYY")
                            : content.item.start.format("MMMM YYYY")
                          : null}

                        {JSON.stringify(content.contentData) === "[]"
                          ? false
                          : content.item.hasStart
                          ? "-"
                          : null}

                        {JSON.stringify(content.contentData) === "[]"
                          ? false
                          : content.item.hasEnd
                          ? JSON.stringify(content.contentData) === "[]"
                            ? false
                            : content.item.present
                            ? "Present"
                            : JSON.stringify(content.contentData) === "[]"
                            ? false
                            : content.item.showEndMonth
                            ? content.item.end.format("YYYY")
                            : content.item.end.format("MMMM YYYY")
                          : null}
                      </Space>
                    </Text>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row justify="end">
                    <Text>
                      {JSON.stringify(content.contentData) === "[]"
                        ? ""
                        : content.item.city}
                      , {""}
                      {JSON.stringify(content.contentData) === "[]"
                        ? ""
                        : content.item.country}
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

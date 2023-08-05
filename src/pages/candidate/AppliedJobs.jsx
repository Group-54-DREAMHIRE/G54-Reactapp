import AppliedJobCard from "../../Components/cards/candidate/AppliedJobCard";
import { items } from "../../store/demo/appliedJobs";
import { Row, Col, Divider, Typography } from "antd";
const { Title } = Typography;

export default function AppliedJobs() {
  return (
    <>
      <Row>
        <Col span={24}>
          <Row style={{ padding: "2%" }}>
            <Title level={2} style={{ margin: "0" }}>
              APPLIED JOBS
            </Title>
            <Divider style={{ marginBottom: "0", marginTop: "6px" }} />
          </Row>
          <Row style={{ padding: "2%" }} gutter={[20, 20]}>
            {items.map((item) => {
              return (
                <Col span={12}>
                  <AppliedJobCard items={item} />
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </>
  );
}

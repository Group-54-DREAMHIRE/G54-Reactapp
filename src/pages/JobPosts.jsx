import JobPostCard from "../Components/cards/JobPostCard";
import { Row, Col, Divider, Typography } from "antd";
import { items } from "../store/demo/jobPosts";
const {Title} = Typography;

export default function JobPosts() {
  let status = {
    save: true,
    more: true,
  };
  return (
    <>
      {/* <h1>This is Job Posts page</h1> */}
      <Row style={{ padding: "4%" }}>
        <Col span={24}>
          <Row>
            <Col span={24}>
              <Title style={{ marginTop: "0" }}>Jobs</Title>
              <Divider/>
            </Col>
          </Row>
          <Row style={{marginTop:'20px'}} gutter={[25, 25]}>
            {items.map((item) => {
              return (
                <Col span={8}>
                  <JobPostCard items={item} status={status} />
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </>
  );
}

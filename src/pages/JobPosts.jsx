import JobPostCard from "../Components/cards/JobPostCard";
import { Row, Col, Divider, Typography, Select, Space, Button } from "antd";
import { DollarOutlined, PlusOutlined } from "@ant-design/icons";
import { salary } from "../store/demo/profile";
import { items } from "../store/demo/jobPosts";
import { useNavigate } from "react-router-dom";
const { Title } = Typography;

export default function JobPosts() {
  const navigate = useNavigate();
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  let status = {
    save: true,
    more: true,
  };
  const company = localStorage.getItem("USERTYPE") === "company" ? true : false;
  return (
    <>
      <Row style={{ padding: "1%" }}>
        <Col span={24}>
          <Row>
            <Col span={24}>
              <Row justify="space-between">
                <Col>
                  <Title style={{ marginTop: "0" }}>Jobs</Title>
                </Col>
                {company && (
                  <Col>
                    <Button 
                      icon={<PlusOutlined />}
                      size="large" 
                      type="primary"
                      onClick={()=> navigate("/addjobpost")}
                      style={{borderRadius: '0'}}>
                      Add Post
                    </Button>
                  </Col>
                )}
              </Row>
              <Divider />
            </Col>
          </Row>
          <Row justify="end" style={{ margin: "20px 0 30px" }}>
            <Space size="large" wrap>
              <Select
                style={{
                  width: 200,
                  boxShadow: "0 0 8px rgba(0,0,0,.1)",
                  borderRadius: "0 !important",
                }}
                showSearch
                size="large"
                defaultValue="Software Engineer"
                onChange={handleChange}
                options={[
                  {
                    value: "softwareEngineer",
                    label: "Software Engineer",
                  },
                  {
                    value: "lucy",
                    label: "Bussines Analyst",
                  },
                  {
                    value: "Yiminghe",
                    label: "yiminghe",
                  },
                  {
                    value: "disabled",
                  },
                ]}
              />
              <Select
                size="large"
                defaultValue="Full time"
                style={{
                  width: 150,
                  boxShadow: "0 0 8px rgba(0,0,0,.1)",
                  borderRadius: "0 !important",
                }}
                options={[
                  {
                    value: "fullTime",
                    label: "Full Time",
                  },
                  {
                    value: "partTime",
                    label: "Part Time",
                  },
                  {
                    value: "intern",
                    label: "Intern",
                  },
                ]}
              />
              <Select
                suffixIcon={
                  <Title style={{ margin: "0" }} level={4}>
                    <DollarOutlined />
                  </Title>
                }
                size="large"
                defaultValue="600"
                style={{
                  width: 150,
                  boxShadow: "0 0 8px rgba(0,0,0,.1)",
                  borderRadius: "0 !important",
                }}
                options={salary}
              />
              <Select
                size="large"
                defaultValue="On site"
                style={{
                  width: 150,
                  boxShadow: "0 0 8px rgba(0,0,0,.1)",
                  borderRadius: "0 !important",
                }}
                options={[
                  {
                    value: "onSite",
                    label: "On SIte",
                  },
                  {
                    value: "onLine",
                    label: "Online",
                  },
                ]}
              />
              <Button style={{ borderRadius: "0" }} size="large" type="primary">
                Search
              </Button>
            </Space>
          </Row>
          <Row style={{ marginTop: "20px" }} gutter={[25, 25]}>
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

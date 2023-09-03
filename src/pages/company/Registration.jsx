import React, { useState } from "react";
import {
  Row,
  Col,
  Upload,
  Form,
  Input,
  Button,
  Card,
  Radio,
  Typography,
  Space,
  Image,
  Divider,
  List,
} from "antd";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import ImgCrop from "antd-img-crop";
import { InboxOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { getUser } from "../../store/auth/userSlice";

const { Title } = Typography;

const CompanyRegistration = () => {
  const user = useSelector(getUser);

  const [form] = Form.useForm();

  const pricingPlans = [
    {
      name: "Basic",
      price: "$10/month",
      features: "10 job posting,Job displayed for 15 days,Premium Support 24/7",
    },
    {
      name: "Standard",
      price: "$20/month",
      features: "20 job posting,Job displayed for 30 days,Premium Support 24/7",
    },
    {
      name: "Premium",
      price: "$30/month",
      features: "30 job posting,Job displayed for 60 days,Premium Support 24/7",
    },
  ];

  const handleSubmit = (values) => {
    console.log("Received values of form: ", values);
  };

  const features1 = [
    { feature: "Registration", available: true },
    { feature: "Post advertisement (2 per month)", available: true },
    { feature: "Recommend Candidates", available: false },
    { feature: "Manage Assignments", available: false },
    { feature: "Post Events", available: false },
  ];

  const features2 = [
    { feature: "Registration", available: true },
    { feature: "Post advertisement (5 per month)", available: true },
    { feature: "Recommend Candidates", available: true },
    { feature: "Manage Assignments", available: true },
    { feature: "Post Events", available: true },
  ];

  const [isHovered1, setHovered1] = useState(false);
  const [isHovered2, setHovered2] = useState(false);

  const handleHover1 = () => {
    setHovered1(true);
  };

  const handleHover2 = () => {
    setHovered2(true);
  };

  const handleLeave1 = () => {
    setHovered1(false);
  };

  const handleLeave2 = () => {
    setHovered2(false);
  };

  return (
    <>
      <div className="company-registration-n">
        <Row>
          <Col span={24}>
            <Form form={form} layout="vertical" onFinish={handleSubmit}>
              <Row>
                <Col
                  span={12}
                  style={{
                    display: "flex",
                    justifyContent: "left",
                    alignItems: "center",
                  }}
                >
                  <Title
                    style={{
                      fontSize: "25px",
                      fontWeight: 600,
                      marginTop: "0",
                    }}
                  >
                    COMPANY REGISTRATION
                  </Title>
                </Col>
                <Col span={6}></Col>
                <Col span={6}></Col>
              </Row>

              <Divider />

              <Row justify="space-between" gutter={[20, 20]}>
                <Col span={11}>
                  <Title level={4} style={{ marginBottom: "0" }}>
                    Name:
                  </Title>
                  <Title level={5} style={{ marginTop: "6px" }}>
                    {user.name}
                  </Title>
                </Col>
                <Col span={11}>
                  <Title level={4} style={{ marginBottom: "0" }}>
                    Address:
                  </Title>
                  <Title level={5} style={{ marginTop: "6px" }}>
                    {user.address}
                  </Title>
                </Col>
                <Col span={11}>
                  <Title level={4} style={{ marginBottom: "0" }}>
                    Email:
                  </Title>
                  <Title level={5} style={{ marginTop: "6px" }}>
                    {user.email}
                  </Title>
                </Col>
                <Col span={11}>
                  <Title level={4} style={{ marginBottom: "0" }}>
                    Phone
                  </Title>
                  <Title level={5} style={{ marginTop: "6px" }}>
                    {user.phone}
                  </Title>
                </Col>
              </Row>

              <Row style={{ marginTop: "5%" }} justify='center'>
                <Col span={24}>
                  <Form.Item
                    name="businessReport"
                    label="Business Report"
                    valuePropName="fileList"
                    getValueFromEvent={(e) => e.fileList}
                    rules={[
                      {
                        required: true,
                        message: "Please upload a business report",
                      },
                    ]}
                  >
                    <Upload.Dragger name="files" multiple={false}>
                      <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                      </p>
                      <p className="ant-upload-text">
                        Click or drag file to this area to upload
                      </p>
                      <p className="ant-upload-hint">
                        Support for a single or bulk upload.
                        <br />
                        Strictly prohibit from uploading company data or other
                        band files
                      </p>
                    </Upload.Dragger>
                  </Form.Item>
                </Col>
              </Row>
              {/* <Row>
                                <Col span={24}>
                                    <Form.Item name="pricingPlan" label="Pricing Plan" rules={[{ required: true}]} >
                                        <Radio.Group buttonStyle="solid" className="pricing-cards">
                                            {pricingPlans.map((plan) => (
                                                <Radio value={plan.name} key={plan.name}>
                                                    <Card title={plan.name} className="plan-card">
                                                        <p className="plan-price">{plan.price}</p>
                                                        <ul className="plan-features">
                                                            {plan.features.split(',').map((feature, index) => (
                                                                <li key={index}>{feature.trim()}</li>
                                                            ))}
                                                        </ul>
                                                    </Card>
                                                </Radio>
                                            ))}
                                        </Radio.Group>
                                    </Form.Item>
                                </Col>
                            </Row> */}
              <Row justify='center'>
                <div style={containerStyles}>
                  <h1 style={headingStyles}>
                    Choose the plan that fits your needs.
                  </h1>
                  <div style={cardsContainerStyles}>
                    <Card
                      title="Free Plan"
                      style={{
                        ...cardStyles,
                        boxShadow: isHovered1
                          ? "0 8px 16px rgba(0, 0, 0, 0.2)"
                          : "0 4px 8px rgba(0, 0, 0, 0.1)",
                        transform: isHovered1 ? "scale(1.05)" : "scale(1)",
                      }}
                      onMouseEnter={handleHover1}
                      onMouseLeave={handleLeave1}
                    >
                      <p>Price: $0/month</p>
                      <h3>Key Features</h3>
                      <List
                        dataSource={features1}
                        renderItem={(item) => (
                          <List.Item style={itemStyles}>
                            {item.available ? (
                              <CheckCircleOutlined
                                style={{ color: "green", marginRight: 8 }}
                              />
                            ) : (
                              <CloseCircleOutlined
                                style={{ color: "red", marginRight: 8 }}
                              />
                            )}
                            <span>{item.feature}</span>
                          </List.Item>
                        )}
                      />
                    </Card>

                    <Card
                      title="Premium Plan"
                      style={{
                        ...cardStyles,
                        boxShadow: isHovered2
                          ? "0 8px 16px rgba(0, 0, 0, 0.2)"
                          : "0 4px 8px rgba(0, 0, 0, 0.1)",
                        transform: isHovered2 ? "scale(1.05)" : "scale(1)",
                      }}
                      onMouseEnter={handleHover2}
                      onMouseLeave={handleLeave2}
                    >
                      <p>Price: $5/month</p>
                      <h3>Key Features</h3>
                      <List
                        dataSource={features2}
                        renderItem={(item) => (
                          <List.Item style={itemStyles}>
                            {item.available ? (
                              <CheckCircleOutlined
                                style={{ color: "green", marginRight: 8 }}
                              />
                            ) : (
                              <CloseCircleOutlined
                                style={{ color: "red", marginRight: 8 }}
                              />
                            )}
                            <span>{item.feature}</span>
                          </List.Item>
                        )}
                      />
                      <div style={buttonsContainerStyles}>
                        <Button type="primary">Subscribe Now</Button>
                      </div>
                    </Card>
                  </div>
                </div>
              </Row>
              {/* <Row>
                <Col span={12}>
                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item>
                </Col>
              </Row> */}
            </Form>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default CompanyRegistration;
const containerStyles = {
    textAlign: "center",
    fontFamily: "Helvetica",
    color: "#111019",
  };
  
  const headingStyles = {
     fontSize: "25px",
    // fontStyle: "normal",
    // fontWeight: 700,
    // lineHeight: "65.104px",
    // letterSpacing: "-2.955px",
  };
  
  const cardsContainerStyles = {
    display: "flex",
    justifyContent: "center",
  };
  
  const cardStyles = {
    width: 300,
    margin: "0 16px",
    textAlign: "left",
    borderRadius: "8px",
    padding: "16px",
    transition: "box-shadow 0.3s ease, transform 0.3s ease", // Add transition for smoother hover effect
    cursor: "pointer", // Change cursor on hover
  };
  
  const itemStyles = {
    display: "flex",
    alignItems: "center",
    marginBottom: "8px", // Add some spacing between list items
    justifyContent: "flex-start", // Align list items to the left
  };
  
  const buttonsContainerStyles = {
    marginTop: "16px", // Add some spacing between features and buttons
    display: "flex",
    justifyContent: "center",
  };
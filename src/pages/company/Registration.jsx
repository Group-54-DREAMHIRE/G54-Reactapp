import React, { useState, useEffect } from "react";

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
  message,
  List,
  Spin,
  Result,
} from "antd";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import ImgCrop from "antd-img-crop";
import { InboxOutlined } from "@ant-design/icons";
import "../../assets/styles/CompanyRegistration.scss";
import { storage } from "../../api/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import {
  fetchUserData,
  updateProfileData,
} from "../../api/authenticationService";
import StripeCheckout from "react-stripe-checkout";

const { Link, Title } = Typography;

const CompanyRegistration = () => {
  const user = JSON.parse(localStorage.getItem("USER"));
  const [fileURL, setFileURL] = useState(null);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [approval, setApproval] = useState(false);
  const [brLink, setBrLink] = useState(null);
  const [hasResistration, setHasRegistration] = useState(false);
  const [reject, setReject] =useState(true);

  useEffect(() => {
    setApproval(user.approval);
    setReject(user.reject);
    setFileURL(user.registration);
    if (fileURL) {
      setHasRegistration(true);
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const handlefileChange = (info) => {
    console.log(info.file);
    setFile(info.file.originFileObj);
    if (file) {
      info.file.status = "done";
    }
    //console.log(file, "BR File");
  };

  const handleSubmit = async () => {
    let brUrl = null;
    if (file) {
      setLoading(true);
      const imageRef = ref(
        storage,
        `dreamhire/companies/${user.name}/registration/${user.id}`
      );
      
      await uploadBytes(imageRef, file)
      .then(() => {
        console.log(file);
      })
      .catch((error) => {
        console.log(error.message);
      });

      await getDownloadURL(imageRef)
          .then((url) => {
            setFileURL(url);
            setBrLink(url);
            brUrl= url;
            console.log(brUrl);
          })
          .catch((error) => {
            console.log(error.message);
          })
}
      let registrationData = {
        registration: brUrl,
      };
      let data = {
        url: `/api/v1/company/saveBR/${user.id}`,
        data: registrationData,
        method: "post",
      };
      try {
        const response = await fetchUserData(data);
        console.log(response);
        if (response.status === 200) {
          setLoading(false);
          message.success("Successfully Updated");
          console.log("successfull");
          setFile(null);
          setHasRegistration(true);
        } else {
          setLoading(false);
          setFile(null);
          message.error("Data is invalid!");
        }
      } catch (e) {
        setLoading(false);
        setFile(null);
        console.dir(e);
      }
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

  const onToken = (token) => {
    console.log(token);}

  return (
    <>
      <Spin spinning={loading}>
        <Row className="company-registration-n">
          <Col span={24}>
            <Form layout="vertical" onFinish={handleSubmit}>
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

              {!approval &&  !reject &&
                (!hasResistration ? (
                  <Row style={{ marginTop: "5%" }} justify="center" gutter={20}>
                    <Col span={24}>
                      <Form.Item
                        rules={[
                          {
                            required: true,
                            message: "Please upload a business report",
                          },
                        ]}
                      >
                        <Upload.Dragger
                          required
                          showUploadList={fileURL === null ? true : false}
                          action=""
                          name="files"
                          multiple={false}
                          listType="picture"
                          onChange={handlefileChange}
                        >
                          <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                          </p>
                          <p className="ant-upload-text">
                            Click or drag file to this area to upload
                          </p>
                          <p className="ant-upload-hint">
                            Support for a single or bulk upload.
                            <br />
                            Strictly prohibit from uploading company data or
                            other band files
                          </p>
                        </Upload.Dragger>
                      </Form.Item>
                    </Col>
                    <Col>
                      <Button
                        disabled={file === null ? true : false}
                        htmlType="submit"
                        type="primary"
                        style={{ borderRadius: "0" }}
                      >
                        Upload
                      </Button>
                    </Col>
                    { !hasResistration? null:
                    (<Col>
                      <Button
                        onClick={() => setHasRegistration(!hasResistration)}
                        type="primary"
                        style={{ borderRadius: "0" }}
                      >
                        Back
                      </Button>
                    </Col>)}
                  </Row>
                ) : (
                  <>
                    <Row
                      justify="space-around"
                      gutter={20}
                      style={{
                        margin: "5% 0",
                        padding: "5%",
                        boxShadow: "0 0 50px rgba(0,0,0,.1)",
                      }}
                    >
                      <Col span={24}>
                        <Result title="Your bussiness registration has been sent to the admin" />
                      </Col>
                      <Col>
                        <Button
                          target="_blank" 
                          href={fileURL}
                          size="large" 
                          type="primary">
                            View Business Registration
                        </Button>
                      </Col>
                      <Col>
                        <Button
                          onClick={() => setHasRegistration(!hasResistration)}
                          size="large"
                          type="primary"
                        >
                         Edit Business Registration
                        </Button>
                      </Col>
                    </Row>
                  </>
                ))}

              {approval && !reject && (
                <Row justify='center'>
                  <Col span={20} style={{boxShadow: '0 0 50px rgba(0,0,0,.07)', marginTop: '5%'}}>
                    <Result
                      status="success"
                      title="Company approval have been success!"
                      subTitle="Now you can post job adverticements and events under pament packages"
                    />
                  </Col>
                </Row>
              )}
              {reject && (
                <Row justify='center'>
                  <Col span={20} style={{boxShadow: '0 0 50px rgba(0,0,0,.07)', marginTop: '5%'}}>
                    <Result
                      status="error"
                      title="Your approval have been rejected"
                      subTitle="You can't post any job adveticement or event!"
                    />
                  </Col>
                </Row>
              )}
              <Row justify="center">
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
                         <StripeCheckout
                            token={onToken}
                            name = "PAYMENT"
                            currency="USD"
                            amount="500"
                            stripeKey="pk_test_51NtjygF11OuUiVZCu3pbo1UcmVQflm4jMnE2Hv2AfjFY7yF9SR6QfAAMVNk4Rq46X6nDy0cCuN500fdrTGwaEclW00bloMQvLj"
                          /> 
                  
                        {/* <Button type="primary">Subscribe Now</Button> */}
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
      </Spin>
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

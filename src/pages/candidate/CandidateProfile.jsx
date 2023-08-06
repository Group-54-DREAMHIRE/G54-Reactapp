import React, { useState } from "react";
import { motion } from "framer-motion";
import { pageanimation } from "../../assets/animations/pageanimation";
import {
  MailOutlined,
  PhoneOutlined,
  PlusOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { FiMapPin } from "react-icons/fi";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import ImgCrop from "antd-img-crop";
import { candidateDetails } from "../../store/demo/candidateProfile";
import {
  Row,
  Col,
  Upload,
  Form,
  Typography,
  Input,
  Divider,
  Select,
  DatePicker,
  Button,
  message,
} from "antd";
import { currencies, salary, language } from "../../store/demo/profile";
const { TextArea } = Input;
const { Title, Link, Text } = Typography;

export default function Profile() {
  const [name, setName] = useState(candidateDetails.name);
  const [title, setTitle] = useState(candidateDetails.title);
  const [birthday, setBirthday] = useState(null);
  const [currency, setCuurency] = useState("USD$");
  const [minSalary, setMinSalary] = useState(candidateDetails.minSalary);
  const [maxSalary, setMaxSalary] = useState(candidateDetails.maxSalary);
  const [description, setDiscription] = useState(candidateDetails.description);
  const [phone, setPhone] = useState(candidateDetails.phone);
  const [email, setEmail] = useState(candidateDetails.email);
  const [city, setCity] = useState(candidateDetails.city);
  const [address, setAddress] = useState(candidateDetails.address);
  const [facebook, setFacebook] = useState(candidateDetails.facebook);
  const [twitter, setTwitter] = useState(candidateDetails.twitter);
  const [linkedIn, setLinkedIn] = useState(candidateDetails.linkedIn);

  const handleName = (value) => {
    setName(value);
  };
  const handleTitle = (value) => {
    setTitle(value);
  };
  const handleDescription = (value) => {
    setDiscription(value);
  };
  const handlePhone = (value) => {
    setPhone(value);
  };
  const handleEmail = (value) => {
    setEmail(value);
  };
  const handleAddress = (value) => {
    setAddress(value);
  };
  const handleCity = (value) => {
    setCity(value);
  };
  const handleFacebook = (value) => {
    setFacebook(value);
  };
  const handleTwitter = (value) => {
    setTwitter(value);
  };
  const handleLinkedIn = (value) => {
    setLinkedIn(value);
  };

  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const handleChange = (info) => {
    console.log(info.file.name);
  };
  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  return (
    <>
      <motion.div
        variants={pageanimation}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.5 }}
      >
        <Row style={{ padding: "3%" }} className="profile-main-w">
          <Col span={24}>
            <Row>
              <ImgCrop rotationSlider>
                <Upload
                  name="avatar"
                  listType="picture-card"
                  className="avatar-uploader"
                  showUploadList={false}
                  // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  beforeUpload={beforeUpload}
                  onChange={handleChange}
                >
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt="avatar"
                      style={{
                        width: "100%",
                      }}
                    />
                  ) : (
                    uploadButton
                  )}
                </Upload>
              </ImgCrop>
            </Row>

            <Row justify="center">
              <Col span={23}>
                <Form layout="vertical">
                  <Row justify="start">
                    <Title level={2} style={{ margin: "30px 0" }}>
                      Basic Information
                    </Title>
                    <Divider style={{ margin: "0" }} />
                  </Row>
                  <Row>
                    <Col span={24}>
                      <Row justify="space-between" gutter={[0, 35]}>
                        <Col span={11}>
                          <Title level={4} style={{ marginBottom: "0" }}>
                            Your Name:
                          </Title>
                          <Title
                            level={5}
                            editable={{ onChange: handleName }}
                            style={{ marginTop: "6px" }}
                          >
                            {name}
                          </Title>
                        </Col>
                        <Col span={11}>
                          <Title level={4} style={{ marginBottom: "0" }}>
                            Professional title:
                          </Title>
                          <Title
                            level={5}
                            editable={{ onChange: handleTitle }}
                            style={{ marginTop: "6px" }}
                          >
                            {title}
                          </Title>
                        </Col>

                        <Col span={11}>
                          <Title level={4} style={{}}>
                            Birthday:
                          </Title>
                          <DatePicker
                            style={{
                              boxShadow: "0px 0px 5px  rgba(0,0,0,.1)",
                              height: "40px",
                            }}
                            onChange={(date) => setBirthday(date)}
                          />
                        </Col>

                        <Col span={24}>
                          <Row justify="space-between">
                            {/* <Col span={3}>
                              <Title level={4} style={{}}>
                                Currency:
                              </Title>
                              <Select
                                defaultValue={"USD$"}
                                value={currency}
                                onChange={(value) => setCuurency(value)}
                                // mode="tags"
                                style={{
                                  width: "100%",
                                  boxShadow: "0px 0px 5px  rgba(0,0,0,.1)",
                                  borderRadius: "0",
                                  fontSize: "medium",
                                  fontFamily: "arial",
                                }}
                                options={currencies}
                              />
                            </Col> */}
                            <Col span={9}>
                              <Title level={4} style={{}}>
                                Minimum Salary:
                              </Title>
                              <Select
                                value={minSalary}
                                onChange={(value) => setMinSalary(value)}
                                // mode="tags"
                                style={{
                                  width: "100%",
                                  boxShadow: "0px 0px 5px  rgba(0,0,0,.1)",
                                  borderRadius: "0",
                                  fontSize: "medium",
                                  borderRadius: "0 !important",
                                  fontFamily: "arial",
                                }}
                                options={salary}
                              />
                            </Col>
                            <Col span={9}>
                              <Title level={4} style={{}}>
                                Maximum Salary:
                              </Title>
                              <Select
                                value={maxSalary}
                                onChange={(value) => setMaxSalary(value)}
                                // mode="tags"
                                style={{
                                  width: "100%",
                                  boxShadow: "0px 0px 5px  rgba(0,0,0,.1)",
                                  borderRadius: "0",
                                  fontSize: "medium",
                                  borderRadius: "0 !important",
                                  fontFamily: "arial",
                                }}
                                options={salary}
                              />
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row style={{ marginTop: "30px", marginBottom: "30px" }}>
                    <Title level={4}>Descreption:</Title>
                    <Title
                      level={5}
                      editable={{ onChange: handleDescription }}
                      style={{ marginTop: "6px" }}
                    >
                      {description}
                    </Title>
                  </Row>
                  <Row
                    style={{ marginTop: "20px", padding: "2%" }}
                    justify="space-between"
                  >
                    <Col span={10}>
                      <Title level={3} style={{ margin: "0" }}>
                        CONTACT
                      </Title>
                      <Divider style={{ margin: "8px" }} />
                      <Row>
                        <Col span={24}>
                          <Title
                            level={3}
                            style={{
                              display: "inline-block",
                              marginRight: "10px",
                            }}
                          >
                            <MailOutlined />
                          </Title>
                          <Text
                            editable={{ onChange: handleEmail }}
                            style={{ fontSize: "18px" }}
                          >
                            {email}
                          </Text>
                        </Col>
                        <Col span={24}>
                          <Title
                            level={3}
                            style={{
                              display: "inline-block",
                              marginRight: "10px",
                            }}
                          >
                            <PhoneOutlined />
                          </Title>
                          <Text
                            editable={{ onChange: handlePhone }}
                            style={{ fontSize: "18px" }}
                          >
                            {phone}
                          </Text>
                        </Col>
                        <Col span={24}>
                          <Title
                            level={3}
                            style={{
                              display: "inline-block",
                              marginRight: "10px",
                            }}
                          >
                            <FiMapPin />
                          </Title>
                          <Text
                            editable={{ onChange: handleAddress }}
                            style={{ fontSize: "18px" }}
                          >
                            {address}
                          </Text>
                        </Col>
                        <Col span={24}>
                          <Title
                            level={3}
                            style={{
                              display: "inline-block",
                              marginRight: "10px",
                            }}
                          >
                            <FiMapPin />
                          </Title>
                          <Text
                            editable={{ onChange: handleCity }}
                            style={{ fontSize: "18px" }}
                          >
                            {city}
                          </Text>
                        </Col>
                      </Row>
                    </Col>
                    <Col span={10}>
                      <Row gutter={20}>
                        <Col span={24}>
                          <Title level={3} style={{ margin: "0" }}>
                            FOLLOW
                          </Title>
                          <Divider style={{ margin: "8px" }} />
                        </Col>
                        <Col>
                          <Link target="_blabk" href={facebook}>
                            <Title
                              editable={{ onChange: handleFacebook }}
                              level={3}
                              style={{
                                display: "inline-block",
                                marginRight: "10px",
                              }}
                            >
                              <FaFacebook />
                            </Title>
                          </Link>
                        </Col>
                        <Col>
                          <Link target="_blabk" href={twitter}>
                            <Title
                              editable={{ onChange: handleTwitter }}
                              value={twitter}
                              level={3}
                              style={{
                                display: "inline-block",
                                marginRight: "10px",
                              }}
                            >
                              <FaTwitterSquare />
                            </Title>
                          </Link>
                        </Col>
                        <Col>
                          <Link target="_blabk" href={linkedIn}>
                            <Title
                              editable={{ onChange: handleLinkedIn }}
                              level={3}
                              style={{
                                display: "inline-block",
                                marginRight: "10px",
                              }}
                            >
                              <AiFillLinkedin />
                            </Title>
                          </Link>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row style={{padding: '0 2%'}}>
                    <Button
                    htmlType="submit"
                    size="large"
                    type="primary"
                    style={{borderRadius: '0'}}> 
                      Save
                    </Button>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </motion.div>
    </>
  );
}

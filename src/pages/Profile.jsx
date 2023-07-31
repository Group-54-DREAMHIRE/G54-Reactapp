import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import ApplyJob from "./candidate/ApplyJob";
import { pageanimation } from "../assets/animations/pageanimation";
import { EditOutlined } from "@ant-design/icons";
import { PlusOutlined } from "@ant-design/icons";
import { getUser } from '../store/auth/userSlice';
import ImgCrop from "antd-img-crop";
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
} from "antd";
import { openApplyJob } from "../store/models/modelsSlice";
const { TextArea } = Input;
const { Title } = Typography;
const currencies = [
  {
    value: "USD",
    label: "USD$",
  },
  {
    value: "EURO",
    label: "EURO€",
  },
  {
    value: "AUD",
    label: "AUD$",
  },
  {
    value: "GPB",
    label: "GBP£",
  },
];

const salary = [
  {
    value: "300",
    label: "300",
  },
  {
    value: "400",
    label: "400",
  },
  {
    value: "500",
    label: "500",
  },
  {
    value: "600",
    label: "600",
  },
  {
    value: "700",
    label: "700",
  },
  {
    value: "800",
    label: "800",
  },
  {
    value: "900",
    label: "900",
  },
  {
    value: "1000",
    label: "1000",
  },
];

const languages = [
  {
    value: "english",
    label: "English",
  },
  {
    value: "sinhala",
    label: "Sinhala",
  },
  {
    value: "tamil",
    label: "Tamil",
  },
];

const ages = [
  {
    value: "20",
    label: "20",
  },
  {
    value: "21",
    label: "21",
  },
  {
    value: "22",
    label: "22",
  },
  {
    value: "23",
    label: "23",
  },
  {
    value: "24",
    label: "24",
  },
  {
    value: "25",
    label: "25",
  },
  {
    value: "26",
    label: "26",
  },
  {
    value: "27",
    label: "27",
  },
  {
    value: "28",
    label: "28",
  },
  {
    value: "29",
    label: "29",
  },
  {
    value: "30",
    label: "30",
  },
  {
    value: "31",
    label: "31",
  },
  {
    value: "32",
    label: "32",
  },
  {
    value: "33",
    label: "33",
  },
  {
    value: "34",
    label: "34",
  },
  {
    value: "35",
    label: "35",
  },
];

const Profile = () => {
  const userType = "campany";
  const [company, setCompany] = useState(userType === "company"?true:false);
  const dispatch = useDispatch();
   const user = useSelector(getUser);
   

  const [name, setName] = useState("Dulanjana Weeasinghe");
  const [title, setTitle] = useState("Software Engineer");
  const [languages, setLanguages] = useState([]);
  const [birthday, setBirthday] = useState(null);
  const [currency, setCuurency] = useState("USD$");
  const [minSalary, setMinSalary] = useState("500");
  const [maxSalary, setMaxSalary] = useState("600");
  const [website, setWebsite] = useState("www.dstyles.com");
  const [description, setDiscription] = useState("");
  const [phone, setPhone] = useState("071 290 50 22");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("Matara");
  const [address, setAddress] = useState("Galhena, Bathigama, Dickwella.");
  const [country, setCountry] = useState("SriLanka");

  const [fileList, setFileList] = useState([
    {
      //   uid: '-1',
      //   name: 'image.png',
      //   status: 'done',
      //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ]);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
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
        <Button onClick={() => dispatch(openApplyJob())} type="primary">
          Apply
        </Button>

        <Row style={{ padding: "3%", zIndex: "-1" }} className="profile-main-w">
          <Col span={24}>
            <Row>
              <ImgCrop rotationSlider>
                <Upload
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  listType="picture-circle"
                  fileList={fileList}
                  onChange={onChange}
                  onPreview={onPreview}
                >
                  {fileList.length > 5 ? null : uploadButton}
                </Upload>
              </ImgCrop>
            </Row>

            <Row justify="center">
              <Col span={23}>
                <Form layout="vertical">
                  <Row justify="start">
                    <Title level={2} style={{margin: '30px 0'}}>Basic Information</Title>
                    <Divider style={{ margin: "0" }} />
                  </Row>
                  <Row >
                    <Col span={24}>
                      <Row justify="space-between" gutter={[0,35]}>
                        <Col span={11}>
                          <Title level={4} style={{ marginBottom: "0" }}>
                            Your Name:
                          </Title>
                          <Input
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            style={{
                              paddingTop: "5px",
                              paddingBottom: "5px",
                              marginTop: "15px",
                              boxShadow: "0 0 10px 0 rgba(30,136,229,.3)",
                              borderRadius: "0",
                              fontSize: "large",
                            }}
                            suffix={<EditOutlined />}
                          />
                        </Col>
                        {!company && (
                          <Col span={11}>
                            <Title level={4} style={{ marginBottom: "0" }}>
                              Professional title:
                            </Title>
                            <Input
                              onChange={(e) => setTitle(e.target.value)}
                              value={title}
                              style={{
                                paddingTop: "5px",
                                paddingBottom: "5px",
                                marginTop: "10px",
                                boxShadow: "0 0 10px 0 rgba(30,136,229,.3)",
                                borderRadius: "0",
                                fontSize: "large",
                              }}
                              suffix={<EditOutlined />}
                            />
                          </Col>
                        )}

                        {!company && (
                          <Col span={11}>
                            <Title level={4} style={{}}>
                              Languages:
                            </Title>
                            <Select
                              onChange={(e) => setLanguages(e.target.value)}
                              defaultValue={"English"}
                              mode="tags"
                              style={{
                                width: "100%",
                                boxShadow: "0 0 10px 0 rgba(30,136,229,.3)",
                                borderRadius: "0",
                                fontSize: "medium",
                                borderRadius: "0 !important",
                                fontFamily: "arial",
                              }}
                              options={languages}
                            />
                          </Col>
                        )}

                        {!company && (
                          <Col span={11}>
                            <Title level={4} style={{}}>
                              Birthday:
                            </Title>
                            <DatePicker
                              style={{
                                boxShadow: "0 0 10px 0 rgba(30,136,229,.3)",
                                height: "40px",
                              }}
                              onChange={(date, dateString) => setBirthday(date)}
                            />
                          </Col>
                        )}

                        {company && (
                          <Col span={11}>
                            <Title level={4} style={{ marginBottom: "0" }}>
                              Website:
                            </Title>
                            <Input
                              onChange={(e) => setWebsite(e.target.value)}
                              value={website}
                              style={{
                                paddingTop: "5px",
                                paddingBottom: "5px",
                                marginTop: "10px",
                                boxShadow: "0 0 10px 0 rgba(30,136,229,.3)",
                                borderRadius: "0",
                                fontSize: "large",
                              }}
                              suffix={<EditOutlined />}
                            />
                          </Col>
                        )}

                        <Col span={24}>
                          {!company && (
                            <Row justify="space-between">
                              <Col span={3}>
                                <Title level={4} style={{}}>
                                  Currency:
                                </Title>
                                <Select
                                  defaultValue={"USD$"}
                                  allowClear
                                  value={currency}
                                  onChange={(value)=>setCuurency(value)}
                                  // mode="tags"
                                  style={{
                                    width: "100%",
                                    boxShadow: "0 0 10px 0 rgba(30,136,229,.3)",
                                    borderRadius: "0",
                                    fontSize: "medium",
                                    borderRadius: "0 !important",
                                    fontFamily: "arial",
                                  }}
                                  options={currencies}
                                />
                              </Col>
                              <Col span={9}>
                                <Title level={4} style={{}}>
                                  Minimum Salary:
                                </Title>
                                <Select
                                  allowClear
                                  value={minSalary}
                                  onChange={(value)=>setMinSalary(value)}
                                  // mode="tags"
                                  style={{
                                    width: "100%",
                                    boxShadow: "0 0 10px 0 rgba(30,136,229,.3)",
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
                                onChange={(value)=>setMaxSalary(value)}
                                  allowClear
                                  // mode="tags"
                                  style={{
                                    width: "100%",
                                    boxShadow: "0 0 10px 0 rgba(30,136,229,.3)",
                                    borderRadius: "0",
                                    fontSize: "medium",
                                    borderRadius: "0 !important",
                                    fontFamily: "arial",
                                  }}
                                  options={salary}
                                />
                              </Col>
                            </Row>
                          )}
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row style={{marginTop: '30px', marginBottom: '30px'}}>
                    <Title level={4}>Descreption:</Title>
                    <TextArea
                      onChange={(e) => setDiscription(e.target.value)}
                      value={description}
                      rows={4}
                      style={{ boxShadow: "0 0 10px 0 rgba(30,136,229,.3)" }}
                    />
                  </Row>
                  <Row justify="start">
                    <Title level={2}>Contact Information</Title>
                    <Divider style={{ margin: "0" }} />
                  </Row>
                  <Row justify="space-between" gutter={[0,35]}>
                    <Col span={11}>
                      <Title level={4} style={{ marginBottom: "0" }}>
                        Phone:
                      </Title>
                      <Input
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                        style={{
                          paddingTop: "5px",
                          paddingBottom: "5px",
                          marginTop: "10px",
                          boxShadow: "0 0 10px 0 rgba(30,136,229,.3)",
                          borderRadius: "0",
                          fontSize: "large",
                        }}
                        suffix={<EditOutlined />}
                      />
                    </Col>
                    <Col span={11}>
                      <Title level={4} style={{ marginBottom: "0" }}>
                        Email Address:
                      </Title>
                      <Input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        style={{
                          paddingTop: "5px",
                          paddingBottom: "5px",
                          marginTop: "10px",
                          boxShadow: "0 0 10px 0 rgba(30,136,229,.3)",
                          borderRadius: "0",
                          fontSize: "large",
                        }}
                        suffix={<EditOutlined />}
                      />
                    </Col>

                    <Col span={11}>
                      <Title level={4} style={{ marginBottom: "0" }}>
                        City:
                      </Title>
                      <Input
                        onChange={(e) => setCity(e.target.value)}
                        value={city}
                        style={{
                          paddingTop: "5px",
                          paddingBottom: "5px",
                          marginTop: "10px",
                          boxShadow: "0 0 10px 0 rgba(30,136,229,.3)",
                          borderRadius: "0",
                          fontSize: "large",
                        }}
                        suffix={<EditOutlined />}
                      />
                    </Col>
                    <Col span={11}>
                      <Title level={4} style={{ marginBottom: "0" }}>
                        Full Address:
                      </Title>
                      <Input
                        onChange={(e) => setAddress(e.target.value)}
                        value={address}
                        style={{
                          paddingTop: "5px",
                          paddingBottom: "5px",
                          marginTop: "10px",
                          boxShadow: "0 0 10px 0 rgba(30,136,229,.3)",
                          borderRadius: "0",
                          fontSize: "large",
                        }}
                        suffix={<EditOutlined />}
                      />
                    </Col>
                  </Row>
                  {company && (
                    <Row>
                      <Col span={11}>
                        <Title level={4} style={{ marginBottom: "0" }}>
                          Country:
                        </Title>
                        <Input
                          onChange={(e) => setCountry(e.target.value)}
                          value={country}
                          style={{
                            paddingTop: "5px",
                            paddingBottom: "5px",
                            marginTop: "10px",
                            boxShadow: "0 0 10px 0 rgba(30,136,229,.3)",
                            borderRadius: "0",
                            fontSize: "large",
                          }}
                          suffix={<EditOutlined />}
                        />
                      </Col>
                    </Row>
                  )}
                  <Row style={{marginTop: '25px'}}>
                    <Col>
                        <Button htmlType="submit" type="primary" size="large">Save</Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
        <ApplyJob />
      </motion.div>
    </>
  );
};

export default Profile;

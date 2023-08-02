import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { pageanimation } from "../../assets/animations/pageanimation";
import { EditOutlined } from "@ant-design/icons";
import { PlusOutlined } from "@ant-design/icons";
import ImgCrop from "antd-img-crop";
import {
  Row,
  Col,
  Upload,
  Form,
  Typography,
  Input,
  Divider,
  Button,
} from "antd";
const { TextArea } = Input;
const { Title } = Typography;

const AdminProfile = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("Dulanjana Weeasinghe");
  const [title, setTitle] = useState("Software Engineer");
  const [description, setDiscription] = useState("");
  const [phone, setPhone] = useState("071 290 50 22");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("Matara");
  const [address, setAddress] = useState("Galhena, Bathigama, Dickwella.");

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
      </motion.div>
    </>
  );
};

export default AdminProfile;

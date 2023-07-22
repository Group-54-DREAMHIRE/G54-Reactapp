import React, { useState } from "react";
import { Row, Col, Upload, Form, Typography, Input, Divider, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import ImgCrop from "antd-img-crop";
import { changeConfirmLocale } from "antd/es/modal/locale";

import { EditOutlined } from "@ant-design/icons";

const { Paragraph, Title } = Typography;

const languages = [
  {
    value: 'english',
    label: 'English'
  },{
    value: 'sinhala',
    label: 'Sinhala'
  },{
    value: 'tamil',
    label: 'Tamil'
  },
]

export const Profile = () => {
  const [firstname, setFirstName] = useState("Dulanjana");
  const onChangeName = (e) => {
    setFirstName(e.target.value);
  };
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
      <Row style={{ padding: "3%",zIndex:'-1' }} className="profile-main-w">
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
          <Row justify="start">
            <Title level={2}>Basic Information</Title>
            <Divider style={{ margin: "0" }} />
          </Row>
          <Row justify="center">
            <Col span={22}>
              <Form layout="vertical">
                <Row>
                  <Col span={24}>
                    <Row justify="space-between">
                      <Col span={11}>
                        <Title level={4} style={{ marginBottom: "0" }}>
                          First Name:
                        </Title>
                        <Input
                          onChange={(e) => setFirstName(e.target.value)}
                          value={firstname}
                          style={{
                            paddingTop: "5px",
                            paddingBottom: "5px",
                            marginTop: "10px",
                            boxShadow: "0 0 10px 0 rgba(30,136,229,.4)",
                            borderRadius: "0",
                            fontSize: 'medium',
                          }}
                          suffix={<EditOutlined />}
                        />
                      </Col>
                      <Col span={11}>
                        <Title level={4} style={{ marginBottom: "0" }}>
                          Last Name:
                        </Title>
                        <Input
                          onChange={(e) => setFirstName(e.target.value)}
                          value={firstname}
                          style={{
                            paddingTop: "5px",
                            paddingBottom: "5px",
                            marginTop: "10px",
                            boxShadow: "0 0 10px 0 rgba(30,136,229,.4)",
                            borderRadius: "0",
                            fontSize: 'medium',
                          }}
                          suffix={<EditOutlined />}
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Row justify="space-between">
                      <Col span={11}>
                        <Title level={4} style={{}}>
                          Languages:
                        </Title>
                        <Select
                          allowClear
                          mode="tags"
                          style={{ 
                            width: "100%", 
                            boxShadow: "0 0 10px 0 rgba(30,136,229,.4)",
                            borderRadius: "0",
                            fontSize: 'medium',
                            borderRadius: '0 !important',
                            fontFamily: 'arial'
                          }}
                          placeholder="Tags Mode"
                          // onChange={handleChange}
                          options={languages}
                        />
                      </Col>
                      <Col span={11}>
                        <Title level={4} style={{ marginBottom: "0" }}>
                          Last Name:
                        </Title>
                        <Input
                          onChange={(e) => setFirstName(e.target.value)}
                          value={firstname}
                          style={{
                            paddingTop: "5px",
                            paddingBottom: "5px",
                            marginTop: "10px",
                            boxShadow: "0 0 10px 0 rgba(30,136,229,.4)",
                            borderRadius: "0",
                            fontSize: 'medium',
                            
                          }}
                          suffix={<EditOutlined />}
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

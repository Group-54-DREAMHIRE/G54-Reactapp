import { useEffect, useState } from "react";
import { storage } from "../../api/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import ImgCrop from "antd-img-crop";
import {
  PlusOutlined,
  CameraOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import {
  Row,
  Col,
  Form,
  Input,
  Button,
  Avatar,
  Divider,
  Upload,
  Typography,
  Image,
  message,
  Spin,
} from "antd";
import { UserOutlined, EditOutlined, UploadOutlined } from "@ant-design/icons";
import danuka from "../../../src/assets/images/danuka.jpg";
import { motion } from "framer-motion";
import { pageanimation } from "../../../src/assets/animations/pageanimation";
import { updateProfileData } from "../../api/authenticationService";
const { Title } = Typography;

export default function AdminProfile() {
  const user = JSON.parse(localStorage.getItem("USER"));
  const id = user.id;
  const [name, setName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);
  const [profilePicture, setProfilePicture] = useState(null);
  const [tempDP, setTempDP] = useState(null);
  const [profileData, setProfileData] = useState([]);
  const [imageUpload, setImageUpload] = useState();
  const [loading, setLoading] = useState(false);

  const handleFileChange = (info) => {
    setImageUpload(info.file.originFileObj);
    setProfilePicture(URL.createObjectURL(info.file.originFileObj));
    console.log(info.file.originFileObj);
  };

  useEffect(() => {
    setProfileData(user);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [id]);

  useEffect(() => {
    if (profileData) {
      setName(profileData.name);
      setEmail(profileData.email);
      setPhone(profileData.phone);
      setProfilePicture(profileData.profilePicture);
    }
  }, [profileData]);

  const handleName = (value) => {
    setName(value);
  };
  const handlePhone = (value) => {
    setPhone(value);
  };
  const handleEmail = (value) => {
    setEmail(value);
  };

  const handleSubmit = async () => {
    if (imageUpload) {
      setLoading(true);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      const imageRef = ref(storage, `dreamhire/admins/${id}`);
      await uploadBytes(imageRef, imageUpload).then(() => {
        console.log(imageUpload);
        getDownloadURL(imageRef)
          .then((url) => {
            setTempDP(url);
            console.log(tempDP);
          })
          .catch((error) => {
            console.log(error.message);
          })
          .catch((error) => {
            console.log(error.message);
          });
      });
    }
    let adminData = {
      id:id,
      name,
      profilePicture: tempDP,
      phone,
      email,
    };
    let data = {
      url: `/api/v1/admin/save/${id}`,
      data: adminData,
      method: "post",
    };
    try {
      const response = await updateProfileData(data);
      console.log(response.data);
      if (response.status === 200) {
        localStorage.setItem("USER", JSON.stringify(response.data));
        setLoading(false);
        message.success("Successfully Updated");
      } else {
        setLoading(false);
        message.error("Data is invalid!");
      }
    } catch (e) {
      setLoading(false);
      console.log(e.error);
    }
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
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
      <Spin spinning={loading}>
        <motion.div
          variants={pageanimation}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.5 }}
        >
          <Row>
            <Col span={24}>
              <Form layout="vertical" onFinish={handleSubmit}>
                <Row>
                  <Col>
                    {profilePicture === null ? (
                      <ImgCrop action="" rotationSlider>
                        <Upload
                          showUploadList={
                            profilePicture === null ? true : false
                          }
                          accept=".jpg,.jpeg,.png"
                          action=""
                          name="avatar"
                          listType="picture-card"
                          onChange={handleFileChange}
                        >
                          {uploadButton}
                        </Upload>
                      </ImgCrop>
                    ) : (
                      <Row align="bottom" gutter={10}>
                        <Col >
                          <Image
                            preview={false}
                            width={125}
                            src={profilePicture}
                          />
                        </Col>
                        <Col>
                          <Upload 
                            showUploadList={
                              profilePicture === null ? true : false
                            }
                            onChange={handleFileChange}>
                            <span style={{ cursor: "pointer" }}>
                              <CameraOutlined />
                            </span>
                          </Upload>
                        </Col>
                      </Row>
                    )}
                  </Col>
                </Row>
                  <Row justify="start">
                    <Col span={22}>
                      <Title level={2} style={{ margin: "30px 0 5px 0" }}>
                        BASIC INFORMATION
                      </Title>
                      <hr style={{ border: "2px solid rgba(0,0,0,.4)" }} />
                    </Col>
                  </Row>
                  <Row>
                    <Col span={24}>
                      <Row justify="space-between" gutter={[0, 10]}>
                        <Col span={11}>
                          <Title level={4} style={{ marginBottom: "0" }}>
                            Your Name:
                          </Title>
                          <Title
                            level={5}
                            editable={{ onChange: handleName }}
                            style={{ marginTop: "6px" }}
                          >
                            {name === null ? "Name" : name}
                          </Title>
                        </Col>
                        <Col span={11}>
                          <Title level={4} style={{ marginBottom: "0" }}>
                            Email:
                          </Title>
                          <Title
                            level={5}
                            editable={{ onChange: handleEmail }}
                            style={{ marginTop: "6px" }}
                          >
                            {email === null ? "Email" : email}
                          </Title>
                        </Col>
                        <Col span={11}>
                          <Title level={4} style={{ marginBottom: "0" }}>
                            Phone:
                          </Title>
                          <Title
                            level={5}
                            editable={{ onChange: handlePhone }}
                            style={{ marginTop: "6px" }}
                          >
                            {phone === null ? "Phone" : phone}
                          </Title>
                        </Col>
                        <Col span={24}>
                        <Button
                        htmlType="submit"
                        type="primary"
                        size="large"
                        style={{borderRadius: '0'}}
                          >Save</Button>
                        </Col>
                      </Row>
                    </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </motion.div>
      </Spin>
    </>
  );
}

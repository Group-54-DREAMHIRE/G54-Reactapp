import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { pageanimation } from "../assets/animations/pageanimation";
import { format, startOfDay } from "date-fns";
import moment from "moment/moment";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  PlusOutlined,
  EditOutlined,
  UploadOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { FiMapPin } from "react-icons/fi";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
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
  Alert,
  Image,
  Checkbox,
  Avatar,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getUser, updateUser } from "../store/auth/userSlice";
import {
  getProfileData,
  updateProfileData,
} from "../api/authenticationService";
const { TextArea } = Input;
const { Title, Link, Text } = Typography;

export default function CandidatePage() {
  const user = useSelector(getUser);
  const id = user.id;

  const dispatch = useDispatch();
  const [profileData, setProfileData] = useState([]);
  const [formatbDay, setFormatbDay]=useState();

  useEffect(() => {
    if(user==null){
      getProfileData(`/api/v1/candidate/get/${id}`)
      .then((response) => {
        console.log(response.data);
        setProfileData(response.data);
        console.log(profileData.name);
      })
      .catch((error) => {
        console.error("Error fetching user profile:", error);
      });
    }else{
      setProfileData(user);
    }
    
  }, [id]);

  useEffect(() => {
    if (profileData) {
      const dateObj = moment(profileData.birthday);
      setFormatbDay(dateObj.format("YYYY MM DD"));
    }
  }, [profileData]);

  return (
    <>
      <motion.div
        variants={pageanimation}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.5 }}
      >
        <Row style={{ padding: "1%" }} className="profile-main-w">
          <Col span={24}>
            <Row style={{padding: '0 2%'}}>
                <Image preview={false} width={125} src={profileData.profilePicture} />
            </Row>
            <Row justify="center">
              <Col span={23}>
                <Form layout="vertical">
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
                      <Row justify="space-between" gutter={[0, 35]}>
                        <Col span={11}>
                          <Title level={4} style={{ marginBottom: "0" }}>
                            Your Name:
                          </Title>
                          <Title
                            level={5}
                            style={{ marginTop: "6px" }}
                          >
                            {profileData.name}
                          </Title>
                        </Col>
                        <Col span={11}>
                          <Title level={4} style={{ marginBottom: "0" }}>
                            Professional title:
                          </Title>
                          <Title
                            level={5}
                            style={{ marginTop: "6px" }}>
                            {profileData.title}
                          </Title>
                        </Col>

                        <Col span={11}>
                          <Title level={4} style={{}}>
                            Birthday:
                          </Title>
                            <label>
                              {formatbDay}
                            </label>
                        </Col>
                        <Col span={24}>
                          <Row justify="space-between">
                            <Col span={3}>
                              <Title level={4} style={{}}>
                                Currency:
                              </Title>
                                <label>
                                  {profileData.currency}
                                </label>
                            </Col>
                            <Col span={9}>
                              <Title level={4} style={{}}>
                                Minimum Salary:
                              </Title>
                                <label>
                                  {profileData.minSalary}
                                </label>
                            </Col>
                            <Col span={9}>
                              <Title level={4} style={{}}>
                                Maximum Salary:
                              </Title>
                                <label >
                                  {profileData.maxSalary}
                                </label>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row style={{ marginTop: "30px", marginBottom: "30px" }}>
                    <Col span={24}>
                      <Title level={4}>Descreption:</Title>
                      <Title
                        level={5}
                        style={{ marginTop: "6px" }}>
                        {profileData.description}
                      </Title>
                    </Col>
                  </Row>
                  <Row style={{ marginTop: "20px" }} justify="space-between">
                    <Col span={12}>
                      <Title level={3} style={{ margin: "0" }}>
                        CONTACT
                      </Title>
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
                            style={{ fontSize: "16px" }}
                          >
                            {profileData.email}
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
                            style={{ fontSize: "16px" }}
                          >
                            {profileData.phone}
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
                            style={{ fontSize: "16px" }}
                          >
                            {profileData.address}
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
                            style={{ fontSize: "16px" }}
                          >
                            {profileData.city}
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
                        </Col>
                        <Col>
                          <Link target="_blabk" href={profileData.facebook}>
                            <Title
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
                          <Link target="_blabk" href={profileData.twitter}>
                            <Title
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
                          <Link target="_blabk" href={profileData.linkedIn}>
                            <Title
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
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </motion.div>
    </>
  );
}

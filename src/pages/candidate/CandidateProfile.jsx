import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { pageanimation } from "../../assets/animations/pageanimation";
import { format, startOfDay } from "date-fns";
import moment from "moment/moment";
import { storage, put } from "../../api/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
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
  Alert,
  Image,
  Checkbox,
  Avatar,
} from "antd";
import { currencies, salary } from "../../store/demo/profile";
import { useDispatch, useSelector } from "react-redux";
import { getUser, updateUser } from "../../store/auth/userSlice";
import {
  getProfileData,
  updateProfileData,
} from "../../api/authenticationService";
const { TextArea } = Input;
const { Title, Link, Text } = Typography;

export default function Profile() {
  const user = useSelector(getUser);
  const id = user.id;

  const dispatch = useDispatch();
  const [profileData, setProfileData] = useState([]);

  const [imageUpload, setImageUpload] = useState();
  const [loading, setLoading] = useState();

  const [name, setName] = useState("");
  const [file, setFile] = useState(null);
  const [visible, setVisible] = useState(true);
  const [profilePicture, setProfilePicture] = useState(null);
  const [title, setTitle] = useState("");
  const [birthday, setBirthday] = useState();
  const [currency, setCuurency] = useState("");
  const [minSalary, setMinSalary] = useState("");
  const [maxSalary, setMaxSalary] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [formatbday, setFormatbDay] = useState();

  const [tempDP, setTempDP]= useState(null);

  const [editingbd, setEditing] = useState(false);
  const [editingc, setEdittingC] = useState(false);
  const [editingMin, setEdittingMin] = useState(false);
  const [editingMax, setEdittingMax] = useState(false);

  const [successmsg, setSuccessmsg] = useState();
  const [error, setError] = useState();

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
      setName(profileData.name);
      setTitle(profileData.title);
      const dateObj = moment(profileData.birthday);
      setFormatbDay(dateObj.format("YYYY MM DD"));
      setCuurency(profileData.currency);
      setMinSalary(profileData.minSalary);
      setMaxSalary(profileData.maxSalary);
      setDescription(profileData.description);
      setVisible(profileData.visible);
      setEmail(profileData.email);
      setPhone(profileData.phone);
      setAddress(profileData.address);
      setCity(profileData.city);
      setFacebook(profileData.facebook);
      setTwitter(profileData.twitter);
      setLinkedIn(profileData.linkedIn);
      setProfilePicture(profileData.profilePicture);
      setTempDP(profileData.profilePicture);
      console.log(profilePicture);
    }
  }, [profileData]);

  const handleName = (value) => {
    setName(value);
  };
  const handleTitle = (value) => {
    setTitle(value);
  };
  const handleDescription = (value) => {
    setDescription(value);
    console.log(value);
  };
  const handlePhone = (value) => {
    setPhone(value);
  };
  const handleEmail = (value) => {
    setEmail(value);
  };
  const handleAddress = (value) => {
    setAddress(value);
    console.log(value);
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



  const handleFileChange = (info) => {
    setImageUpload(info.file.originFileObj);
    setProfilePicture(URL.createObjectURL(info.file.originFileObj))
    console.log(info.file.originFileObj);
  };


  const handleSubmit = async () => {
    if (imageUpload) {
      const imageRef = ref(storage, `dreamhire/candidates/${id}`);

      uploadBytes(imageRef, imageUpload).then(() => {
        console.log(imageUpload);
        getDownloadURL(imageRef)
          .then((url) => {
            setTempDP(url);
            setProfilePicture(url);
            console.log(profilePicture);
          })
          .catch((error) => {
            console.log(error.message);
          })
          .catch((error) => {
            console.log(error.message);
          });
      });
    }
   if(tempDP){
    let candidateData = {
      name,
      profilePicture:tempDP,
      currency,
      minSalary,
      maxSalary,
      visible,
      title,
      birthday,
      description,
      phone,
      email,
      city,
      address,
      facebook,
      twitter,
      linkedIn,
    };
    let data = {
      url: `/api/v1/candidate/save/${id}`,
      data: candidateData,
      method: "post",
    };
    const response = await updateProfileData(data);
    console.log(response.data);
    if (response.status === 200) {
      setSuccessmsg("Succesfully updated");
      localStorage.setItem("USER",JSON.stringify(response.data));
      dispatch(updateUser(response.data));
      setTimeout(
        () => {
         setSuccessmsg("");
        },
        2000
      );
    }else{
      setError("Invalid Data!");
    }
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
              <ImgCrop action="" rotationSlider>
                <Upload
                  accept=".jpg,.jpeg,.png"
                  action=""
                  name="avatar"
                  listType="picture-card"
                  onChange={handleFileChange}
                >
                  {profilePicture !== null ? (
                    <Image preview={false} width={250} src={profilePicture} />
                  ) : (
                    uploadButton
                  )}
                </Upload>
              </ImgCrop>
            </Row>

            <Row justify="center">
              <Col span={23}>
                <Form layout="vertical" onFinish={handleSubmit}>
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
                            editable={{ onChange: handleName }}
                            style={{ marginTop: "6px" }}
                          >
                            {name===null?"Name":name}
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
                            {title===null?"Title":title}
                          </Title>
                        </Col>

                        <Col span={11}>
                          <Title level={4} style={{}}>
                            Birthday:
                          </Title>

                          {editingbd || formatbday === null ? (
                            <DatePicker
                              style={{
                                boxShadow: "0px 0px 5px  rgba(0,0,0,.1)",
                                height: "40px",
                              }}
                              onChange={(date) => {
                                setBirthday(date);
                                console.log(date);
                              }}
                            />
                          ) : (
                            <label
                              onClick={(e) => {
                                setEditing(true);
                                console.log(e);
                              }}
                            >
                              {formatbday}
                              <EditOutlined />
                            </label>
                          )}
                        </Col>
                        <Col span={24}>
                          <Row justify="space-between">
                            <Col span={3}>
                              <Title level={4} style={{}}>
                                Currency:
                              </Title>
                              {editingc || currency === null ? (
                                <Select
                                  defaultValue={currency}
                                  value={currency}
                                  onChange={(value) => setCuurency(value)}
                                  style={{
                                    width: "100%",
                                    boxShadow: "0px 0px 5px  rgba(0,0,0,.1)",
                                    borderRadius: "0",
                                    fontSize: "medium",
                                    fontFamily: "arial",
                                  }}
                                  options={currencies}
                                />
                              ) : (
                                <label onClick={() => {setEdittingC(true);setEdittingC(false)}}>
                                  {currency}
                                  <EditOutlined />
                                </label>
                              )}
                            </Col>
                            <Col span={9}>
                              <Title level={4} style={{}}>
                                Minimum Salary:
                              </Title>
                              {editingMin || minSalary === null ? (
                                 <Select
                                 value={minSalary}
                                 defaultValue={minSalary}
                                 onChange={(value) =>{ setMinSalary(value);setEdittingMin(false)}}
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
                              ) : (
                                <label onClick={() => setEdittingMin(true)}>
                                  {minSalary}
                                  <EditOutlined />
                                </label>
                              )}
                             
                            </Col>
                            <Col span={9}>
                              <Title level={4} style={{}}>
                                Maximum Salary:
                              </Title>
                              {editingMax || maxSalary === null ? (
                                 <Select
                                 onChange={(value) => {setMaxSalary(value);setEdittingMax(false)}}
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
                              ) : (
                                <label onClick={() => setEdittingMax(true)}>
                                  {maxSalary}
                                  <EditOutlined />
                                </label>
                              )}
                             
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
                        editable={{ onChange: handleDescription }}
                        style={{ marginTop: "6px" }}
                      >
                        {" "}
                        {description}
                      </Title>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={12}>
                      <Title level={3} style={{ marginTop: "0" }}>
                        SECURITY
                      </Title>
                      <Checkbox
                        checked={!visible}
                        onChange={() => setVisible(false)}
                      >
                        <Text style={{ fontSize: "16px" }}>
                          Account Invisible
                        </Text>
                      </Checkbox>
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
                            editable={{ onChange: handleEmail }}
                            style={{ fontSize: "16px" }}
                          >
                            {email===null?"Email":email}
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
                            style={{ fontSize: "16px" }}
                          >
                            {phone===null?"Phone":phone}
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
                            style={{ fontSize: "16px" }}
                          >
                            {address===null?"Address":address}
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
                            style={{ fontSize: "16px" }}
                          >
                            {city===null?"City":city}
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
                  <Row style={{ padding: "0 2%" }}>
                    <Button
                      htmlType="submit"
                      size="large"
                      type="primary"
                      style={{ borderRadius: "0" }}
                    >
                      Save
                    </Button>
                      { successmsg  && <Alert message={successmsg} type="success" showIcon />}
                      { error  && <Alert message={error} type="error" showIcon />}
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

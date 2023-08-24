import company from "../../assets/images/company.png";
import {
  MailOutlined,
  PhoneOutlined,
  CameraOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { FiMapPin } from "react-icons/fi";
import { FaFacebook, FaPlusSquare, FaTwitterSquare } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getUser, updateUser } from "../../store/auth/userSlice";
import { storage } from "../../api/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import {
  Button,
  Col,
  Divider,
  Image,
  Row,
  Typography,
  Checkbox,
  Form,
  Alert,
  Space,
  Upload,
} from "antd";
import { useState, useEffect } from "react";
import { companyDetails } from "../../store/demo/companyProfile";
import {
  getProfileData,
  updateProfileData,
} from "../../api/authenticationService";
import { parse } from "date-fns";
const { Title, Text, Link } = Typography;

const textStyle = {
  fontSize: "16px",
  lineHeight: "27px",
};
export default function CompanyProfile() {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const id = user.id;

  const [profileData, setProfileData] = useState([]);

  const [name, setName] = useState("");
  const [imageUpload, setImageUpload] = useState();
  const [logo, setLogo] = useState(null);
  const [visible, setVisible] = useState(true);
  const [description, setDescription] = useState("");
  const [about, setAbout] = useState("");
  const [services, setServices] = useState("");
  const [serviceKeys, setServiceKeys] = useState([]);
  const [images, setImages] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");
  const [linkedIn, setLinkedIn] = useState("");

  const [listServiceKeys, setListServiceKeys] = useState("");
  const [tempLogo, setTempLogo] = useState(null);
  const [hasImage, setHasImage] = useState(true);

  const [successmsg, setSuccessmsg] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    if (user == null) {
      getProfileData(`/api/v1/company/get/${id}`)
        .then((response) => {
          console.log(response.data);
          setProfileData(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error fetching user profile:", error);
        });
    } else {
      setProfileData(user);
    }
  }, [id]);

  useEffect(() => {
    if (profileData) {
      setName(profileData.name);
      setLogo(profileData.logo);
      setTempLogo(profileData.logo);
      console.log(profileData.logo);
      if (profileData.logo === null) {
        setHasImage(false);
        console.log(hasImage);
        console.log(profileData.logo);
      }

      setDescription(profileData.description);
      setAbout(profileData.about);
      setServices(profileData.services);
      setListServiceKeys(profileData.serviceKeys);
      if (typeof profileData.serviceKeys === "string") {
        const val = profileData.serviceKeys.split("/ ");
        setServiceKeys(val);
      } else {
        setServiceKeys([]);
      }
      console.log(serviceKeys);
      setVisible(profileData.visible);
      setEmail(profileData.email);
      setPhone(profileData.phone);
      setAddress(profileData.address);
      setFacebook(profileData.facebook);
      setTwitter(profileData.twitter);
      setLinkedIn(profileData.linkedIn);
    }
  }, [profileData]);

  const handleName = (value) => {
    setName(value);
  };

  const handleDescription = (value) => {
    setDescription(value);
  };
  const handleAbout = (value) => {
    setAbout(value);
  };
  const handleServices = (value) => {
    setServices(value);
  };
  const handleServiceKeys = (index, value) => {
    const updatedValue = [...serviceKeys];
    updatedValue[index] = value;
    setServiceKeys(updatedValue);
    setListServiceKeys(updatedValue.join("/ "));
    console.log(updatedValue.join("/ "));
  };
  const handleEmail = (value) => {
    setEmail(value);
  };
  const handlePhone = (value) => {
    setPhone(value);
  };
  const handleAddress = (value) => {
    setAddress(value);
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
    console.log(info.file.originFileObj);
    setImageUpload(info.file.originFileObj);
    setLogo(URL.createObjectURL(info.file.originFileObj));
    console.log(logo);
    
  };
  const handleSubmit = async () => {
    if (imageUpload) {
      const imageRef = ref(storage, `dreamhire/companies/${name}/${id}`);

      uploadBytes(imageRef, imageUpload).then(() => {
        console.log(imageUpload);
        getDownloadURL(imageRef)
          .then((url) => {
            setLogo(url);
            setTempLogo(url);
            console.log(tempLogo);
            setHasImage(true);
          })
          .catch((error) => {
            console.log(error.message);
          })
          .catch((error) => {
            console.log(error.message);
          });
      });
    }
    if(tempLogo){
      let companyData = {
        name,
        logo: tempLogo,
        images,
        description,
        about,
        services,
        serviceKeys: listServiceKeys,
        visible,
        phone,
        email,
        address,
        facebook,
        twitter,
        linkedIn,
      };
      let data = {
        url: `/api/v1/company/save/${id}`,
        data: companyData,
        method: "post",
      };
      const response = await updateProfileData(data);
      console.log(response.data);
      if (response.status === 200) {
        setSuccessmsg("Succesfully updated");
        localStorage.setItem("USER",JSON.stringify(response.data));
        dispatch(updateUser(response.data));
        setProfileData(null);
        setTimeout(() => {
          setSuccessmsg("");
        }, 2000);
      } else {
        setError("Invalid Data!");
      }
    }
  };

  return (
    <>
      <Row>
        <Col span={24}>
          <Form onFinish={handleSubmit}>
            <Row
              gutter={[30, 40]}
              justify="space-around"
              style={{ padding: "1% 2%" }}
            >
              <Col span={10}>
                {hasImage ?(
                  <>
                    <Row align="bottom" gutter={10}>
                      <Col span={23}>
                        <Image src={logo} preview={false} />
                      </Col>
                      <Col span={1}>
                        <Upload onChange={handleFileChange}>
                          <span style={{ cursor: "pointer" }}>
                            <CameraOutlined />
                          </span>
                        </Upload>
                      </Col>
                    </Row>
                  </>
                )  : (
                 <>
                  <Upload onChange={handleFileChange}>
                    <Button icon={<PlusOutlined />}>Add Cover</Button>
                  </Upload>
                 </>
                )}
              </Col>
              <Col span={10}>
                <Title
                  
                  editable={{ onChange: handleName }}
                  style={{ margin: "0" }}
                >
                  {name === null ? "Company Name" : name}
                </Title>
              </Col>
              <Col span={24}>
                <Text
                  style={textStyle}
                  editable={{ onChange: handleDescription }}
                >
                  {description === null ? "Description" : description}
                </Text>
              </Col>
              <Col span={24}>
                <Title level={3} style={{ margin: "0" }}>
                  ABOUT
                </Title>
                <Divider
                  style={{
                    margin: "8px 0",
                    border: "2px solid rgba(0,0,0,.6)",
                  }}
                />
                <Text style={textStyle} editable={{ onChange: handleAbout }}>
                  {about === null ? "About" : about}
                </Text>
              </Col>
              <Col span={24}>
                <Title level={3} style={{ margin: "0" }}>
                  OUR SERVICE
                </Title>
                <Divider
                  style={{
                    margin: "8px 0",
                    border: "2px solid rgba(0,0,0,.6)",
                  }}
                />
                <Text style={textStyle} editable={{ onChange: handleServices }}>
                  {services === null ? "Servises" : services}
                </Text>
                {serviceKeys && (
                  <ul>
                    {serviceKeys.map((item, index) => {
                      return (
                        <li key={index}>
                          <Text
                            key={index}
                            editable={{
                              onChange: (value) =>
                                handleServiceKeys(index, value),
                            }}
                          >
                            {item}
                          </Text>
                        </li>
                      );
                    })}
                    <br />

                    <Button
                      onClick={() => setServiceKeys([...serviceKeys, ""])}
                    >
                      Add
                    </Button>
                  </ul>
                )}
              </Col>
              <Col span={24}>
                <Title level={3} style={{ margin: "0" }}>
                  LIFE AT CREATIVE
                </Title>
                <Divider
                  style={{
                    margin: "8px 0",
                    border: "2px solid rgba(0,0,0,.6)",
                  }}
                />
              </Col>
              {companyDetails.images.map((item, index) => {
                return (
                  <Col span={11}>
                    <Image
                      key={index}
                      src={item}
                      style={{ width: "100%" }}
                      preview={false}
                    />
                  </Col>
                );
              })}
              <Col span={24}>
                <Title level={3} style={{ marginTop: "20" }}>
                  SECURITY
                </Title>
                <Divider
                  style={{
                    margin: "8px 0",
                    border: "2px solid rgba(0,0,0,.6)",
                  }}
                />
                <Checkbox onChange={() => setVisible(true)}>
                  Account Invisible
                </Checkbox>
              </Col>
            </Row>
            <Row
              style={{ marginTop: "20px", padding: "2%" }}
              justify="space-between"
            >
              <Col span={10}>
                <Title level={3} style={{ margin: "0" }}>
                  CONTACT US
                </Title>
                <Divider
                  style={{
                    margin: "8px 0",
                    border: "2px solid rgba(0,0,0,.6)",
                  }}
                />
                <Row gutter={[0, 20]} style={{ marginTop: "20px" }}>
                  <Col span={24}>
                    <Space size="large">
                      <Title
                        level={3}
                        style={{ display: "inline-block", margin: "0" }}
                      >
                        <MailOutlined />
                      </Title>
                      <Text
                        editable={{ onChange: handleEmail }}
                        style={{ fontSize: "18px" }}
                      >
                        {email === null ? "Email" : email}
                      </Text>
                    </Space>
                  </Col>
                  <Col span={24}>
                    <Space size="large">
                      <Title
                        level={3}
                        style={{ display: "inline-block", margin: "0px" }}
                      >
                        <PhoneOutlined />
                      </Title>
                      <Text
                        editable={{ onChange: handlePhone }}
                        style={{ fontSize: "18px" }}
                      >
                        {phone === null ? "Phone" : phone}
                      </Text>
                    </Space>
                  </Col>
                  <Col span={24}>
                    <Space size="large">
                      <Title
                        level={3}
                        style={{ display: "inline-block", margin: "0px" }}
                      >
                        <FiMapPin />
                      </Title>

                      <Text
                        editable={{ onChange: handleAddress }}
                        style={{ fontSize: "18px" }}
                      >
                        {address === null ? "Address" : address}
                      </Text>
                    </Space>
                  </Col>
                </Row>
              </Col>
              <Col span={10}>
                <Row gutter={20}>
                  <Col span={24}>
                    <Title level={3} style={{ margin: "0" }}>
                      FOLLOW US
                    </Title>
                    <Divider
                      style={{
                        margin: "8px 0",
                        border: "2px solid rgba(0,0,0,.6)",
                      }}
                    />
                  </Col>
                  <Col>
                    <Link target="_blabk" href={facebook}>
                      <Title
                        editable={{ onChange: handleFacebook }}
                        level={3}
                        style={{ display: "inline-block", marginRight: "10px" }}
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
                        style={{ display: "inline-block", marginRight: "10px" }}
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
                        style={{ display: "inline-block", marginRight: "10px" }}
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
              {successmsg && (
                <Alert message={successmsg} type="success" showIcon />
              )}
              {error && <Alert message={error} type="error" showIcon />}
            </Row>
          </Form>
        </Col>
      </Row>
    </>
  );
}

import company from "../../assets/images/company.png";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { FiMapPin } from "react-icons/fi";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../store/auth/userSlice";
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
  const user = JSON.parse(useSelector(getUser));
  const id = user.id;

  const [profileData, setProfileData] = useState([]);

  const [name, setName] = useState("name");
  const [logo, setLogo] = useState(null);
  const [visible, setVisible] = useState(true);
  const [description, setDescription] = useState(companyDetails.description);
  const [about, setAbout] = useState(companyDetails.about);
  const [services, setServices] = useState(companyDetails.services);
  const [serviceKeys, setServiceKeys] = useState([]);
  const [images, setImages] = useState(null);
  const [email, setEmail] = useState(companyDetails.email);
  const [phone, setPhone] = useState(companyDetails.phone);
  const [address, setAddress] = useState(companyDetails.address);
  const [facebook, setFacebook] = useState(companyDetails.facebook);
  const [twitter, setTwitter] = useState(companyDetails.twitter);
  const [linkedIn, setLinkedIn] = useState(companyDetails.linkedIn);

  const [listServiceKeys, setListServiceKeys] = useState("");

  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProfileData(`/api/v1/company/get/${id}`)
      .then((response) => {
        console.log(response.data);
        setProfileData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setError("Invalid data");
        console.error("Error fetching user profile:", error);
      });
  }, [id]);

  useEffect(() => {
    if (profileData) {
      setName(profileData.name);
      setDescription(profileData.description);
      setAbout(profileData.about);
      setServices(profileData.services);
      setListServiceKeys(profileData.serviceKeys);
      
    if (typeof profileData.serviceKeys === 'string') {
      const val = profileData.serviceKeys.split(', ');
      setServiceKeys(val);
    } else {
      setServiceKeys([]); // Set default value if serviceKeys is not a string
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

 
  const handleName= (value) => {
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
    setListServiceKeys(updatedValue.join(', '));
    console.log(updatedValue.join(', '));
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

  const handleSubmit = async () => {
    let companyData = {
      userId: id,
      name,
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
      setMessage(response.data);
      setTimeout(
        () => {
          setMessage(null);
          clearTimeout();
        },
        500,
        2000
      );
    }
  };

  return (
    <>
      <Row>
        <Col span={24}>
          <Form onFinish={handleSubmit}>
            <Row
              gutter={[30, 40]}
              justify="center"
              style={{ padding: "1% 2%" }}
            >
              <Col span={10}>
                <Title
                  editable={{ onChange: handleName }}
                  style={{ margin: "0" }}
                >
                  {name}
                </Title>
                <Divider style={{ margin: "8px" }} />
              </Col>
              <Col span={8}>
                <Image src={company} preview={false} />
              </Col>
              <Col span={24}>
                <Text
                  style={textStyle}
                  editable={{ onChange: handleDescription }}
                >
                  {description}
                </Text>
              </Col>
              <Col span={24}>
                <Title level={2} style={{ margin: "0" }}>
                  ABOUT
                </Title>
                <Divider style={{ margin: "8px" }} />
                <Text style={textStyle} editable={{ onChange: handleAbout }}>
                  {about}
                </Text>
              </Col>
              <Col span={24}>
                <Title level={2} style={{ margin: "0" }}>
                  OUR SERVICE
                </Title>
                <Divider style={{ margin: "8px" }} />
                <Text style={textStyle} editable={{ onChange: handleServices }}>
                  {services}
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
                                handleServiceKeys(index, value)
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
                <Title level={2} style={{ margin: "0" }}>
                  LIFE AT CREATIVE
                </Title>
                <Divider style={{ margin: "8px" }} />
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
                <Title level={2} style={{ marginTop: "20" }}>
                  SECURITY
                </Title>
                <Divider style={{ margin: "8px" }} />
                <Checkbox onChange={() => setVisible(true)}>
                  {" "}
                  Account Ianvisible
                </Checkbox>
              </Col>
            </Row>
            <Row
              style={{ marginTop: "20px", padding: "2%" }}
              justify="space-between"
            >
              <Col span={10}>
                <Title level={2} style={{ margin: "0" }}>
                  CONTACT US
                </Title>
                <Divider style={{ margin: "8px" }} />
                <Row>
                  <Col span={24}>
                    <Title
                      level={3}
                      style={{ display: "inline-block", marginRight: "10px" }}
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
                      style={{ display: "inline-block", marginRight: "10px" }}
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
                      style={{ display: "inline-block", marginRight: "10px" }}
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
                </Row>
              </Col>
              <Col span={10}>
                <Row gutter={20}>
                  <Col span={24}>
                    <Title level={2} style={{ margin: "0" }}>
                      FOLLOW US
                    </Title>
                    <Divider style={{ margin: "8px" }} />
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
              {message && <Alert message={message} type="success" showIcon />}
              {error && <Alert message={error} type="error" showIcon />}
            </Row>
          </Form>
        </Col>
      </Row>
    </>
  );
}

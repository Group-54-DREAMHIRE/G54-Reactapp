import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { FiMapPin } from "react-icons/fi";
import { FaFacebook,FaTwitterSquare } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

import { Button, Col, Divider, Image, Row, Typography } from "antd";
import { useState, useEffect } from "react";
import { companyDetails } from "../store/demo/companyProfile";
import { getProfileData } from "../api/authenticationService";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllCompanies, getCompany } from "../store/company/companySlice";
const { Title, Text, Link } = Typography;

const textStyle = {
  fontSize: "16px",
  lineHeight: "27px",
};
export default function CompanyPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const [description, setDescription] = useState("");
  const [about, setAbout] = useState("");
  const [services, setServices] = useState("");
  const [serviceKeys, setServiceKeys] = useState("");
  const [imageList, setImageList] = useState([]);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [logo, setLogo] = useState();

  const [listServiceKeys, setListServiceKeys] = useState("");

  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const companies = useSelector(getAllCompanies);
  const { id } = useParams();
  const company = dispatch(getCompany(companies,id));
  const [profileData, setProfileData] = useState([]);
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
      setLogo(profileData.logo)
      
    if (typeof profileData.serviceKeys === 'string') {
      const val = profileData.serviceKeys.split('/ ');
      setServiceKeys(val);
    } else {
      setServiceKeys([]); // Set default value if serviceKeys is not a string
    }
    console.log(serviceKeys);
      setEmail(profileData.email);
      setPhone(profileData.phone);
      setAddress(profileData.address);
      setFacebook(profileData.facebook);
      setTwitter(profileData.twitter);
      setLinkedIn(profileData.linkedIn);
    }
  }, [profileData]);
 
  return (
    <>
      <Row>
        <Col span={24}>
          <Row gutter={[30, 40]} justify="center" style={{ padding: "1% 2%" }}>
            <Col span={10}>
              <Title style={{ margin: "0" }}>Creative Software</Title>
              <Divider style={{ margin: "8px" }} />
            </Col>
            <Col span={8}>
              <Image src={logo} preview={false} />
            </Col>
            <Col span={24}>
              <Text
                style={textStyle}
              >
                {description}
              </Text>
            </Col>
            <Col span={24}>
              <Title  level={2}  style={{ margin: "0" }}>ABOUT</Title>
              <Divider style={{ margin: "8px" }} />
              <Text style={textStyle}>
                {about}
              </Text>
            </Col>
            <Col span={24}>
              <Title level={2}  style={{ margin: "0" }}>OUR SERVICE</Title>
              <Divider style={{ margin: "8px" }} />
              <Text style={textStyle}>
                {services}
              </Text>
              {serviceKeys && (
                <ul>
                  {serviceKeys.map((item, index) => {
                    return (
                      <li key={index}>
                        <Text
                          key={index}
                        >
                          {item}
                        </Text>
                      </li>
                    );
                  })}
                </ul>
              )}
            </Col>
            <Col span={24}>
              <Title level={2}  style={{ margin: "0" }}>LIFE AT CREATIVE</Title>
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
          </Row>
          <Row
            style={{ marginTop: "20px", padding: "2%" }}
            justify="space-between"
          >
            <Col span={10}>
              <Title level={3}  style={{ margin: "0" }}>Contact Us</Title>
              <Divider style={{ margin: "8px" }} />
              <Row>
                <Col span={24}>
                  <Title
                    level={4}
                    style={{ display: "inline-block", marginRight: "10px" }}
                  >
                    <MailOutlined />
                  </Title>
                  <Text style={{ fontSize: "17px" }}>
                    {email}
                  </Text>
                </Col>
                <Col span={24}>
                  <Title
                    level={4}
                    style={{ display: "inline-block", marginRight: "10px" }}
                  >
                    <PhoneOutlined />
                  </Title>
                  <Text style={{ fontSize: "17px" }}>
                    {phone}
                    </Text>
                </Col>
                <Col span={24}>
                  <Title
                    level={4}
                    style={{ display: "inline-block", marginRight: "10px" }}
                  >
                    <FiMapPin />
                  </Title>
                  <Text style={{ fontSize: "17px" }}>
                   {address}
                  </Text>
                </Col>
              </Row>
            </Col>
            <Col span={10}>
              <Row gutter={20}>
                <Col span={24}>
                  <Title level={3}  style={{ margin: "0" }}>Follow Us</Title>
                  <Divider style={{ margin: "8px" }} />
                </Col>
                <Col>
                  <Link target="_blabk" href={facebook}>
                  <Title
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
                   value={twitter}
                    level={3}
                    style={{ display: "inline-block", marginRight: "10px" }}
                  >
                    <FaTwitterSquare/>
                  </Title>
                  </Link>
                </Col>
                <Col>
                  <Link target="_blabk" href={linkedIn}>
                  <Title
                    level={3}
                    style={{ display: "inline-block", marginRight: "10px" }}
                  >
                    <AiFillLinkedin/>
                  </Title>
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

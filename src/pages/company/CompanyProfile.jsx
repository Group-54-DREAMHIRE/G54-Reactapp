import company from "../../assets/images/company.png";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { FiMapPin } from "react-icons/fi";
import { FaFacebook,FaTwitterSquare } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

import { Button, Col, Divider, Image, Row, Typography } from "antd";
import { useState } from "react";
import { companyDetails } from "../../store/demo/companyProfile";
const { Title, Text, Link } = Typography;

const textStyle = {
  fontSize: "16px",
  lineHeight: "27px",
};
export default function CompanyProfile() {
  const userType = localStorage.getItem("USERTYPE");
  const user = userType === "company" ? true : false;
  const [description, setDescription] = useState(companyDetails.description);
  const [about, setAbout] = useState(companyDetails.about);
  const [services, setServices] = useState(companyDetails.services);
  const [serviceKeys, setServiceKeys] = useState(companyDetails.serviceKeys);
  const [imageList, setImageList] = useState([]);
  const [email, setEmail] = useState(companyDetails.email);
  const [phone, setPhone] = useState(companyDetails.phone);
  const [address, setAddress] = useState(companyDetails.address);
  const [facebook, setFacebook] = useState(companyDetails.facebook);
  const [twitter, setTwitter] = useState(companyDetails.twitter);
  const [linkedIn, setLinkedIn] = useState(companyDetails.linkedIn);
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
              <Title level={2} style={{ margin: "0" }}>ABOUT</Title>
              <Divider style={{ margin: "8px" }} />
              <Text style={textStyle} editable={{ onChange: handleAbout }}>
                {about}
              </Text>
            </Col>
            <Col span={24}>
              <Title level={2} style={{ margin: "0" }}>OUR SERVICE</Title>
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
                              handleServiceKeys(index, value),
                          }}
                        >
                          {item}
                        </Text>
                      </li>
                    );
                  })}
                  <br />
                  <Button onClick={() => setServiceKeys([...serviceKeys, ""])}>
                    Add
                  </Button>
                </ul>
              )}
            </Col>
            <Col span={24}>
              <Title level={2} style={{ margin: "0" }}>LIFE AT CREATIVE</Title>
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
              <Title  level={2} style={{ margin: "0" }}>CONTACT US</Title>
              <Divider style={{ margin: "8px" }} />
              <Row>
                <Col span={24}>
                  <Title
                    level={3}
                    style={{ display: "inline-block", marginRight: "10px" }}
                  >
                    <MailOutlined />
                  </Title>
                  <Text editable={{ onChange: handleEmail }} style={{ fontSize: "18px" }}>
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
                  <Text editable={{ onChange: handlePhone }} style={{ fontSize: "18px" }}>
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
                  <Text editable={{ onChange: handleAddress }} style={{ fontSize: "18px" }}>
                   {address}
                  </Text>
                </Col>
              </Row>
            </Col>
            <Col span={10}>
              <Row gutter={20}>
                <Col span={24}>
                  <Title level={2} style={{ margin: "0" }}>FOLLOW US</Title>
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
                   editable={{ onChange: handleTwitter}} 
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
                   editable={{ onChange: handleLinkedIn }} 
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
          <Row style={{padding: '0 2%'}}>
                    <Button
                    htmlType="submit"
                    size="large"
                    type="primary"
                    style={{borderRadius: '0'}}> 
                      Save
                    </Button>
                  </Row>
        </Col>
      </Row>
    </>
  );
}

import {
  MailOutlined,
  PhoneOutlined,
  CameraOutlined,
  PlusOutlined,
  LoadingOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import ImgCrop from "antd-img-crop";
import { FiMapPin } from "react-icons/fi";
import { FaFacebook, FaPlusSquare, FaTwitterSquare } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { storage } from "../../api/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { Facebook } from "react-content-loader";
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
  Spin,
  message,
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
  const user = JSON.parse(localStorage.getItem("USER"));
  const id = user.id;

  const [profileData, setProfileData] = useState([]);

  const [name, setName] = useState(null);
  const [imageUpload, setImageUpload] = useState(null);
  const [logo, setLogo] = useState(null);
  const [visible, setVisible] = useState(true);
  const [description, setDescription] = useState(null);
  const [about, setAbout] = useState(null);
  const [services, setServices] = useState(null);
  const [serviceKeys, setServiceKeys] = useState([]);
  const [images, setImages] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [address, setAddress] = useState(null);
  const [facebook, setFacebook] = useState(null);
  const [twitter, setTwitter] = useState(null);
  const [linkedIn, setLinkedIn] = useState(null);

  const [listServiceKeys, setListServiceKeys] = useState(null);
  const [imageList, setImageList] = useState([]);

  const [tempV, setTempV] = useState(true);
  const [change, setChange] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    setProfileData(user);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    if (profileData) {
      setName(profileData.name);
      setLogo(profileData.logo);
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
      setVisible(profileData.visible);
      setEmail(profileData.email);
      setPhone(profileData.phone);
      setAddress(profileData.address);
      setFacebook(profileData.facebook);
      setTwitter(profileData.twitter);
      setLinkedIn(profileData.linkedIn);
      setTempV(profileData.visible);
    }
  }, [profileData]);

  const handleName = (value) => {
    setName(value);
    setChange(true);
  };

  const handleDescription = (value) => {
    setDescription(value);
    setChange(true);
  };
  const handleAbout = (value) => {
    setAbout(value);
    setChange(true);
  };
  const handleServices = (value) => {
    setServices(value);
    setChange(true);
  };
  const handleServiceKeys = (index, value) => {
    const updatedValue = [...serviceKeys];
    updatedValue[index] = value;
    setServiceKeys(updatedValue);
    setListServiceKeys(updatedValue.join("/ "));
    setChange(true);
    console.log(updatedValue.join("/ "));
  };
  const handleEmail = (value) => {
    setEmail(value);
    setChange(true);
  };
  const handlePhone = (value) => {
    setPhone(value);
    setChange(true);
  };
  const handleAddress = (value) => {
    setAddress(value);
    setChange(true);
  };
  const handleFacebook = (value) => {
    setFacebook(value);
    setChange(true);
  };
  const handleTwitter = (value) => {
    setTwitter(value);
    setChange(true);
  };
  const handleLinkedIn = (value) => {
    setLinkedIn(value);
    setChange(true);
  };
  const handleFileChange = (info) => {
    console.log(info.file.originFileObj);
    setImageUpload(info.file.originFileObj);
    if (imageUpload) {
      info.file.status = "done";
    }
    setChange(true);
    console.log(logo);
  };

  const handleImageList = (info) => {
    console.log(info);
  };
  const handleSubmit = async () => {
    setLoading(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    if (name && (imageUpload || logo)) {
      let temp = logo;
      if (imageUpload) {
        const imageRef = ref(storage, `dreamhire/companies/${name}/${id}`);
        await uploadBytes(imageRef, imageUpload)
          .then(() => {
            console.log(imageUpload);
          })
          .catch((error) => {
            console.log(error.message);
          });

        await getDownloadURL(imageRef)
          .then((url) => {
            setLogo(url);
            temp = url;
            console.log(logo);
          })
          .catch((error) => {
            console.log(error.message);
          });
      }
        let companyData = {
          name,
          logo: temp,
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
          localStorage.setItem("USER", JSON.stringify(response.data));
          setProfileData(null);
          setLoading(false);

          message.success("Successfully Updated");
        } else {
          setLoading(false);
          message.error("Data is invalid!");
        }
      
    } else {
      setErrorMsg("You must fill name and upload logo! Try again!");
      setLoading(false);
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
        <Row>
          { errorMsg &&
           ( <Col span={24}>
            <Alert
              message="Error"
              description={errorMsg}
              type="error"
              showIcon
              closable
            />
          </Col>)}
          <Col span={24}>
            <Form onFinish={handleSubmit}>
              <Row
                gutter={[30, 40]}
                justify="space-around"
                align="bottom"
                style={{ padding: "1% 2%" }}
              >
                <Col span={8}>
                  {logo === null ? (
                    <Upload
                      showUploadList={logo === null ? true : false}
                      accept=".jpg,.jpeg,.png"
                      action=""
                      name="avatar"
                      listType="picture-card"
                      onChange={handleFileChange}
                    >
                      {uploadButton}
                    </Upload>
                  ) : (
                    <Row align="bottom" gutter={10}>
                      <Col span={23}>
                        <Image preview={false} src={logo} />
                      </Col>
                      <Col span={1}>
                        <Upload
                          showUploadList={logo === null ? true : false}
                          onChange={handleFileChange}
                        >
                          <span style={{ cursor: "pointer" }}>
                            <CameraOutlined />
                          </span>
                        </Upload>
                      </Col>
                    </Row>
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
                  <Text
                    style={textStyle}
                    editable={{ onChange: handleServices }}
                  >
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
                  <Title level={4} style={{}}>
                    Add Images:
                  </Title>
                  <Upload
                    onChange={(info) => handleImageList(info)}
                    name="image"
                    action=""
                    listType="picture"
                    showUploadList={false}
                    multiple
                  >
                    <Button icon={<UploadOutlined />}>Select Image</Button>
                  </Upload>
                  {imageList.map((item, index) => {
                    return (
                      <Col key={index} span={11}>
                        <Image
                          key={index}
                          src={item}
                          style={{ width: "100%" }}
                          preview={false}
                        />
                      </Col>
                    );
                  })}
                </Col>

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
                  <Checkbox
                    checked={!tempV}
                    onChange={() => {
                      setTempV(!tempV);
                      setVisible(visible ? false : true);
                      console.log(visible, "DUla");
                      setChange(true);
                    }}
                  >
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
                  disabled={!change}
                  htmlType="submit"
                  size="large"
                  type="primary"
                  style={{ borderRadius: "0" }}
                >
                  Save
                </Button>
              </Row>
            </Form>
          </Col>
        </Row>
      </Spin>
    </>
  );
}

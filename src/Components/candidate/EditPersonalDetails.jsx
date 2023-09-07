import {
  Card,
  Col,
  Input,
  Row,
  Typography,
  Upload,
  Image,
  Modal,
  Space,
  Button,
} from "antd";
import { useState } from "react";
import {
  CameraOutlined,
  UserOutlined,
  PlusOutlined,
  EditOutlined,
  UploadOutlined,
  LoadingOutlined,
  MailOutlined,
  PhoneOutlined,
  LinkedinOutlined,
  GithubOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { AiOutlineLink } from "react-icons/ai";
import ImgCrop from "antd-img-crop";
import { useDispatch, useSelector } from "react-redux";
import { closeAddLink, openAddLink } from "../../store/models/modelsSlice";
const { Title, Text, Link } = Typography;
export default function EditPersonalDetails() {
  const dispatch = useDispatch();
  const addLink = useSelector((state) => state.models.addLink);
  const linksList = [
    {
      key: 1,
      label: "LinkedIn",
      icon: <LinkedinOutlined />,
      placeholder: "Enter LinkedIn",
    },
    {
      key: 2,
      label: "Twitter",
      icon: <LinkedinOutlined />,
      placeholder: "Enter LinkedIn",
    },
    {
      key: 3,
      label: "GitHub",
      icon: <LinkedinOutlined />,
      placeholder: "Enter LinkedIn",
    },
    {
      key: 4,
      label: "Website",
      icon: <LinkedinOutlined />,
    },
    {
      key: 5,
      label: "Discode",
      icon: <LinkedinOutlined />,
    },
  ];

  const [imageUpload, setImageUpload] = useState(null);
  const [profilePicture, setProfilePicture] = useState(null);
  const [activeDetails, setActiveDetails] = useState([]);
  const [linkedIn, setLinkedIn] = useState();
  const [twitter, setTwitter] = useState();
  const [github, setGithub] =useState();
  const [website, setWebsite] = useState();
  const [discode, setDiscode] = useState();
  const [active, setActive] = useState(0);
  const handleFileChange = (info) => {
    setImageUpload(info.file.originFileObj);
    if (imageUpload) {
      info.file.status = "done";
      setProfilePicture(URL.createObjectURL(imageUpload));
    }
    console.log(info.file.originFileObj);
  };
  
  const uploadButton = (
    <div
      style={{
        marginTop: 8,
        borderRadius: "50%",
        backgroundColor: "rgba(243,244,246,255)",
      }}
    >
      Upload
    </div>
  );
  const InputLink = ({id}) => {
    const [value, setValue] = useState("");
    const handleAdd =(id)=>{
        if(id===1){
            setLinkedIn(value);
            setValue("");
            console.log(value, "LinkedIn");
            dispatch(closeAddLink());
        }else if(id===2){
            setTwitter(value);
            setValue("");
            console.log(twitter, "twitter");
            dispatch(closeAddLink());
        }else if(id===3){
           setGithub(value);
           setValue("");
           console.log(github, "github");
           dispatch(closeAddLink());
        }else if(id===4){
            setWebsite(value);
            setValue("");
            console.log(website, "website");
            dispatch(closeAddLink());
        }else if(id===5){
            setDiscode(value);
            setValue("");
            console.log(discode, "discode");
            dispatch(closeAddLink());
        }else{
            dispatch(closeAddLink());
        }
      }
    return (
     <Row style={{padding: '5%', position: 'absolute', backgroundColor: 'white', boxShadow:'0 0 20px rgba(0,0,0,.2)', zIndex: '5'}}>
        <Col span={24}>
            <Row gutter={[20,20]} justify='end'>
                <Col span={24}>
                    <Title level={5} style={{margin: '0'}}>
                        Link URL
                    </Title>
                </Col>
                <Col span={24}>
                    <Input 
                        onChange={(e)=>{setValue(e.target.value);console.log(value)}}
                        value={value}
                        className="input-w" 
                        placeholder="Enter Link"/>
                </Col>
                <Col>
                    <Space>
                    <Button 
                        size="small" 
                        type="primary" 
                        style={{borderRadius: '0'}}
                        onClick={()=>dispatch(closeAddLink())}>
                            Cancel
                    </Button>
                    <Button 
                        onClick={()=>handleAdd(id)}
                        size="small"  
                        type="primary" 
                        style={{borderRadius: '0'}}>
                        Add
                    </Button>
                    </Space>
                </Col>
            </Row>
        </Col>
     </Row>
    );
  };
  return (
    <>
      <Row className="edit-personal-details-w">
        <Col span={24}>
          <Card
            style={{
              boxShadow: "0 0 40px rgba(0,0,0,.1)",
              padding: "1% 2%",
              borderRadius: "15px",
            }}
            hoverable
          >
            <Row gutter={[20, 30]}>
              <Col span={24}>
                <Text
                  style={{ margin: 0, fontSize: "21px", fontWeight: "800" }}
                >
                  Edit Personal Details
                </Text>
              </Col>
              <Col span={16}>
                <Title level={5} style={{ marginTop: 0 }}>
                  Full Name
                </Title>
                <Input
                  className="input-w"
                  size="large"
                  placeholder="Enter your title, first-and lase name"
                />
              </Col>
              <Col span={8}>
                {profilePicture === null ? (
                  <>
                    <ImgCrop rotationSlider>
                      <Upload
                        style={{
                          marginTop: 8,
                          borderRadius: "50%",
                        }}
                        listType="picture-circle"
                        showUploadList={profilePicture === null ? true : false}
                        accept=".jpg,.jpeg,.png"
                        action=""
                        name="avatar"
                        onChange={handleFileChange}
                      >
                        {uploadButton}
                      </Upload>
                    </ImgCrop>
                    <Col
                      style={{ position: "absolute", bottom: 15, right: "30%" }}
                    >
                      <ImgCrop rotationSlider>
                        <Upload
                          showUploadList={
                            profilePicture === null ? true : false
                          }
                          onChange={handleFileChange}
                        >
                          <span
                            style={{
                              cursor: "pointer",
                              fontSize: "18px",
                              lineHeight: "18px",
                            }}
                          >
                            <CameraOutlined />
                          </span>
                        </Upload>
                      </ImgCrop>
                    </Col>
                  </>
                ) : (
                  <Row align="bottom" gutter={10}>
                    <Col>
                      <Image
                        style={{
                          borderRadius: "50%",
                        }}
                        preview={false}
                        width={100}
                        height={100}
                        src={profilePicture}
                      />
                    </Col>
                    <Col
                      style={{ position: "absolute", bottom: 5, right: "35%" }}
                    >
                      <ImgCrop rotationSlider>
                        <Upload
                          showUploadList={
                            profilePicture === null ? true : false
                          }
                          onChange={handleFileChange}
                        >
                          <span
                            style={{
                              cursor: "pointer",
                              fontSize: "18px",
                              lineHeight: "18px",
                            }}
                          >
                            <CameraOutlined />
                          </span>
                        </Upload>
                      </ImgCrop>
                    </Col>
                  </Row>
                )}
              </Col>
              <Col span={16}>
                <Title level={5} style={{ marginTop: 0 }}>
                  Job Title{" "}
                  <Text
                    style={{
                      color: "rgba(0,0,0,.5)",
                      fontSize: "14px",
                      fontWeight: "300",
                    }}
                  >
                    optional
                  </Text>
                </Title>
                <Input
                  className="input-w"
                  size="large"
                  placeholder="Enter your job title"
                />
              </Col>
              <Col span={12}>
                <Title level={5} style={{ marginTop: 0 }}>
                  Email{" "}
                  <Text
                    style={{
                      color: "rgba(0,0,0,.5)",
                      fontSize: "14px",
                      fontWeight: "300",
                    }}
                  >
                    recommended
                  </Text>
                </Title>
                <Input
                  className="input-w"
                  size="large"
                  placeholder="Enter your email"
                />
              </Col>
              <Col span={12}>
                <Title level={5} style={{ marginTop: 0 }}>
                  Phone{" "}
                  <Text
                    style={{
                      color: "rgba(0,0,0,.5)",
                      fontSize: "14px",
                      fontWeight: "300",
                    }}
                  >
                    recommended
                  </Text>
                </Title>
                <Input
                  className="input-w"
                  size="large"
                  placeholder="Enter your phone"
                />
              </Col>
              <Col span={24}>
                <Title level={5} style={{ marginTop: 0 }}>
                  Address{" "}
                  <Text
                    style={{
                      color: "rgba(0,0,0,.5)",
                      fontSize: "14px",
                      fontWeight: "300",
                    }}
                  >
                    recommended
                  </Text>
                </Title>
                <Input
                  className="input-w"
                  size="large"
                  placeholder="City, Country"
                />
              </Col>
              <Col span={24}>
                <Text
                  style={{ margin: 0, fontSize: "22px", fontWeight: "800" }}
                >
                  Links
                </Text>
              </Col>
              <Col span={24}>
                <Row gutter={[25, 25]}>
                  <Col span={24}>
                    <Row align="middle" gutter={[0, 20]}>
                    
                      {activeDetails.map((items) => {
                        return (
                          <Col span={24}>
                            <Row gutter={10}>
                              <Col span={18}>
                                <Input
                                  className="input-w"
                                  placeholder={items.label}
                                  size="large"
                                />
                              </Col>
                              {(addLink && active === items.key) && <InputLink id={items.key}/>}
                              <Col span={6}>
                                <Space>
                                  <Button
                                    onClick={() => {
                                        dispatch(openAddLink());
                                        setActive(items.key);
                                    }}
                                    size="large"
                                    icon={<AiOutlineLink />}
                                  >
                                    Link
                                  </Button>
                                  <spam
                                    style={{
                                      color: "red",
                                      fontSize: "20px",
                                      padding: " 5px",
                                      backgroundColor: "rgba(255,0,0,.1)",
                                      borderRadius: "6px",
                                    }}
                                    onClick={() => {
                                      setActiveDetails((prevArray) =>
                                        prevArray.filter(
                                          (item) => item !== items
                                        )
                                      );
                                    }}
                                  >
                                    <DeleteOutlined />
                                  </spam>
                                </Space>
                              </Col>
                            </Row>
                          </Col>
                        );
                      })}
                    </Row>
                  </Col>

                  {linksList.map((item) => {
                    return (
                      <Col>
                        <span
                          onClick={() =>
                            {
                                setActiveDetails([...activeDetails, item])                       
                            }
                          }
                          style={{ backgroundColor: "rgba(243,244,246,255)" }}
                        >
                          +{item.label}
                        </span>
                      </Col>
                    );
                  })}
                </Row>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
}

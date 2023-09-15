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
  message,
  Form
} from "antd";
import { useState } from "react";
import { storage } from "../../api/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
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
  CheckOutlined
} from "@ant-design/icons";
import { AiOutlineLink } from "react-icons/ai";
import ImgCrop from "antd-img-crop";
import { useDispatch, useSelector } from "react-redux";
import { closeAddLink, closeLoading, closeViewEditDetails, openAddLink, openLoading } from "../../store/models/modelsSlice";
import { fetchUserData } from "../../api/authenticationService";
const { Title, Text, Link } = Typography;
export default function EditPersonalDetails({editPersonalData}) {
  const dispatch = useDispatch();
  const addLink = useSelector((state) => state.models.addLink);
  const user = JSON.parse(localStorage.getItem("USER"));
  const id = user.id;
  const linksList = [
    {
      key: 1,
      label: "LinkedIn",
      icon: <LinkedinOutlined />,
      placeholder: "Enter LinkedIn",
      value: editPersonalData.linkedInLabel
    },
    {
      key: 2,
      label: "Twitter",
      icon: <LinkedinOutlined />,
      placeholder: "Enter LinkedIn",
      value:`${editPersonalData.twitterInLabel}`
    },
    {
      key: 3,
      label: "GitHub",
      icon: <LinkedinOutlined />,
      placeholder: "Enter Github",
      value:`${editPersonalData.setGithubLabel}`
    },
    {
      key: 4,
      label: "Website",
      icon: <LinkedinOutlined />,
      placeholder: "Enter Website",
      value:`${editPersonalData.setWebsiteLabel}`
    },
    {
      key: 5,
      label: "Discode",
      icon: <LinkedinOutlined />,
      placeholder: "Enter Discode",
      value:editPersonalData.discodeLabel
    },
  ];

  const [imageUpload, setImageUpload] = useState(null);
  const [activeDetails, setActiveDetails] = useState([]);
  const [label, setLabel]= useState(null);
  const [active, setActive] = useState(0);
  const handleFileChange = (info) => {
    setImageUpload(info.file.originFileObj);
    if (imageUpload) {
      info.file.status = "done";
      editPersonalData.setProfilePicture(URL.createObjectURL(imageUpload));
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
  const handleChange =(id,value)=>{
      if(id===1){
        editPersonalData.setLinkedInLabel(value);
      }else if(id===2){
        editPersonalData.setTwitterLabel(value);
      }else if(id===3){
        editPersonalData.setGithubLabel(value);
      }else if(id===4){
        editPersonalData.setWebsiteLabel(value);
      }else if(id===5){
        editPersonalData.setDiscodeLabel(value);
      }
  }

  const getValue = (id) =>{
    if(id===1){
     return  editPersonalData.linkedInLabel;
    }else if(id===2){
      return  editPersonalData.twitterLabel;
    }else if(id===3){
      return  editPersonalData.githubLabel;
    }else if(id===4){
      return  editPersonalData.websiteLabel;
    }else if(id===5){
      return  editPersonalData.discodeLabel;
    }
  }
  const handleSubmit =async()=>{
    dispatch(openLoading());
    let temp = null;
    if (imageUpload) {
      const imageRef = ref(storage, `dreamhire/candidates/resumes/${id}`);
      await uploadBytes(imageRef, imageUpload)
        .then(() => {
          console.log(imageUpload);
        })
        .catch((error) => {
          console.log(error.message);
        });

      await getDownloadURL(imageRef)
        .then((url) => {
          temp = url;
          editPersonalData.setProfilePicture(url);
          console.log(temp);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
    let sendData ={
     name: editPersonalData.name,
     profilePicture:temp,
     phone: editPersonalData.phone,
     jobTitle: editPersonalData.title,
     email: editPersonalData.email,
     address: editPersonalData.address,
     linkedInLabel:editPersonalData.linkedInLabel,
     twitterLabel:editPersonalData.twitterLabel,
     githubLabel:editPersonalData.githubLabel,
     websiteLabel:editPersonalData.websiteLabel,
     discordLabel:editPersonalData.discodeLabel,
     linkedIn:editPersonalData.linkedIn,
     twitter:editPersonalData.twitter,
     github:editPersonalData.github,
     website:editPersonalData. website,
     discord:editPersonalData.discode,
    }
    let data = {
      url: `/api/v1/resume/saveprofile/${id}`,
      data: sendData,
      method: "post",
    };
    try {
      const response = await fetchUserData(data);
      console.log(response.data);
      if (response.status === 200) {
        dispatch(closeLoading());
        dispatch(closeViewEditDetails());
        message.success("Successfully Updated");
      } else {
        dispatch(closeLoading());
        dispatch(closeViewEditDetails());
        message.error("Data is invalid! Try again!");
      }
    } catch (e) {
      dispatch(closeLoading());
      dispatch(closeViewEditDetails());
      console.log(e.error);
      message.error("Data is invalid! Try again!");
    }
  }

  const InputLink = ({id}) => {
    const [value, setValue] = useState("");
    const handleAdd =(id)=>{
        if(id===1){
          editPersonalData.setLinkedIn(value);
            setValue("");
            dispatch(closeAddLink());
        }else if(id===2){
          editPersonalData.setTwitter(value);
            setValue("");
            dispatch(closeAddLink());
        }else if(id===3){
          editPersonalData.setGithub(value);
           setValue("");
           dispatch(closeAddLink());
        }else if(id===4){
          editPersonalData.setWebsite(value);
            setValue("");
            dispatch(closeAddLink());
        }else if(id===5){
          editPersonalData.setDiscode(value);
            setValue("");
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
          <Form onFinish={handleSubmit}>
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
                  value={editPersonalData.name}
                  onChange={(e)=>editPersonalData.setName(e.target.value)}
                  className="input-w"
                  size="large"
                  placeholder="Enter your title, first-and lase name"
                />
              </Col>
              <Col span={8}>
                {editPersonalData.profilePicture === null ? (
                  <>
                    <ImgCrop rotationSlider>
                      <Upload
                        style={{
                          marginTop: 8,
                          borderRadius: "50%",
                        }}
                        listType="picture-circle"
                        showUploadList={editPersonalData.profilePicture === null ? true : false}
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
                            editPersonalData.profilePicture === null ? true : false
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
                        src={editPersonalData.profilePicture}
                      />
                    </Col>
                    <Col
                      style={{ position: "absolute", bottom: 5, right: "35%" }}
                    >
                      <ImgCrop rotationSlider>
                        <Upload
                          showUploadList={
                            editPersonalData.profilePicture === null ? true : false
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
                  value={editPersonalData.title}
                  onChange={(e)=>editPersonalData.setTitle(e.target.value)}
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
                  value={editPersonalData.email}
                  onChange={(e)=>editPersonalData.setEmail(e.target.value)}
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
                  value={editPersonalData.phone}
                  onChange={(e)=>editPersonalData.setPhone(e.target.value)}
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
                  value={editPersonalData.address}
                  onChange={(e)=>editPersonalData.setAddress(e.target.value)}
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
                                  value={getValue(items.id)}
                                  onChange={(e)=>{handleChange(items.key,e.target.value)}}
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
              <Col span={24}>
                <Row justify='end'> 
                  <Space>
                  <Button 
                  onClick={()=>dispatch(closeViewEditDetails())}
                  size="large" 
                  style={{border: '0'}}>
                  Cancel
                </Button>
                <Button 
                  htmlType="submit"
                  icon={<CheckOutlined />}
                  size="large"
                  style={{
                    backgroundColor: 'rgba(25,103,210,255)',
                    color: 'white',
                    height: '50px', 
                    width: '100px'}}> 
                  Save
                </Button>
                  </Space>
                </Row>
              </Col>
            </Row>
          </Card>
          </Form>
        </Col>
      </Row>
    </>
  );
}

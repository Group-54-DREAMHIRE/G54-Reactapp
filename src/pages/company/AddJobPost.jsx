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
  Space,
  Alert,
} from "antd";
import { storage } from "../../api/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { UploadOutlined } from "@ant-design/icons";
import { jobtypes, tagItems, years } from "../../store/demo/addJobPost";
import { useState, useEffect } from "react";
import { fetchUserData, getProfileData } from "../../api/authenticationService";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../store/auth/userSlice";
import { currencies, salary } from "../../store/demo/profile";
import { addJobPost } from "../../store/jobpost/jobSlice";
import { useNavigate } from "react-router-dom";
const { TextArea } = Input;
const { Title } = Typography;

function AddJobPost() {
  const user = JSON.parse(localStorage.getItem("USER"));
  const id = user.id;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [companyName, setCompanyName] = useState("");
  const [profileData, setProfileData] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const [imageUpload, setImageUpload] = useState();
  const [cover, setCover] = useState("");
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [experience, setExperience] = useState("");
  const [currency, setCuurency] = useState("");
  const [minSalary, setMinSalary] = useState("");
  const [maxSalary, setMaxSalary] = useState("");
  const [description, setDescription] = useState("");
  const [apply, setApply] = useState("");
  const [requirements, setRequirements] = useState([""]);
  const [tags, setTags] = useState([""]);
  const [deadline, setDeadline] = useState(null);
  const [education, setEducation] = useState("");
  const [listRequirements, setListRequirements] = useState("");
  const [listTags, setListTags] = useState("");

  const [successmsg, setSuccessmsg] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    getProfileData(`/api/v1/company/get/${id}`)
      .then((response) => {
        console.log(response.data);
        setProfileData(response.data);
        console.log(profileData.name);
      })
      .catch((error) => {
        setError("Invalid data");
        console.error("Error fetching user profile:", error);
      });
  }, [id]);

  useEffect(() => {
    if (profileData) {
      setCompanyName(profileData.name);
      console.log(companyName);
    }
  }, [profileData]);

  const handleAddInput = () => {
    const newInput = "";
    setRequirements([...requirements, newInput]);
  };

  const handleInputChange = (e, index) => {
    const updatedValue = [...requirements];
    updatedValue[index] = e.target.value;
    const newVal = updatedValue.join(", ");
    setRequirements(updatedValue);
    setListRequirements(newVal);
    console.log(listRequirements);
  };

  const handleImage = (info) =>{
        setImageUpload(info.file);
        console.log(imageUpload,"Dulaaaaaa");
  }

  const saveImage = () =>{
    console.log("Out If");
    if (imageUpload) {
      console.log(imageUpload,"test");
      console.log(imageUpload);
      console.log("In If");
      const imageRef = ref(storage, `dreamhire/companies/${companyName}/${imageUpload.name}`);
      uploadBytes(imageRef, imageUpload).then(() => {
        console.log(imageUpload);
        getDownloadURL(imageRef)
          .then((url) => {
            console.log(imageUpload);
            setImageUrl(url);
            setCover(url);
            console.log(imageUrl);
            console.log(cover);
          })
          .catch((error) => {
            console.log(error.message);
          })
          
      });
      console.log("end")
    }
  }

  const handleSubmit = async () => {
   
    const postedDate = new Date();
    let jobPostData = {
      systemUserID:user.systemUser.id,
      companyName,
      postedDate,
      cover,
      currency,
      minSalary,
      maxSalary,
      jobTitle: title,
      jobType: type,
      experience,
      education,
      deadline,
      description,
      howToApply: apply,
      jobRequirements: listRequirements,
      tags: listTags,
    };

    let data = {
      url: `/api/v1/jobpost/save/${id}`,
      data: jobPostData,
      method: "post",
    };

    const response = await fetchUserData(data);
    console.log(response.data);
    if (response.status === 200) {
      setSuccessmsg("Succesfully updated");
      dispatch(addJobPost(response.data));
      setTimeout(
        () => {
         setSuccessmsg("");
         navigate("/jobposts");
        },
        2000
      );
    }else{
      setError("Invalid Data!");
    }
  };
  return (
    <>
      <Row justify="center" className="addjob-w">
        <Col span={24}>
          <Row justify="center">
            <Col span={23}>
              <Form onFinish={handleSubmit}>
                <Row justify="start">
                  <Title level={2}>Post A Job</Title>
                  <Divider style={{ margin: "0" }} />
                </Row>
                <Row justify="space-between">
                  <Col span={11}>
                    <Title level={4}>Job Title:</Title>
                    <Input
                      allowClear
                      style={{
                        boxShadow: "0 0 8px 0 rgba(0,0,0,.05)",
                        borderRadius: "0",
                        fontSize: "large",
                      }}
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </Col>
                  <Col span={11}>
                    <Title level={4} style={{}}>
                      Job Type:
                    </Title>
                    <Select
                      defaultValue={"Full Time"}
                      value={type}
                      onChange={(value) => setType(value)}
                      allowClear
                      style={{
                        width: "100%",
                        boxShadow: "0 0 8px 0 rgba(0,0,0,.05)",
                        borderRadius: "0",
                        fontSize: "medium",
                        borderRadius: "0 !important",
                        fontFamily: "arial",
                      }}
                      options={jobtypes}
                    />
                  </Col>
                  <Col span={11}>
                    <Title level={4} style={{}}>
                      Experience:
                    </Title>
                    <Select
                      defaultValue={"1 Year"}
                      value={experience}
                      onChange={(value) => setExperience(value)}
                      allowClear
                      style={{
                        width: "100%",
                        boxShadow: "0 0 8px 0 rgba(0,0,0,.05)",
                        borderRadius: "0",
                        fontSize: "medium",
                        fontFamily: "arial",
                      }}
                      options={years}
                    />
                  </Col>
                  <Col span={11}>
                    <Title level={4} style={{}}>
                      Education:
                    </Title>
                    <Select
                      value={education}
                      onChange={(value) => setEducation(value)}
                      defaultValue={"600"}
                      allowClear
                      style={{
                        width: "100%",
                        boxShadow: "0 0 8px 0 rgba(0,0,0,.05)",
                        borderRadius: "0",
                        fontSize: "medium",
                        fontFamily: "arial",
                      }}
                      options={[
                        {
                          label: "BSc in Computer Science",
                          value: "BSc in Computer Science",
                        },
                      ]}
                    />
                  </Col>
                  <Col span={24}>
                    <Row justify="space-between">
                      <Col span={3}>
                        <Title level={4} style={{}}>
                          Currency:
                        </Title>
                        <Select
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
                      </Col>
                      <Col span={9}>
                        <Title level={4} style={{}}>
                          Minimum Salary:
                        </Title>
                        <Select
                          onChange={(value) => setMinSalary(value)}
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
                      </Col>
                      <Col span={9}>
                        <Title level={4} style={{}}>
                          Maximum Salary:
                        </Title>
                        <Select
                          onChange={(value) => {setMaxSalary(value); console.log(value)}}
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
                      </Col>
                    </Row>
                  </Col>
                  <Col span={11}>
                    <Title level={4} style={{}}>
                      Deadline:
                    </Title>
                    <DatePicker
                      style={{
                        boxShadow: "0px 0px 5px  rgba(0,0,0,.1)",
                        height: "40px",
                      }}
                      onChange={(date) => setDeadline(date)}
                    />
                  </Col>
                  <Col span={13}>
                    <Title level={4} style={{}}>
                      Add Cover:
                    </Title>
                    <Space direction="horizontal">
                    <Upload
                      onChange={handleImage}
                      name="image"
                      action="/upload" 
                      listType="picture"
                      beforeUpload={()=>false}
                    >
                      <Button icon={<UploadOutlined />}>Select Image</Button>
                      
                    </Upload>
                    <Button 
                    type="primary"
                    style={{borderRadius: '0'}}
                    onClick={saveImage}>Save</Button>
                    </Space>
                  </Col>
                </Row>

                <Row>
                  <Title level={4}>Job Descreption:</Title>
                  <TextArea
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    allowClear
                    rows={4}
                    style={{ boxShadow: "0 0 8px 0 rgba(0,0,0,.05)" }}
                  />
                </Row>
                <Row>
                  <Title level={4}>How To Apply:</Title>
                  <TextArea
                    value={apply}
                    onChange={(e) => setApply(e.target.value)}
                    allowClear
                    rows={4}
                    style={{ boxShadow: "0 0 8px 0 rgba(0,0,0,.05)" }}
                  />
                </Row>
                <Row gutter={[20, 10]}>
                  <Col span={24}>
                    <Title level={4}>Job Requirements:</Title>
                  </Col>
                  <Col span={12}>
                    {requirements.map((item, index) => (
                      <Input
                        style={{
                          boxShadow: "0 0 8px 0 rgba(0,0,0,.05)",
                          borderRadius: "0",
                          fontSize: "large",
                          marginBottom: "20px",
                        }}
                        key={index}
                        value={item}
                        onChange={(e) => handleInputChange(e, index)}
                      />
                    ))}
                  </Col>
                  <Col span={24}>
                    <Button
                      type="primary"
                      style={{ borderRadius: "0" }}
                      onClick={handleAddInput}
                    >
                      Add More
                    </Button>
                  </Col>
                </Row>
                <Row justify="space-between" style={{ marginBottom: "3%" }}>
                  <Col span={15}>
                    <Title level={4}>Tags:</Title>
                    <Select
                      // value={tags}
                      onChange={(values) => {
                        setTags(values);
                        setListTags(values.join(" ,"));
                        console.log(listTags);
                      }}
                      mode="multiple"
                      style={{
                        width: "100%",
                        boxShadow: "0 0 8px 0 rgba(0,0,0,.05)",
                        borderRadius: "0",
                      }}
                      placeholder="Select Tags"
                      options={tagItems}
                    />
                  </Col>
                </Row>
                <Row>
                  <Button
                    htmlType="submit"
                    type="primary"
                    size="large"
                    style={{
                      marginBottom: "3%",
                      borderRadius: "0",
                    }}
                  >
                    Post Job
                  </Button>
                  { successmsg  && <Alert message={successmsg} type="success" showIcon />}
                  { error  && <Alert message={error} type="error" showIcon />}
                </Row>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
export default AddJobPost;

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
  Spin,
  message,
} from "antd";
import { storage } from "../../api/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { UploadOutlined } from "@ant-design/icons";
import { jobExperienceCom } from "../../store/demo/jobExperience";
import { jobTitles } from "../../store/demo/jobTitles";
import { jobTypes } from "../../store/demo/jobTypes";
import { qualifications } from "../../store/demo/quqlifications";
import { tagItems } from "../../store/demo/tagItems";
import { useState, useEffect } from "react";
import { fetchUserData, getProfileData } from "../../api/authenticationService";
import { useDispatch, useSelector } from "react-redux";
import { salary, currencies } from "../../store/demo/salary";
import { addJobPost, setJobPosts } from "../../store/jobpost/jobSlice";
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
  const [imageUpload, setImageUpload] = useState(null);
  const [cover, setCover] = useState(null);
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [experience, setExperience] = useState("");
  const [currency, setCuurency] = useState("");
  const [minSalary, setMinSalary] = useState("");
  const [maxSalary, setMaxSalary] = useState("");
  const [description, setDescription] = useState("");
  const [apply, setApply] = useState("");
  const [requirements, setRequirements] = useState([""]);
  const [vacancies, setVacancies] = useState(0);
  const [tags, setTags] = useState([""]);
  const [deadline, setDeadline] = useState(null);
  const [education, setEducation] = useState("");
  const [listRequirements, setListRequirements] = useState("");
  const [listTags, setListTags] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setCompanyName(user.name);
  }, [id]);

  const handleAddInput = () => {
    const newInput = "";
    setRequirements([...requirements, newInput]);
  };

  const handleInputChange = (e, index) => {
    const updatedValue = [...requirements];
    updatedValue[index] = e.target.value;
    const newVal = updatedValue.join("/ ");
    setRequirements(updatedValue);
    setListRequirements(newVal);
    console.log(listRequirements);
  };

  const handleImage = (info) => {
    setImageUpload(info.file.originFileObj);
    console.log(imageUpload);
    if(imageUpload){
      info.file.status = "done";
    }
  };

  const handleSubmit = async () => {
    if (imageUpload && vacancies>0) {
      setLoading(true);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      const imageRef = ref(
        storage,
        `dreamhire/companies/${companyName}/jobposts/${imageUpload.name}`
      );
      let coverURL=null;
      await uploadBytes(imageRef, imageUpload).then(() => {
        console.log(imageUpload);
        
      }).catch((error) => {
        console.log(error.message);
      });

      await getDownloadURL(imageRef)
      .then((url) => {
       coverURL = url;
       console.log(coverURL);
      })
      .catch((error) => {
        console.log(error.message);
      });

     let jobPostData = {
        systemUserID: user.systemUser.id,
        companyName,
        postedDate: new Date(),
        cover: coverURL,
        numberOfVacancies:vacancies,
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
      try {
        const response = await fetchUserData(data);
        if (response.status === 200) {
          message.success("Succesfully updated");
          setLoading(false);
          console.log("brfore");
          navigate("/jobposts");
          console.log("after");
          dispatch(addJobPost(response.data));
        } else {
          message.error("Invalid Data!");
          navigate("/jobposts");
          setLoading(false);
        }
      } catch (e) {
        console.log(e);
        setLoading(false);
      }

    }
  }


  return (
    <>
      <Spin spinning={loading}>
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
                      <Title level={4} style={{}}>
                        Job Title:
                      </Title>
                      <Select
                        showSearch
                        value={title}
                        onChange={(value) => setTitle(value)}
                        allowClear
                        style={{
                          width: "100%",
                          boxShadow: "0 0 8px 0 rgba(0,0,0,.05)",
                          borderRadius: "0",
                          fontSize: "medium",
                          borderRadius: "0 !important",
                          fontFamily: "arial",
                        }}
                        options={jobTitles}
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
                        options={jobTypes}
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
                        options={jobExperienceCom}
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
                        options={qualifications}
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
                            onChange={(value) => {
                              setMaxSalary(value);
                              console.log(value);
                            }}
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
                    <Col span={8}>
                      <Title level={4} style={{}}>
                        Deadline:
                      </Title>
                      <DatePicker
                        style={{
                          boxShadow: "0px 0px 5px  rgba(0,0,0,.1)",
                          height: "40px",
                          borderRadius:'0'
                        }}
                        onChange={(date) => setDeadline(date)}
                      />
                    </Col>
                    <Col span={8}>
                      <Title level={4} style={{}}>
                        Add Cover:
                      </Title>
                      <Space direction="horizontal">
                        <Upload
                          onChange={handleImage}
                          name="image"
                          action=""
                          listType="picture"
                        >
                          <Button 
                            icon={<UploadOutlined />}>
                            Select Image
                          </Button>
                        </Upload>
                      </Space>
                    </Col>
                    <Col span={8}>
                    <Title level={4} style={{}}>
                        Vacancies:
                      </Title>
                      <Input 
                          value={vacancies}
                          onChange={(e)=>setVacancies(e.target.value)}
                          style={{
                          boxShadow: "0px 0px 5px  rgba(0,0,0,.1)",
                          height: "40px",
                          borderRadius:'0',
                          width: '100px'
                        }}/>
                    </Col>
                  </Row>

                  <Row>
                    <Title level={4}>Job Descreption:</Title>
                    <TextArea
                      onChange={(e) => setDescription(e.target.value)}
                      value={description}
                      allowClear
                      rows={4}
                      style={{ boxShadow: "0 0 8px 0 rgba(0,0,0,.05)",borderRadius:'0' }}
                    />
                  </Row>
                  <Row>
                    <Title level={4}>How To Apply:</Title>
                    <TextArea
                      value={apply}
                      onChange={(e) => setApply(e.target.value)}
                      allowClear
                      rows={4}
                      style={{ boxShadow: "0 0 8px 0 rgba(0,0,0,.05)",borderRadius:'0' }}
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
                      disabled={(imageUpload===null) || (vacancies===0)}
                      type="primary"
                      size="large"
                      style={{
                        marginBottom: "3%",
                        borderRadius: "0",
                      }}
                    >
                      Post Job
                    </Button>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Spin>
    </>
  );
}
export default AddJobPost;

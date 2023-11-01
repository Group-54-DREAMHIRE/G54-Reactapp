import {
  Card,
  Col,
  Row,
  Typography,
  Input,
  Space,
  Button,
  DatePicker,
  Select,
  Checkbox,
  Form,
  message,

} from "antd";
import moment from 'moment';
import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { fetchUserData } from "../../api/authenticationService";
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
  CheckOutlined,
} from "@ant-design/icons";
import { AiOutlineLink } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  closeAddContent,
  closeAddLink,
  closeLoading,
  openAddLink,
  openLoading,
} from "../../store/models/modelsSlice";
import { months } from "../../store/demo/months";
import { setContentData } from "../../store/candidate/resumeSclice";
const { TextArea } = Input;
const { Title, Text } = Typography;

export default function AddContent({ addContentData }) {
  const activeLink = useSelector((state) => state.models.addLink);
  const dispatch = useDispatch();
  const [isProfile, setIsProfile] = useState(false);

  const user = JSON.parse(localStorage.getItem("USER"));
  const id = user.id;
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    if (addContentData.activeContent.title === "Profile") {
      setIsProfile(true);
    }
  }, []);
  const handleTitle = (e) => {
    let conData = [...addContentData.contentData];
    conData[addContentData.activeContent.index].children[
      addContentData.activeContent.key
    ].title = e.target.value;
    addContentData.setContentData(conData);
  };

  const handleSubTitle = (e) => {
    let conData = [...addContentData.contentData];
    conData[addContentData.activeContent.index].children[
      addContentData.activeContent.key
    ].subTitle = e.target.value;
    addContentData.setContentData(conData);
  };

  const handleCity = (e) => {
    let conData = [...addContentData.contentData];
    conData[addContentData.activeContent.index].children[
      addContentData.activeContent.key
    ].city = e.target.value;
    addContentData.setContentData(conData);
  };

  const handleCountry = (e) => {
    let conData = [...addContentData.contentData];
    conData[addContentData.activeContent.index].children[
      addContentData.activeContent.key
    ].country = e.target.value;
    addContentData.setContentData(conData);
  };

  const handleDescription = (e) => {
    let conData = [...addContentData.contentData];
    conData[addContentData.activeContent.index].description = e.target.value;
    addContentData.setContentData(conData);
  };

  const handleStartMonth = (value) => {
    let conData = [...addContentData.contentData];
    const currentDateTime = moment(conData[addContentData.activeContent.index].children[
      addContentData.activeContent.key
    ].start).set({
      month:value,
    });
    conData[addContentData.activeContent.index].children[
      addContentData.activeContent.key
    ].start = currentDateTime;
    conData[addContentData.activeContent.index].children[
      addContentData.activeContent.key
    ].startMonth = value;
    if(conData[addContentData.activeContent.index].children[
      addContentData.activeContent.key
    ].start){
      conData[addContentData.activeContent.index].children[
        addContentData.activeContent.key
      ].hasStart = true;
    }else{
      conData[addContentData.activeContent.index].children[
        addContentData.activeContent.key
      ].hasStart = false;
    }
    addContentData.setContentData(conData);
  };
  const handleStartYear = (date) => {
    let conData = [...addContentData.contentData];
    conData[addContentData.activeContent.index].children[
      addContentData.activeContent.key
    ].start = date;
    if(conData[addContentData.activeContent.index].children[
      addContentData.activeContent.key
    ].start){
      conData[addContentData.activeContent.index].children[
        addContentData.activeContent.key
      ].hasStart = true;
    }
    addContentData.setContentData(conData);
  };

  const handleStartYearOnly = (e) => {
    let conData = [...addContentData.contentData];
    conData[addContentData.activeContent.index].children[
      addContentData.activeContent.key
    ].showStartMonth = e.target.checked ;
    addContentData.setContentData(conData);
    console.log(conData[addContentData.activeContent.index].showStartMonth)
  };

  const handleEndMonth = (value) => {
    let conData = [...addContentData.contentData];
    const currentDateTime = moment(conData[addContentData.activeContent.index].children[
      addContentData.activeContent.key
    ].end).set({
      month:value,
    });
    conData[addContentData.activeContent.index].children[
      addContentData.activeContent.key
    ].end = currentDateTime;
    conData[addContentData.activeContent.index].children[
      addContentData.activeContent.key
    ].endMonth = value;
    if(conData[addContentData.activeContent.index].children[
      addContentData.activeContent.key
    ].end){
      conData[addContentData.activeContent.index].children[
        addContentData.activeContent.key
      ].hasEnd = true;
    }else{
      conData[addContentData.activeContent.index].children[
        addContentData.activeContent.key
      ].hasEnd = false;
    }
    addContentData.setContentData(conData);
  };
  const handleEndYear = (date) => {
    let conData = [...addContentData.contentData];
    conData[addContentData.activeContent.index].children[
      addContentData.activeContent.key
    ].end = date;
    if(conData[addContentData.activeContent.index].children[
      addContentData.activeContent.key
    ].end){
      conData[addContentData.activeContent.index].children[
        addContentData.activeContent.key
      ].hasEnd = true;
    }
    addContentData.setContentData(conData);
  };
  const handleEndYearOnly = (e) => {
    let conData = [...addContentData.contentData];
    conData[addContentData.activeContent.index].children[
      addContentData.activeContent.key
    ].showEndMonth = e.target.checked;
    addContentData.setContentData(conData);
  };

  const handlePresent = (e) => {
    let conData = [...addContentData.contentData];
    conData[addContentData.activeContent.index].children[
      addContentData.activeContent.key
    ].present =  e.target.checked;
    addContentData.setContentData(conData);
  };

  const handleHtml = (html) => {
    let conData = [...addContentData.contentData];
    conData[addContentData.activeContent.index].children[
      addContentData.activeContent.key
    ].description = html;
    addContentData.setContentData(conData);
  };

  const handleSubmit = async() =>{
    dispatch(openLoading());
    let data = {
      url: `/api/v1/resume/save/${id}`,
      data: addContentData.contentData,
      method: "post",
    };
    try {
      const response = await fetchUserData(data);
      if (response.status === 200) {
        message.success("Succesfully updated");
        dispatch(closeLoading());
        dispatch(closeAddContent());
        dispatch(setContentData(addContentData.contentData));
      } else {
        message.error("Invalid Data!Try Again!");
        dispatch(closeLoading());
        dispatch(closeAddContent());
      }
    } catch (e) {
      console.log(e);
      message.error("Invalid Data!Try Again!");
      dispatch(closeLoading());
      dispatch(closeAddContent())
    }
  }
  const handleDelete = ( ) =>{
    let  conData = [...addContentData.contentData];
    if(addContentData.activeContent.key===0){
      conData[addContentData.activeContent.index].isAval=false;
    }
    const data = {
      key: 0,
      isAval:false,
      title: null,
      link: null,
      subTitle: null,
      city: null,
      country: null,
      start: null,
      hasStart: false,
      showStartMonth:true,
      end: null,
      hasEnd: false,
      showEndMonth:true,
      present: false,
      description: null,
      startMonth:null,
      endMonth:null
    }
    
      conData[addContentData.activeContent.index].children[addContentData.activeContent.key] =  data;
      addContentData.setContentData(conData);
      dispatch(closeAddContent());
  }

  const InputLink = () => {
    const [value, setValue] = useState(
      addContentData.contentData[addContentData.activeContent.index].children[
        addContentData.activeContent.key
      ].link
    );
    const handleAddLink = () => {
      let conData = [...addContentData.contentData];
      conData[addContentData.activeContent.index].children[
        addContentData.activeContent.key
      ].link = value;
      addContentData.setContentData(conData);
      dispatch(closeAddLink());
    };
    return (
      <Row
        style={{
          padding: "5%",
          position: "absolute",
          backgroundColor: "white",
          boxShadow: "0 0 20px rgba(0,0,0,.2)",
          zIndex: "5",
        }}
      >
        
        <Col span={24}>
          <Row gutter={[20, 20]} justify="end">
            <Col span={24}>
              <Title level={5} style={{ margin: "0" }}>
                Link URL
              </Title>
            </Col>
            <Col span={24}>
              <Input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="input-w"
                placeholder="Enter Link"
              />
            </Col>
            <Col>
              <Space>
                <Button
                  size="small"
                  type="primary"
                  style={{ borderRadius: "0" }}
                  onClick={() => dispatch(closeAddLink())}
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleAddLink}
                  size="small"
                  type="primary"
                  style={{ borderRadius: "0" }}
                >
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
      <Row className="add-content-w">
        <Col span={24}>
          <Form onFinish={handleSubmit}>
          <Card
            title={
              <Text style={{ fontSize: "22px", fontWeight: "800" }}>
                Create {addContentData.activeContent.title}
              </Text>
            }
            style={{ boxShadow: "0 0 30px rgba(0,0,0,.1)", padding: "3% 0" }}
            hoverable
          >
            {isProfile && (
              <Row>
                <Col span={24}>
                  <Title level={5} style={{ marginTop: 0 }}>
                    Description{" "}
                    <Text
                      style={{
                        color: "rgba(0,0,0,.5)",
                        fontSize: "14px",
                        fontWeight: "300",
                      }}
                    >
                      {" "}
                    </Text>
                  </Title>
                  <TextArea
                    value={
                      addContentData.contentData[
                        addContentData.activeContent.index
                      ].description
                    }
                    onChange={(e) => handleDescription(e)}
                    allowClear
                    rows={4}
                    style={{
                      boxShadow: "0 0 8px 0 rgba(0,0,0,.05)",
                      borderRadius: "0",
                    }}
                  />
                </Col>
              </Row>
            )}
            {!isProfile && (
              <Row gutter={[20, 20]}>
                <Col span={24}>
                  <Row gutter={10} align="bottom">
                    <Col span={18}>
                      <Title level={5} style={{ marginTop: 0 }}>
                        Title{" "}
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
                      {activeLink && <InputLink />}
                      <Input
                        value={
                          addContentData.contentData[
                            addContentData.activeContent.index
                          ].children[addContentData.activeContent.key].title
                        }
                        className="input-w"
                        size="large"
                        placeholder="Enter title"
                        onChange={(e) => handleTitle(e)}
                      />
                    </Col>
                    <Col span={6}>
                      <Button
                        onClick={() => {
                          dispatch(openAddLink());
                        }}
                        size="large"
                        icon={<AiOutlineLink />}
                      >
                        Link
                      </Button>
                    </Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <Title level={5} style={{ marginTop: 0 }}>
                    Subtitle{" "}
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
                    onChange={(e) => handleSubTitle(e)}
                    value={
                      addContentData.contentData[
                        addContentData.activeContent.index
                      ].children[addContentData.activeContent.key].subTitle
                    }
                    className="input-w"
                    size="large"
                    placeholder="Enter SubTitle"
                  />
                </Col>
                <Col span={12}>
                  <Title level={5} style={{ marginTop: 0 }}>
                    City{" "}
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
                    value={
                      addContentData.contentData[
                        addContentData.activeContent.index
                      ].children[addContentData.activeContent.key].city
                    }
                    onChange={(e) => handleCity(e)}
                    className="input-w"
                    size="large"
                    placeholder="Enter your job title"
                  />
                </Col>
                <Col span={12}>
                  <Title level={5} style={{ marginTop: 0 }}>
                    Country{" "}
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
                    value={
                      addContentData.contentData[
                        addContentData.activeContent.index
                      ].children[addContentData.activeContent.key].country
                    }
                    onChange={(e) => handleCountry(e)}
                    className="input-w"
                    size="large"
                    placeholder="Enter your job title"
                  />
                </Col>
                <Col span={12}>
                  <Title level={5} style={{ marginTop: 0 }}>
                    Start Date{" "}
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
                  <Row gutter={[5,15]}>
                  <Col span={10}>
                      <DatePicker
                         value={
                          addContentData.contentData[
                            addContentData.activeContent.index
                          ].children[addContentData.activeContent.key].start
                        }
                        onChange={handleStartYear}
                        size="large"
                        className="input-w"
                        placeholder="Year"
                        picker="year"
                      />
                    </Col>
                    <Col span={14}>
                      <Select
                      value={
                        addContentData.contentData[
                          addContentData.activeContent.index
                        ].children[addContentData.activeContent.key].startMonth
                      }
                        size="large"
                        className="select-month-w"
                        placeholder="Month"
                        onChange={handleStartMonth}
                        options={months}
                        allowClear
                        maxTagCount={5}
                      />
                    </Col>

                   
                    <Col span={24}>
                    <Checkbox
                        checked={ 
                          (addContentData.contentData[
                            addContentData.activeContent.index
                          ].children[addContentData.activeContent.key].showStartMonth)}
                        onChange={handleStartYearOnly}>
                        <Text style={{fontSize: '16px', fontWeight:' 500'}}>
                          Only Year
                        </Text>
                      </Checkbox>                   
                    </Col>
                  </Row>
                </Col>
                <Col span={12}>
                  <Title level={5} style={{ marginTop: 0 }}>
                    End Date{" "}
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
                  <Row gutter={[5,15]}>
                  <Col span={10}>
                      <DatePicker
                        value={
                          addContentData.contentData[
                            addContentData.activeContent.index
                          ].children[addContentData.activeContent.key].end
                        }
                        size="large"
                        className="input-w"
                        placeholder="Year"
                        picker="year"
                        onChange={handleEndYear}
                      />
                    </Col>
                    <Col span={14}>
                      <Select
                        value={
                          addContentData.contentData[
                            addContentData.activeContent.index
                          ].children[addContentData.activeContent.key].endMonth
                        }
                        size="large"
                        className="select-month-w"
                        placeholder="Month"
                        onChange={handleEndMonth}
                        options={months}
                        maxTagCount={5}
                        allowClear
                      />
                    </Col>

                    
                    <Col span={24}>
                    <Checkbox
                        checked={ 
                          (addContentData.contentData[
                            addContentData.activeContent.index
                          ].children[addContentData.activeContent.key].showEndMonth)}
                        onChange={handleEndYearOnly}>
                        <Text style={{fontSize: '16px', fontWeight:' 500'}}>
                          Only Year
                        </Text>
                      </Checkbox>                   
                    </Col>
                    <Col span={24}>
                    <Checkbox
                         checked={ 
                          (addContentData.contentData[
                            addContentData.activeContent.index
                          ].children[addContentData.activeContent.key].present)}
                        onChange={handlePresent}>
                        <Text style={{fontSize: '16px', fontWeight:' 500'}}>
                          Present{" "}
                          <Text
                      style={{
                        color: "rgba(0,0,0,.6)",
                        fontSize: "15px",
                        fontWeight: "300",
                      }}
                    >
                     (current)
                    </Text>
                        </Text>
                      </Checkbox>                   
                    </Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <Title level={5} style={{ marginTop: 0 }}>
                    Description{" "}
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
                  <ReactQuill
                  style={{ wordWrap: 'break-word',width:'100%'}}
                    theme="snow"
                    value={addContentData.contentData[
                      addContentData.activeContent.index
                    ].children[addContentData.activeContent.key].description}
                    onChange={handleHtml}
                  />
                </Col>
              </Row>
            )}
            <Row justify='space-between' style={{ marginTop: "5%" }}>
              <Col>
              <Button 
                onClick={handleDelete}
                icon={<DeleteOutlined />}
                style={{ borderRadius: "0", color: 'red' }}
                size="large">
                Delete
              </Button>
              </Col>
              <Col>
                <Row justify="end" gutter={20}>
                  <Col>
                    <Button
                      style={{ borderRadius: "0" }}
                      size="large"
                      onClick={()=> dispatch(closeAddContent())}
                    >
                      Cancel
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      htmlType="submit"
                      style={{ borderRadius: "0" }}
                      icon={<CheckOutlined />}
                      type="primary"
                      size="large"
                    >
                      Save
                    </Button>
                  </Col>
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
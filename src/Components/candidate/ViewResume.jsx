import { Button, Card, Col, Row, Typography, Collapse,Spin } from "antd";
import { useState, useEffect } from "react";
import EditPersonalDetails from "./EditPersonalDetails";
import Resume from "../../pages/candidate/Resume";
import PersonDetailsEditView from "./PersonDetailsEditView";
import { useDispatch, useSelector } from "react-redux";
import {
  getLoading,
  openAddContent,
  openCustomContent,
  openViewEditDetails,
} from "../../store/models/modelsSlice";
import CustomContentModel from "./CustomContentModel";
import AddContent from "./AddContent";
import { getData } from "../../api/authenticationService";

const { Title, Text } = Typography;

export default function ViewResume() {
  const dispatch = useDispatch();
  const cvPersonalData = useSelector((state) => state.resume.personalData);
  const cvContentData = useSelector((state) => state.resume.contentData);
  const user = JSON.parse(localStorage.getItem("USER"));
  const id = user.id;
  const loading = useSelector((state)=>state.models.loading);
  const viewEdit = useSelector((state) => state.models.viewEditDetails);
  const addContent = useSelector((state) => state.models.addContent);

  const [cvData, setCvData] = useState(null);
  const [profilePicture, setProfilePicture] = useState(null);
  const [linkedIn, setLinkedIn] = useState(null);
  const [twitter, setTwitter] = useState(null);
  const [github, setGithub] = useState(null);
  const [website, setWebsite] = useState(null);
  const [discode, setDiscode] = useState(null);
  const [linkedInLabel, setLinkedInLabel] = useState(null);
  const [twitterLabel, setTwitterLabel] = useState(null);
  const [githubLabel, setGithubLabel] = useState(null);
  const [websiteLabel, setWebsiteLabel] = useState(null);
  const [discodeLabel, setDiscodeLabel] = useState(null);
  const [name, setName] = useState(null);
  const [title, setTitle] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);
  const [address, setAddress] = useState(null);

  const [contentData, setContentData] = useState([
    {
      key: 0,
      has: false,
      title: "Profile",
      description:null,
      children: [
        {
          key: 0,
          has:true,
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
        },
      ],
    },
    {
      key: 1,
      has: false,
      title: "Education",
      description:null,
      children: [
        {
          key: 0,
          has:true,
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
        },
      ],
    },
    {
      key: 2,
      has: false,
      title: "Professional Experience",
      description:null,
      children: [
        {
          key: 0,
          has:true,
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
        },
      ],
    },
    {
      key: 3,
      has: false,
      title: "Projects",
      description:null,
      children: [
        {
          key: 0,
          has:true,
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
        },
      ],
    },
    {
      key: 4,
      has: false,
      title: "Courses And Certifications",
      description:null,
      children: [
        {
          key: 0,
          has:true,
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
        },
      ],
    },
    {
      key: 5,
      has: false,
      title: "Skills",
      description:null,
      children: [
        {
          key: 0,
          has:true,
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
        },
      ],
    },
    {
      key: 6,
      has: false,
      title: "Volunteer Experience",
      description:null,
      children: [
        {
          key: 0,
          has:true,
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
        },
      ],
    },
    {
      key: 7,
      has: false,
      title: "Other Qualifications",
      description:null,
      children: [
        {
          key: 0,
          has:true,
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
        },
      ],
    },
    {
      key: 8,
      has: false,
      title: "Reference",
      description:null,
      children: [
        {
          key: 0,
          has:true,
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
        },
      ],
    },
  ]);
  const [activeContent, setActiveContent] = useState({});

  useEffect(() => {
    if((cvPersonalData===null) && (cvContentData===null) ){
        getData(`/api/v1/resume/getResume/${id}`)
        .then((response) => {
          setCvData(response.data);
          console.log(response.data);
          console.log(cvData === null);
        })
        .catch((error) => {
          console.error("Error fetching user profile:", error);
        });
    }
    
  }, []);
  useEffect(() => {
    if((cvData !== null) && ((cvPersonalData===null) && (cvContentData===null)) ){
      let tempCvData = [];
      setName(cvData.name || name);
      setProfilePicture(cvData.profilePicture || profilePicture);
      setLinkedIn(cvData.linkedIn || linkedIn);
      setTwitter(cvData.twitter || twitter);
      setGithub(cvData.github || github);
      setWebsite(cvData.website || website);
      setDiscode(cvData.discode || discode);
      setLinkedInLabel(cvData.linkedInLabel || linkedInLabel);
      setTwitterLabel(cvData.twitterLabel || twitterLabel);
      setGithubLabel(cvData.githubLabel || githubLabel);
      setWebsiteLabel(cvData.websiteLabel || websiteLabel);
      setDiscodeLabel(cvData.discodeLabel || discodeLabel);
      setTitle(cvData.jobTitle || title);
      setPhone(cvData.phone || phone);
      setEmail(cvData.email || email);
      setAddress(cvData.address || address);
  
      tempCvData.push(JSON.parse(cvData.profile || 'null' ) || contentData[0]);
      tempCvData.push(JSON.parse(cvData.education || 'null' )|| contentData[1]);
      tempCvData.push(JSON.parse(cvData.professionalExperience || 'null' )|| contentData[2]);
      tempCvData.push(JSON.parse(cvData.projects || 'null')  || contentData[3]);
      tempCvData.push(JSON.parse(cvData.coursesCertifications || 'null') || contentData[4]);
      tempCvData.push(JSON.parse(cvData.skills || 'null') || contentData[5]);
      tempCvData.push(JSON.parse(cvData.volunteerExperience || 'null') || contentData[6]);
      tempCvData.push(JSON.parse(cvData.otherQualification || 'null') || contentData[7]);
      tempCvData.push(JSON.parse(cvData.reference || 'null') || contentData[8]);
      setContentData(tempCvData);
    }    
}, [cvData]);
useEffect(() => {
  if((cvPersonalData!==null)){
    setName(cvPersonalData. name);
    setProfilePicture(cvPersonalData.profilePicture);
    setLinkedIn(cvPersonalData.linkedIn);
    setTwitter(cvPersonalData.twitter);
    setGithub(cvPersonalData.github);
    setWebsite(cvPersonalData.website);
    setDiscode(cvPersonalData.discode);
    setLinkedInLabel(cvPersonalData.linkedInLabel);
    setTwitterLabel(cvPersonalData.twitterLabel);
    setGithubLabel(cvPersonalData.githubLabel);
    setWebsiteLabel(cvPersonalData.websiteLabel);
    setDiscodeLabel(cvPersonalData.discodeLabel);
    setTitle(cvPersonalData.title);
    setPhone(cvPersonalData.phone);
    setEmail(cvPersonalData.email);
    setAddress(cvPersonalData.address);
  }
    
}, [cvPersonalData]);
useEffect(() => {
  if(cvContentData!==null){
   
    setContentData(cvContentData);
  } 
}, [cvContentData]);
  const editPersonalData = {
    name,
    setName,
    title,
    setTitle,
    phone,
    setPhone,
    email,
    setEmail,
    address,
    setAddress,
    profilePicture,
    setProfilePicture,
    linkedIn,
    setLinkedIn,
    twitter,
    setTwitter,
    github,
    setGithub,
    website,
    setWebsite,
    discode,
    setDiscode,
    linkedInLabel,
    setLinkedInLabel,
    twitterLabel,
    setTwitterLabel,
    githubLabel,
    setGithubLabel,
    websiteLabel,
    setWebsiteLabel,
    discodeLabel,
    setDiscodeLabel,
  };
  const viewPersonalData = {
    name,
    title,
    phone,
    email,
    address,
    profilePicture,
    linkedIn,
    twitter,
    github,
    website,
    discode,
    linkedInLabel,
    twitterLabel,
    githubLabel,
    websiteLabel,
    discodeLabel,
    contentData,
  };
  const viewEditPersonalData = {
    name,
    title,
    phone,
    email,
    address,
  };
  const addContentData = {
    contentData,
    setContentData,
    setActiveContent,
    activeContent,
  };
  const handleContent = (data) => {
    setActiveContent(data);
    dispatch(openAddContent());
    console.log(contentData[data.index].children);
  };

  const addSubContent = (data) => {
    let children = {
      key: data.key,
      has:true,
      title: null,
      subTitle: null,
      city: null,
      country: null,
      start: null,
      hasStart: false,
      showStartMonth: false,
      end: null,
      hasEnd: false,
      showEndMonth: false,
      present: false,
      description: null,
    };
    let newData = [...contentData];
    newData[data.index].children[data.key] = children;
    setContentData(newData);
    handleContent(data);
  };
  return (
    <>
      <Spin spinning={loading}>
      <Row
        gutter={10}
        style={{
          overflow: "hidden",
          display: "flex",
          height: "80vh",
        }}
      >
        <Col
          span={12}
          style={{
            overflowY: "scroll",
            flex: 1,
            height: "100%",
          }}
        >
          <Row gutter={[20, 20]}>
            {!addContent && (
              <Col span={22}>
                {!viewEdit && (
                  <PersonDetailsEditView
                    viewEditPersonalData={viewEditPersonalData}
                  />
                )}
                {viewEdit && (
                  <EditPersonalDetails editPersonalData={editPersonalData} />
                )}
              </Col>
            )}
            {addContent && (
              <Col span={22}>
                <AddContent addContentData={addContentData} />
              </Col>
            )}
            <Col span={22}>
              {!addContent && (
                <Row justify="center" gutter={[0, 15]}>
                  {contentData.map((mainItem, index) => {
                    let subTitle = mainItem.title;
                    let mainData = null;
                    if(mainItem.has){
                      return (
                        <Col span={24}>
                          <Row justify="center">
                            <Col span={24}>
                              <Collapse
                                style={{
                                  boxShadow: "0 0 30px rgba(0,0,0,.1)",
                                  borderRadius: "20px",
                                  cursor: "pointer",
                                }}
                                ghost
                                collapsible="header"
                                expandIconPosition="end"
                                //defaultActiveKey={["1"]}
                                items={[
                                  {
                                    key: "1",
                                    label: (
                                      <Row justify="center">
                                        <Col
                                          style={{
                                            boxShadow: "0 0 30px rgba(0,0,0,.1)",
                                            cursor: "pointer",
                                            borderRadius: "50px",
                                          }}
                                        >
                                          <Text
                                            style={{
                                              margin: "20px 40px",
                                              fontSize: "25px",
                                              fontWeight: "800",
                                              cursor: "pointer",
                                            }}
                                          >
                                            {mainItem.title}
                                          </Text>
                                        </Col>
                                      </Row>
                                    ),
                                    children: (
                                      <>
                                        <Row gutter={[20, 20]}>
                                          {mainItem.children.map((items) => {
                                          const  data = {
                                              index,
                                              key:items.key,
                                              title: subTitle,
                                            };
                                            return (
                                              <>
                                                {items.has &&
                                                  <Col
                                                  span={24}
                                                  onClick={()=>
                                                    handleContent(data)
                                                  }
                                                >
                                                  <Text
                                                    style={{
                                                      margin: "0",
                                                      fontSize: "22px",
                                                      fontWeight: "700",
                                                    }}
                                                  >
                                                    {data.key}
                                                    {items.title === null
                                                      ? subTitle
                                                      : items.title}
                                                  </Text>
                                                </Col>}
                                              </>
                                            );
                                          })}
                                          <Col span={24}>
                                            <Row justify="center">
                                              <Button
                                                onClick={() =>
                                                  { const data ={
                                                    index,
                                                    key:contentData[index].children.length,
                                                    title:subTitle
                                                  }
                                                    addSubContent(data)
                                                  }
                                                }
                                                style={{ borderRadius: "0" }}
                                                type="primary"
                                                size="large"
                                              >
                                                + Add {mainItem.title}
                                              </Button>
                                            </Row>
                                          </Col>
                                        </Row>
                                      </>
                                    ),
                                  },
                                ]}
                              />
                            </Col>
                          </Row>
                        </Col>
                      );
                    }
                  })}
                  {!viewEdit && (
                    <Button
                      onClick={() => dispatch(openCustomContent())}
                      size="large"
                      style={{
                        backgroundColor: "rgba(25,103,210,.8)",
                        color: "white",
                        height: "50px",
                        width: "300px",
                        borderRadius: "0",
                      }}
                    >
                      + Add Content
                    </Button>
                  )}
                </Row>
              )}
              <CustomContentModel addContentData={addContentData} />
            </Col>
          </Row>
        </Col>
        <Col
          span={12}
          style={{
            overflowY: "auto",
            height: "80vh",
            flex: 1,
          }}
        >
          <Resume viewPersonalData={viewPersonalData} />
        </Col>
      </Row>
      </Spin>
    </>
  );
}
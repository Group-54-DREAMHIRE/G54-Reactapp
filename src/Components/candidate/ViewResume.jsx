import { Button, Card, Col, Row, Typography, Collapse,Spin } from "antd";
import { useState } from "react";
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

const { Title, Text } = Typography;

export default function ViewResume() {
  const dispatch = useDispatch();
  const loading = useSelector((state)=>state.models.loading);
  const viewEdit = useSelector((state) => state.models.viewEditDetails);
  const addContent = useSelector((state) => state.models.addContent);

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
        },
      ],
    },
  ]);
  const [activeContent, setActiveContent] = useState({});

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
    dispatch(openAddContent());
    setActiveContent(data);
  };

  const addSubContent = (data) => {
    let children = {
      key: data.key + 1,
      has:true,
      title: data.subTitle,
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
    newData[data.index].children[data.key + 1] = children;
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
                  {contentData.map((item, index) => {
                    let subTitle = item.title;
                    let data = null;
                    if(item.has){
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
                                            {item.title}
                                          </Text>
                                        </Col>
                                      </Row>
                                    ),
                                    children: (
                                      <>
                                        <Row gutter={[20, 20]}>
                                          {item.children.map((item) => {
                                            data = {
                                              index,
                                              key: item.key,
                                              title: subTitle,
                                            };
                                            return (
                                              <>
                                                {item.has &&
                                                  <Col
                                                  span={24}
                                                  onClick={() => {
                                                    handleContent(data);
                                                  }}
                                                >
                                                  <Text
                                                    style={{
                                                      margin: "0",
                                                      fontSize: "22px",
                                                      fontWeight: "700",
                                                    }}
                                                  >
                                                    {item.title === null
                                                      ? subTitle
                                                      : item.title}
                                                  </Text>
                                                </Col>}
                                              </>
                                            );
                                          })}
                                          <Col span={24}>
                                            <Row justify="center">
                                              <Button
                                                onClick={() =>
                                                  addSubContent(data)
                                                }
                                                style={{ borderRadius: "0" }}
                                                type="primary"
                                                size="large"
                                              >
                                                + Add {item.title}
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

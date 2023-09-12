import { Button, Card, Col, Row, Typography, Collapse } from "antd";
import { useState } from "react";
import EditPersonalDetails from "./EditPersonalDetails";
import Resume from "../../pages/candidate/Resume";
import PersonDetailsEditView from "./PersonDetailsEditView";
import { useDispatch, useSelector } from "react-redux";
import {
  openAddContent,
  openCustomContent,
  openViewEditDetails,
} from "../../store/models/modelsSlice";
import CustomContentModel from "./CustomContentModel";
import AddContent from "./AddContent";

const { Title, Text } = Typography;

export default function ViewResume() {
  const dispatch = useDispatch();
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

  const [contentData, setContentData] = useState([]);
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
      title: data.subTitle,
      subTitle: "",
      city: "",
      Country: "",
    };
    let newData = [...contentData];
    newData[data.index].children[data.key + 1] = children;
    setContentData(newData);
    handleContent(data);
  };
  return (
    <>
      <Row 
        gutter={10} 
        style={{
          overflow:"hidden",
          display: 'flex',
          height: '80vh'
        }}>
        <Col span={12}  style={{
         overflowY: "scroll",
         flex:1,
         height:'100%'
        }}>
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
                                                  {item.title===""?subTitle:item.title}
                                                </Text>
                                              </Col>
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
        <Col span={12} style={{
           overflowY: "auto",
           height:'100',
           flex:1,
        }}>
          <Resume viewPersonalData={viewPersonalData} />
        </Col>
      </Row>
    </>
  );
}

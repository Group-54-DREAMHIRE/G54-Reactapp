import { Button, Card, Col, Row, Typography } from "antd";
import { useState } from "react";
import EditPersonalDetails from "./EditPersonalDetails";
import Resume from "../../pages/candidate/Resume";
import PersonDetailsEditView from "./PersonDetailsEditView";
import { useDispatch, useSelector } from "react-redux";
import { openAddContent, openCustomContent, openViewEditDetails } from "../../store/models/modelsSlice";
import CustomContentModel from "./CustomContentModel";
import AddContent from "./AddContent";

const {Title} = Typography;

export default function ViewResume() {
  const dispatch = useDispatch();
  const viewEdit = useSelector((state)=>state.models.viewEditDetails);
  const addContent = useSelector((state)=>state.models.addContent);

  const [profilePicture, setProfilePicture] = useState(null);
  const [linkedIn, setLinkedIn] = useState(null);
  const [twitter, setTwitter] = useState(null);
  const [github, setGithub] =useState(null);
  const [website, setWebsite] = useState(null);
  const [discode, setDiscode] = useState(null);
  const [linkedInLabel, setLinkedInLabel] = useState(null);
  const [twitterLabel, setTwitterLabel] = useState(null);
  const [githubLabel, setGithubLabel] =useState(null);
  const [websiteLabel, setWebsiteLabel] = useState(null);
  const [discodeLabel, setDiscodeLabel] = useState(null);
  const [name, setName] = useState(null);
  const [title, setTitle] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);
  const [address, setAddress] = useState(null);

  const [contentData, setContentData] = useState([]);
  const [activeContent, setActiveContent] = useState(0);

  const editPersonalData = {
    name, setName,
    title, setTitle,
    phone, setPhone,
    email, setEmail,
    address, setAddress,
    profilePicture, setProfilePicture,
    linkedIn, setLinkedIn,
    twitter, setTwitter,
    github, setGithub,
    website, setWebsite,
    discode, setDiscode,
    linkedInLabel, setLinkedInLabel,
    twitterLabel, setTwitterLabel,
    githubLabel, setGithubLabel,
    websiteLabel, setWebsiteLabel,
    discodeLabel, setDiscodeLabel
  }
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
  }
  const viewEditPersonalData = {
    name, 
    title, 
    phone, 
    email,
    address, 
  }
  const addContentData = {
    contentData, setContentData,activeContent
  }
  const handleContent =(index)=>{
    dispatch(openAddContent());
    setActiveContent(index);
  }
  return (
    <>
    <Row gutter={10}>
      <Col span={12}>
      <Row gutter={[20,20]}>
      {!addContent &&
        <Col span={22}>
         {!viewEdit &&
          <PersonDetailsEditView
           viewEditPersonalData={viewEditPersonalData}/>}
          {viewEdit &&
            <EditPersonalDetails editPersonalData={editPersonalData}/> }
        </Col>}
         {addContent && 
         <Col span={22}>
            <AddContent addContentData={addContentData}/>
        </Col> }
        <Col span={22}>
          {!addContent &&
            <Row justify='center' gutter={[0,15]}>
            {contentData.map((item, index)=>{
              return(
               <Col span={24}>
                <Card  
                  onClick={()=>{handleContent(index)}}
                  style={{ boxShadow: "0 0 30px rgba(0,0,0,.1)", borderRadius: '20px',cursor: 'pointer' }}> 
                <Title 
                  style={{margin: '0'}}
                  level={3} >
                  {item.title}
                </Title> 
                  </Card>              
               </Col>
              )
            })}
          {!viewEdit &&
          <Button 
            onClick={()=>dispatch(openCustomContent())}
            size="large"  
            style={{
              backgroundColor: 'rgba(25,103,210,.8)',
              color: 'white',
              height: '50px', 
              width: '300px',
              borderRadius:'0'
              }}>
            + Add Content
          </Button>}
          </Row>}
          <CustomContentModel addContentData={addContentData} />
        </Col>
      </Row>
      </Col>
      <Col span={12}>
          <Resume viewPersonalData={viewPersonalData}/>
      </Col>
    </Row>
    </>
  )
}

import dula from "../../assets/images/dula.jpeg";
import React, { useState, useEffect } from "react";
import { Layout, Row, Col, Typography, Divider, Image, Button, Space } from "antd";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import { FiMapPin, FiEdit } from "react-icons/fi";
import CustomContentModel from "../../Components/candidate/CustomContentModel";
import { useDispatch } from "react-redux";
import { openCustomContent } from "../../store/models/modelsSlice";
import ShowContent from "../../Components/candidate/ShowContent";
import { getData } from "../api/authenticationService";

const { Content } = Layout;
const { Title, Text, Link } = Typography;

const ViewResumePage = ({ viewPersonalData }) => {
  const dispatch = useDispatch();
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


  useEffect(() => {

      getData(`/api/v1/resume/getResume/${id}`)
        .then((response) => {
          setCvData(response.data);
          console.log(response.data);
          console.log(cvData === null);
        })
        .catch((error) => {
          console.error("Error fetching user profile:", error);
        });
  }, []);
  useEffect(() => {
    if(cvData !== null){
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
  return (
    <>
      <Row
        justify="space-between"
        align="middle"
        style={{
          padding: "40px",
          transform: "scale(0.75)",
          transformOrigin: "top left",
          width: "800px",
        }}
      >
        <Col span={24}>
          <Row justify="space-between">
            <Col span={18}>
              <Row gutter={[20, 10]}>
                {name && (
                  <Col span={24}>
                    <Title level={2} style={{ margin: "0" }}>
                      {name}
                    </Title>
                  </Col>
                )}
                {title && (
                  <Col span={24}>
                    <Title level={4} style={{ margin: "0" }}>
                      {title}
                    </Title>
                  </Col>
                )}
                {email && (
                  <Col>
                    <Text>
                      <MailOutlined style={{ marginRight: "7px" }} />
                      {email}
                    </Text>
                  </Col>
                )}
                {phone && (
                  <Col>
                    <Text>
                      <PhoneOutlined style={{ marginRight: "7px" }} />
                      {phone}
                    </Text>
                  </Col>
                )}
                {address && (
                  <Col>
                    <Text>
                      <FiMapPin style={{ marginRight: "7px" }} />
                      {address}
                    </Text>
                  </Col>
                )}
                {linkedInLabel && (
                  <Col>
                    <Link href={linkedIn} target="_blank">
                      <Text>
                        <LinkedinOutlined style={{ marginRight: "7px" }} />
                        {linkedInLabel}
                      </Text>
                    </Link>
                  </Col>
                )}
                {githubLabel && (
                  <Col>
                    <Link href={github} target="_blank">
                      <Text>
                        <GithubOutlined style={{ marginRight: "5px" }} />
                        {githubLabel}
                      </Text>
                    </Link>
                  </Col>
                )}
              </Row>
            </Col>

            {profilePicture && (
              <Col>
                <Image
                  src={profilePicture}
                  alt="Profile_Picture"
                  style={{
                    borderRadius: "20px",
                    width: "175px",
                    height: "150px",
                  }}
                />
              </Col>
            )}
          </Row>
            {contentData&& (
              contentData.map((item)=>{
                const data = viewPersonalData.contentData;
                return(
                  <ShowContent item={item} contentData={contentData}/>
                )
              })
            )}
        </Col>
      </Row>
    </>
  );
};

export default Resume;


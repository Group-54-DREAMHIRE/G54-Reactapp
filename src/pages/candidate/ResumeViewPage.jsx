import { useState, useEffect } from "react";
import {
  Layout,
  Row,
  Col,
  Typography,
  Divider,
  Image,
  Button,
  Space,
} from "antd";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import { FiMapPin, FiEdit } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import ShowContent from "../../Components/candidate/ShowContent";
import { getData } from "../../api/authenticationService";
import { setPersonalData } from "../../store/candidate/resumeSclice";

const { Content } = Layout;
const { Title, Text, Link } = Typography;


const ResumeViewPage = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("USER"));
  const id = user.id;
  const [cvData, setCvData] = useState({});
  const [personalDataCv,setPersonalDataCv] = useState({});
  const [contentDataCv,setContentDataCv] = useState([]);
  const cvPersonalData = useSelector((state) => state.resume.personalData);
  const cvContentData = useSelector((state) => state.resume.contentData);
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
    }else{
        setPersonalDataCv(cvPersonalData);
        setContentDataCv(cvContentData);
    }
    
  }, []);
  useEffect(() => {
    if ((cvData !== null)&& ((cvPersonalData===null) && (cvContentData===null)) ) {
        let tempCvData = [];
        const personData = {
        name:cvData.name || "",
        title:cvData.title || "",
        phone:cvData.phone || "",
        email:cvData.email || "",
        address:cvData.address || "",
        profilePicture:cvData.profilePicture || "",
        linkedIn:cvData.linkedIn || "",
        twitter:cvData.twitter || "",
        github:cvData.github || "",
        website:cvData.website || "",
        discode:cvData.discode || "",
        linkedInLabel:cvData.linkedInLabel || "",
        twitterLabel:cvData.twitterLabel || "",
        githubLabel:cvData.githubLabel || "",
        websiteLabel:cvData.websiteLabel || "",
        discodeLabel:cvData.discodeLabel || "",
      };
      setPersonalDataCv(personData);
      tempCvData.push(JSON.parse(cvData.profile || "null") || {});
      tempCvData.push(JSON.parse(cvData.education || "null") || {});
      tempCvData.push(
        JSON.parse(cvData.professionalExperience || "null")|| {}
      );
      tempCvData.push(JSON.parse(cvData.projects || "null")|| {});
      tempCvData.push(
        JSON.parse(cvData.coursesCertifications || "null") || {}
      );
      tempCvData.push(JSON.parse(cvData.skills || "null") || {});
      tempCvData.push(
        JSON.parse(cvData.volunteerExperience || "null") || {}
      );
      tempCvData.push(
        JSON.parse(cvData.otherQualification || "null")|| {} 
      );
      tempCvData.push(JSON.parse(cvData.reference || "null")|| {});
      setContentDataCv(tempCvData);
    }
  }, [cvData]);

  useEffect(() => {
    if((cvPersonalData!==null)){
      setPersonalDataCv(cvPersonalData);
    }
      
  }, [cvPersonalData]);
  useEffect(() => {
    if(cvContentData!==null){
      setContentDataCv(cvContentData);
    } 
  }, [cvContentData]);
  return (
    <>
      <Row
        justify="center"
        align="middle"
      >
        <Col span={16}>
          <Row justify="space-between">
            <Col span={18}>
              <Row gutter={[20, 10]}>
                {personalDataCv.name && (
                  <Col span={24}>
                    <Title level={2} style={{ margin: "0" }}>
                      {personalDataCv.name}
                    </Title>
                  </Col>
                )}
                {personalDataCv.title && (
                  <Col span={24}>
                    <Title level={4} style={{ margin: "0" }}>
                      {personalDataCv.title}
                    </Title>
                  </Col>
                )}
                {personalDataCv.email && (
                  <Col>
                    <Text>
                      <MailOutlined style={{ marginRight: "7px" }} />
                      {personalDataCv.email}
                    </Text>
                  </Col>
                )}
                {personalDataCv.phone && (
                  <Col>
                    <Text>
                      <PhoneOutlined style={{ marginRight: "7px" }} />
                      {personalDataCv.phone}
                    </Text>
                  </Col>
                )}
                {personalDataCv.address && (
                  <Col>
                    <Text>
                      <FiMapPin style={{ marginRight: "7px" }} />
                      {personalDataCv.address}
                    </Text>
                  </Col>
                )}
                {personalDataCv.linkedInLabel && (
                  <Col>
                    <Link href={personalDataCv.linkedIn} target="_blank">
                      <Text>
                        <LinkedinOutlined style={{ marginRight: "7px" }} />
                        {personalDataCv.linkedInLabel}
                      </Text>
                    </Link>
                  </Col>
                )}
                {personalDataCv.githubLabel && (
                  <Col>
                    <Link href={personalDataCv.github} target="_blank">
                      <Text>
                        <GithubOutlined style={{ marginRight: "5px" }} />
                        {personalDataCv.githubLabel}
                      </Text>
                    </Link>
                  </Col>
                )}
              </Row>
            </Col>

            {personalDataCv.profilePicture && (
              <Col>
                <Image
                  src={personalDataCv.profilePicture}
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
          {contentDataCv &&
            contentDataCv.map((item) => {
              const data = contentDataCv;
              return <ShowContent item={item} contentData={data} />;
            })}
        </Col>
      </Row>
    </>
  );
};

export default ResumeViewPage;

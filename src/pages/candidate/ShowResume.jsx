import { useEffect,useState } from "react";
import { Col, Image, Row, Typography } from "antd";
import addDoc from "../../assets/images/CREATECV.png";
import CreateResumeCard from "../../Components/cards/candidate/CreateResumeCard";
import ViewResumeCard from "../../Components/cards/candidate/ViewResumeCard";
import { getData } from "../../api/authenticationService";
import { useDispatch,useSelector } from "react-redux";
import { setContentData, setHasCv, setPersonalData } from "../../store/candidate/resumeSclice";
const { Title, Text, Link } = Typography;

export default function ShowResume() {

  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("USER"));
  const id = user.id;
  const [cvData, setCvData] = useState({});
  const [hasResume, setHasResume] = useState(false);
  const cvPersonalData = useSelector((state) => state.resume.personalData);
  const cvContentData = useSelector((state) => state.resume.contentData);
  const hasCv = useSelector((state) => state.resume.hasCv);
  useEffect(() => {
    if((cvData !== null)){
        getData(`/api/v1/resume/getResume/${id}`)
        .then((response) => {
          setCvData(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error fetching user profile:", error);
        });
    }
    
  }, []);
  useEffect(() => {
    if (cvData !== null ) {
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
      dispatch(setPersonalData(personData));
      dispatch(setHasCv(cvData.hasResume));
      console.log(cvData.email);
      tempCvData.push(JSON.parse(cvData.profile || "null")|| {});
      tempCvData.push(JSON.parse(cvData.education || "null") || {});
      tempCvData.push(
        JSON.parse(cvData.professionalExperience || "null")|| {}
      );
      tempCvData.push(JSON.parse(cvData.projects || "null")|| {});
      tempCvData.push(
        JSON.parse(cvData.coursesCertifications || "null") || {}
      );
      tempCvData.push(JSON.parse(cvData.skills || "null")|| {} );
      tempCvData.push(
        JSON.parse(cvData.volunteerExperience || "null") || {}
      );
      tempCvData.push(
        JSON.parse(cvData.otherQualification || "null")|| {}
      );
      tempCvData.push(JSON.parse(cvData.reference || "null")|| {});
      dispatch(setContentData(tempCvData));
      console.log(tempCvData)
    }
  }, [cvData]);
  return (
    <>
      <Row>
        <Col span={24}>
          <Row gutter={[20, 20]}>
            <Col span={24}>
              <Title level={3} style={{ marginTop: "0", marginBottom: "10px" }}>
                RESUME
              </Title>
              <hr style={{ border: "2px solid rgba(0,0,0,.4)" }} />
            </Col>
            {!hasCv ?( <Col span={24}>
              <CreateResumeCard/>
            </Col>):(<Col span={24}>
              <ViewResumeCard/>
            </Col>)}
          </Row>
        </Col>
      </Row>
    </>
  );
}

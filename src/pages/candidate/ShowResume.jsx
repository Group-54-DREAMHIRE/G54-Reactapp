import { useEffect, useState } from "react";
import { Col, Image, Row, Typography } from "antd";
import addDoc from "../../assets/images/CREATECV.png";
import CreateResumeCard from "../../Components/cards/candidate/CreateResumeCard";
import ViewResumeCard from "../../Components/cards/candidate/ViewResumeCard";
import { getData } from "../../api/authenticationService";
import { useDispatch, useSelector } from "react-redux";
import {
  setContentData,
  setHasCv,
  setPersonalData,
} from "../../store/candidate/resumeSclice";
const { Title, Text, Link } = Typography;

export default function ShowResume() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("USER"));
  const id = user.id;
  const [cvData, setCvData] = useState(null);
  const [hasResume, setHasResume] = useState(false);
  const cvPersonalData = useSelector((state) => state.resume.personalData);
  const cvContentData = useSelector((state) => state.resume.contentData);
  useEffect(() => {
    getData(`/api/v1/resume/getResume/${id}`)
      .then((response) => {
        setCvData(response.data);
        console.log(response.data);
        if(response.data){
          setHasResume(true);
        }
      })
      .catch((error) => {
        console.error("Error fetching user profile:", error);
      });
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      if (cvData !== null) {
        try {
          // Extracting personal information
          const personData = {
            name: cvData.name || "",
            title: cvData.jobTitle || "",
            phone: cvData.phone || "",
            email: cvData.email || "",
            address: cvData.address || "",
            profilePicture: cvData.profilePicture || null,
            linkedIn: cvData.linkedIn || "",
            twitter: cvData.twitter || "",
            github: cvData.github || "",
            website: cvData.website || "",
            discode: cvData.discode || "",
            linkedInLabel: cvData.linkedInLabel || "",
            twitterLabel: cvData.twitterLabel || "",
            githubLabel: cvData.githubLabel || "",
            websiteLabel: cvData.websiteLabel || "",
            discodeLabel: cvData.discodeLabel || "",
            // ... other personal data properties
          };

          // Dispatching personal data to Redux store
          dispatch(setPersonalData(personData));

          // Creating an array with parsed CV data
          const tempCvData = [
            JSON.parse(cvData.profile || 'null') || {},
            JSON.parse(cvData.education || 'null') || {},
            JSON.parse(cvData.professionalExperience || 'null') || {},
            JSON.parse(cvData.projects || 'null') || {},
            JSON.parse(cvData.coursesCertifications || 'null') || {},
            JSON.parse(cvData.skills || 'null') || {},
            JSON.parse(cvData.volunteerExperience || 'null') || {},
            JSON.parse(cvData.otherQualification || 'null') || {},
            JSON.parse(cvData.reference || 'null') || {},
          ];

          // Dispatching CV data to Redux store
          dispatch(setContentData(tempCvData));

          // Dispatching "has CV" action
          dispatch(setHasCv());

          // Setting local state hasResume to true
          
        } catch (error) {
          console.error('Error parsing CV data:', error);
          // Handle the error, e.g., show an error message to the user
        }
      }
    };

    fetchData();
  }, [cvData, dispatch]);
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
            {!hasResume ? (
              <Col span={24}>
                <CreateResumeCard />
              </Col>
            ) : (
              <Col span={24}>
                <ViewResumeCard />
              </Col>
            )}
          </Row>
        </Col>
      </Row>
    </>
  );
}

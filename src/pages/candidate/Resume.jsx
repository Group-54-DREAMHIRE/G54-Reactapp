import dula from "../../assets/images/dula.jpeg";
import React, { useState } from "react";
import { Layout, Row, Col, Typography, Divider, Image, Button } from "antd";
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

const { Content } = Layout;
const { Title, Text, Link } = Typography;

const Resume = ({ viewPersonalData }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Row
        justify="space-between"
        align="middle"
        style={{
          padding: "40px",
          transform: "scale(0.75)",
          transformOrigin: "top left",
          width: "850px",
        }}
      >
        <Col span={24}>
          <Row justify="space-between">
            <Col span={18}>
              <Row gutter={[20, 10]}>
                {viewPersonalData.name && (
                  <Col span={24}>
                    <Title level={2} style={{ margin: "0" }}>
                      {viewPersonalData.name}
                    </Title>
                  </Col>
                )}
                {viewPersonalData.title && (
                  <Col span={24}>
                    <Title level={4} style={{ margin: "0" }}>
                      {viewPersonalData.title}
                    </Title>
                  </Col>
                )}
                {viewPersonalData.email && (
                  <Col>
                    <Text>
                      <MailOutlined style={{ marginRight: "7px" }} />
                      {viewPersonalData.email}
                    </Text>
                  </Col>
                )}
                {viewPersonalData.phone && (
                  <Col>
                    <Text>
                      <PhoneOutlined style={{ marginRight: "7px" }} />
                      {viewPersonalData.phone}
                    </Text>
                  </Col>
                )}
                {viewPersonalData.address && (
                  <Col>
                    <Text>
                      <FiMapPin style={{ marginRight: "7px" }} />
                      {viewPersonalData.address}
                    </Text>
                  </Col>
                )}
                {viewPersonalData.linkedInLabel && (
                  <Col>
                    <Link href={viewPersonalData.linkedIn} target="_blank">
                      <Text>
                        <LinkedinOutlined style={{ marginRight: "7px" }} />
                        {viewPersonalData.linkedInLabel}
                      </Text>
                    </Link>
                  </Col>
                )}
                {viewPersonalData.githubLabel && (
                  <Col>
                    <Link href={viewPersonalData.github} target="_blank">
                      <Text>
                        <GithubOutlined style={{ marginRight: "5px" }} />
                        {viewPersonalData.githubLabel}
                      </Text>
                    </Link>
                  </Col>
                )}
              </Row>
            </Col>

            {viewPersonalData.profilePicture && (
              <Col>
                <Image
                  src={viewPersonalData.profilePicture}
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
        </Col>
      </Row>
    </>
  );
};

export default Resume;

//  <Row>
//               <Col span={24}>
//                 <Title level={3} style={{ marginTop: "10px" }}>
//                   Profile
//                 </Title>
//                 <hr style={{ border: "2px solid rgba(0,0,0,.6)" }} />
//                 <Text>
//                   I am a diligent software engineer with years of experience in
//                   software development. I'm eager to join your crew to build
//                   out-of-the-box solutions for regional clients. I am skilled in
//                   software development, developing plans, managing projects, and
//                   user documentation.
//                 </Text>
//               </Col>
//             </Row>
//             <Row>
//               <Col span={24}>
//                 <Row justify="space-between" gutter={[15, 15]}>
//                   <Col span={24}>
//                     <Title level={3}>Education</Title>
//                     <hr style={{ border: "2px solid rgba(0,0,0,.6)" }} />
//                   </Col>
//                   <Col span={18}>
//                     <Text strong>BSc in Computer Science, </Text>
//                     <Text>University of Colombo School of Computing</Text>
//                     <br />
//                     <Text>
//                       Current GPA 3.15(End of Second Year Second Semester)
//                     </Text>
//                   </Col>
//                   <Col span={4}>
//                     <Row justify="end">
//                       <Col>
//                         <Text style={{ textAlign: "right" }}>2020 - 2023</Text>
//                         <br />
//                       </Col>
//                       <Col>
//                         <Text>Colombo, Sri Lanka</Text>
//                       </Col>
//                     </Row>
//                   </Col>
//                 </Row>
//               </Col>
//               <Divider />
//             </Row>

//             <Row>
//               <Col>
//                 <Row justify="space-between">
//                   <Col span={24}>
//                     <Title level={3}>Professional Experience</Title>
//                     <hr style={{ border: "2px solid rgba(0,0,0,.6)" }} />
//                   </Col>
//                   <Col span={20}>
//                     <Text strong>Software Engineer(Intern), </Text>{" "}
//                     <Text> eBuilder Technology Center Pvt Ltd</Text>
//                     <br />
//                   </Col>
//                   <Col>
//                     <Text>11/2022 - Present</Text>
//                     <br />
//                     <Text>Colombo, Sri Lanka</Text>
//                   </Col>
//                 </Row>
//                 <Divider />

//                 {/* Projects */}

//                 <Row justify="space-between">
//                   <Col span={24}>
//                     <Title level={3}>Projects</Title>
//                     <hr style={{ border: "2px solid rgba(0,0,0,.6)" }} />
//                   </Col>
//                   <Col span={20}>
//                     <Text strong>LEARNX</Text>
//                     <br />

//                     <Text>
//                       Effective and convenient online education platform with
//                       video conferencing tools and track student activities
//                       during the class time (web app & desktop app)
//                       <br />
//                       Technologies: React, TypeScript, SASS, NodeJS, Express,
//                       Electron, Twilio, Stripe, Prisma <br />
//                       Contribution: Full Stack Development (3rd Year Group
//                       project)
//                     </Text>
//                     <br />
//                     <Text>Github: </Text>
//                     <a href="https://github.com/TeachMe-Project">
//                       https://github.com/TeachMe-Project
//                     </a>
//                     <br />
//                     <Text>Website: </Text>
//                     <a href="https://sweet-cannoli-38633d.netlify.app/">
//                       https://sweet-cannoli-38633d.netlify.app/
//                     </a>
//                     <br />
//                     {/* Add more projects here */}
//                   </Col>
//                   <Col>
//                     <Text></Text> <br />
//                     <Text>2022</Text>
//                   </Col>
//                 </Row>
//                 <Divider />

//                 {/* Competitions */}

//                 <Row>
//                   <Col span={24}>
//                     <Title level={3}>Competitions</Title>
//                     <hr style={{ border: "2px solid rgba(0,0,0,.6)" }} />
//                   </Col>
//                   <Col xs={24} sm={18} md={18} lg={18}>
//                     <Text>
//                       NBQSA Sri Lanka 2022, Finalist Team(LearnX) - National ICT
//                       Awards - NBQSA Sri Lanka
//                     </Text>
//                     <br />
//                     <Text>
//                       NBQSA Sri Lanka 2022, Finalist Team(Sportizza) - National
//                       ICT Awards - NBQSA Sri Lanka
//                     </Text>
//                     <br />
//                     <Text>
//                       FreshHack 1.0, Finalist Team - FreshHack 1.0 organized by
//                       UCSC ISACA Student Group
//                     </Text>
//                     <br />
//                     <Text>
//                       RevolUX, Finalist Team - RevolUX Designation 2021
//                       organized by AIESEC
//                     </Text>
//                     <br />
//                     {/* Add more competitions here */}
//                   </Col>
//                 </Row>
//                 <Divider />

//                 {/* Courses And Certificates */}
//                 <Title level={3}>Courses And Certificates</Title>
//                 <Row>
//                   <Col xs={24} sm={18} md={18} lg={18}>
//                     <Text>
//                       AWS Cloud Technical Essentials, Amazon Web Services 2023
//                     </Text>
//                     <br />
//                     <Text>
//                       Postman Student Expert, POSTMAN STUDENT PROGRAM 2022
//                     </Text>
//                     <br />
//                     <Text>JAVA Certificate Course, HackerRank 2022</Text>
//                     <br />
//                     <Text>React Certification Course, HackerRank 2022</Text>
//                     <br />
//                     {/* Add more courses and certificates here */}
//                   </Col>
//                 </Row>
//                 <Divider />

//                 {/* Skills And Technologies */}
//                 <Title level={3}>Skills And Technologies</Title>
//                 <Row>
//                   <Col xs={24} sm={18} md={18} lg={18}>
//                     <Text>
//                       Programming Languages: C, C++, Java, JavaScript, Scala,
//                       PHP, Python
//                     </Text>
//                     <br />
//                     <Text>
//                       Version Control Systems & Tools: Git, Github, Jira,
//                       Confluence
//                     </Text>
//                     <br />
//                     <Text>
//                       Web Development: React, Angular, SpringBoot, ExpressJS,
//                       HTML, CSS, Bootstrap, NodeJS, SASS, Tailwind CSS
//                     </Text>
//                     <br />
//                     <Text>Operating Systems: Windows, Linux</Text>
//                     <br />
//                     <Text>Databases: MySQL</Text>
//                     <br />
//                     <Text>
//                       Soft Skills: Teamwork, Hard Working, Quick Learner
//                     </Text>
//                     <br />
//                     <Text>
//                       Other Technologies: Unity, Blender, ThreeJS, A-Frame,
//                       Electron, Docker, AWS, Azure, CI/CD pipelines
//                     </Text>
//                     <br />
//                   </Col>
//                 </Row>
//                 <Divider />

//                 {/* Organizations */}
//                 <Title level={3}>Organizations</Title>
//                 <Row>
//                   <Col xs={24} sm={18} md={18} lg={18}>
//                     <Text>SOBAWITHA Society UCSC, President</Text>
//                     <br />
//                     <Text>IEEE Computer Society UCSC, Committee Member</Text>
//                     <br />
//                     <Text>Ganithayata Athahitha Society, Committee Member</Text>
//                     <br />
//                     <Text>LEO Club UCSC, Member</Text>
//                     <br />
//                     {/* Add more organizations here */}
//                   </Col>
//                 </Row>
//                 <Divider />

//                 {/* Interests */}
//                 <Title level={3}>Interests</Title>
//                 <Row>
//                   <Col xs={24} sm={18} md={18} lg={18}>
//                     <Text>Travelling And Hiking</Text>
//                     <br />
//                     <Text>Sports: Rugby, Cricket</Text>
//                     <br />
//                   </Col>
//                 </Row>
//                 <Divider />

//                 {/* Volunteers */}
//                 <Title level={3}>Volunteers</Title>
//                 <Row>
//                   <Col xs={24} sm={18} md={18} lg={18}>
//                     <Text>
//                       May 2022 - Teaching mathematics to students in three rural
//                       schools in the Badulla district, Sri Lanka.
//                     </Text>
//                     <br />
//                     <Text>
//                       June 2022 - Beach cleaning campaign, Unawatuna beach
//                     </Text>
//                     <br />
//                     <Text>
//                       April 2022 - GCE O/L mathematics in Anuradhapura
//                     </Text>
//                     <br />
//                   </Col>
//                 </Row>
//                 <Divider />

//                 {/* References */}
//                 <Title level={3}>References</Title>
//                 <Row>
//                   <Col xs={24} sm={18} md={18} lg={18}>
//                     <Text strong>Dr. (Ms.) S.M.K.D.Arunathilleka</Text>
//                     <br />
//                     <Text>
//                       Senior Lecturer, University of Colombo School of Computing
//                     </Text>
//                     <br />
//                     <Text>Email: sda@ucsc.cmb.ac.lk</Text>
//                     <br />
//                     <Text>Phone: (+94) 112581245</Text>
//                     <br />
//                   </Col>
//                 </Row>
//               </Col>
//             </Row>

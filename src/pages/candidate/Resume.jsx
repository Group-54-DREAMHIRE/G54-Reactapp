// import { useState } from "react";
// import { FaRegSave, FaMapMarkerAlt } from "react-icons/fa";
// import { EditOutlined } from "@ant-design/icons";
// import {
//   Row,
//   Col,
//   Upload,
//   Form,
//   Typography,
//   Input,
//   Divider,
//   Select,
//   DatePicker,
//   Button,
// } from "antd";

// const { TextArea } = Input;
// const { Title, Text } = Typography;

// export default function Resume() {
//   const [editing, setEditing] = useState(false);
//   const [content, setContent] = useState("Dulanjana Weerasinghe");
//   const [editedContent, setEditedContent] = useState(content);
//   const handleEditToggle = () => {
//     setEditing(!editing);
//   };

//   const [name, setName] = useState("Dulanjana Weerasinghe");
//   const [editedName, setEditedName] = useState(name);
//   const [title, setTitle] = useState("Software Engineer");
//   const [editedTitle, setEditedTitle] = useState(title);
//   const [email, setEmail] = useState("dpsweerasinghe98@gmail.com");
//   const [editedEmail, setEditedEmail] = useState(email);
//   const [phone, setPhone] = useState("071 290 50 22");
//   const [editedPhone, setEditedPhone] = useState(phone);
//   const [address, setAddress] = useState("Matara, Dickwella.");
//   const [editedAddress, setEditedAddress] = useState(address);
//   const [description, setDiscription] = useState("");

//   const [city, setCity] = useState("Matara");
//   return (
//     <>
//       <Row style={{ padding: "2% 5%" }}>
//         <Col span={24}>
//           <Row>
//             <Title style={{ marginTop: "0" }}>RESUME</Title>
//             <Divider style={{ margin: "0" }} />
//           </Row>
//           <Row style={{ display: "flex", flexDirection: "column" }}>
//             <Col span={12}>
//               <Input
//                 onChange={(e) => setName(e.target.value)}
//                 value={name}
//                 style={{
//                   paddingTop: "5px",
//                   paddingBottom: "5px",
//                   marginTop: "10px",
//                   border: "none",
//                   fontSize: "30px",
//                 }}
//                 suffix={<EditOutlined />}
//               />
//             </Col>
//             <Col span={10}>
//               <Input
//                 onChange={(e) => setTitle(e.target.value)}
//                 value={title}
//                 style={{
//                   paddingTop: "5px",
//                   paddingBottom: "5px",
//                   marginTop: "0px",
//                   border: "none",
//                   fontSize: "20px",
//                 }}
//                 suffix={<EditOutlined />}
//               />
//             </Col>
//             <Col>
//                 <Row>
//                     <Col span={8}>
//                     <Input
//                 onChange={(e) => setEmail(e.target.value)}
//                 value={email}
//                 style={{
//                   paddingTop: "5px",
//                   paddingBottom: "5px",
//                   marginTop: "0px",
//                   border: "none",
//                   fontSize: "14px",
//                 }}
//                 suffix={<EditOutlined />}
//               />
//                     </Col>
//                     <Col span={6}>
//                     <Input
//                 onChange={(e) => setAddress(e.target.value)}
//                 value={address}
//                 style={{
//                   paddingTop: "5px",
//                   paddingBottom: "5px",
//                   marginTop: "0px",
//                   border: "none",
//                   fontSize: "14px",

//                 }}
//                 prefix={<FaMapMarkerAlt/>}
//                 suffix={<EditOutlined />}
//               />
//                     </Col>
//                 </Row>
//             </Col>
//           </Row>
//         </Col>
//       </Row>
//     </>
//   );
// }
import dula from "../../assets/images/dula.jpeg";
import React from "react";
import { Layout, Row, Col, Typography, Divider, Image } from "antd";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from "@ant-design/icons";

const { Content } = Layout;
const { Title, Text } = Typography;

const Resume = () => {
  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "#FFF" }}>
      <Content style={{ padding: "50px" }}>
        <Row justify="space-between" align="middle">
          {/* Left Column */}
          <Col span={24}>
            <Row justify="space-between">
              <Col span={18}>
                <Title level={2} style={{ marginBottom: "5px" }}>
                  Dulanajna Weerasinghe
                </Title>
                <Title level={5} style={{ marginTop: "5px" }}>
                  Software Engineer
                </Title>
                <Row gutter={20}>
                  <Col>
                    <Text>
                      <MailOutlined style={{ marginRight: "7px" }} />
                      dpsweerasinghe98@gmail.com
                    </Text>
                  </Col>
                  <Col>
                    <Text>
                      <PhoneOutlined style={{ marginRight: "7px" }} />
                      0712905022
                    </Text>
                  </Col>
                  <Col>
                    <Text>
                      <LinkedinOutlined style={{ marginRight: "7px" }} />
                      LinkedIn
                    </Text>
                  </Col>
                  <Col>
                    <Text>
                      <GithubOutlined style={{ marginRight: "5px" }} />
                      Github
                    </Text>
                  </Col>
                </Row>
              </Col>

              <Col>
                <Image
                  src={dula}
                  alt="Profile"
                  style={{ borderRadius: "20px", width: "175px" }}
                />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Title level={3} style={{ marginTop: "10px" }}>
                  Profile
                </Title>
                <hr style={{ border: "2px solid rgba(0,0,0,.6)" }} />
                <Text>
                  I am a diligent software engineer with years of experience in
                  software development. I'm eager to join your crew to build
                  out-of-the-box solutions for regional clients. I am skilled in
                  software development, developing plans, managing projects, and
                  user documentation.
                </Text>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Row justify="space-between" gutter={[15, 15]}>
                  <Col span={24}>
                    <Title level={3}>Education</Title>
                    <hr style={{ border: "2px solid rgba(0,0,0,.6)" }} />
                  </Col>
                  <Col span={18}>
                    <Text strong>BSc in Computer Science, </Text>
                    <Text>University of Colombo School of Computing</Text>
                    <br />
                    <Text>
                      Current GPA 3.15(End of Second Year Second Semester)
                    </Text>
                  </Col>
                  <Col span={4}>
                    <Row justify="end">
                      <Col>
                        <Text style={{ textAlign: "right" }}>2020 - 2023</Text>
                        <br />
                      </Col>
                      <Col>
                        <Text>Colombo, Sri Lanka</Text>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Divider />
            </Row>

            <Row>
              <Col>
                <Row justify="space-between">
                  <Col span={24}>
                    <Title level={3}>Professional Experience</Title>
                    <hr style={{ border: "2px solid rgba(0,0,0,.6)" }} />
                  </Col>
                  <Col span={20}>
                    <Text strong>Software Engineer(Intern), </Text>{" "}
                    <Text> eBuilder Technology Center Pvt Ltd</Text>
                    <br />
                  </Col>
                  <Col>
                    <Text>11/2022 - Present</Text>
                    <br />
                    <Text>Colombo, Sri Lanka</Text>
                  </Col>
                </Row>
                <Divider />

                {/* Projects */}

                <Row justify="space-between">
                  <Col span={24}>
                    <Title level={3}>Projects</Title>
                    <hr style={{ border: "2px solid rgba(0,0,0,.6)" }} />
                  </Col>
                  <Col span={20}>
                    <Text strong>LEARNX</Text>
                    <br />
                 
                    <Text>
                      Effective and convenient online education platform with
                      video conferencing tools and track student activities
                      during the class time (web app & desktop app)
                      <br />
                      Technologies: React, TypeScript, SASS, NodeJS, Express,
                      Electron, Twilio, Stripe, Prisma <br />
                      Contribution: Full Stack Development (3rd Year Group
                      project)
                    </Text>
                    <br />
                    <Text>Github: </Text>
                    <a href="https://github.com/TeachMe-Project">
                      https://github.com/TeachMe-Project
                    </a>
                    <br />
                    <Text>Website: </Text>
                    <a href="https://sweet-cannoli-38633d.netlify.app/">
                      https://sweet-cannoli-38633d.netlify.app/
                    </a>
                    <br />
                    {/* Add more projects here */}
                  </Col>
                  <Col>
                    <Text></Text> <br />
                    <Text>2022</Text>
                  </Col>
                </Row>
                <Divider />

                {/* Competitions */}

                <Row>
                  <Col span={24}>
                    <Title level={3}>Competitions</Title>
                    <hr style={{ border: "2px solid rgba(0,0,0,.6)" }} />
                  </Col>
                  <Col xs={24} sm={18} md={18} lg={18}>
                    <Text>
                      NBQSA Sri Lanka 2022, Finalist Team(LearnX) - National ICT
                      Awards - NBQSA Sri Lanka
                    </Text>
                    <br />
                    <Text>
                      NBQSA Sri Lanka 2022, Finalist Team(Sportizza) - National
                      ICT Awards - NBQSA Sri Lanka
                    </Text>
                    <br />
                    <Text>
                      FreshHack 1.0, Finalist Team - FreshHack 1.0 organized by
                      UCSC ISACA Student Group
                    </Text>
                    <br />
                    <Text>
                      RevolUX, Finalist Team - RevolUX Designation 2021
                      organized by AIESEC
                    </Text>
                    <br />
                    {/* Add more competitions here */}
                  </Col>
                </Row>
                <Divider />

                {/* Courses And Certificates */}
                <Title level={3}>Courses And Certificates</Title>
                <Row>
                  <Col xs={24} sm={18} md={18} lg={18}>
                    <Text>
                      AWS Cloud Technical Essentials, Amazon Web Services 2023
                    </Text>
                    <br />
                    <Text>
                      Postman Student Expert, POSTMAN STUDENT PROGRAM 2022
                    </Text>
                    <br />
                    <Text>JAVA Certificate Course, HackerRank 2022</Text>
                    <br />
                    <Text>React Certification Course, HackerRank 2022</Text>
                    <br />
                    {/* Add more courses and certificates here */}
                  </Col>
                </Row>
                <Divider />

                {/* Skills And Technologies */}
                <Title level={3}>Skills And Technologies</Title>
                <Row>
                  <Col xs={24} sm={18} md={18} lg={18}>
                    <Text>
                      Programming Languages: C, C++, Java, JavaScript, Scala,
                      PHP, Python
                    </Text>
                    <br />
                    <Text>
                      Version Control Systems & Tools: Git, Github, Jira,
                      Confluence
                    </Text>
                    <br />
                    <Text>
                      Web Development: React, Angular, SpringBoot, ExpressJS,
                      HTML, CSS, Bootstrap, NodeJS, SASS, Tailwind CSS
                    </Text>
                    <br />
                    <Text>Operating Systems: Windows, Linux</Text>
                    <br />
                    <Text>Databases: MySQL</Text>
                    <br />
                    <Text>
                      Soft Skills: Teamwork, Hard Working, Quick Learner
                    </Text>
                    <br />
                    <Text>
                      Other Technologies: Unity, Blender, ThreeJS, A-Frame,
                      Electron, Docker, AWS, Azure, CI/CD pipelines
                    </Text>
                    <br />
                  </Col>
                </Row>
                <Divider />

                {/* Organizations */}
                <Title level={3}>Organizations</Title>
                <Row>
                  <Col xs={24} sm={18} md={18} lg={18}>
                    <Text>SOBAWITHA Society UCSC, President</Text>
                    <br />
                    <Text>IEEE Computer Society UCSC, Committee Member</Text>
                    <br />
                    <Text>Ganithayata Athahitha Society, Committee Member</Text>
                    <br />
                    <Text>LEO Club UCSC, Member</Text>
                    <br />
                    {/* Add more organizations here */}
                  </Col>
                </Row>
                <Divider />

                {/* Interests */}
                <Title level={3}>Interests</Title>
                <Row>
                  <Col xs={24} sm={18} md={18} lg={18}>
                    <Text>Travelling And Hiking</Text>
                    <br />
                    <Text>Sports: Rugby, Cricket</Text>
                    <br />
                  </Col>
                </Row>
                <Divider />

                {/* Volunteers */}
                <Title level={3}>Volunteers</Title>
                <Row>
                  <Col xs={24} sm={18} md={18} lg={18}>
                    <Text>
                      May 2022 - Teaching mathematics to students in three rural
                      schools in the Badulla district, Sri Lanka.
                    </Text>
                    <br />
                    <Text>
                      June 2022 - Beach cleaning campaign, Unawatuna beach
                    </Text>
                    <br />
                    <Text>
                      April 2022 - GCE O/L mathematics in Anuradhapura
                    </Text>
                    <br />
                  </Col>
                </Row>
                <Divider />

                {/* References */}
                <Title level={3}>References</Title>
                <Row>
                  <Col xs={24} sm={18} md={18} lg={18}>
                    <Text strong>Dr. (Ms.) S.M.K.D.Arunathilleka</Text>
                    <br />
                    <Text>
                      Senior Lecturer, University of Colombo School of Computing
                    </Text>
                    <br />
                    <Text>Email: sda@ucsc.cmb.ac.lk</Text>
                    <br />
                    <Text>Phone: (+94) 112581245</Text>
                    <br />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Resume;

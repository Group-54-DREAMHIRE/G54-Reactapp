import {
  Form,
  Input,
  Button,
  Modal,
  Row,
  Col,
  Typography,
  Select,
  Alert,
  Spin,
  message,
  Card,
  Space,
} from "antd";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { closeCustomContent } from "../../store/models/modelsSlice";
const { Title, Text, Link } = Typography;

const customList = [
  {
    icon: <UserOutlined />,
    title: "Profile",
    value: "profile",
    content:
      " Make a great first impression by presenting yourself in a few sentences.",
  },
  {
    icon: "",
    title: "Education",
    value: "education",
    content:
      " Show off your primary education, college degrees & exchange semesters.",
  },
  {
    icon: "",
    title: "Professional Experience",
    value: "professionalExperience",
    content:
      " Make a great first impression by presenting yourself in a few sentences.",
  },
  {
    icon: "",
    title: "Projects",
    value: "projects",
    content:
      " A place to highlight your professional experience - including internships.",
  },
  {
    icon: "",
    title: "Courses And Certifications",
    value: "coursesCertifications",
    content:
      "Drivers licenses and other industry-specific certificates you have belong here.",
  },
  {
    icon: "",
    title: "Skills",
    value: "skills",
    content: " List your technical, managerial or soft skills in this section.",
  },
  {
    icon: "",
    title: "Volunteer Experience",
    value: "volunteerExperience",
    content:
      " Make a great first impression by presenting yourself in a few sentences.",
  },
  {
    icon: "",
    title: "Other Qualifications",
    value: "otherQualification",
    content:
      " Make a great first impression by presenting yourself in a few sentences.",
  },
  {
    icon: "",
    title: "Reference",
    value: "reference",
    content:
      "If you have former colleagues or bosses that vouch for you, list them.",
  },
];
export default function CustomContentModel() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.models.customContent);
  return (
    <>
      <Modal
        style={{ top: "20px" }}
        open={isOpen}
        width={window.innerWidth < 768 ? "100%" : "1300px"}
        //centered
        onCancel={() => dispatch(closeCustomContent())}
        footer={[]}
      >
        <Row gutter={[0, 30]} style={{ padding: "2%" }}>
          <Col span={24}>
            <Title style={{ margin: "0" }}>Add Content</Title>
          </Col>
          <Col span={24}>
            <Row gutter={[10, 10]}>
              {customList.map((item) => {
                return (
                  <Col span={6}>
                    <Card
                    onClick={()=>{dispatch(closeCustomContent());console.log(item.value)}}
                      style={{ backgroundColor: "rgba(243,244,246,255)" }}
                      hoverable>
                      <Title level={5}>
                        <Space>
                          {item.icon}
                          {item.title}
                        </Space>
                      </Title>
                      <Text style={{ margin: "0" }}>{item.content}</Text>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Modal>
    </>
  );
}

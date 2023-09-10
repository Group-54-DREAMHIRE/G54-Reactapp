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
import { closeCustomContent, openAddContent } from "../../store/models/modelsSlice";
const { Title, Text, Link } = Typography;

const customList = [
  {
    key:0,
    icon: <UserOutlined />,
    title: "Profile",
    value: "profile",
    content:
      " Make a great first impression by presenting yourself in a few sentences.",
  },
  {
    key:1,
    icon: "",
    title: "Education",
    value: "education",
    content:
      " Show off your primary education, college degrees & exchange semesters.",
  },
  {
    key:2,
    icon: "",
    title: "Professional Experience",
    value: "professionalExperience",
    content:
      " Make a great first impression by presenting yourself in a few sentences.",
  },
  {
    key:3,
    icon: "",
    title: "Projects",
    value: "projects",
    content:
      " A place to highlight your professional experience - including internships.",
  },
  {
    key:4,
    icon: "",
    title: "Courses And Certifications",
    value: "coursesCertifications",
    content:
      "Drivers licenses and other industry-specific certificates you have belong here.",
  },
  {
    key:5,
    icon: "",
    title: "Skills",
    value: "skills",
    content: " List your technical, managerial or soft skills in this section.",
  },
  {
    key:6,
    icon: "",
    title: "Volunteer Experience",
    value: "volunteerExperience",
    content:
      " Make a great first impression by presenting yourself in a few sentences.",
  },
  {
    key:7,
    icon: "",
    title: "Other Qualifications",
    value: "otherQualification",
    content:
      " Make a great first impression by presenting yourself in a few sentences.",
  },
  {
    key:8,
    icon: "",
    title: "Reference",
    value: "reference",
    content:
      "If you have former colleagues or bosses that vouch for you, list them.",
  },
];
export default function CustomContentModel({addContentData}) {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.models.customContent);
  const handleClick =(value)=>{
    const data = {
      key:value.key,
      title:value.title,
      children:[
        {
          key:0,
          title:value.title,
          subTitle: "",
          city: "",
          Country: "",
        }
      ]
    }
    addContentData.setContentData([...addContentData.contentData,data]);
    dispatch(closeCustomContent());
    dispatch(openAddContent());
    let activeCon = {
      index:value.key,
      key:0,
      title:value.title
    }
    addContentData.setActiveContent(activeCon);
    console.log(value);
  }
  return (
    <>
      <Modal
        style={{ top: "20px" }}
        open={isOpen}
        width={window.innerWidth < 768 ? "100%" : "1300px"}
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
                    onClick={()=>{handleClick(item)}}
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
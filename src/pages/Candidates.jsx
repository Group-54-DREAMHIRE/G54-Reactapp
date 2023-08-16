import { Row, Col } from "antd";
import CandidateCard from "../Components/cards/candidate/CandidateCard";
import lahiru from '../assets/images/lahiru.png';
import danuka from '../assets/images/danuka.jpg';
import anjana from '../assets/images/anjana.jpg';
import nishan from '../assets/images/nishan.png';
import vishmi from '../assets/images/vishmi.jpg';
import dula from '../assets/images/dula.jpeg';
const items = [
  {
    profileImageUrl:anjana,
    name: "Anjana Nanayakkara",
    jobTitle: "Software Engineer",
    skills: ["java", "react", "javascript", "github"],
    location: "Matara",
    currency: "USD$",
    minSalary: "700",
    maxSalary: "1200",
  },
  {
    profileImageUrl:lahiru,
    name: "Lahiru Sampath",
    jobTitle: "Software Engineer",
    skills: ["python", "aws", "angular", "html"],
    location: "Matara",
    currency: "USD$",
    minSalary: "600",
    maxSalary: "1100",
  },
  {
    profileImageUrl:vishmi,
    name: "Vishmi Viraji",
    jobTitle: "React Developper",
    skills: ["html", "react", "javascript", "github"],
    location: "Tangalle",
    currency: "USD$",
    minSalary: "700",
    maxSalary: "1200",
  },
  {
    profileImageUrl:danuka,
    name: "Dhanuka Iroshan",
    jobTitle: "Frontend Developer",
    skills: ["javascript", "aws", "angular", "html"],
    location: "Matara",
    currency: "USD$",
    minSalary: "500",
    maxSalary: "1000",
  },
  {
    profileImageUrl:nishan,
    name: "Nishan Madhushanka",
    jobTitle: "Backend Developer",
    skills: ["java", "python", "javascript", "googlecloud"],
    location: "Matara",
    currency: "USD$",
    minSalary: "600",
    maxSalary: "1000",
  },
  {
    profileImageUrl:dula,
    name: "Dulanjana Weerasinghe",
    jobTitle: "Full Stack Developer",
    skills: ["java", "react", "javascript", "github"],
    location: "Matara",
    currency: "USD$",
    minSalary: "500",
    maxSalary: "1250",
  },
];

export default function Candidates() {
  return (
    <>
      <Row style={{ padding: "5%" }} gutter={[30,30]}>
        {items.map((item, index) => {
          return (
            <Col span={11}>
              <CandidateCard items={item} />
            </Col>
          );
        })}
      </Row>
    </>
  );
}

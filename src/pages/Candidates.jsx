import { Row, Col } from "antd";
import CandidateCard from "../Components/cards/candidate/CandidateCard";
const items = [
  {
    profileImageUrl:
      "https://img.freepik.com/premium-photo/young-girl-designer-working-office-with-her-colleagues-generative-ai_145713-4028.jpg?w=996",
    name: "Dulanjana Weerasinghe",
    jobTitle: "software engineer",
    skills: ["java", "react", "angular", "github"],
    location: "Matara",
    currency: "USD$",
    minSalary: "500",
    maxSalary: "800",
  },
  {
    profileImageUrl:
      "https://img.freepik.com/premium-photo/young-girl-designer-working-office-with-her-colleagues-generative-ai_145713-4028.jpg?w=996",
    name: "Dulanjana Weerasinghe",
    jobTitle: "software engineer",
    skills: ["java", "react", "angular", "github"],
    location: "Matara",
    currency: "USD$",
    minSalary: "500",
    maxSalary: "800",
  },
  {
    profileImageUrl:
      "https://img.freepik.com/premium-photo/young-girl-designer-working-office-with-her-colleagues-generative-ai_145713-4028.jpg?w=996",
    name: "Dulanjana Weerasinghe",
    jobTitle: "software engineer",
    skills: ["java", "react", "angular", "github"],
    location: "Matara",
    currency: "USD$",
    minSalary: "500",
    maxSalary: "800",
  },
  {
    profileImageUrl:
      "https://img.freepik.com/premium-photo/young-girl-designer-working-office-with-her-colleagues-generative-ai_145713-4028.jpg?w=996",
    name: "Dulanjana Weerasinghe",
    jobTitle: "software engineer",
    skills: ["java", "react", "angular", "github"],
    location: "Matara",
    currency: "USD$",
    minSalary: "500",
    maxSalary: "800",
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

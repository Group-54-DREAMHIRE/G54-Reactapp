import { Col, Row } from "antd";
import InterviewCard from "../../Components/cards/candidate/InterviewCard";
import { Link, useNavigate } from "react-router-dom";

const items = [
  {
    company: "Creative Software",
    date: "2023.08.28",
    time: "9.00 AM",
    type: "HR Interview",
    with: "MRS. Vishmi"
  },
  {
    company: "Derect FN",
    date: "2023.09.05",
    time: "11.00 AM",
    type: "TECH Interview",
    with: "MR. Sampath"
  },
];
export default function Interviews() {
  const navigate = useNavigate();
  return (
    <>
      <Row gutter={[30, 30]}>
            {items.map((item) => {
              return (
                <Col span={9}
                  onClick={()=>navigate("/interviewdetails")}>
                 <InterviewCard
                 item={item} />
                </Col>
              );
            })}
          </Row>
      
    </>
  )
}

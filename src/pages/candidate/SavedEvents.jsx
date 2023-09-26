import { Row, Col } from "antd";
import PendingInterviewCard from '../../Components/cards/candidate/SavedEventsCard';
import { Link, useNavigate } from "react-router-dom";

const items = [
    {
      company: "Creative Software",
      type: "HR interview",
      role: "Business Analyst",
      
    },

    {
      company: "Cloud Solution International",
      type: "TECH interview",
      role: "Full stack developer",
      
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
                   <PendingInterviewCard
                   item={item} />
                  </Col>
                );
              })}
            </Row>
        
      </>
    )
  }
  

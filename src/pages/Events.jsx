import { DollarOutlined, PlusOutlined } from "@ant-design/icons";
import EventCard from '../Components/cards/EventCard';
import EventForm from "../Components/cards/company/EventForm"
import PriceCard from "../pages/landing/cards/PriceCard"
import OneFullCard from "./OneFullEvent"
import { events } from "../store/demo/events"
import { Col, Divider, Row, Typography, Button } from "antd"
import { useNavigate } from "react-router-dom";
const {Title} = Typography;

export default function Events() {
  const userType = localStorage.getItem("USERTYPE");
  const navigate = useNavigate();
  let status = {
    save: userType === "candidate"? true:false,
    more: true,
  };
const auth = userType === "company"? true:false;
  return (
    <>
        <Row  style={{padding: "2%"}} justify='space-between'>
          <Col>
            <Title style={{marginTop: '0'}}>Events</Title>
            <Divider/>
          </Col>
          {auth && (
                  <Col>
                    <Button 
                      icon={<PlusOutlined />}
                      size="large" 
                      type="primary"
                      onClick={()=> navigate("/addevent")}
                      style={{borderRadius: '0'}}>
                      Add Event
                    </Button>
                  </Col>
                )}
          <Col span={24}>
            <Row gutter={[10,40]} justify='center'>
              {events.map((event)=>{
                return(
                  <Col span={20}>
                    <EventCard event={event} status={status} />
                  </Col>
                )
              })}
            </Row>
          </Col>
        </Row>


    </>
  );
}


import EventCard from '../Components/cards/EventCard';
import EventForm from "../Components/cards/company/EventForm"
import PriceCard from "../pages/landing/cards/PriceCard"
import OneFullCard from "./OneFullEvent"
import { events } from "../store/demo/events"
import { Col, Divider, Row, Typography } from "antd"
const {Title} = Typography;

export default function Events() {
  return (
    <>
        <Row  style={{padding: "2%"}}>
          <Col span={24}>
            <Title style={{marginTop: '0'}}>Events</Title>
            <Divider/>
          </Col>
          <Col span={24}>
            <Row gutter={[10,40]} justify='center'>
              {events.map((event)=>{
                return(
                  <Col span={20}>
                    <EventCard event={event}/>
                  </Col>
                )
              })}
            </Row>
          </Col>
          <EventForm/>
        </Row>


    </>
  );
}

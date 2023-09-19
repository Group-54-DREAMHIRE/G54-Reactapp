import { DollarOutlined, PlusOutlined } from "@ant-design/icons";
import EventCard from '../Components/cards/EventCard';
import { List } from "react-content-loader";
import EventForm from "../Components/cards/company/EventForm"
import PriceCard from "../pages/landing/cards/PriceCard"
import OneFullCard from "./OneFullEvent"
import { events } from "../store/demo/events"
import { Col, Divider, Row, Typography, Button, Empty } from "antd"
import { useNavigate } from "react-router-dom";
import { fetchUserData, getData } from "../api/authenticationService";
import { useDispatch, useSelector } from "react-redux";
import { getAllEvents, setEvents} from "../store/event/eventSlice"
import { useEffect, useState } from "react";
const {Title} = Typography;

export default function Events() {
  const dispatch = useDispatch();
  const [allEventList, setAllEventList] = useState([]);
  const [loading, setLoading] = useState(false);
  //const eventState = useSelector(getAllEvents);
  // const collapsed = useSelector((state) => state.model.collapsed);
const eventState = null;
  useEffect(() => {
    setLoading(true);
    if(eventState === null){
      console.log("Fetching events data...")
      getData("/api/v1/event/getallevents")
      .then((response) => {
        console.log("data recieved",response.data);
        setAllEventList(response.data);
        dispatch(setEvents(response.data));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching event details:", error);
      });
      console.log(allEventList);
    } else {
      setAllEventList(eventState);
      setLoading(false);
    }
  }, []);

  const navigate = useNavigate();
  const handleChange = (value) => {
    console.log(`selected ${value}`)
  };

  const userType = localStorage.getItem("USERTYPE");

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
              {JSON.stringify(allEventList) === "[]" ? (
                <Col span={24}>
                  <Empty />
                </Col>
              ) : (
                allEventList.map((item, index) => {
                  return(
                    <Col span={20}>
                      <EventCard key={index} items={item} status={status} />
                    </Col>
                  );
                })
              )}
              
            </Row>
          </Col>
        </Row>


    </>
  );
}

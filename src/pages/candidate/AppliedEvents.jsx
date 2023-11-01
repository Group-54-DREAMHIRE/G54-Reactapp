import { useDispatch, useSelector } from "react-redux";
import AppliedEventCard from "../../Components/cards/candidate/AppliedEventCard";
import { getData } from "../../api/authenticationService";
import { Row, Col, Divider, Typography } from "antd";
import { useEffect, useState } from "react";
import { setAppliedEvents } from "../../store/company/applyEventSlice";
const { Title } = Typography;

export default function AppliedEvents() {
  const dispatch = useDispatch()
  const user = JSON.parse(localStorage.getItem("USER"));
  const id = user.id;
  const [appliedEventsList, setAppliedEventsList] = useState([]);
  //const events = useSelector((state)=>state.applyEvent.appliedEvents); 

  useEffect(() => {
    //if (events === null) {
      getData(`/api/v1/applyeventcandidate/getAppliedEvents/${id}`)
        .then((response) => {
         console.log(response.data);
         setAppliedEventsList(response.data);
         //dispatch(setAppliedEvents(response.data));
        //setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching user profile:", error);
        });
   // } else {
    //  setAppliedEventsList(events);
    //}
  }, []);
  return (
    <>
      <Row>
        <Col span={24}>
          <Row style={{ padding: "2%" }}>
            <Title level={2} style={{ margin: "0" }}>
              APPLIED EVENTS
            </Title>
            <Divider style={{ marginBottom: "0", marginTop: "6px" }} />
          </Row>
          <Row style={{ padding: "2%" }} gutter={[20, 20]}>
            {appliedEventsList.map((item) => {
              return (
                <Col span={12}>
                  <AppliedEventCard items={item} />
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </>
  );
}
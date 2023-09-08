import {Row, Divider, Typography, Tabs} from 'antd';
import { Outlet, useNavigate } from "react-router-dom";
const { Title, } = Typography;

export default function CandidatResumes() {
  const navigate = useNavigate();
  const onChange = (key) => {
    console.log(key);
    navigate(key);
  };

  return (
    <>
    <Row style={{padding: '2%'}}>
      <Title level={2}>INTERVIEWS</Title>
      <Divider style={{ margin: "0" }} />
    </Row>
    <Tabs
    onChange={onChange}
    type="card"
    items={[
    {label: "Scheduled", key: "/scheduledinterviews"},
    {label: "Pending", key: "/pendinginterviews"}
    ]}/>
    <Outlet/>
    </>
  )
}


import {Row,Col, Divider, Typography, Tabs} from 'antd';
import { items } from "../../store/demo/candidateResume";
import { Link, Outlet, useNavigate } from "react-router-dom";
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
      <Title level={2}>RESUME</Title>
      <Divider style={{ margin: "0" }} />
    </Row>
     <Tabs
    onChange={onChange}
    type="card"
    items={[{label: "Pending", key: "/pending"},
    {label: "Short List", key: "/shortlist"},
    {label: "Reject", key: "/reject"}]}
    />
    <Outlet/>
    </>
  )
}

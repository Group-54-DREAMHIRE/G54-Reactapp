import {Row, Divider, Typography, Tabs} from 'antd';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from "react-router-dom";
const { Title, } = Typography;

export default function AppliedJobInterview() {
  const navigate = useNavigate();
  const jobId = useSelector((state)=>state.applyJob.activeJobId);
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
    {label: "Scheduled", key: `/scheduledappjobinterviews/${jobId}`},
    {label: "Pending", key: `/pendingappjobinterviews/${jobId}`}
    ]}/>
    <Outlet/>
    </>
  )
}

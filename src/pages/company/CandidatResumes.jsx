import {Row, Divider, Typography, Tabs} from 'antd';
import { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { getActiveId } from '../../store/jobpost/jobSlice';
const { Title, } = Typography;

export default function CandidatResumes() {
  const dispatch = useDispatch();
  const location = useLocation();
  const  id = useSelector((state)=>state.jobPost.activeId);
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
    items={[
    {label: "Pending List", key: `/pendingresumes/${id}`},
    {label: "Short List", key: `/shortlistresumes/${id}`},
    {label: "Rejected List", key: `/rejectresumes/${id}`},
    {label: "Canceled List", key: `/canceledresumes/${id}`}
    ]}/>
     <Outlet />
    </>
  )
}

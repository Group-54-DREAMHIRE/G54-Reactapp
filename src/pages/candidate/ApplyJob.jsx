import { useState } from "react";


import {
    Form,
    Input,
    Button,
    Modal,
    Checkbox,
    Row,
    Col,
    Typography,
  } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { closeApplyJob } from "../../store/models/modelsSlice";
  const { Text, Link, Title } = Typography;

export default function ApplyJob() {
    const dispatch = useDispatch();
    const isOpen = useSelector((state)=> state.models.applyJob);
  return (
    <>
      <Modal
        style={{ top: "4vh" }}
        open={isOpen}
        onCancel={()=>dispatch(closeApplyJob())}
        footer={[]}
      >
        <Row block style={{ padding: "30px" }}>
          <Col span={24}>
            <Row block justify="center" style={{ margin: "20px 0px 25px" }}>
              <Title level={2}>Apply</Title>
            </Row>
           
           
          </Col>
        </Row>
      </Modal>
    </>
  );
}

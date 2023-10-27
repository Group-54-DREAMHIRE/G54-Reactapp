import React, { useState } from "react";
import {
  Button,
  Modal,
  Form,
  Input,
  Select,
  Radio,
  Checkbox,
  DatePicker,
  InputNumber,
  Row,
  Col,
  Divider,
  Typography,
  Spin,
  Space,
  TimePicker,
} from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setDutation, setNumOfQuetions, setPassingMark, setTestDate, setTestDetails, setTime, setTitle, setType } from "../../store/company/testSlice";

const { Title } = Typography;

const { Option } = Select;
const { TextArea } = Input;

function ViewTestPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
  const testDetailsImpl = useSelector((state)=>state.test.testDetails);
  return (
    <>
      <Spin spinning={false}>
        <Row gutter={[0, 30]} style={{ padding: "2%" }}>
          <Col span={24}>
           
            {/* <hr style={{ border: "2px solid rgba(0,0,0,.4)" }} /> */}
          </Col>
        </Row>
      </Spin>
    </>
  );
}

export default ViewTestPage;

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData, getData } from "../../api/authenticationService";
import {
  Form,
  Input,
  Button,
  Modal,
  Row,
  Col,
  Typography,
  Select,
  Alert,
  Spin,
  message,
} from "antd";
import { currencies, salary } from "../../store/demo/salary";
import { tagItems } from "../../store/demo/tagItems";
import { closeApplyJob } from "../../store/models/modelsSlice";
import { useNavigate, useParams } from "react-router-dom";
import ScheduledTestCard from "../../Components/cards/candidate/ScheduledTestCard";
const { Text, Link, Title } = Typography;

export default function ApplyJob({ jobID }) {
  const { id } = useParams();
  const user = JSON.parse(localStorage.getItem("USER"));
  const userId = user.id;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [testList, setTestList] = useState([]);
  useEffect(() => {
    // setLoading(true);
    getData(`/api/v1/test/getSchedulesTests/${id}`)
      .then((response) => {
        console.log(response.data);
        setTestList(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <Row style={{ padding: "0px 20px" }}>
        <Col span={24}>
          <Row gutter={[10, 20]}>
            <Col span={24}>
              <Title level={2}>SCHEDULED TESTS</Title>
              <hr style={{ border: "2px solid rgba(0,0,0,.4)" }} />
            </Col>
            <Col span={24}>
              <Row>
                {testList.map((item) => {
                  return (
                    <Col span={12}>
                      <ScheduledTestCard item={ item }/>
                    </Col>
                  );
                })}
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

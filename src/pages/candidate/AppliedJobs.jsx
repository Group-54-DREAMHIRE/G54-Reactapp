import { useDispatch, useSelector } from "react-redux";
import AppliedJobCard from "../../Components/cards/candidate/AppliedJobCard";
import { getData } from "../../api/authenticationService";
import { items } from "../../store/demo/appliedJobs";
import { Row, Col, Divider, Typography } from "antd";
import { useEffect, useState } from "react";
import { setAppliedJobs } from "../../store/company/applyJobSlice";
const { Title } = Typography;

export default function AppliedJobs() {
  const dispatch = useDispatch()
  const user = JSON.parse(localStorage.getItem("USER"));
  const id = user.id;
  const [appliedJobsList, setAppliedJobsList] = useState([]);
  const jobs = useSelector((state)=>state.applyJob.appliedJobs); 
  useEffect(() => {
    if (jobs === null) {
      getData(`/api/v1/applyjobcandidate/getAppliedJobs/${id}`)
        .then((response) => {
         console.log(response.data);
         setAppliedJobsList(response.data);
         dispatch(setAppliedJobs(response.data));
          //setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching user profile:", error);
        });
    } else {
      setAppliedJobsList(jobs);
    }
  }, []);
  return (
    <>
      <Row>
        <Col span={24}>
          <Row style={{ padding: "2%" }}>
            <Title level={2} style={{ margin: "0" }}>
              APPLIED JOBS
            </Title>
            <Divider style={{ marginBottom: "0", marginTop: "6px" }} />
          </Row>
          <Row style={{ padding: "2%" }} gutter={[20, 20]}>
            {appliedJobsList.map((item) => {
              return (
                <Col span={12}>
                  <AppliedJobCard items={item} />
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </>
  );
}

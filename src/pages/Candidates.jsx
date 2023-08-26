import { Row, Col } from "antd";
import { List } from 'react-content-loader';
import CandidateCard from "../Components/cards/candidate/CandidateCard";
import { getAllCandidates, setCandidates } from "../store/candidate/candidateSlice";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../api/authenticationService";

export default function Candidates() {
  const dispatch = useDispatch();
  const [candidateData, setCandidateData] = useState([]);
  const [loading, setLoading]= useState(false);
  const candidates = useSelector(getAllCandidates);
  useEffect(() => {
    setLoading(true);
    if (candidates === null) {
      getData("/api/v1/candidate/getAllCandidates")
        .then((response) => {
          console.log(response);
          console.log(response.data);
          setCandidateData(response.data);
          console.log(candidateData);
          dispatch(setCandidates(response.data));
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching user profile:", error);
        });
      console.log(candidates);
    } else {
      setCandidateData(candidates);
      setLoading(false);
    }
  }, []);
  return (
    <>
      {loading?<List/>:
      (<Row style={{ padding: "5%" }} gutter={[30,30]}>
        {candidateData.map((item, index) => {
          return (
            <Col span={11}>
              <CandidateCard items={item} />
            </Col>
          );
        })}
      </Row>)}
    </>
  );
}

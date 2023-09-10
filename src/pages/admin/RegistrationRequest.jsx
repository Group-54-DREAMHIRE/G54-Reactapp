import { useEffect, useState } from "react";
import { Col, Row, Spin, message,Empty } from "antd";
import ApprovalsCard from "../../Components/cards/admin/ApprovalsCard";
import { getData } from "../../api/authenticationService";

export default function RegistrationRequest() {
  const [loading, setLoading] = useState(false);
  const [pendingList, setPendingList] = useState([]);
  const onLoading = () =>{
    setLoading(true);
  }
  const offLoading = () =>{
    setLoading(false);
  }
  const removeValue = (value) => {
    setPendingList(prevArray => prevArray.filter(item => item !== value));
  };
  const successApp =()=>{
    message.success("Company is approved successfully");
  }
  const errorApp = () =>{
    message.error("Approved is failed! Try Again!");
  }
  const successRej =()=>{
    message.success("Company is rejected successfully");
  }
  const errorRej = () =>{
    message.error("Reject is failed! Try Again!");
  }
  let handleData ={
    onLoading,
    offLoading,
    removeValue,
    successApp,
    errorApp,
    successRej,
    errorRej 
  }
  useEffect(() => {
    setLoading(true);
   getData("/api/v1/company/getPendingApprovals").then((response)=>{
    console.log(response.data);
    setPendingList(response.data);
    console.log(pendingList);
    setLoading(false);
   }).catch((e)=>{
    console.log(e.message);
    setLoading(false);
   })
      
  }, []);

  return (
    <>
    <Spin spinning={loading}>
      <Row gutter={[0, 30]}>
        {JSON.stringify(pendingList) === "[]" ?(
          <Col span={24}>
            <Empty/>
          </Col>
        ):
        (
        pendingList.map((item) => {
          return (
            <Col span={14}>
              <ApprovalsCard  item={item} handleData={handleData}/>
            </Col>
          );
        }) 
       )}
      </Row>
      </Spin>
    </>
  );
}

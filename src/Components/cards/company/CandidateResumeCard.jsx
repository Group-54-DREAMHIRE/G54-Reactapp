import { FaMapMarkerAlt, FaMoneyBillAlt } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import {
  ExclamationCircleFilled,
  CloseCircleFilled,
  CheckCircleFilled,
} from "@ant-design/icons";
import { Card, Col, Row, Typography, Button, Image, Modal } from "antd";
import { useState,  useEffect } from "react";

const { confirm } = Modal;
const { Title, Text } = Typography;

export default function CandidateResumeCard({ items, status }) {
  const [tagList, setTaglist] = useState([]);
  useEffect(() => {
    if (typeof items.tags === "string") {
      const val = items.tags.split(", ");
      setTaglist(val);
      console.log(tagList);
    } else {
      setTaglist([]);
    }
  }, []);
  const showPendingConfirm = () => {
    confirm({
      title: 'Are you sure?',
      icon: <ExclamationCircleFilled />,
      content: '',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };
  
  const showApproveConfirm = () => {
    confirm({
      title: 'Are you sure?',
      icon: <ExclamationCircleFilled />,
      content: '',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };
  const showRejectConfirm = () => {
    confirm({
      title: 'Are you sure reject this resume?',
      icon: <ExclamationCircleFilled />,
      content: '',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        setTimeout(
          () => {
            console.log("yhrhy");
          },
          500,
          4000
        );
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  return (
    <>
      <Card
        className="resume-card-w"
        style={{ boxShadow: "0 0 8px 0 rgba(0,0,0,.1)" }}
      >
        <Row justify="space-between">
          <Col span={16}>
            <Title level={4} style={{ marginBottom: "18px", marginTop: "0" }}>
              {items.candidateName}
            </Title>
            <Text style={{ color: "rgb(30,136,229)" }}>{items.jobTitle}</Text>
            <Title level={5} style={{ marginTop: "8px" }}>
              <Text
                style={{
                  marginTop: "0px",
                  marginRight: "10px",
                  color: "rgb(30,136,229)",
                }}
              >
                <FaMapMarkerAlt /> {items.candidateCity}.{" "}
              </Text>
              {/* <Text style={{ marginTop: "0px", color: "rgb(30,136,229)" }}>
                <FaMoneyBillAlt /> {items.salary}
              </Text> */}
            </Title>
            <Col style={{marginTop: '25px'}}>
            {tagList.slice(0, 4).map((tag, index) => {
            return (
              <Button
                style={{
                  backgroundColor: "rgba(30,136,229,.25)",
                  fontWeight: '600',
                  color: "rgba(30,136,229,1)",
                  margin: "2px",
                }}
                key={index}
              >
                {tag}
              </Button>
            );
          })}
            </Col>
          </Col>
          <Col span={8}>
            <Image
              src={items.candidate.profilePicture}
              style={{ borderRadius: "10px", height: "100%", width: "100%" }}
            />
          </Col>
        </Row>
        <Row style={{ marginTop: "13px" }}>
          
        </Row>
        <Row style={{ marginTop: "15px" }} gutter={10} justify="end">
          <Col>
            <Button 
            className="view-w"
            style={{border: '1px solid rgba(30,136,229,1)',
                            color: 'rgba(30,136,229,1)',
                            fontWeight: '600'}}> View </Button>
          </Col>
         {status.approve && <Col>
            <Button
              icon={
                <CheckCircleFilled style={{ width: "100%", height: "100%" }} />
              }
              onClick={showApproveConfirm}
              className="approve-w"
              style={{
               
                border: "1px solid green",
                color: 'green',
                fontWeight: '600',
              }}
            >
              Approve
            </Button>
          </Col>}
          {status.pending && <Col>
            <Button
              icon={<IoMdAddCircle />}
              className="addtopending-w"
              onClick={showPendingConfirm}
              style={{
                
                border: "1px solid rgb(250,173,20)",
                color: 'rgb(250,173,20)',
                fontWeight: '600',
              }}
            >
              Add to Pending
            </Button> 
          </Col>}

         {status.reject && <Col>
            <Button
              icon={<CloseCircleFilled />}
              className="reject-w"
              onClick={showRejectConfirm}
              style={{
                
                border: "1px solid red",
                color:'red',
                fontWeight: '600',
              }}
            >
              Reject
            </Button> 
          </Col>}
        </Row>
      </Card>
    </>
  );
}

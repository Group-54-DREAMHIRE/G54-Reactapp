import { FaMapMarkerAlt, FaMoneyBillAlt } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import jobpost from '../../assets/images/jobpost1.jpg';
import {
  ExclamationCircleFilled,
  CloseCircleFilled,
  CheckCircleFilled,
} from "@ant-design/icons";
import { Card, Col, Row, Typography, Button, Image, Modal } from "antd";
import Item from "antd/es/list/Item";

const { Title, Text } = Typography;

export default function JobPostCard({ items, status }) {
  return (
    <>
      <Card
        style={{ boxShadow: "0 0 8px 0 rgba(0,0,0,.05)" }}
        hoverable
      >
        <Row justify="space-between">
          <Col span={24}>
            <Image
                preview={false}
                src={jobpost}
                style={{ height: "100%", width: "100%" }}
            />
          </Col>
        </Row>
        <Row style={{marginTop: '10px'}} gutter={20}>
           <Col>
           <Text strong>{items.name}</Text>
           
           </Col> 
           <Col>
           <Text style={{fontSize:'16px', fontWeight: '500', color: 'rgb(30,136,229)'}}>{items.date}</Text>
           </Col>
        </Row>
        <Row>
            <Text style={{fontSize: '16px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, obcaecati in.</Text>
        </Row>
        <Row style={{ marginTop: "13px" }} justify='start'>
          {items.tags.slice(0, 4).map((tag) => {
            return (
              <Title
                level={5}
                style={{
                  color:  `${tag.color}`,
                  marginTop: '0', 
                  marginRight: "20px",
                }}
                key={tag.id}
              >
                {tag.label}
              </Title>
            );
          })}
        </Row>
        <Row style={{ marginTop: "15px" }} gutter={10} justify="end">
         {status.save && <Col>
            <Button
              type="primary"
            >
              Save
            </Button>
          </Col>}
          {status.more && <Col>
            <Button
              type="primary"
            >
              View Job
            </Button> 
          </Col>}
        </Row>
      </Card>
    </>
  );
}

import { fetchUserData, getAction, getData, getToken } from "../../../api/authenticationService";
import {QuestionCircleOutlined} from  '@ant-design/icons';
import D_photo from "../../../assets/images/company.png";
import {
  Card,
  Button,
  Row,
  Col,
  Typography,
  Image,
  Space,
  Popconfirm,
} from "antd";
import axios from "axios";
const { Title, Text, Link } = Typography;

const ApprovalsCard = ({ item, handleData }) => {
  const id = item.id;
  const handleApprove = async () => {
    handleData.onLoading();
    let data = {
      url: `/api/v1/admin/approve/company/${id}`,
      data: "approve",
      method: 'post'
    }
    try {
      const response = await fetchUserData(data);
      if (response.status === 200) {
        handleData.offLoading();
        handleData.removeValue(item);
        handleData.successApp();
      }
    } catch (e) {
      console.log(e.mesage);
      handleData.offLoading();
      handleData.errorApp();
    }
  };

  const handleReject = async () => {
    handleData.onLoading();
    let data = {
      url: `/api/v1/admin/reject/company/${id}`,
      data:" reject",
      method: 'post'
    }
    try {
      const response = await fetchUserData(data);
      if (response.status === 200) {
        handleData.offLoading();
        handleData.removeValue(item);
        handleData.successRej();
      }
    } catch (e) {
      console.log(e);
      handleData.offLoading();
      handleData.errorRej();
    }
  };
  return (
    <Card style={{ boxShadow: "0 0 8px rgba(0,0,0,.1)", padding: "2%" }}>
      <Row gutter={[20, 20]}>
        <Col span={16}>
          <Row gutter={[0, 20]} justify="end">
            <Col span={24}>
              <Title level={2} style={{ marginTop: "10px", marginBottom: "0" }}>
                {item.name}
              </Title>
            </Col>
            <Col span={24}>
              <Text style={{ fontSize: "16px", lineHeight: "25px" }}>
                {item.description.substring(0, 120)}
              </Text>
            </Col>
          </Row>
        </Col>
        <Col span={8}>
          <Image src={item.logo} alt="company_logo" preview={false} />
        </Col>
        <Col span={24}>
          <Row justify="end" gutter={20}>
            <Col>
              <Button
                style={{ borderRadius: "0" }}
                href={item.registration}
                target="_blank"
                type="primary"
              >
                View BR
              </Button>
            </Col>
            <Col>
            <Popconfirm
                title="Approve this company"
                description="Are you sure to reject this company?"
                onConfirm={handleApprove}
                icon={
                  <QuestionCircleOutlined
                    style={{
                      color: "red",
                    }}
                  />
                }
              >
                <Button 
                type="primary"
                style={{ borderRadius: "0" }}>
                  Approve
                  </Button>
              </Popconfirm>
            </Col>
            <Col>
              <Popconfirm
                title="Reject this company"
                description="Are you sure to reject this company?"
                onConfirm={handleReject}
                icon={
                  <QuestionCircleOutlined
                    style={{
                      color: "red",
                    }}
                  />
                }
              >
                <Button 
                  danger>
                  Reject
                  </Button>
              </Popconfirm>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

export default ApprovalsCard;

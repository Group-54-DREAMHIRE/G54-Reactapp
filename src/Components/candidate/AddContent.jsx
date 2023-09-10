import { Card, Col, Row, Typography, Input, Space, Button } from "antd";
import { useState, useEffect } from "react";
import {
  CameraOutlined,
  UserOutlined,
  PlusOutlined,
  EditOutlined,
  UploadOutlined,
  LoadingOutlined,
  MailOutlined,
  PhoneOutlined,
  LinkedinOutlined,
  GithubOutlined,
  DeleteOutlined,
  CheckOutlined,
} from "@ant-design/icons";
import { AiOutlineLink } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { closeAddContent, closeAddLink, openAddLink } from "../../store/models/modelsSlice";
const { Title, Text } = Typography;

export default function AddContent({addContentData}) {
  const activeLink = useSelector((state)=>state.models.addLink);
  const dispatch = useDispatch();
  const [activeData, setActiveData] = useState({});
  // const currentList = addContentData.contentData[addContentData.activeContent.index];
  // const currentData = currentList.children[addContentData.activeContent.key];
  useEffect(() => {
    setActiveData(addContentData.activeContent)
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const handleAdd =()=>{
    dispatch(closeAddLink());
  }
  const InputLink = () => {
    const [value, setValue] = useState("");
    return (
     <Row style={{padding: '5%', position: 'absolute', backgroundColor: 'white', boxShadow:'0 0 20px rgba(0,0,0,.2)', zIndex: '5'}}>
        <Col span={24}>
            <Row gutter={[20,20]} justify='end'>
                <Col span={24}>
                    <Title level={5} style={{margin: '0'}}>
                        Link URL
                    </Title>
                </Col>
                <Col span={24}>
                    <Input 
                       // onChange={(e)=>{setValue(e.target.value);console.log(value)}}
                        value={value}
                        className="input-w" 
                        placeholder="Enter Link"/>
                </Col>
                <Col>
                    <Space>
                    <Button 
                        size="small" 
                        type="primary" 
                        style={{borderRadius: '0'}}
                        onClick={()=>dispatch(closeAddLink())}
                        >
                            Cancel
                    </Button>
                    <Button 
                        onClick={()=>handleAdd()}
                        size="small"  
                        type="primary" 
                        style={{borderRadius: '0'}}>
                        Add
                    </Button>
                    </Space>
                </Col>
            </Row>
        </Col>
     </Row>
    );
  }
  return (
    <>
      <Row className="add-content-w">
        <Col span={24}>
          <Card
            title={
              <Text style={{ fontSize: "22px", fontWeight: "800" }}>
                Create {activeData.title}
              </Text>
            }
            style={{ boxShadow: "0 0 30px rgba(0,0,0,.1)", padding: "3% 0" }}
            hoverable
          >
            <Row gutter={[20, 20]}>
              <Col span={24}>
                <Row gutter={10} align='bottom'>
                  <Col span={18}>
                    <Title level={5} style={{ marginTop: 0 }}>
                      Title{" "}
                      <Text
                        style={{
                          color: "rgba(0,0,0,.5)",
                          fontSize: "14px",
                          fontWeight: "300",
                        }}
                      >
                        optional
                      </Text>
                    </Title>
                    {activeLink && <InputLink/>}
                    <Input
                      className="input-w"
                      size="large"
                      placeholder="Enter your job title"
                    />
                  </Col>
                  <Col span={6}>
                    <Button
                      onClick={() => {dispatch(openAddLink())}}
                      size="large"
                      icon={<AiOutlineLink />}
                    >
                      Link
                    </Button>
                  </Col>
                </Row>
              </Col>
              <Col span={24}>
                    <Title level={5} style={{ marginTop: 0 }}>
                      Subtitle{" "}
                      <Text
                        style={{
                          color: "rgba(0,0,0,.5)",
                          fontSize: "14px",
                          fontWeight: "300",
                        }}
                      >
                        optional
                      </Text>
                    </Title>
                    <Input
                      className="input-w"
                      size="large"
                      placeholder="Enter your job title"
                    />
              </Col>
              <Col span={12}>
                    <Title level={5} style={{ marginTop: 0 }}>
                      City{" "}
                      <Text
                        style={{
                          color: "rgba(0,0,0,.5)",
                          fontSize: "14px",
                          fontWeight: "300",
                        }}
                      >
                        optional
                      </Text>
                    </Title>
                    <Input
                      className="input-w"
                      size="large"
                      placeholder="Enter your job title"
                    />
              </Col>
              <Col span={12}>
                    <Title level={5} style={{ marginTop: 0 }}>
                      Country{" "}
                      <Text
                        style={{
                          color: "rgba(0,0,0,.5)",
                          fontSize: "14px",
                          fontWeight: "300",
                        }}
                      >
                        optional
                      </Text>
                    </Title>
                    <Input
                      className="input-w"
                      size="large"
                      placeholder="Enter your job title"
                    />
              </Col>
              <Col span={12}>
                    <Title level={5} style={{ marginTop: 0 }}>
                      Start Date{" "}
                      <Text
                        style={{
                          color: "rgba(0,0,0,.5)",
                          fontSize: "14px",
                          fontWeight: "300",
                        }}
                      >
                        optional
                      </Text>
                    </Title>
                    <Input
                      className="input-w"
                      size="large"
                      placeholder="Enter your job title"
                    />
              </Col>
              <Col span={12}>
                    <Title level={5} style={{ marginTop: 0 }}>
                     End Date{" "}
                      <Text
                        style={{
                          color: "rgba(0,0,0,.5)",
                          fontSize: "14px",
                          fontWeight: "300",
                        }}
                      >
                        optional
                      </Text>
                    </Title>
                    <Input
                      className="input-w"
                      size="large"
                      placeholder="Enter your job title"
                    />
              </Col>
              <Col span={24}>
                    <Title level={5} style={{ marginTop: 0 }}>
                      Description{" "}
                      <Text
                        style={{
                          color: "rgba(0,0,0,.5)",
                          fontSize: "14px",
                          fontWeight: "300",
                        }}
                      >
                        optional
                      </Text>
                    </Title>
                    <Input
                      className="input-w"
                      size="large"
                      placeholder="Enter your job title"
                    />
              </Col>
              <Col span={24}>
                <Button 
                  onClick={()=>dispatch(closeAddContent())}>
                  Cancel
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
}

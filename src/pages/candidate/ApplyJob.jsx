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
    Select,
  } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { closeApplyJob } from "../../store/models/modelsSlice";
  const { Text, Link, Title } = Typography;
  const currencies = [
    {
      value: "USD",
      label: "USD$",
    },
    {
      value: "EURO",
      label: "EURO€",
    },
    {
      value: "AUD",
      label: "AUD$",
    },
    {
      value: "GPB",
      label: "GBP£",
    },
  ];
  const salary = [
    {
      value: "300",
      label: "300",
    },
    {
      value: "400",
      label: "400",
    },
    {
      value: "500",
      label: "500",
    },
    {
      value: "600",
      label: "600",
    },
    {
      value: "700",
      label: "700",
    },
    {
      value: "800",
      label: "800",
    },
    {
      value: "900",
      label: "900",
    },
    {
      value: "1000",
      label: "1000",
    },
  ];
  
  
  
 
export default function ApplyJob() {
  const isOpen = useSelector((state)=> state.models.applyJob);
  const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [currency, setCurrency] = useState("USD$");
    const [exsalary, setExSalary] = useState("600")
    const [tags, setTags] = useState([]);
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    
    const handleApply =()=>{
      dispatch(closeApplyJob());
    }
    
  return (
    <>
      <Modal
        style={{ top: "0" }}
        open={isOpen}
        onCancel={()=>dispatch(closeApplyJob())}
        footer={[]}
      >
        <Row block style={{ padding: "0px 20px" }}>
          <Col>
            <Row block justify="center" >
              <Title level={3} style={{margin: '0'}}>Apply Job</Title>
            </Row>
           <Row>
            <Form onFinish={handleApply}>
              <Col>
                <Row justify='space-between'>
                <Col span={24}>
                    <Title level={5}> Name</Title>
                    <Input
                      value={name}
                      onChange={(e)=>setName(e.target.value)}
                     
                      style={{
                        boxShadow: "0 0 10px 0 rgba(30,136,229,.4)",
                        height: "35px",
                      }}
                    />
                  </Col>
                  <Col span={24}>
                    <Title level={5}> City</Title>
                    <Input
                      value={city}
                      onChange={(e)=>setCity(e.target.value)}
                      style={{
                        boxShadow: " 0 0 10px 0 rgba(30,136,229,.4)",
                        height: "35px",
                      }}
                    />
                  </Col>
                  <Col span={5}>
                  <Title level={5} style={{}}>
                      Currency
                    </Title>
                        <Select
                          value={currency}
                          onChange={(value)=>setCurrency(value)}
                          style={{
                            width: "100%",
                            boxShadow: "0 0 10px 0 rgba(30,136,229,.3)",
                            borderRadius: "0",
                            fontSize: "medium",
                            borderRadius: "0 !important",
                            fontFamily: "arial", 
                          }}
                          options={currencies}
                        />
                      </Col>
                      <Col span={18}>
                    <Title level={5} style={{textAlign: 'right'}}>
                      Expect Salary
                    </Title>
                    <Select          
                      allowClear
                      value={exsalary}
                      onChange={(values)=>setExSalary(values)}
                      options={salary}
                      // mode="tags"
                      style={{
                        width: "100%",
                        boxShadow: "0 0 10px 0 rgba(30,136,229,.3)",
                        borderRadius: "0",
                        fontSize: "medium",
                        borderRadius: "0 !important",
                        fontFamily: "arial",
                      }}   
                    />
                  </Col>
                  <Col span={24}>
                  <Title level={5}>
                    Tags:
                  </Title>
                    <Select
                      value={tags}
                      onChange={(values)=>{setTags(values)}}
                      mode="multiple"
                      style={{
                        width: "100%",
                        boxShadow: "0 0 10px 0 rgba(30,136,229,.3)",
                        borderRadius: '0'
                      }}
                      placeholder="Select Tags"                    
                    />
                  </Col>
                  <Col span={24}>
                    <Title level={5}> Phone</Title>
                    <Input
                   value={phone}
                   onChange={(e)=>setPhone(e.target.value)}
                    
                      style={{
                        boxShadow: "0 0 10px 0 rgba(30,136,229,.4)",
                        height: "35px",
                      }}
                    />
                  </Col>
                  <Col span={24}>
                    <Title level={5}> Email</Title>
                    <Input
                   value={email}
                   onChange={(e)=>setEmail(e.target.value)}
                     
                      style={{
                        boxShadow: "0 0 10px 0 rgba(30,136,229,.4)",
                        height: "35px",
                        marginBottom: '5%'
                      }}
                    />
                  </Col>
                </Row>
                <Row justify='end'>
                  <Button 
                  size="medium"
                  type="primary"
                  htmlType="submit ">
                    Apply
                  </Button>
                </Row>
              </Col>
            </Form>
           </Row>
          </Col>
        </Row>
      </Modal>
    </>
  );
}

import {
  Row,
  Col,
  Upload,
  Form,
  Typography,
  Input,
  Divider,
  Select,
  DatePicker,
  Button,
} from "antd";
import { useState } from "react";
const { TextArea } = Input;
const { Title } = Typography;

const jobtypes = [
  {
    value: "fulltime",
    label: "Full Time",
  },
  {
    value: "parttime",
    label: "Part Time",
  },
];

const years = [
  {
    value: "1",
    label: "1 Year",
  },
  {
    value: "2",
    label: "2 Year",
  },
  {
    value: "3",
    label: "3 Year",
  },
  {
    value: "4",
    label: "4 Year",
  },
  {
    value: "5",
    label: "5 Year",
  },
  {
    value: "6",
    label: "6 Year",
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

const tagitems = [
  {
    value: 'react',
    label: 'REACT'
  },
  {
    value: 'angular',
    label: 'ANGULAR'
  },
  {
    value: 'java',
    label: 'JAVA'
  },
  {
    value: 'node',
    label: 'NODE.JS'
  },
  {
    value: 'python',
    label: 'PYTHON'
  },
  {
    value: 'javascript',
    label: 'JAVASCRIPT'
  },
]

function AddJobPost() {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [experience, setExperience] = useState("");
  const [location, setLocation] = useState("");
  const [currency, setCurrency] = useState("");
  const [minsalary, setMinSalary] = useState("");
  const [maxSalary, setMaxSalary] = useState("");
  const [description, setDescription] = useState("");
  const [apply, setApply] = useState("");
  const [requirements, SetRequirements] = useState("");
  const [tags, setTags] = useState([]);
  const [customTag, setCustomTag] = useState("");
  return (
    <>
      <Row justify="center" className="addjob-w">
        <Col span={24}>
          <Row justify="center">
            <Col span={23}>
              <Form>
                <Row justify="start">
                  <Title level={2}>Post A Job</Title>
                  <Divider style={{ margin: "0" }} />
                </Row>
                <Row justify="space-between">
                  <Col span={11}>
                    <Title level={4}>
                      Job Title:
                    </Title>
                    <Input
                      allowClear
                      style={{
                        boxShadow: "0 0 10px 0 rgba(30,136,229,.3)",
                        borderRadius: "0",
                        fontSize: "large",
                      }}
                      value={title}
                      onChange={(e)=>setTitle(e.target.value)}
                    />
                  </Col>
                  <Col span={11}>
                    <Title level={4} style={{}}>
                      Job Type:
                    </Title>
                    <Select
                      defaultValue={"Full Time"}
                      // mode="tags"
                      value={type}
                      onChange={(e)=>setType(e.target.value)}
                      allowClear
                      style={{
                        width: "100%",
                        boxShadow: "0 0 10px 0 rgba(30,136,229,.3)",
                        borderRadius: "0",
                        fontSize: "medium",
                        borderRadius: "0 !important",
                        fontFamily: "arial",
                      }}
                      options={jobtypes}
                    />
                  </Col>
                  <Col span={11}>
                    <Title level={4} style={{}}>
                      Experience:
                    </Title>
                    <Select
                      defaultValue={"1 Year"}
                      value={experience}
                      onChange={(e)=>setExperience(e.target.value)}
                      // mode="tags"
                      allowClear
                      style={{
                        width: "100%",
                        boxShadow: "0 0 10px 0 rgba(30,136,229,.3)",
                        borderRadius: "0",
                        fontSize: "medium",
                        borderRadius: "0 !important",
                        fontFamily: "arial",
                      }}
                      options={years}
                    />
                  </Col>
                  <Col span={11}>
                    <Title level={4} style={{}}>
                      Location:
                    </Title>
                    <Input
                      allowClear
                      value={location}
                      onChange={(e)=>setLocation(e.target.value)}
                      style={{
                        boxShadow: "0 0 10px 0 rgba(30,136,229,.3)",
                        borderRadius: "0",
                        fontSize: "large",
                      }}
                    />
                  </Col>
                  <Col span={24}>
                    <Title level={4} style={{ display: "block" }}>
                      Select Curency:
                    </Title>
                    <Row>
                      <Col span={2}>
                        <Select
                          defaultValue={"USD$"}
                          allowClear
                          value={currency}
                          onChange={(e)=>setCurrency(e.target.value)}
                          // mode="tags"
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
                    </Row>
                  </Col>
                  <Col span={11}>
                    <Title level={4} style={{}}>
                      Minimum Salary:
                    </Title>
                    <Select
                      defaultValue={"500"}
                      allowClear
                      value={minsalary}
                      onChange={(e)=>setMinSalary(e.target.value)}
                      // mode="tags"
                      style={{
                        width: "100%",
                        boxShadow: "0 0 10px 0 rgba(30,136,229,.3)",
                        borderRadius: "0",
                        fontSize: "medium",
                        borderRadius: "0 !important",
                        fontFamily: "arial",
                      }}
                      options={years}
                    />
                  </Col>
                  <Col span={11}>
                    <Title level={4} style={{}}>
                      Maximum Salary:
                    </Title>
                    <Select
                     value={maxSalary}
                     onChange={(e)=>setMaxSalary(e.target.value)}
                      defaultValue={"600"}
                      allowClear
                      // mode="tags"
                      style={{
                        width: "100%",
                        boxShadow: "0 0 10px 0 rgba(30,136,229,.3)",
                        borderRadius: "0",
                        fontSize: "medium",
                        borderRadius: "0 !important",
                        fontFamily: "arial",
                      }}
                      options={years}
                    />
                  </Col>
                </Row>

                <Row>
                  <Title level={4}>Job Descreption:</Title>
                  <TextArea
                    allowClear
                    rows={4}
                    style={{ boxShadow: "0 0 10px 0 rgba(30,136,229,.3)" }}
                  />
                </Row>
                <Row>
                  <Title level={4}>How To Apply:</Title>
                  <TextArea
                   value={apply}
                   onChange={(e)=>setApply(e.target.value)}
                  allowClear
                    rows={4}
                    style={{ boxShadow: "0 0 10px 0 rgba(30,136,229,.3)" }}
                  />
                </Row>
                <Row>
                  <Title level={4}>Job Requirements:</Title>
                  <TextArea
                   value={requirements}
                   onChange={(e)=>SetRequirements(e.target.value)}
                    allowClear
                    rows={4}
                    style={{ boxShadow: "0 0 10px 0 rgba(30,136,229,.3)" }}
                  />
                </Row>
                <Row justify='space-between' style={{marginBottom: '3%'}}> 
                  <Col span={15}>
                  <Title level={4}>
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
                      options={tagitems}
                    />
                  </Col>
                  <Col span={7}>
                  <Title level={4}>
                   Add Custom Tags:
                  </Title>
                  <Input
                       value={customTag}
                       onChange={(e)=>setCustomTag(e.target.value)}
                      allowClear
                      style={{
                        boxShadow: "0 0 10px 0 rgba(30,136,229,.3)",
                        width: '60%',
                        borderRadius: "0",
                        fontSize: "large",
                        marginRight: '5%',
                      }}
                    />
                    <Button type="primary" size="large"> Add</Button>
                  </Col>
                </Row>
                <Row>
                    <Button type="primary" 
                            size="large"
                            style={{
                              marginBottom: '3%',
                            }}> 
                      Post Job 
                    </Button>
                  </Row>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
export default AddJobPost;

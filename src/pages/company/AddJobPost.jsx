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
    value: "react",
    label: "REACT",
  },
  {
    value: "angular",
    label: "ANGULAR",
  },
  {
    value: "java",
    label: "JAVA",
  },
  {
    value: "node",
    label: "NODE.JS",
  },
  {
    value: "python",
    label: "PYTHON",
  },
  {
    value: "javascript",
    label: "JAVASCRIPT",
  },
];

function AddJobPost() {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [experience, setExperience] = useState("");
  const [minsalary, setMinSalary] = useState("");
  const [maxSalary, setMaxSalary] = useState("");
  const [description, setDescription] = useState("");
  const [apply, setApply] = useState("");
  const [requirements, setRequirements] = useState([""]);
  const [tags, setTags] = useState([]);
  const [deadline, setDeadline] = useState(null);
  const [education, setEducation] = useState("");

  const handleAddInput = () => {
    const newInput = "";
    setRequirements([...requirements, newInput]);
  };

  const handleInputChange = (e, index) => {

    const updatedValue = [...requirements];
    updatedValue[index] = e.target.value;
    setRequirements(updatedValue);
    console.log(requirements);
  };
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
                    <Title level={4}>Job Title:</Title>
                    <Input
                      allowClear
                      style={{
                        boxShadow: "0 0 8px 0 rgba(0,0,0,.05)",
                        borderRadius: "0",
                        fontSize: "large",
                      }}
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </Col>
                  <Col span={11}>
                    <Title level={4} style={{}}>
                      Job Type:
                    </Title>
                    <Select
                      defaultValue={"Full Time"}
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                      allowClear
                      style={{
                        width: "100%",
                        boxShadow: "0 0 8px 0 rgba(0,0,0,.05)",
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
                      onChange={(e) => setExperience(e.target.value)}
                      // mode="tags"
                      allowClear
                      style={{
                        width: "100%",
                        boxShadow: "0 0 8px 0 rgba(0,0,0,.05)",
                        borderRadius: "0",
                        fontSize: "medium",
                        fontFamily: "arial",
                      }}
                      options={years}
                    />
                  </Col>
                  <Col span={11}>
                    <Title level={4} style={{}}>
                      Education:
                    </Title>
                    <Select
                      value={education}
                      onChange={(value) => setEducation(value)}
                      defaultValue={"600"}
                      allowClear
                      style={{
                        width: "100%",
                        boxShadow: "0 0 8px 0 rgba(0,0,0,.05)",
                        borderRadius: "0",
                        fontSize: "medium",
                        fontFamily: "arial",
                      }}
                      options={[{label:"BSc in Computer Science", value: "BSc in Computer Science"}]}
                    />
                  </Col>
                  <Col span={11}>
                    <Title level={4} style={{}}>
                      Minimum Salary:
                    </Title>
                    <Select
                      defaultValue={"500"}
                      allowClear
                      value={minsalary}
                      onChange={(value) => setMinSalary(value)}
                      style={{
                        width: "100%",
                        boxShadow: "0 0 8px 0 rgba(0,0,0,.05)",
                        borderRadius: "0",
                        fontSize: "medium",
                        fontFamily: "arial",
                      }}
                      options={salary}
                    />
                  </Col>
                  <Col span={11}>
                    <Title level={4} style={{}}>
                      Maximum Salary:
                    </Title>
                    <Select
                      value={maxSalary}
                      onChange={(value) => setMaxSalary(value)}
                      defaultValue={"600"}
                      allowClear
                      style={{
                        width: "100%",
                        boxShadow: "0 0 8px 0 rgba(0,0,0,.05)",
                        borderRadius: "0",
                        fontSize: "medium",
                        fontFamily: "arial",
                      }}
                      options={salary}
                    />
                  </Col>
                  
                  <Col span={11}>
                    <Title level={4} style={{}}>
                      Deadline:
                    </Title>
                    <DatePicker
                            style={{
                              boxShadow: "0px 0px 5px  rgba(0,0,0,.1)",
                              height: "40px",
                            }}
                            onChange={(date) => setDeadline(date)}
                          />
                  </Col>
                </Row>

                <Row>
                  <Title level={4}>Job Descreption:</Title>
                  <TextArea
                    value={description}
                    allowClear
                    rows={4}
                    style={{ boxShadow: "0 0 8px 0 rgba(0,0,0,.05)" }}
                  />
                </Row>
                <Row>
                  <Title level={4}>How To Apply:</Title>
                  <TextArea
                    value={apply}
                    onChange={(e) => setApply(e.target.value)}
                    allowClear
                    rows={4}
                    style={{ boxShadow: "0 0 8px 0 rgba(0,0,0,.05)" }}
                  />
                </Row>
                <Row gutter={[20,10]}>
                 <Col span={24}> 
                 <Title level={4}>Job Requirements:</Title>
                 </Col>
                  <Col span={12}>
                  {requirements.map((item, index) => (
                    <Input
                    style={{
                      boxShadow: "0 0 8px 0 rgba(0,0,0,.05)",
                      borderRadius: "0",
                      fontSize: "large",
                      marginBottom: "20px"
                    }}
                      key={index}
                      value={item}
                      onChange={(e) => handleInputChange(e, index)}
                    />
                  ))}
                  </Col>
                  <Col span={24}>
                  <Button 
                    type="primary" 
                    style={{borderRadius: '0'}}
                    onClick={handleAddInput}>
                    Add Input
                  </Button>
                  </Col>
                </Row>
                <Row justify="space-between" style={{ marginBottom: "3%" }}>
                  <Col span={15}>
                    <Title level={4}>Tags:</Title>
                    <Select
                      value={tags}
                      onChange={(values) => {
                        setTags(values);
                      }}
                      mode="multiple"
                      style={{
                        width: "100%",
                        boxShadow: "0 0 8px 0 rgba(0,0,0,.05)",
                        borderRadius: "0",
                      }}
                      placeholder="Select Tags"
                      options={tagitems}
                    />
                  </Col>
                </Row>
                <Row>
                  <Button
                    htmlType="submit"
                    type="primary"
                    size="large"
                    style={{
                      marginBottom: "3%",
                      borderRadius: "0",
                    }}
                  >
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

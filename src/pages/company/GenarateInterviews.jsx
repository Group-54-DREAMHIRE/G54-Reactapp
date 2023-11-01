import {
  Row,
  Col,
  Typography,
  Form,
  DatePicker,
  TimePicker,
  Button,
  InputNumber,
  List,
  Radio,
  Select,
  Space,
  Checkbox,
  Input,
  Spin,
  message,
} from "antd";
import { useState } from "react";
import moment from "moment";
import { spaceChildren } from "antd/es/button";
import { fetchUserData } from "../../api/authenticationService";
import { useParams } from "react-router-dom";
const { Title } = Typography;

export default function GenarateInterviews() {
  const { jobId } = useParams();
  const CheckboxGroup = Checkbox.Group;
  const [checkedList, setCheckedList] = useState([]);
  const [defaultList, setDefaultList] = useState(false);
  const [interviewData, setInterviewData] = useState([]);
  const onChange = (list) => {
    setCheckedList(list);
   
  
  };
  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? timeSlots : []);
    console.log(checkedList);
  };

  const [date, setDate] = useState(null);
  const [duration, setDuration] = useState(0);
  const [interval, setInterval] = useState(0);
  const [start, setStart] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [timeSlots, setTimeSlots] = useState([]);
  const [value, setValue] = useState(true);
  const [type, setType] = useState(null);
  const [timeList, setTimeList] = useState([]);
  const [withInt, setWithInt] = useState(null);
  const [meetingLink, setMeetingLink] = useState(null);
  

  const [loading, setLoading] = useState(false);

  const generateAutoTimeSlots = () => {
    if (date && start && endTime && duration > 0 && interval > 0) {
      const slots = [];
      const tempSlots =[];

      const currentDateTime = moment(date).set({
        hour: start.hour(),
        minute: start.minute(),
        second: 0,
        date: date.date(),
      });

      const endDateTime = moment(date).set({
        hour: endTime.hour(),
        minute: endTime.minute(),
        second: 0,
        date:date.date(),
      });
     const sTime = endDateTime.subtract(duration, "minutes")
      while (currentDateTime.isSameOrBefore(sTime)) {
          tempSlots.push(currentDateTime.format("YYYY-MM-DD HH:mm"));
          slots.push(currentDateTime.format(" HH:mm "));
          currentDateTime.add(duration, "minutes");
          slots.push(currentDateTime.format(" HH:mm "));
          currentDateTime.add(interval, "minutes");

         
      }
      const array = slots.length % 2 === 0 ? slots : slots.slice(0, -1);
      const timesArray = [];
      for (let i = 0; i < slots.length ; i += 2) {
        timesArray.push(`${array[i]}-${array[i + 1]}`);
      }
      setTimeList(tempSlots);
      setTimeSlots(timesArray);
      setCheckedList(timesArray); 
      setDefaultList(timesArray);
      console.log(tempSlots);
    }
  };

  const generateMannualTimeSlots = () => {
    if (date && start && duration > 0) {
      const slots = [];
      const currentDateTime = moment(date).set({
        hour: start.hour(),
        minute: start.minute(),
        second: 0,
        date: date.date()
      });
      const dataObj = {
        id:0,
        type:type,
        startTime:new Date(currentDateTime),
        duration:duration,
        with: withInt,
        jobId,
        meetingLink
      }
      interviewData.push(dataObj);
      slots.push(currentDateTime.format("HH:mm"));
      currentDateTime.add(duration, "minutes");
      slots.push(currentDateTime.format("HH:mm"));
      console.log(slots);
      const timesArray = [];
      timesArray.push(`${slots[0]}-${slots[1]}`);
      setTimeSlots((prev) => [...prev, timesArray]);
      setCheckedList((prev) => [...prev, timesArray]);
      console.log(interviewData);
      
    }
  };
  const clear =()=>{
    setTimeSlots([]);
    setCheckedList([]);
    setDefaultList([]);
    setDate(null);
    setDuration(null);
    setInterval(null);
    setStart(null);
    setEndTime(null);
    setInterviewData([]);
  }
  const handleSubmit = async () => {
    if(checkedList){
      for(let i=0; i<checkedList.length; i++){
        const hour1 = checkedList[i].slice(0,3);
        const minute1 = checkedList[i].slice(4,6);
        const currentDateTime = moment(date).set({
          hour: hour1,
          minute: minute1,
          second: 0,
          date: date.date(),
        });
        console.log(currentDateTime);
        const times = {
          type,
          startTime: new Date(currentDateTime),
          duration,
          withInt,
          jobId,
          meetingLink
        }
        interviewData.push(times);
      }
      console.log(interviewData);
      if(interviewData){
        setLoading(true);
        let data = {
          url: `/api/v1/interview/save`,
          data: interviewData,
          method: "post",
        };
        try {
          const response = await fetchUserData(data);
          if (response.status === 200) {
            message.success("Succesfully updated");
            setLoading(false);
          } else {
            message.error("Invalid Data!");
            setLoading(false);
          }
        } catch (e) {
          console.log(e);
          setLoading(false);
        }
      }  
    }
   
  }
  return (
    <>
    <Spin spinning={loading}>
      <Row className="Interview-genarate-w" gutter={[20, 40]}>
        <Col span={22}>
          <Title level={2} style={{ margin: "30px 0 5px 0" }}>
            GENARATE INTERVIEW TIME SLOTS
          </Title>
          <hr style={{ border: "2px solid rgba(0,0,0,.4)" }} />
        </Col>
        <Col span={22}>
          <Form onFinish={handleSubmit}>
            <Radio.Group
              onChange={(e) => {setValue(e.target.value); clear();}}
              value={value}
            >
              <Row>
                <Col span={10}>
                  <Radio value={true}>Genarate Automatically</Radio>
                  <Row
                    className={value ? "" : "Interview-genarate-auto-w"}
                    style={{ marginTop: "5%" }}
                    gutter={[20, 20]}
                  >
                    <Col span={24}>
                      <Row gutter={[20, 20]}>
                        <Col span={24}>
                          <Space size="large">
                            <span level={4}>Date:</span>
                            <DatePicker
                              disabled={!value}
                              onChange={(date) => {setDate(date);console.log(date)}}
                            />
                          </Space>
                        </Col>
                        <Col span={24}>
                          <Space size="large">
                            <span>Duration: </span>
                            <Select
                              disabled={!value}
                              placeholder="Duration"
                              onChange={(value) => setDuration(value)}
                              options={[
                                {
                                  label: "15 Min",
                                  value: 15,
                                },
                                { label: "20 Min", value: 20 },
                                { label: "25Min", value: 25 },
                                { label: "30Min", value: 30 },
                                { label: "45Min", value: 45 },
                                { label: "1 Hour", value: 60 },
                              ]}
                            />
                          </Space>
                        </Col>
                        <Col span={24}>
                          <Space size="large">
                            <span>Inteval: </span>
                            <Select
                              disabled={!value}
                              onChange={(value) => setInterval(value)}
                              placeholder="Inteval"
                              options={[
                                {
                                  label: "5 Min",
                                  value: 5,
                                },
                                { label: "10 Min", value: 10 },
                                { label: "15Min", value: 15 },
                                { label: "20Min", value: 20 },
                                { label: "No", value: 0 },
                              ]}
                            />
                          </Space>
                        </Col>
                        <Col span={24}>
                          <Space size="large">
                            <span>Start Time: </span>
                            <TimePicker
                              disabled={!value}
                              onChange={(time) => setStart(time)}
                              format="HH:mm"
                            />
                          </Space>
                        </Col>
                        <Col span={24}>
                          <Space size="large">
                            <span>End Time: </span>
                            <TimePicker
                              disabled={!value}
                              onChange={(time) => setEndTime(time)}
                              format="HH:mm"
                            />
                          </Space>
                        </Col>
                        <Col span={24}>
                          <Space size='large'>
                            <Button
                            disabled={!value}
                            onClick={generateAutoTimeSlots}
                            type="primary"
                            style={{ borderRadius: "0" }}
                          >
                            Genarate
                          </Button>
                          { JSON.stringify(timeSlots) === "[]" ? null :
                          ( <Button
                            disabled={!value}
                            onClick={clear}
                            type="primary"
                            style={{ borderRadius: "0" }}
                          >
                            Clear
                          </Button>)}
                          </Space>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
                
                  <Col
                    span={14}
                    
                  >
                    <Row className={value ? "" : "Interview-genarate-auto-w"} gutter={[20, 20]}>
                      <Col span={24}  >
                      <Space size="large">
                            <span>Interview Type:</span>
                            <Select
                              disabled={!value}
                              onChange={(value) => setType(value)}
                              placeholder="Interview Type"
                              options={[
                                {label: "HR",value: "hr"},
                                { label: "Technical ", value: "technical" }
                               
                              ]}
                            />
                          </Space>
                      </Col>
                      <Col span={24}>
                      <Space size="large">
                            <span>With:</span>
                            <Select
                              disabled={!value}
                              onChange={(value) => setWithInt(value)}
                              defaultValue={"MRS Thushani"}
                             // placeholder="MR/MRS"
                              options={[
                                {label: "MR Sampath",value: "sampath"},
                                {label: "MRS Thushani ", value: "thushani"}
                               
                              ]}
                              style={{borderRadius: '0 !important', width: '100'}}
                            />
                          </Space>
                      </Col>
                      <Col span={24}>
                      <Space size="large">
                            <span>Meeting Link:</span>
                            <Input
                              disabled={!value}
                              onChange={(e) => setMeetingLink(e.target.value)}
                              placeholder="Link"
                             value={meetingLink}
                              style={{borderRadius: '0 !important', width: '100'}}
                            />
                          </Space>
                      </Col>
                      {JSON.stringify(timeSlots) === "[]" ? null : ( <>
                       <Col span={18} style={{
                      border: "1px solid rgba(0,0,0,.2)",
                      padding: " 2%",
                    }}>
                        {value && (
                          <Checkbox
                            disabled={!value}
                            indeterminate={
                              checkedList.length > 0 &&
                              checkedList.length < defaultList.length
                            }
                            onChange={onCheckAllChange}
                            checked={
                              timeSlots.length === checkedList.length
                                ? true
                                : false
                            }
                          >
                            All
                          </Checkbox>
                        )}
                        {value && (
                          <Space direction="vertical">
                            <CheckboxGroup
                              disabled={!value}
                              options={defaultList}
                              value={checkedList}
                              onChange={onChange}
                            />
                          </Space>
                        )}
                      </Col>
                       <Col span={18}>
                       <Row justify='end'>
                       {value && (
                           <Button
                              htmlType="submit"
                             disabled={!value}
                             style={{ borderRadius: "0" }}
                             type="primary"
                           >
                             Publish
                           </Button>
                         )}
                       </Row>
                        
                       </Col>
                       </>)}
                     
                      
                    </Row>
                  </Col>
               
              </Row>
              <Row style={{ marginTop: "5%" }}>
                <Col span={24}>
                  <Radio value={false}>Genarate Mannually</Radio>
                </Col>
                <Col
                  className={!value ? "" : "Interview-genarate-auto-w"}
                  span={24}
                >
                  <Row>
                    <Col span={10}>
                      <Row style={{ marginTop: "5%" }} gutter={[20, 20]}>
                        <Col span={24}>
                          <Row gutter={[20, 20]}>
                            <Col span={24}>
                              <Space size="large">
                                <span level={4}>Date:</span>
                                <DatePicker
                                  disabled={value}
                                  onChange={(value) => setDate(value)}
                                />
                              </Space>
                            </Col>
                            <Col span={24}>
                              <Space size="large">
                                <span>Duration: </span>
                                <Select
                                  disabled={value}
                                  placeholder="Duration"
                                  onChange={(value) => setDuration(value)}
                                  options={[
                                    {
                                      label: "15 Min",
                                      value: 15,
                                    },
                                    { label: "20 Min", value: 20 },
                                    { label: "25Min", value: 25 },
                                    { label: "30Min", value: 30 },
                                    { label: "45Min", value: 45 },
                                    { label: "1 Hour", value: 60 },
                                  ]}
                                />
                              </Space>
                            </Col>

                            <Col span={24}>
                              <Space size="large">
                                <span>Start Time: </span>
                                <TimePicker
                                  disabled={value}
                                  onChange={(time) => setStart(time)}
                                  format="HH:mm"
                                />
                              </Space>
                            </Col>

                            <Col span={24}>
                              <Space size='large'>
                                <Button
                                disabled={value}
                                onClick={generateMannualTimeSlots}
                                type="primary"
                                style={{ borderRadius: "0" }}
                              >
                                Genarate
                              </Button>

                            {JSON.stringify(timeSlots) === "[]" ? null :
                            (
                                <Button
                                disabled={value}
                                onClick={clear}
                                type="primary"
                                style={{ borderRadius: "0" }}
                              >
                                Clear
                              </Button>)}
                              </Space>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                    
                   
                                     
                    <Col
                      span={14}
                      
                    >
                      <Row gutter={[0, 10]}>
                      <Col span={24}  >
                      <Space size="large">
                            <span>Interview Type:</span>
                            <Select
                              disabled={value}
                              onChange={(value) => setType(value)}
                              placeholder="Interview Type"
                              options={[
                                {label: "HR",value: "hr"},
                                { label: "Technical ", value: "technical" }
                               
                              ]}
                            />
                          </Space>
                      </Col>
                      <Col span={24}>
                      <Space size="large">
                            <span>With:</span>
                            <Select
                              disabled={value}
                              onChange={(value) => setWithInt(value)}
                              defaultValue={"MRS Thushani"}
                             // placeholder="MR/MRS"
                              options={[
                                {label: "MR Sampath",value: "hr"},
                                { label: "MRS Thushani ", value: "technical" }
                               
                              ]}
                              style={{borderRadius: '0 !important', width: '100'}}
                            />
                            </Space>
                          </Col>
                          <Col span={24}>
                      <Space size="large">
                            <span>Meeting Link:</span>
                            <Input
                              disabled={!value}
                              onChange={(e) => setMeetingLink(e.target.value)}
                              placeholder="Link"
                             value={meetingLink}
                              style={{borderRadius: '0 !important', width: '100'}}
                            />
                          </Space>
                      </Col>
                          {JSON.stringify(timeSlots) === "[]" ? null :
                    (  <>
                          <Col span={24} style={{
                        border: "1px solid rgba(0,0,0,.2)",
                        padding: " 2%",
                      }}>
                         
                            <Row >
                            { timeSlots.map((item) => {
                          return <Col span={8}>{item}</Col>;
                        })}
                            </Row>
                          </Col>
                        
                        
                        <Col span={24}>
                          {!value && (
                            <Row justify="end">
                               {JSON.stringify(timeSlots) === "[]" ? null :
                             ( <Button
                                htmlType="submit"
                                disabled={value}
                                style={{ borderRadius: "0" }}
                                type="primary"
                              >
                                Publish
                              </Button>)}
                            </Row>
                          )}
                        </Col></>)}
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Radio.Group>
          </Form>
        </Col>
      </Row>
      </Spin>
    </>
  );
}

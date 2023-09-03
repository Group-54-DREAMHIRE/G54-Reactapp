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
} from "antd";
import { useState } from "react";
import moment from "moment";
import { spaceChildren } from "antd/es/button";
const { Title } = Typography;

export default function GenarateInterviews() {
  const CheckboxGroup = Checkbox.Group;
  const [checkedList, setCheckedList] = useState([]);
  const [defaultList, setDefaultList] = useState(false);
  const onChange = (list) => {
    setCheckedList(list);
    console.log(list);
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
  const [mornTea, setMornTea] = useState(false);
  const [lunch, setLunch] = useState(false);
  const [eveTea, setEveTea] = useState(false);
  const [timeSlots, setTimeSlots] = useState([]);
  const [value, setValue] = useState(true);
  const [timeList, setTimeList] = useState([]);

  const generateAutoTimeSlots = () => {
    if (date && start && endTime && duration > 0 && interval > 0) {
      const slots = [];
      const currentDateTime = moment(date).set({
        hour: start.hour(),
        minute: start.minute(),
        second: 0,
      });

      const endDateTime = moment(date).set({
        hour: endTime.hour(),
        minute: endTime.minute(),
        second: 0,
      });

      while (currentDateTime.isBefore(endDateTime)) {
        if (endDateTime > currentDateTime) {
          slots.push(currentDateTime.format("HH:mm"));
          currentDateTime.add(duration, "minutes");
        }
         slots.push(currentDateTime.format("HH:mm"));
        currentDateTime.add(interval, "minutes");
      }
      const array = slots.length % 2 === 0 ? slots : slots.slice(0, -1);
      const timesArray = [];
      for (let i = 0; i < slots.length ; i += 2) {
        timesArray.push(`${array[i]}-${array[i + 1]}`);
      }
      setTimeSlots(timesArray);
      setCheckedList(timesArray);
      setDefaultList(timesArray);
    }
  };

  const generateMannualTimeSlots = () => {
    if (date && start && duration > 0) {
      const slots = [];
      const currentDateTime = moment(date).set({
        hour: start.hour(),
        minute: start.minute(),
        second: 0,
      });

      slots.push(currentDateTime.format("HH:mm"));
      currentDateTime.add(duration, "minutes");
      slots.push(currentDateTime.format("HH:mm"));
      console.log(slots);
      const timesArray = [];
      timesArray.push(`${slots[0]}-${slots[1]}`);

      setTimeSlots((prev) => [...prev, timesArray]);
      
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
  }
  return (
    <>
      <Row className="Interview-genarate-w" gutter={[20, 40]}>
        <Col span={22}>
          <Title level={2} style={{ margin: "30px 0 5px 0" }}>
            GENARATE INTERVIEW TIME SLOTS
          </Title>
          <hr style={{ border: "2px solid rgba(0,0,0,.4)" }} />
        </Col>
        <Col span={22}>
          <Form>
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
                              onChange={(value) => setDate(value)}
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
                {JSON.stringify(timeSlots) === "[]" ? null : (
                  <Col
                    span={14}
                    style={{
                      border: "1px solid rgba(0,0,0,.2)",
                      padding: " 2%",
                    }}
                  >
                    <Row justify="end" gutter={[20, 20]}>
                      <Col span={24}>
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
                      <Col>
                        {value && (
                          <Button
                            disabled={!value}
                            style={{ borderRadius: "0" }}
                            type="primary"
                          >
                            Publish
                          </Button>
                        )}
                      </Col>
                    </Row>
                  </Col>
                )}
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
                    
                    {JSON.stringify(timeSlots) === "[]" ? null :
                    (                 
                    <Col
                      span={14}
                      style={{
                        border: "1px solid rgba(0,0,0,.2)",
                        padding: " 2%",
                      }}
                    >
                      <Row gutter={[0, 10]}>
                        {!value && timeSlots.map((item) => {
                          return <Col span={8}>{item}</Col>;
                        })}
                        <Col span={24}>
                          {!value && (
                            <Row justify="end">
                               {JSON.stringify(timeSlots) === "[]" ? null :
                             ( <Button
                                disabled={value}
                                style={{ borderRadius: "0" }}
                                type="primary"
                              >
                                Publish
                              </Button>)}
                            </Row>
                          )}
                        </Col>
                      </Row>
                    </Col>)}
                  </Row>
                </Col>
              </Row>
            </Radio.Group>
          </Form>
        </Col>
      </Row>
    </>
  );
}

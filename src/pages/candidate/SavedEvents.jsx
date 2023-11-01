import {
  Table,
  Typography,
  Button,
  Row,
  Col,
  Divider,
  Input,
  message,
  Popconfirm,
} from "antd";
import { useState, useEffect } from "react";
import { CheckCircleOutlined, DeleteOutlined,QuestionCircleOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import { pageanimation } from "../../assets/animations/pageanimation";
import { fetchUserData, getData } from "../../api/authenticationService";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;
const { Search } = Input;
function SavedEvents() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("USER"));
  const id = user.id;
  const [loading, setLoading] = useState(false);
  const [eventList, setEventList] = useState([]);
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    getData(`/api/v1/savedEvents/getAll/${id}`)
      .then((response) => {
        console.log(response.data);
        setEventList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user profile:", error);
      });
  }, []);
  useEffect(() => {
    setLoading(true);
    if(eventList){
      for (let i = 0; i < eventList.length; i++) {
        const data = eventList[i];
        const action = {
          savedEventId: data.id,
          eventId: data.event.id,
          id: i,
        };
        const listData = {
          key: data.id,
          action: action,
          title: data.event.title,
          date: moment(data.date).format("YYYY-MM-DD"),
          companyName: data.event.companyName,
        };
        const dataItem = [...dataSource];
        dataItem[i] = listData;
        setDataSource(dataItem);
      }
    }
    
  }, [eventList]);

  const handleDelete = async (id, index) => {
    let data = {
      url: `/api/v1/savedEvents/delete/${id}`,
      method: "delete",
    };
    try {
      const response = await fetchUserData(data);
      if (response.status === 200) {
        message.success("Event is deleted successfully");
        setLoading(true);
        setDataSource((prevArray) =>
          prevArray.filter((item) => item !== prevArray[index])
        );
      } else {
        message.error("Saved error! Try again!");
      }
    } catch (e) {
      console.log(e);
      message.error("Saved error! Try again!");
    }
  };
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const columns = [
    {
      title: "Event Name",
      dataIndex: "title",
      key: "key",
      render: (text) => <b>{text}</b>,
    },
    {
      title: "Company",
      dataIndex: "companyName",
      key: "key",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "key",
    },
    {
      key: "action",
      dataIndex: "action",
      title: "Action",
      render: (text, record) => {
        return (
          <>
            <CheckCircleOutlined
              onClick={() => navigate(`/event/${record.action.eventId}`)}
              style={{
                backgroundColor: "rgba(30,136,229,.5)",
                color: "white",
                padding: "5px",
                borderRadius: "5px",
              }}
            />
            <Popconfirm
              title="Are you sure?"
              description="Delete this item"
              icon={
                <QuestionCircleOutlined
                  style={{
                    color: 'red',
                  }}
                />}
              onConfirm={() =>
                handleDelete(record.action.savedEventId, record.action.id)}
              onOpenChange={() => console.log("open change")}
            >
              <DeleteOutlined
              style={{
                backgroundColor: "red",
                color: "white",
                marginLeft: 12,
                padding: "5px",
                borderRadius: "5px",
              }}
            />
            </Popconfirm>
           
          </>
        );
      },
    },
  ];

  const onAddEvents = () => {
    const newEvent = {
      company: "Virtusa",
      eventPosition: "Software Engineer",
      date: "December 15, 2023",
    };
    setDataSource((pre) => {
      return [...pre, newEvent];
    });
  };

  return (
    <>
      <motion.div
        variants={pageanimation}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.6 }}
      >
        <div className="container-n">
          <Row
            style={{
              marginTop: "10px",
            }}
          >
            <Col
              span={6}
              style={{
                display: "flex",
                justifyContent: "left",
                alignItems: "center",
              }}
            >
              <Title
                style={{
                  fontSize: "25px",
                  fontWeight: 600,
                }}
              >
                SAVED EVENTS
              </Title>
            </Col>
            {/* <Col span={6} offset={6} style={{
                            display: 'flex',
                            justifyContent: 'right',
                            alignItems: 'center'
                        }}>
                            <Search placeholder="Search company name" enterButton />
                        </Col> */}

            {/* <Col span={6} style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Button type="primary" onClick={onAddEvents} >+ Add Event</Button>
                        </Col> */}
          </Row>
          <Divider />

          <Table
            className="tables-n"
            dataSource={dataSource}
            columns={columns}
            pagination={{
              current: page,
              pageSize: pageSize,
              onChange: (page, pageSize) => {
                setPage(page);
                setPageSize(pageSize);
                // Make the api call here with page and page size
              },
            }}
          ></Table>
        </div>
      </motion.div>
    </>
  );
}

export default SavedEvents;
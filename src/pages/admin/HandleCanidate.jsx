import React from "react";
import { Table, Layout, Button } from "antd";

const { Content } = Layout;

const columns = [
  {
    title: "User ID",
    dataIndex: "userId",
    key: "userId",
    width: "20%",
    align: "center", // Center-align the title
    render: (text) => (
      <div className="L_Haddle_Candidates_table-cell">{text}</div>
    ),
  },
  {
    title: "User Name",
    dataIndex: "userName",
    key: "userName",
    width: "20%",
    align: "center", // Center-align the title
    render: (text) => (
      <div className="L_Haddle_Candidates_table-cell">{text}</div>
    ),
  },
  {
    title: "Register Date",
    dataIndex: "registerDate",
    key: "registerDate",
    width: "25%",
    align: "center", // Center-align the title
    render: (text) => (
      <div className="L_Haddle_Candidates_table-cell">{text}</div>
    ),
  },
  {
    title: "View",
    dataIndex: "view",
    key: "view",
    width: "15%",
    align: "center", // Center-align the title
    render: () => (
      <div className="L_Haddle_Candidates_table-cell">
        <Button type="primary" className="L_Haddle_Candidates_view-button">
          View Profile
        </Button>
      </div>
    ),
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    width: "20%",
    align: "center", // Center-align the title
    render: () => (
      <div className="L_Haddle_Candidates_table-cell">
        <Button type="danger" className="L_Haddle_Candidates_remove-button">
          Remove
        </Button>
      </div>
    ),
  },
];

const data = [
  {
    key: "1",
    userId: "123",
    userName: "John Doe",
    registerDate: "2023-11-01",
  },
  {
    key: "2",
    userId: "456",
    userName: "Jane Smith",
    registerDate: "2023-11-02",
  },
  {
    key: "3",
    userId: "789",
    userName: "Alice Johnson",
    registerDate: "2023-10-29",
  },
  {
    key: "4",
    userId: "101",
    userName: "Michael Brown",
    registerDate: "2023-10-29",
  },
  {
    key: "5",
    userId: "202",
    userName: "Emily Davis",
    registerDate: "2023-10-29",
  },
  {
    key: "6",
    userId: "303",
    userName: "William Martinez",
    registerDate: "2023-10-27",
  },
  {
    key: "7",
    userId: "404",
    userName: "Olivia Adams",
    registerDate: "2023-10-26",
  },
  {
    key: "8",
    userId: "505",
    userName: "James Wilson",
    registerDate: "2023-10-25",
  },
  {
    key: "9",
    userId: "606",
    userName: "Sophia Moore",
    registerDate: "2023-10-25",
  },
  {
    key: "10",
    userId: "707",
    userName: "Liam Taylor",
    registerDate: "2023-10-24",
  },
];

const UsersDetailsPage = () => {
  return (
    <Layout>
      <Content className="L_Haddle_Candidates_content">
        <h1 className="L_Haddle_Candidates_title">Candidate Details</h1>
        <div className="L_Haddle_Candidates_table-container">
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            bordered
            size="small"
            className="L_Haddle_Candidates_data-table"
          />
        </div>
      </Content>
    </Layout>
  );
};

export default UsersDetailsPage;

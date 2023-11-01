import React from "react";
import { Table, Layout } from "antd";

const { Content } = Layout;

const columns = [
  {
    title: "Company Name",
    dataIndex: "companyName",
    key: "companyName",
    width: "20%",
    align: "center", // Center-align the title
    render: (text) => (
      <div className="L_Payments_Details_table-cell">{text}</div>
    ),
  },
  {
    title: "Payment Number",
    dataIndex: "paymentNumber",
    key: "paymentNumber",
    width: "20%",
    align: "center", // Center-align the title
    render: (text) => (
      <div className="L_Payments_Details_table-cell">{text}</div>
    ),
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    width: "15%",
    align: "center", // Center-align the title
    render: (text) => (
      <div className="L_Payments_Details_table-cell">{text}</div>
    ),
  },
  {
    title: "Time",
    dataIndex: "time",
    key: "time",
    width: "15%",
    align: "center", // Center-align the title
    render: (text) => (
      <div className="L_Payments_Details_table-cell">{text}</div>
    ),
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    width: "15%",
    align: "center", // Center-align the title
    render: (text) => (
      <div className="L_Payments_Details_table-cell">{text}</div>
    ),
  },
  {
    title: "Package",
    dataIndex: "package",
    key: "package",
    width: "15%",
    align: "center", // Center-align the title
    render: (text) => (
      <div className="L_Payments_Details_table-cell">{text}</div>
    ),
  },
];

const data = [
  {
    key: "1",
    companyName: "Company A",
    paymentNumber: "123",
    date: "2023-08-08",
    time: "09:00 AM",
    status: "Paid",
    package:"Yearly"
  },
  {
    key: "2",
    companyName: "Company B",
    paymentNumber: "456",
    date: "2023-08-09",
    time: "02:30 PM",
    status: "pending",
    package:"pending"
  },
  {
    key: "3",
    companyName: "Company C",
    paymentNumber: "789",
    date: "2023-08-10",
    time: "11:15 AM",
    status: "Paid",
    package:"Yearly"
  },
  {
    key: "4",
    companyName: "Company D",
    paymentNumber: "987",
    date: "2023-08-11",
    time: "04:45 PM",
    status: "pending",
    package:"pending"
  },
  {
    key: "5",
    companyName: "Company E",
    paymentNumber: "654",
    date: "2023-08-12",
    time: "09:30 AM",
    status: "Paid",
    package:"Monthly"
  },
  {
    key: "6",
    companyName: "Company F",
    paymentNumber: "321",
    date: "2023-08-13",
    time: "01:00 PM",
    status: "pending",
    package:"pending"
  },
  {
    key: "7",
    companyName: "Company G",
    paymentNumber: "111",
    date: "2023-08-14",
    time: "10:45 AM",
    status: "Paid",
    package:"Yearly"
  },
  {
    key: "8",
    companyName: "Company H",
    paymentNumber: "222",
    date: "2023-08-15",
    time: "03:20 PM",
    status: "pending",
    package:"pending"
  },
  {
    key: "9",
    companyName: "Company I",
    paymentNumber: "333",
    date: "2023-08-16",
    time: "11:00 AM",
    status: "Paid",
    package:"Monthly"
  },
  {
    key: "10",
    companyName: "Company J",
    paymentNumber: "444",
    date: "2023-08-17",
    time: "05:00 PM",
    status: "pending",
    package:"pending"
  },
];

const PaymentDetailsPage = () => {
  return (
    <Layout>
      <Content className="L_Payments_Details_content">
        <h1 className="L_Payments_Details_title">Payment Details</h1>
        <div className="L_Payments_Details_table-container">
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            bordered
            size="small"
            className="L_Payments_Details_data-table"
          />
        </div>
      </Content>
    </Layout>
  );
};

export default PaymentDetailsPage;

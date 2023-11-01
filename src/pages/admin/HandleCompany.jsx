import React from "react";
import { Table, Layout, Button } from "antd";

const { Content } = Layout;

const columns = [
  {
    title: "Company Name",
    dataIndex: "companyName",
    key: "companyName",
    width: "20%",
    align: "center", // Center-align the title
    render: (text) => (
      <div className="L_Company_Details_table-cell">{text}</div>
    ),
  },
  {
    title: "Business Register Number",
    dataIndex: "registerNumber",
    key: "registerNumber",
    width: "20%",
    align: "center", // Center-align the title
    render: (text) => (
      <div className="L_Company_Details_table-cell">{text}</div>
    ),
  },
  {
    title: "Register Date",
    dataIndex: "registerDate",
    key: "registerDate",
    width: "15%",
    align: "center", // Center-align the title
    render: (text) => (
      <div className="L_Company_Details_table-cell">{text}</div>
    ),
  },
  {
    title: "Package",
    dataIndex: "package",
    key: "package",
    width: "15%",
    align: "center", // Center-align the title
    render: (text) => (
      <div className="L_Company_Details_table-cell">{text}</div>
    ),
  },
  {
    title: "View",
    dataIndex: "view",
    key: "view",
    width: "15%",
    align: "center", // Center-align the title
    render: () => (
      <div className="L_Company_Details_table-cell">
        <Button type="primary" className="L_Company_Details_view-button">
          View Profile
        </Button>
      </div>
    ),
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    width: "15%",
    align: "center", // Center-align the title
    render: () => (
      <div className="L_Company_Details_table-cell">
        <Button type="danger" className="L_Company_Details_remove-button">
          Remove
        </Button>
      </div>
    ),
  },
];

const data = [
  {
    key: "1",
    companyName: "XDOTO CONCEPT",
    registerNumber: "BR12345",
    registerDate: "2023-11-01",
    package: "Monthly",
  },
  {
    key: "2",
    companyName: "ZOROSIGN",
    registerNumber: "BR67890",
    registerDate: "2023-11-01",
    package: "Yearly",
  },
  {
    key: "3",
    companyName: "ZONE 24*7",
    registerNumber: "BR24680",
    registerDate: "2023-10-30",
    package: "Monthly",
  },
  {
    key: "4",
    companyName: "PROMISQ",
    registerNumber: "BR13579",
    registerDate: "2023-10-29",
    package: "Yearly",
  },
  {
    key: "5",
    companyName: "TARGET",
    registerNumber: "BR86420",
    registerDate: "2023-10-28",
    package: "Monthly",
  },
  {
    key: "6",
    companyName: "PICK ME",
    registerNumber: "BR97531",
    registerDate: "2023-10-27",
    package: "Yearly",
  },
  {
    key: "7",
    companyName: "WONDER SOLUTION",
    registerNumber: "BR12346",
    registerDate: "2023-10-25",
    package: "Monthly",
  },
  {
    key: "8",
    companyName: "BOFFO LABS",
    registerNumber: "BR67891",
    registerDate: "2023-10-25",
    package: "Yearly",
  },
  {
    key: "9",
    companyName: "STRETCHLINE",
    registerNumber: "BR24681",
    registerDate: "2023-10-25",
    package: "Monthly",
  },
  {
    key: "10",
    companyName: "ALTRIUM",
    registerNumber: "BR13580",
    registerDate: "2023-10-21",
    package: "Yearly",
  },
];

const CompanyDetailsPage = () => {
  return (
    <Layout>
      <Content className="L_Company_Details_content">
        <h1 className="L_Company_Details_title">Company Details</h1>
        <div className="L_Company_Details_table-container">
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            bordered
            size="small"
            className="L_Company_Details_data-table"
          />
        </div>
      </Content>
    </Layout>
  );
};

export default CompanyDetailsPage;

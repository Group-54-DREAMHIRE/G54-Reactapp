import React from "react";
import { Table, Layout, Button } from "antd";

const { Content } = Layout;

const columns = [
  {
    title: "Company Name",
    dataIndex: "companyName",
    key: "companyName",
    width: "20%",
    render: (text) => (
      <div className="L_Company_Details_table-cell">{text}</div> //table cell
    ),
  },
  {
    title: "Business Register Number",
    dataIndex: "registerNumber",
    key: "registerNumber",
    width: "20%",
    render: (text) => (
      <div className="L_Company_Details_table-cell">{text}</div> //table cell
    ),
  },
  {
    title: "Register Date",
    dataIndex: "registerDate",
    key: "registerDate",
    width: "15%",
    render: (text) => (
      <div className="L_Company_Details_table-cell">{text}</div> //table cell
    ),
  },
  {
    title: "Package",
    dataIndex: "package",
    key: "package",
    width: "15%",
    render: (text) => (
      <div className="L_Company_Details_table-cell">{text}</div> //table cell
    ),
  },
  {
    title: "View",
    dataIndex: "view",
    key: "view",
    width: "15%",
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
    companyName: "Company X",
    registerNumber: "BR12345",
    registerDate: "2023-08-01",
    package: "Monthly",
  },
  {
    key: "2",
    companyName: "Company Y",
    registerNumber: "BR67890",
    registerDate: "2023-08-02",
    package: "Yearly",
  },
  {
    key: "3",
    companyName: "Company Z",
    registerNumber: "BR24680",
    registerDate: "2023-08-03",
    package: "Monthly",
  },
  {
    key: "4",
    companyName: "Company A",
    registerNumber: "BR13579",
    registerDate: "2023-08-04",
    package: "Yearly",
  },
  {
    key: "5",
    companyName: "Company B",
    registerNumber: "BR86420",
    registerDate: "2023-08-05",
    package: "Monthly",
  },
  {
    key: "6",
    companyName: "Company C",
    registerNumber: "BR97531",
    registerDate: "2023-08-06",
    package: "Yearly",
  },
  {
    key: "7",
    companyName: "Company D",
    registerNumber: "BR12346",
    registerDate: "2023-08-07",
    package: "Monthly",
  },
  {
    key: "8",
    companyName: "Company E",
    registerNumber: "BR67891",
    registerDate: "2023-08-08",
    package: "Yearly",
  },
  {
    key: "9",
    companyName: "Company F",
    registerNumber: "BR24681",
    registerDate: "2023-08-09",
    package: "Monthly",
  },
  {
    key: "10",
    companyName: "Company G",
    registerNumber: "BR13580",
    registerDate: "2023-08-10",
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

import React, { useState, useEffect } from "react";
import { Card, Table } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
];

const cardStyle = {
  width: 900,
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  margin: "auto", // Center horizontally
  position: "relative", // Center vertically
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
};

const UserRoleTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from a dummy backend endpoint (replace with your actual endpoint)
    fetch("https://dummy-backend-url.com")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Failed to fetch data:", error);
      });
  }, []);

  return (
    <Card title="User Roles" style={cardStyle}>
      <Table dataSource={data} columns={columns} />
    </Card>
  );
};

export default UserRoleTable;

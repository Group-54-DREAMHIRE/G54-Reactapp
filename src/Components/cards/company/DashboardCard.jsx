import {
  Calendar,
  Card,
  Col,
  Row,
  Space,
  Typography,
  Image,
  Avatar,
  Button,
  List,
  Select,
} from "antd";
import React, { useEffect } from "react";
const { Title, Text } = Typography;

const pendingInterviews = [
  { id: 1, time: "2023-08-15 09:00 AM - 05:00 PM" },
  { id: 2, time: "2023-08-15 10:30 AM - 04:00 PM" },
  { id: 3, time: "2023-08-15 02:00 PM - 06:00 PM" },
  // Add more dummy time slots as needed
];

const pendingSelectionTests = [
  { id: 1, time: "2023-08-15 09:00 AM - 05:00 PM" },
  { id: 2, time: "2023-08-15 10:30 AM - 04:00 PM" },
  { id: 3, time: "2023-08-15 02:00 PM - 06:00 PM" },
];

function CompanyDashboard() {
  return (
    <>
      <Row>
        <div
          className="pending-time-slots-n"
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <Row
            justify={"space-between"}
            style={{ display: "flex", alignItems: "baseline" }}
          >
            <Title className="title">UPCOMING SELECTION TESTS</Title>
            <Select
              defaultValue="This week"
              style={{ width: 150 }}
              options={[
                {
                  value: "This week",
                  label: "This week",
                },
                {
                  value: "This month",
                  label: "This month",
                },
                {
                  value: "This year",
                  label: "This year",
                },
                {
                  value: "disabled",
                  label: "Disabled",
                  disabled: true,
                },
              ]}
            />
          </Row>
        </div>
      </Row>
    </>
  );
}

export default CompanyDashboard;

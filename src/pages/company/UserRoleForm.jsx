import React from "react";
import { Form, Input, Button, Select, Card } from "antd";

const { Option } = Select;

const UserRoleForm = () => {
  const onFinish = async (values) => {
    try {
      const response = await fetch("https://dummy-backend-url.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        console.log("Form data sent successfully.");
        // You can add further handling for a successful response
      } else {
        console.error("Failed to send form data to the backend.");
        // You can add error handling here
      }
    } catch (error) {
      console.error("An error occurred while sending form data:", error);
      // You can handle network errors or other exceptions here
    }
  };

  return (
    <Card
      title="Company User Registration Form"
      style={{
        width: 900,
        margin: "20px auto",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Form name="userRoleForm" onFinish={onFinish}>
        <Form.Item label="Name" name="name">
          <Input />
        </Form.Item>

        <Form.Item label="Role" name="role">
          <Select placeholder="Select a role">
            <Option value="interview">Interview Division</Option>
            <Option value="management">Management Division</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Email" name="email">
          <Input type="email" />
        </Form.Item>

        <Form.Item label="Password" name="password">
          <Input type="password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Register user
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default UserRoleForm;

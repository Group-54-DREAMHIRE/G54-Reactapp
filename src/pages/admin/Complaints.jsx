import React, { useState } from 'react';
import { Table, Layout, Switch } from 'antd';

const { Content } = Layout;

const Complaints = () => {
  const [complaints, setComplaints] = useState([
    {
      key: '1',
      userName: 'John Doe',
      complainNumber: '12345',
      date: '2023-08-09',
      time: '14:30',
      status: 'Pending',
    },
    {
      key: '2',
      userName: 'Jane Smith',
      complainNumber: '67890',
      date: '2023-08-10',
      time: '10:45',
      status: 'Completed',
    },
    // Add more data entries here
  ]);

  const handleStatusChange = (complaintKey, checked) => {
    // Update the status of the selected complaint
    setComplaints((prevComplaints) =>
      prevComplaints.map((complaint) => {
        if (complaint.key === complaintKey) {
          return {
            ...complaint,
            status: checked ? 'Completed' : 'Pending',
          };
        }
        return complaint;
      })
    );
  };

  const columns = [
    {
      title: 'User Name',
      dataIndex: 'userName',
      key: 'userName',
    },
    {
      title: 'Complain Number',
      dataIndex: 'complainNumber',
      key: 'complainNumber',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Time',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status, record) => (
        <Switch
          checkedChildren="Completed"
          unCheckedChildren="Pending"
          defaultChecked={status === 'Completed'}
          onChange={(checked) => handleStatusChange(record.key, checked)}
          style={{
            background: status === 'Completed' ? 'green' : 'red',
            borderColor: status === 'Completed' ? 'green' : 'red',
          }}
        />
      
        )
        }
  ];

  return (
    <Layout>
      <Content className="D_complaints_content">
        <h1 className="D_complaints_title">Complaints</h1>
        <div className="D_complaints_table-container">
          <Table columns={columns} dataSource={complaints} pagination={false} />
        </div>
      </Content>
    </Layout>
  );
};

export default Complaints;

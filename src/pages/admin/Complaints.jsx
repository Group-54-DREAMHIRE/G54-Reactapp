import React from 'react';
import { Table, Button ,Layout } from 'antd';

const {Content} = Layout

const Complaints = () => {
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
      render: (status) => (
        <Button type={status === 'Pending' ? 'danger' : 'primary'}>
          {status}
        </Button>
      ),
    },
  ];

  const data = [
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
  ];

  return (
    <Layout>
    <Content className="D_complaints">
    <h1 className="D_complaints_title">Payment Details</h1>
    <div className="D_complaints_table-container">
    <Table columns={columns} dataSource={data} pagination={false}/>
    </div>
    </Content>
    </Layout>
  );
}

export default Complaints;
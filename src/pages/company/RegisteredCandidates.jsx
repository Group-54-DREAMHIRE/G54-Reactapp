import React from 'react';
import { Table, Typography, Button, Row, Col, Divider, Input, Space, Tag, Switch } from 'antd';
import { useState, useEffect } from 'react';
import '../../assets/styles/Tables.scss';

const { Title } = Typography;

const Candidates = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    // Add more columns as needed
  ];

  const [dataSource, setDataSource] = useState([
    {
      key: '1',
      name: 'John Doe',
      email: 'john@example.com',
      phoneNumber: '123-456-7890',
      address: '123 Main St, Anytown, USA',
      qualification: 'Bachelor\'s Degree',
    },
    {
      key: '2',
      name: 'Jane Doe',
      email: 'jane@example.com',
      phoneNumber: '098-765-4321',
      address: '456 Elm St, Anytown, USA',
      qualification: 'Master\'s Degree',
    },
    {
      key: '3',
      name: 'Jane Doe',
      email: 'jane@example.com',
      phoneNumber: '098-765-4321',
      address: '456 Elm St, Anytown, USA',
      qualification: 'Master\'s Degree',
    },
    {
      key: '4',
      name: 'Jane Doe',
      email: 'jane@example.com',
      phoneNumber: '098-765-4321',
      address: '456 Elm St, Anytown, USA',
      qualification: 'Master\'s Degree',
    },

  ]);

  return (
    <>
      <div className='container-n'>
        <Row>
          <Col span={24}>
            <Row>
              <Col span={12} style={{
                display: 'flex',
                justifyContent: 'left',
                alignItems: 'center',
              }}>
                <Title style={{
                  fontSize: '25px',
                  fontWeight: 600,
                }}>
                  Registered Candidates
                </Title>
              </Col>
              <Col span={6}>
              </Col>

              <Col span={6} style={{
                display: 'flex',
                justifyContent: 'right',
                alignItems: 'center'
              }}>

              </Col>
            </Row>
            <Divider />
            <Row>
              <Col span={24}>
                <Table className='tables-n'
                  dataSource={dataSource}
                  columns={columns}
                  pagination={{
                    current: page,
                    pageSize: pageSize,
                    onChange: (page, pageSize) => {
                      setPage(page);
                      setPageSize(pageSize);
                      // Make the api call here with page and page size
                    }
                  }}
                >

                </Table>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Candidates;

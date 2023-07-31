import 'antd/dist/reset.css';
import "../assets/styles/Tables.scss";
import "../assets/styles/variables.scss";

import { Table, Typography, Button, Row, Col, Divider, Input, Space, Tag } from 'antd';
import { useState, useEffect } from 'react';
import { EditOutlined, DeleteOutlined, EyeOutlined, ForwardOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { pageanimation } from '../assets/animations/pageanimation';

const { Title } = Typography;
const { Search } = Input;

function CompanyList() {
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const columns = [
        {
            title: 'Company Name',
            dataIndex: 'companyName',
            key: 'key',
        },
        {
            title: 'View Profile',
            key: 'key',
            render: () => {
                return (
                    <>
                        <Button type="primary">View</Button>
                    </>
                )
            }
        },
        {
            title: 'Website',
            key: 'key',
            render: () => {
                return (
                    <>
                        <Button type="primary">Visit</Button>
                    </>
                )
            }
        },
        {
            title: 'Advertisements',
            key: 'key',
            render: () => {
                return (
                    <>
                        <ForwardOutlined 
                            style={{
                                backgroundColor: 'rgba(25,103,210,255)',
                                color: 'white',
                                marginLeft: 12,
                                padding: "5px",
                                borderRadius: "5px"
                            }} />
                    </>
                )
            }
        }
        ];

    const [dataSource, setDataSource] = useState([

        {
            key: '1',
            companyName: 'Virtusa',

        },
        {
            key: '2',
            companyName: 'Creative Software',
        },
        {
            key: '3',
            companyName: '99x',
        },
        {
            key: '4',
            companyName: 'LSEG',
        },


    ]);

    return (
        <>
            <motion.div variants={pageanimation}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.6 }}>
                <div className='container-n'>
                    <Row style={{
                        marginTop: "10px",
                    }}>
                        <Col span={12} style={{
                            display: 'flex',
                            justifyContent: 'left',
                            alignItems: 'center',
                        }}>
                            <Title style={{
                                fontSize: '25px',
                                fontWeight: 600,
                            }}>
                                Company List
                            </Title>
                        </Col>
                        <Col span={6}>
                        </Col>

                        <Col span={6} style={{
                            display: 'flex',
                            justifyContent: 'right',
                            alignItems: 'center'
                        }}>
                            <Search placeholder="Search company name" enterButton />
                        </Col>
                    </Row>
                    <Divider />

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
                </div>


            </motion.div>


        </>
    )
}



export default CompanyList;

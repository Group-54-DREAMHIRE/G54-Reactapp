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

function CandidateList() {
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const columns = [
        {
            title: 'Candidate Name',
            dataIndex: 'candidateName',
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
            title: 'Resume',
            key: 'key',
            render: () => {
                return (
                    <>
                        <Button type="primary">View</Button>
                    </>
                )
            }
        }
        ];

    const [dataSource, setDataSource] = useState([

        {
            key: '1',
            candidateName: 'John Due',

        },
        {
            key: '2',
            candidateName: 'John Due',
        },
        {
            key: '3',
            candidateName: 'John Due',
        },
        {
            key: '4',
            candidateName: 'John Due',
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
                                Candidate List
                            </Title>
                        </Col>
                        <Col span={6}>
                        </Col>

                        <Col span={6} style={{
                            display: 'flex',
                            justifyContent: 'right',
                            alignItems: 'center'
                        }}>
                            <Search placeholder="Search candidate name" enterButton />
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



export default CandidateList;

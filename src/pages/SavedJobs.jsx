import 'antd/dist/reset.css';
import "../assets/styles/Tables.scss";
import { Table, Typography, Button, Row, Col, Divider, Input } from 'antd';
import { useState, useEffect } from 'react';
import { CheckCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { pageanimation } from '../assets/animations/pageanimation';

const { Title } = Typography;
const { Search } = Input;

function SavedJobs() {
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const columns = [
        {
            title: 'Job Position',
            dataIndex: 'jobPosition',
            key: 'key',
            render: (text) => <b>{text}</b>
        },
        {
            title: 'Company',
            dataIndex: 'company',
            key: 'key',
            render: (text) => <a>{text}</a>
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'key'
        },
        {
            key: 'key',
            title: 'Action',
            render: () => {
                return (
                    <>
                        <CheckCircleOutlined
                            style={{
                                backgroundColor: "rgba(30,136,229,.5)",
                                color: "white",
                                padding: "5px",
                                borderRadius: "5px"
                            }} />

                        <DeleteOutlined
                            style={{
                                backgroundColor: "red",
                                color: "white",
                                marginLeft: 12,
                                padding: "5px",
                                borderRadius: "5px"
                            }}
                        />
                    </>
                )
            }
        }];

    const [dataSource, setDataSource] = useState([
        {
            key: '1',
            company: 'Virtusa',
            jobPosition: 'Software Engineer',
            date: 'December 15, 2022'
        },
        {
            key: '2',
            company: 'Virtusa',
            jobPosition: 'Software Engineer',
            date: 'December 15, 2022'
        },
        {
            key: '3',
            company: 'Virtusa',
            jobPosition: 'Software Engineer',
            date: 'December 15, 2022'
        },
        {
            key: '4',
            company: 'Virtusa',
            jobPosition: 'Software Engineer',
            date: 'December 15, 2022'
        },

    ]);

    const onAddJobs = () => {
        const newJob = {
            company: 'Virtusa',
            jobPosition: 'Software Engineer',
            date: 'December 15, 2023'
        }
        setDataSource(pre => {
            return [...pre, newJob]
        })
    }

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
                        <Col span={6} style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Title style={{
                                fontSize: '25px',
                                fontWeight: 600,
                            }}>
                                SAVED JOBS
                            </Title>
                        </Col>
                        <Col span={6} offset={6} style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Search placeholder="Search company name" enterButton />
                        </Col>

                        <Col span={6} style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Button type="primary" style={{
                                backgroundColor: 'rgba(30,136,229,.7)'
                            }} onClick={onAddJobs} >+ Add Job</Button>
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



export default SavedJobs;

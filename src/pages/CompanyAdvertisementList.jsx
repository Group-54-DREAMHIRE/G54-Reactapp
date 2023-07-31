import { Table, Typography, Button, Row, Col, Divider, Input, Space, Tag } from 'antd';
import { useState, useEffect } from 'react';
import { EditOutlined, DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { pageanimation } from '../assets/animations/pageanimation';

const { Title } = Typography;
const { Search } = Input;

function AdvertisementList() {
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const columns = [
        {
            title: 'Job Position',
            dataIndex: 'jobPosition',
            key: 'jobPosition',
            // render: (text, record) => (
            //     <>
            //         <b>{text}</b>
            //         <br />
            //         {record.tags.map((tag, index) => (
            //             <Tag key={index} color="blue">{tag}</Tag>
            //         ))}
            //     </>
            // )
        },
        {
            title: 'No of Vacancies',
            dataIndex: 'vacancies',
            key: 'vacancies',
        },
        {
            title: 'Closing Date',
            dataIndex: 'cdate',
            key: 'cdate'
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status'
        },
        {
            key: 'action',
            title: 'Action',
            render: () => {
                return (
                    <>
                        <EyeOutlined
                            style={{
                                backgroundColor: "green",
                                color: "white",
                                marginLeft: 12,
                                padding: "5px",
                                borderRadius: "5px"
                            }} />
                        <EditOutlined
                            style={{
                                backgroundColor: "rgba(30,136,229,.5)",
                                color: "white",
                                marginLeft: 10,
                                padding: "5px",
                                borderRadius: "5px"
                            }} />
                        <DeleteOutlined
                            style={{
                                backgroundColor: "red",
                                color: "white",
                                marginLeft: 10,
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
            jobPosition: 'Software Engineer',
            vacancies: 10,
            cdate: 'December 15, 2022',
            status: 'pending',
            tags: ['Tag1','tag2']
        },
        {
            key: '2',
            jobPosition: 'Software Engineer',
            vacancies: 10,
            cdate: 'December 15, 2022',
            status: 'pending',
        },
        {
            key: '3',
            jobPosition: 'Software Engineer',
            vacancies: 10,
            cdate: 'December 15, 2022',
            status: 'pending',
        },
        {
            key: '4',
            jobPosition: 'Software Engineer',
            vacancies: 10,
            cdate: 'December 15, 2022',
            status: 'pending',
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
                                Advertisement List
                            </Title>
                        </Col>
                        <Col span={6}>
                        </Col>

                        <Col span={6} style={{
                            display: 'flex',
                            justifyContent: 'right',
                            alignItems: 'center'
                        }}>
                            <Button type="primary" 
                             >+ Add Job</Button>
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



export default AdvertisementList;

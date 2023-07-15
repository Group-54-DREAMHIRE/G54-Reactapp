import React, { useState } from 'react';
import { UserOutlined, BellFilled, DownOutlined } from '@ant-design/icons';
import { BsFillChatTextFill } from "react-icons/bs";
import {
    Row, ConfigProvider, Col, Avatar, Menu,
    Badge, Button, Space, Dropdown, Spin,
} from 'antd';
import logo from '../../assets/images/logo.png'
import { navitems } from './NavbarData';
import { useNavigate } from 'react-router-dom';
import Login from '../../pages/Login';


const items = [
    {
        label: 'Dula',
        key: '/',
    },
    {
        label: 'Dulanjana',
        key: '/about',
    },
    {
        label: 'Dulanjana',
        key: '/contact',
    },
    {
        label: 'Dulanjana',
        key: '/profile',
    },
    {
        label: 'Dulanjana',
        key: '/faq',
    },


];

const Navbar = () => {
    const navigate = useNavigate();
    const [isSpin, setIsSpin] = useState(false);
    const onClick = ({ key }) => {
        setIsSpin(true);
        setTimeout(() => {
            navigate(key);
            setIsSpin(false);
            clearTimeout();
        }, 500, 1000);
    };
    const [open, setOpen] = useState(false);
    const showModal = () => {
        setOpen(true);
    };
    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
      };

    const handleOk = () => {
          setOpen(false);
      };
    return (
        <>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: 'rgba(25,103,210,255)',
                    },
                }}>
                <Spin spinning={isSpin}>
                    <Row align='middle' style={{
                        height: '13vh',
                        width: '100%',
                        background: 'white'
                    }}>
                        <Col span={24}>
                            <Row justify='space-between' align='middle'>
                                <Col span={4} >
                                    <img src={logo} alt="logo" style={{
                                        width: '100%'
                                    }} />
                                </Col>

                                <Col span={20}>
                                    <Row justify='space-around'
                                        align='middle'>
                                        <Col >
                                            <Row align='middle'
                                                justify='space-between' >
                                                <Col span={24}>
                                                    <Menu items={navitems}
                                                        mode='horizontal'
                                                        onClick={onClick}
                                                    >
                                                    </Menu>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col >
                                            <Row justify='space-around' align='middle' gutter={20}>
                                                <Col>
                                                    <   Badge count={3}
                                                        size='small'>
                                                        <span
                                                            style={{
                                                                fontSize: '22px'
                                                            }}
                                                        ><BsFillChatTextFill /></span>
                                                    </Badge>
                                                </Col>
                                                <Col>
                                                    <Badge count={3}
                                                        size='small'>
                                                        <span
                                                            style={{
                                                                fontSize: '25px'
                                                            }}
                                                        ><BellFilled /></span>
                                                    </Badge>
                                                </Col>
                                                <Col>
                                                    <Avatar
                                                        size={53}
                                                        icon={<UserOutlined />} />
                                                </Col>
                                                <Col>
                                                    <Dropdown
                                                        menu={{
                                                            items,
                                                            onClick,
                                                        }}>
                                                        <Space>
                                                            Dulanjana
                                                            <DownOutlined />
                                                        </Space>
                                                    </Dropdown>
                                                </Col>
                                                <Col>
                                                    <Button type='primary'
                                                        onClick={showModal}>
                                                        Sign In
                                                    </Button>
                                                </Col>
                                                <Col>
                                                    <Button type='primary'
                                                        onClick={showModal}>
                                                        Sign up
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Login open={open} handleCancel={handleCancel} handleOk={handleOk}/>
                </Spin>
            </ConfigProvider>
        </>
    )
}

export default Navbar

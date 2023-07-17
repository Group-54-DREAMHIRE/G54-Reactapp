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
import SignIn from '../../pages/SignIn';
import SignUp from '../../pages/SignUp';


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
    const [signIn, setSignIn] = useState(false);
    const [signUp, setSignUp] = useState(false);
    const showSignIn = () => {
        setSignIn(true);
    };
    const cancelSignIn = () => {
        setSignIn(false);
      };

    const showSignUp = () => {
        setSignUp(true);
    };
    const cancelSignUp = () => {
        setSignUp(false);
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
                    <Row align='middle' justify='center' style={{
                        height: '13vh',
                        width: '100%',
                        background: '#F2FAFA',
                        // boxShadow: '1px 0px 8px #aaaaaa',
                    }}>
                        <Col 
                        span={20} style={{background: 'red',
                                            padding: '7px 0px 7px 20px',
                                            borderRadius: '45px',
                                            backgroundColor: 'rgba(242, 250, 250, 1)',
                                            boxShadow: '0px 24px 83px 0px rgba(0, 0, 0, 0.10), 0px 5px 18px 0px rgba(0, 0, 0, 0.06), 0px 2px 6px 0px rgba(0, 0, 0, 0.04)',}}>
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
                                                    <Menu 
                                                        style={{ backgroundColor: 'rgba(242, 250, 250, 1)',}}
                                                        items={navitems}
                                                        mode='horizontal'
                                                        onClick={onClick}
                                                    >
                                                    </Menu>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col >
                                            <Row justify='space-between' align='middle' gutter={20}>
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
                                                    <Badge count={5}
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
                                                        size={45}
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
                                                {/* <Col>
                                                    <Button type='primary'
                                                    shape='round'
                                                        onClick={showSignIn}>
                                                        Sign In
                                                    </Button>
                                                </Col>
                                                <Col>
                                                    <Button type='primary'
                                                             shape='round'
                                                      onClick={showSignUp}>
                                                        Sign up
                                                    </Button>
                                                </Col> */}
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <SignIn signIn={signIn} cancelSignIn={cancelSignIn}/>
                    <SignUp signUp={signUp} cancelSignUp={cancelSignUp}/> 
                </Spin>
            </ConfigProvider>
        </>
    )
}

export default Navbar

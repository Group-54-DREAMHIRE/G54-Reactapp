import { Button, Menu, Row, Col, Switch, Avatar,  ConfigProvider } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    DashboardFilled,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    MessageFilled,
    SettingFilled,
    SketchSquareFilled,
    LockFilled,
    PushpinFilled,
    CrownFilled,
} from '@ant-design/icons';


const items = [
    {
        label: 'Dashboard',
        key: '/dashboard',
        icon: <DashboardFilled />,
    },
    {
        label: 'Posts',
        key: '/posts',
        icon: <PushpinFilled />,
    }, {
        label: 'Media',
        key: '/media',
        icon: <CrownFilled />,
    },
    {
        label: 'Comments',
        key: '/comments',
        icon: <MessageFilled />,
    },
    {
        label: 'Appearance',
        key: '/appearence',
        icon: <SketchSquareFilled />,
    },
    {
        label: 'Settings',
        key: '/settings',
        icon: <SettingFilled />,
        children: [
            {
                label: 'ChangePassword',
                key: '/changepassword',
                icon: <LockFilled />,
            },

        ]
    }
];
const Sidebar = () => {

    const [theme, setTheme] = useState('light');

    const changeTheme = (value) => {
        setTheme(value ? 'dark' : 'light');

    };
    const navigate = useNavigate();
    const onClick = ({ key }) => {
        navigate(key);
    };

    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    return (
        <>
         <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: 'rgba(25,103,210,255)',
                    },
                }}>
            <Row style={{
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 'revert-layer',
                position: 'sticky',
                background: 'white',
                top: '13vh',
                minWidth: collapsed ? '60px' : "245px",
                left: '0',
                height: '87vh',
                boxShadow: '1px 0px 8px #aaaaaa',
            }} className='sidebar-main-w'>
                <Col span={24}>
                    <Row style={{
                        display: 'flex',
                        justifyContent: collapsed ? 'center' : 'end',
                    }}>
                        <Col span={24} >
                            <Row >
                                <Button

                                    onClick={toggleCollapsed}
                                    style={{
                                        marginBottom: 16,
                                    }}
                                >
                                    {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                                </Button>
                            </Row>
                        </Col>

                    </Row>
                    <Row>
                        <Col span={24}>
                            <Menu
                                style={{width: '100%',
                                        height: '100%' }}      
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                mode="inline"
                                inlineCollapsed={collapsed}
                                items={items}
                                onClick={onClick} />
                        </Col>
                    </Row>
                    <Row justify='center' style={{ marginTop: '15px' }}>
                        <Switch
                            checked={theme === 'dark'}
                            onChange={changeTheme}
                            checkedChildren="Dark"
                            unCheckedChildren="Light" />
                    </Row>
                </Col>
            </Row>
            </ConfigProvider>
        </>
    )
}

export default Sidebar

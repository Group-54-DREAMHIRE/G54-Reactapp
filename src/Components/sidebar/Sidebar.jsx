import { Button, Menu, Row, Col, Switch,ConfigProvider } from 'antd';
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
    const toggleCollapsed = (e) => {
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
                position: 'sticky',
                backgroundColor: 'white',
                top: '12vh',
                minWidth: collapsed ? '60px' : "245px",
                left: '0',
                height: '88vh',
                boxShadow: '0 10px 8px  rgba(30,136,229,.4)',
            //     boxShadow:
            //   "0px 24px 83px 0px rgba(0, 0, 0, 0.10), 0px 5px 18px 0px rgba(0, 0, 0, 0.06), 0px 2px 6px 0px rgba(0, 0, 0, 0.04)",
          
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
                    <Row > 
                        <Col span={24} >
                            <Menu
                                style={{width: '100%',
                                        height: '100%',backgroundColor: 'white',
                                       }}      
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                mode="inline"
                                inlineCollapsed={collapsed}
                                items={items}
                                onClick={onClick} />
                        </Col>
                    </Row>
                </Col>
            </Row>
            </ConfigProvider>
        </>
    )
}

export default Sidebar

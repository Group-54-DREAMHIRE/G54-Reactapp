import { Button, Menu, Row, Col, Switch, Avatar } from 'antd';
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
            <Row style={{
                display: 'flex',
                flexDirection: 'column',
                paddingLeft: '7px',
                boxShadow: 'revert-layer',
                position: 'sticky',
                background: 'white',
                top: '13vh',
                width: collapsed ? '60px' : "300px",
                left: '0',
                height: '87vh'
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

        </>
    )
}

export default Sidebar

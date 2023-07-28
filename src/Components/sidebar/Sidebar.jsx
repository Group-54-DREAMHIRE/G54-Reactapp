import { Button, Menu, Row, Col,ConfigProvider } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';

import { useDispatch } from 'react-redux';
import { logout } from '../../store/auth/userSlice';
import { sidebarItem } from '../../store/demo/sidebarItems';
const Sidebar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
   
    const onClick = ({ key }) => {
        if(key=="logout"){
            dispatch(logout());
            localStorage.clear();
            navigate("/");
            window.location.reload();
            console.log("Log out Succesfully!")

        }
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
                                mode="inline"
                                inlineCollapsed={collapsed}
                                items={sidebarItem}
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

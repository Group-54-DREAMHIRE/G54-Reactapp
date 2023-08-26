import { Button, Menu, Row, Col,ConfigProvider } from 'antd';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';

import { useDispatch } from 'react-redux';
import { logout } from '../../store/auth/userSlice';
import  {adminSidebar} from '../../store/demo/adminSidebar';
import {candidateSidebar} from '../../store/demo/candidateSidebar';
import { companySidebar } from '../../store/demo/companySidebar';
export default function Sidebar (){

    const [sidebar, setSidebar] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userType = localStorage.getItem("USERTYPE");
   
    const onClick = ({ key }) => {
        if(key === "logout"){
            navigate("/");
            console.log("LOgout")
            dispatch(logout());
            localStorage.clear();
            console.log("paka")
            window.location.reload();
            
        }else{
            navigate(key);
        }
        
    };

    const [collapsed, setCollapsed] = useState(true);
    const toggleCollapsed = (e) => {
        setCollapsed(!collapsed);
    };
    useEffect(() => {
        if(userType==="candidate"){
            setSidebar(candidateSidebar);
        }else if(userType==="company"){
            setSidebar(companySidebar);
        }else if(userType==="admin"){
            setSidebar(adminSidebar);
        }
    }, []);
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
                top: '12vh',
                backgroundColor: 'white',
                minWidth: collapsed ? '60px' : "245px",
                left: '0',
                 height: '88vh'
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
                                items={sidebar}
                                onClick={onClick} />
                                
                        </Col>
                    </Row>
                </Col>
            </Row>
            </ConfigProvider>
        </>
    )
}


import { NavLink } from 'react-router-dom';
import { useState } from 'react'
import logo from '../../assets/images/logo.png';
import { navitems } from './NavData';
import dula from '../../assets/images/dula.JPG'
import { IoNotificationsOutline } from "react-icons/io5";
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';

function Navbar() {

    return (
        <>
            <div className="navbar-main-con-w">
                <div className="logo-con-w">
                    <img src={logo} alt="logo" />
                </div>
                <div className="menu-item-con-w">
                    <div className="menu-items-w">
                        {navitems.map((item) => {
                            return (
                                <NavLink className="nav-link"  to={item.path}>
                                    {item.name}
                                </NavLink>
                            )
                        })}
                    </div>
                    <div className="dp-name-con-w">
                    <IoNotificationsOutline className='noti-icon-w'/>
                        <div className="dp-con-w">
                            {/* <img src={dula} alt="" /> */}
                        </div>
                        <span>Dulanjana</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar

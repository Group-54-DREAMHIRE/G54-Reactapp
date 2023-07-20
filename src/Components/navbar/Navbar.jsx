import React, { useState } from "react";
import { UserOutlined, BellFilled, DownOutlined } from "@ant-design/icons";
import { BsFillChatTextFill } from "react-icons/bs";
import {
  Row,
  ConfigProvider,
  Col,
  Avatar,
  Menu,
  Badge,
  Button,
  Space,
  Dropdown,
  Spin,
} from "antd";
import logo from "../../assets/images/logo.png";
import { navitems } from "./NavbarData";
import { useNavigate } from "react-router-dom";
import SignIn from "../../pages/SignIn";
import SignUp from "../../pages/SignUp";

const items = [
  {
    label: "Dula",
    key: "/",
  },
  {
    label: "Dulanjana",
    key: "/about",
  },
  {
    label: "Dulanjana",
    key: "/contact",
  },
  {
    label: "Dulanjana",
    key: "/profile",
  },
  {
    label: "Dulanjana",
    key: "/faq",
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  const onClick = ({ key }) => {
    setTimeout(
      () => {
        navigate(key);
        clearTimeout();
      },
      500,
      1000
    );
  };
  return (
    <>
      <Row justify='center'>
        <Col
          span={20}
          style={{
            background: "red",
            padding: "7px 0px 7px 20px",
            borderRadius: "45px",
            backgroundColor: "rgba(242, 250, 250, 1)",
            boxShadow:
              "0px 24px 83px 0px rgba(0, 0, 0, 0.10), 0px 5px 18px 0px rgba(0, 0, 0, 0.06), 0px 2px 6px 0px rgba(0, 0, 0, 0.04)",
          }}
        >
          <Row justify="space-between" align="middle">
            <Col span={4}>
              <img
                src={logo}
                alt="logo"
                style={{
                  width: "100%",
                }}
              />
            </Col>

            <Col span={20}>
              <Row justify="space-around" align="middle">
                <Col>
                  <Row align="middle" justify="space-between">
                    <Col span={24}>
                      <Menu
                        style={{ backgroundColor: "rgba(242, 250, 250, 1)" }}
                        items={navitems}
                        mode="horizontal"
                        onClick={onClick}
                      ></Menu>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row justify="space-between" align="middle" gutter={20}>
                    <Col>
                      <Badge count={3} size="small">
                        <span
                          style={{
                            fontSize: "22px",
                          }}
                        >
                          <BsFillChatTextFill />
                        </span>
                      </Badge>
                    </Col>
                    <Col>
                      <Badge count={5} size="small">
                        <span
                          style={{
                            fontSize: "25px",
                          }}
                        >
                          <BellFilled />
                        </span>
                      </Badge>
                    </Col>
                    <Col>
                      <Avatar size={45} icon={<UserOutlined />} />
                    </Col>
                    <Col>
                      <Dropdown
                        menu={{
                          items,
                          onClick,
                        }}
                      >
                        <Space>
                          Dulanjana
                          <DownOutlined />
                        </Space>
                      </Dropdown>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Navbar;

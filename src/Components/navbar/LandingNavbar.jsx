import SignIn from "../../pages/SignIn";
import SignUp from "../../pages/SignUp";

import logo from "../../assets/images/logo.png";

import React, { useState } from "react";
import { Link } from "react-scroll";

import { Row, Col, Button } from "antd";
import { useDispatch } from "react-redux";
import {  openSignIn, openSignUp } from "../../store/models/modelsSlice";
import { useNavigate } from "react-router-dom";

const navitems = [
  {
    label: "Home",
    key: "1home",
  },
  {
    label: "About Us",
    key: "2about",
  },
  {
    label: "Jobs",
    key: "3blog",
  },
  {
    label: "Pricing",
    key: "4pricing",
  },
  {
    label: "Contact Us",
    key: "5contact",
  },
];

const LandingNavbar = () => {
  const dispatch = useDispatch();
  const navigete = useNavigate();
  return (
    <>
      <Row
        className="landing-nav-w"
        align="middle"
        justify="center"
        style={{
          position: "sticky",
          top: "0",
          height: "13vh",
          background: "#F2FAFA",
          zIndex: "2",
        }}
      >
        <Col
          span={20}
          style={{
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
                <Col span={14}>
                  <Row justify="center" className="nav-menu-w">
                    {navitems.map((item) => {
                      return (
                        <Link
                          key={item.index}
                          to={item.key}
                          smooth={true}
                          duration={500}
                          activeStyle={{ backgroundColor: "red !important" }}
                          style={{
                            margin: "0 20px 0",
                            color: "rgb(103,103,103)",
                            fontSize: "medium",
                          }}
                        >
                          {item.label}
                        </Link>
                      );
                    })}
                  </Row>
                </Col>
                <Col span={6}>
                  <Row align="middle" gutter={20}>
                    <Col>
                      <Button  shape="round" style={{border: '0', backgroundColor: '#F2FAFA'}} onClick={()=> navigete("/login")}>
                        Sign In
                      </Button>
                    </Col>
                    <Col>
                      <Button  shape="round" style={{border: '1px solid black', backgroundColor: '#F2FAFA'}} onClick={()=>dispatch(openSignUp())}>
                        Sign up
                      </Button>
                    </Col>
                    <Col>
                      {/* <Switch
                        checked={theme === "dark"}
                        onChange={changeTheme}
                        checkedChildren="Dark"
                        unCheckedChildren="Light"
                      /> */}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <SignIn/>
      <SignUp/>
    </>
  );
};

export default LandingNavbar;

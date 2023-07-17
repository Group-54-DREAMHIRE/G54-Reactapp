import SignIn from "../../pages/SignIn";
import SignUp from "../../pages/SignUp";

import logo from "../../assets/images/logo.png";

import React, { useState } from "react";
import { Link } from "react-scroll";


import { Row, ConfigProvider, Col, Button, Menu } from "antd";





const navitems = [
  {
    label: "Home",
    key: "1",
  },
  {
    label: "Blogs",
    key: "2",
  },
  {
    label: "About",
    key: "3",
  },
  {
    label: "Pricing",
    key: "4",
  },
  {
    label: "Contact Us",
    key: "5",
  },
];

const LandingNavbar = ({ onNavigate,sectionID }) => {
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
            colorPrimary: "rgb(30,136,229)",},}}>
        <Row
          className="landing-nav-w"
          align="middle"
          justify="center"
          style={{
            position: 'sticky',
            top: '0',
            height: '13vh',
            background: "#F2FAFA",
            zIndex: '2',
            }}>
          <Col
            span={20}
            style={{
              padding: "7px 0px 7px 20px",
              borderRadius: "45px",
              backgroundColor: "rgba(242, 250, 250, 1)",
              boxShadow:
                "0px 24px 83px 0px rgba(0, 0, 0, 0.10), 0px 5px 18px 0px rgba(0, 0, 0, 0.06), 0px 2px 6px 0px rgba(0, 0, 0, 0.04)",}}>
            <Row justify="space-between" align="middle">
              <Col span={4}>
                <img
                  src={logo}
                  alt="logo"
                  style={{
                    width: "100%",}}/>
              </Col>
              <Col span={20}>
                <Row justify="space-around" align="middle">
                  <Col span={14}>
                    <Row justify="center">
                      <Link to={sectionID}>
                        <Menu
                          style={{
                            whiteSpace: "nowrap",
                            background: "#F2FAFA",}}
                          items={navitems}
                          mode="horizontal"
                          inlineIndent="100"
                          onClick={onNavigate}/>
                      </Link>
                    </Row>
                  </Col>
                  <Col span={6}>
                    <Row align="middle" gutter={20}>
                      <Col>
                        <Button
                          type="primary"
                          shape="round"
                          onClick={showSignIn}>
                          Sign In
                        </Button>
                      </Col>
                      <Col>
                        <Button
                          type="primary"
                          shape="round"
                          onClick={showSignUp}>
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
        <SignIn signIn={signIn} cancelSignIn={cancelSignIn} />
        <SignUp signUp={signUp} cancelSignUp={cancelSignUp} />
      </ConfigProvider>
    </>
  );
};

export default LandingNavbar;

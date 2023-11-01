import dula from "../../assets/images/dula.jpeg";
import React, { useState } from "react";
import { Layout, Row, Col, Typography, Divider, Image, Button, Space } from "antd";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import { FiMapPin, FiEdit } from "react-icons/fi";
import CustomContentModel from "../../Components/candidate/CustomContentModel";
import { useDispatch } from "react-redux";
import { openCustomContent } from "../../store/models/modelsSlice";
import ShowContent from "../../Components/candidate/ShowContent";

const { Content } = Layout;
const { Title, Text, Link } = Typography;

const Resume = ({ viewPersonalData }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Row
        justify="space-between"
        align="middle"
        style={{
          padding: "40px",
          transform: "scale(0.75)",
          transformOrigin: "top left",
          width: "800px",
        }}
      >
        <Col span={24}>
          <Row justify="space-between">
            <Col span={18}>
              <Row gutter={[20, 10]}>
                {viewPersonalData.name && (
                  <Col span={24}>
                    <Title level={2} style={{ margin: "0" }}>
                      {viewPersonalData.name}
                    </Title>
                  </Col>
                )}
                {viewPersonalData.title && (
                  <Col span={24}>
                    <Title level={4} style={{ margin: "0" }}>
                      {viewPersonalData.title}
                    </Title>
                  </Col>
                )}
                {viewPersonalData.email && (
                  <Col>
                    <Text>
                      <MailOutlined style={{ marginRight: "7px" }} />
                      {viewPersonalData.email}
                    </Text>
                  </Col>
                )}
                {viewPersonalData.phone && (
                  <Col>
                    <Text>
                      <PhoneOutlined style={{ marginRight: "7px" }} />
                      {viewPersonalData.phone}
                    </Text>
                  </Col>
                )}
                {viewPersonalData.address && (
                  <Col>
                    <Text>
                      <FiMapPin style={{ marginRight: "7px" }} />
                      {viewPersonalData.address}
                    </Text>
                  </Col>
                )}
                {viewPersonalData.linkedInLabel && (
                  <Col>
                    <Link href={viewPersonalData.linkedIn} target="_blank">
                      <Text>
                        <LinkedinOutlined style={{ marginRight: "7px" }} />
                        {viewPersonalData.linkedInLabel}
                      </Text>
                    </Link>
                  </Col>
                )}
                {viewPersonalData.githubLabel && (
                  <Col>
                    <Link href={viewPersonalData.github} target="_blank">
                      <Text>
                        <GithubOutlined style={{ marginRight: "5px" }} />
                        {viewPersonalData.githubLabel}
                      </Text>
                    </Link>
                  </Col>
                )}
              </Row>
            </Col>

            {viewPersonalData.profilePicture && (
              <Col>
                <Image
                  src={viewPersonalData.profilePicture}
                  alt="Profile_Picture"
                  style={{
                    borderRadius: "20px",
                    width: "175px",
                    height: "150px",
                  }}
                />
              </Col>
            )}
          </Row>
            {viewPersonalData.contentData&& (
              viewPersonalData.contentData.map((item)=>{
                const data = viewPersonalData.contentData;
                return(
                  <ShowContent item={item} contentData={viewPersonalData.contentData}/>
                )
              })
            )}
        </Col>
      </Row>
    </>
  );
};

export default Resume;


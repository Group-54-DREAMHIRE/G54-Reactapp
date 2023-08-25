import React from "react";
import {
  Row,
  Col,
  Form,
  Input,
  Button,
  Avatar,
  Divider,
  Upload,
  Typography,
  Image,
} from "antd";
import { UserOutlined, EditOutlined, UploadOutlined } from "@ant-design/icons";
import danuka from "../../../src/assets/images/danuka.jpg";
import { motion } from "framer-motion";
import { pageanimation } from "../../../src/assets/animations/pageanimation";
const { Title } = Typography;

export default function AdminProfile() {
  const onFinish = (values) => {
    console.log("Received values:", values);
  };

  return (
    <>
      <motion.div
        variants={pageanimation}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.5 }}
      >
        <Row>
          <Image preview={false} width={175} height={150} src={danuka} />
        </Row>
        <Row justify="start">
          <Col span={22}>
            <Title level={2} style={{ margin: "30px 0 5px 0" }}>
              BASIC INFORMATION
            </Title>
            <hr style={{ border: "2px solid rgba(0,0,0,.4)" }} />
          </Col>
        </Row>
        <Row justify="space-between" gutter={[0, 35]}>
          <Col span={11}>
            <Title level={4} style={{ marginBottom: "0" }}>
              Your Name:
            </Title>
            <Title level={5} style={{ marginTop: "6px" }}>
              Dhanuka Iroshan
            </Title>
          </Col>
          <Col span={11}>
            <Title level={4} style={{ marginBottom: "0" }}>
              Email:
            </Title>
            <Title level={5} style={{ marginTop: "6px" }}>
              danukairoshan@gmail.com
            </Title>
          </Col>
        </Row>
      </motion.div>
    </>
  );
}

// <div className="D_Admin_Profile_edit-profile-form">
//       <div className="D_Admin_Profile_form-header">
//         <div className="D_Admin_Profile_title">Edit Profile</div>
//         <img src={ProfileImage} alt="Profile Picture" className="D_Admin_Profile_profile-picture" />
//         {/* <Avatar size={64} icon={<UserOutlined />} className="D_Admin_Profile_profile-picture" /> */}

//         {/* <Upload
//           name="avatar"
//           showUploadList={false}
//           beforeUpload={() => false}
//         >
//           <img src={ProfileImage} alt="Profile Picture" className="profile-picture" />
//           <div className="upload-overlay">
//             <UploadOutlined />
//             <div className="upload-text">Upload Photo</div>
//           </div>
//         </Upload> */}

//       </div>
//       <Form onFinish={onFinish} layout="vertical">
//         <Row gutter={[16, 16]}>
//           <Col span={12}>
//             <Form.Item label="First Name" name="firstName">
//               <Input className='D_Admin_Profile_input-field' suffix={<EditOutlined />}/>
//             </Form.Item>
//           </Col>
//           <Col span={12}>
//             <Form.Item label="Last Name" name="lastName">
//               <Input className='D_Admin_Profile_input-field'suffix={<EditOutlined />}/>
//             </Form.Item>
//           </Col>
//         </Row>
//         <Form.Item label="Email" name="email">
//           <Input disabled className='D_Admin_Profile_input-field'/>
//         </Form.Item>
//         <Form.Item label="Address" name="address">
//           <Input className='D_Admin_Profile_input-field' suffix={<EditOutlined />}/>
//         </Form.Item>
//         <Form.Item label="Contact Number" name="contactNumber">
//           <Input className='D_Admin_Profile_input-field' suffix={<EditOutlined />}/>
//         </Form.Item>
//         <Form.Item label="Password" name="password">
//           <Input.Password disabled className='D_Admin_Profile_input-field'/>
//         </Form.Item>
//         <Row justify="end">
//           <Button type="default">Cancel</Button>
//           <Button type="primary" htmlType="submit" className="D_Admin_Profile_save-button">
//             Save
//           </Button>
//         </Row>
//         <Divider />
//         <div className="D_Admin_Profile_change-password-title">Change Password</div>
//         <Form.Item label="Password" name="currentPassword">
//           <Input.Password className='D_Admin_Profile_input-field'/>
//         </Form.Item>
//         <Form.Item label="New Password" name="newPassword">
//           <Input.Password className='D_Admin_Profile_input-field'/>
//         </Form.Item>
//         <Form.Item label="Confirm New Password" name="confirmNewPassword">
//           <Input.Password className='D_Admin_Profile_input-field'/>
//         </Form.Item>
//         <Row justify="end">
//           <Button type="primary" className="D_Admin_Profile_save-button">
//             Save
//           </Button>
//         </Row>
//       </Form>
//     </div>

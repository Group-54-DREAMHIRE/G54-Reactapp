import React, { useState } from 'react';
import { Row, Col, Upload, Form, Input, Button, Card, Radio, Typography, Space, Image } from 'antd';
import ImgCrop from "antd-img-crop";
import {InboxOutlined} from '@ant-design/icons';
import '../../assets/styles/CompanyRegistration.scss';
const { Title } = Typography;
const CompanyRegistration = () => {
    const [form] = Form.useForm();

    const pricingPlans = [
        { name: 'Basic', price: '\$10/month', features: '10 job posting,Job displayed for 15 days,Premium Support 24/7' },
        { name: 'Standard', price: '\$20/month', features: '20 job posting,Job displayed for 30 days,Premium Support 24/7' },
        { name: 'Premium', price: '\$30/month', features: '30 job posting,Job displayed for 60 days,Premium Support 24/7' },
    ];

    const handleSubmit = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <div className="company-registration-n">
            <Title level={2} style={{ margin: '20px 0' }}>Company Information</Title>

            <Form form={form} layout="vertical" onFinish={handleSubmit}>
                <Row>
                    <Space>
                        <Form.Item name="companyName" label="Company Name" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="address" label="Address" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                    </Space>
                </Row>

                <Row>
                    <Space>
                        <Form.Item name="contactPerson" label="Contact Person" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="contactEmail" label="Contact Email" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                    </Space>
                </Row>

                <Row>
                    <Space>
                        <Form.Item name="contactPhone" label="Contact Phone" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="website" label="Website">
                            <Input />
                        </Form.Item>
                    </Space>
                </Row>
                <Row>
                    <Form.Item name="description" label="Company Description">
                        <Input.TextArea />
                    </Form.Item>
                </Row>
                <Row>
                    <Form.Item name="businessReport" label="Business Report" valuePropName="fileList" getValueFromEvent={(e) => e.fileList} rules={[{ required: true, message: 'Please upload a business report' }]}>
                        <Upload.Dragger name="files" multiple={false}>
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">Click or drag file to this area to upload</p>
                            <p className="ant-upload-hint">Support for a single or bulk upload.<br />Strictly prohibit from uploading company data or other band files</p>
                        </Upload.Dragger>
                    </Form.Item>
                </Row>
                <Row>
                    <Form.Item name="pricingPlan" label="Pricing Plan" rules={[{ required: true }]}>
                        <Radio.Group buttonStyle="solid" className="pricing-cards">
                            {pricingPlans.map((plan) => (
                                <Radio value={plan.name} key={plan.name}>
                                    <Card title={plan.name} className="plan-card">
                                        <p className="plan-price">{plan.price}</p>
                                        <ul className="plan-features">
                                            {plan.features.split(',').map((feature, index) => (
                                                <li key={index}>{feature.trim()}</li>
                                            ))}
                                        </ul>
                                    </Card>
                                </Radio>
                            ))}
                        </Radio.Group>
                    </Form.Item>
                </Row>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div >
    );
};

export default CompanyRegistration;

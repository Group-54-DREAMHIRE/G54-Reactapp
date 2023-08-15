import React, { useState } from 'react';
import { Row, Col, Upload, Form, Input, Button, Card, Radio, Typography, Space, Image, Divider } from 'antd';
import ImgCrop from "antd-img-crop";
import { InboxOutlined } from '@ant-design/icons';
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
        <>
            <div className="company-registration-n">
                <Row>
                    <Col span={24}>
                        <Form form={form} layout="vertical" onFinish={handleSubmit}>
                            <Row>
                                <Col span={12} style={{
                                    display: 'flex',
                                    justifyContent: 'left',
                                    alignItems: 'center',
                                }}>
                                    <Title style={{
                                        fontSize: '25px',
                                        fontWeight: 600,
                                    }}>
                                        COMPANY REGISTRATION 
                                    </Title>
                                </Col>
                                <Col span={6}>
                                </Col>
                                <Col span={6}>
                                </Col>

                            </Row>

                            <Divider />
                            <Row gutter={20}>
                                <Col span={12}>
                                    <Form.Item name="companyName" label="Company Name" rules={[{ required: true }]}>
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item name="address" label="Address" rules={[{ required: true }]}>
                                        <Input />
                                    </Form.Item>
                                </Col>

                            </Row>

                            <Row gutter={20}>
                                <Col span={12}>
                                    <Form.Item name="contactPerson" label="Contact Person" rules={[{ required: true }]}>
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item name="contactEmail" label="Contact Email" rules={[{ required: true }]}>
                                        <Input />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Row gutter={20}>
                                <Col span={12}>
                                    <Form.Item name="contactPhone" label="Contact Phone" rules={[{ required: true }]}>
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item name="website" label="Website">
                                        <Input />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <Form.Item name="description" label="Company Description">
                                        <Input.TextArea />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <Form.Item name="businessReport" label="Business Report" valuePropName="fileList" getValueFromEvent={(e) => e.fileList} rules={[{ required: true, message: 'Please upload a business report' }]}>
                                        <Upload.Dragger name="files" multiple={false}>
                                            <p className="ant-upload-drag-icon">
                                                <InboxOutlined />
                                            </p>
                                            <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                            <p className="ant-upload-hint">Support for a single or bulk upload.<br />Strictly prohibit from uploading company data or other band files</p>
                                        </Upload.Dragger>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <Form.Item name="pricingPlan" label="Pricing Plan" rules={[{ required: true}]} >
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
                                </Col>
                            </Row>
                            <Row>
                                <Col span={12}>
                                    <Form.Item>
                                        <Button type="primary" htmlType="submit">
                                            Submit
                                        </Button>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </div >
        </>
    );
};

export default CompanyRegistration;

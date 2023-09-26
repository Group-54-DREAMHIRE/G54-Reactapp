
import React,{useState} from 'react';
import { Card, Row, Col, Typography, Tag ,Divider,Select } from 'antd';
import { UserOutlined, DollarCircleOutlined, TeamOutlined } from '@ant-design/icons';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const { Title, Text } = Typography;
const { Option } = Select;

const data = [
  { time: 'Jan', income: 1000 },
  { time: 'Feb', income: 1500 },
  { time: 'Mar', income: 1200 },
  { time: 'Api', income: 700 },
  { time: 'May', income: 400 },
  { time: 'Jun', income: 1200 },
  { time: 'Jul', income: 1500 },
  { time: 'Aug', income: 2100 },
  { time: 'Sep', income: 1700 },
  // ... add more data
];

export default function AdminDashboard() {

  const [timeFilter, setTimeFilter] = useState('monthly');

  const handleTimeFilterChange = (value) => {
    setTimeFilter(value);
  };

  return (
    <>
    <div className="D_Admin_Dashboard_dashboard" style={{padding: '5%'}}> 
      <div className="D_Admin_Dashboard_greeting">
        <Title level={2}>Hello Dhanuka!</Title>
        <Text>It's good to see you again</Text>
      </div>
      <Row gutter={[16,16]} className="D_Admin_Dashboard_card-row">
        
        <Col span={8}>
          <Card className="D_Admin_Dashboard_dashboard-card" hoverable>
            <div className="D_Admin_Dashboard_card-icon">
              <UserOutlined />
            </div>
            <div className="D_Admin_Dashboard_card-content">
              <Text strong>Companies</Text>
              <Tag color="blue" style={{marginLeft:'50px',fontSize:'30px',padding:'20px'}}>25</Tag>
            </div>  
          </Card>
        </Col>

        <Col span={8}>
          <Card className="D_Admin_Dashboard_dashboard-card" hoverable>
            <div className="D_Admin_Dashboard_card-icon">
              <DollarCircleOutlined />
            </div>
            <div className="D_Admin_Dashboard_card-content">
              <Text strong>Total Income</Text>
              <Tag color="green" style={{marginLeft:'50px',fontSize:'30px',padding:'20px'}}>$50,000</Tag>
            </div>
          </Card>
        </Col>

        <Col span={8}>
          <Card className="D_Admin_Dashboard_dashboard-card" hoverable>
            <div className="D_Admin_Dashboard_card-icon">
              <TeamOutlined />
            </div>
            <div className="D_Admin_Dashboard_card-content">
              <Text strong>Candidates</Text>
              <Tag color="orange" style={{marginLeft:'50px',fontSize:'30px',padding:'20px'}}>150</Tag>
            </div>
          </Card>
        </Col>

      </Row>
      <Divider className="D_Admin_Dashboard_custom-divider" />
      <div className="D_Admin_Dashboard_title">
       
        <Title level={4}>Statistics</Title>
      </div>

      <div className="D_Admin_Dashboard_chart-section">
        <div className="D_Admin_Dashboard_chart-header">
          <Title level={4}>Income Over Time</Title>
          <Select value={timeFilter} onChange={handleTimeFilterChange}>
            <Option value="daily">Daily</Option>
            <Option value="monthly">Monthly</Option>
            {/* ... add more options */}
          </Select>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="time" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Line type="monotone" dataKey="income" stroke="#1890ff" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
 
    </>
  )
}

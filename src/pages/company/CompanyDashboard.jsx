import {
  Calendar,
  Card,
  Col,
  Row,
  Space,
  Typography,
  Image,
  Avatar,
  Button,
  List,
  Select
} from "antd";
const { Title, Text } = Typography;


const pendingInterviews = [
  { id: 1, time: '2023-08-15 09:00 AM - 05:00 PM' },
  { id: 2, time: '2023-08-15 10:30 AM - 04:00 PM' },
  { id: 3, time: '2023-08-15 02:00 PM - 06:00 PM' },
  // Add more dummy time slots as needed
];

const pendingSelectionTests = [
  { id: 1, time: '2023-08-15 09:00 AM - 05:00 PM' },
  { id: 2, time: '2023-08-15 10:30 AM - 04:00 PM' },
  { id: 3, time: '2023-08-15 02:00 PM - 06:00 PM' },
];


export default function CandidateDashboard() {
  return (
    <>
    <div className="company-dashboard-n">
      <Row gutter={20}>
        {/*<Col style={{ margin: "30px 0 30px" }} span={24}>
           <Row gutter={20}>
            <Col span={6}>
              <Card
                style={{
                  backgroundColor: "rgba(245, 245, 247, 1)",
                  boxShadow: "0 0 8px rgba(0,0,0,.2)",
                }}
              >
                <Title style={{ margin: "0" }}>200</Title>
                <Title level={4} style={{ margin: "0" }}>
                  Job Posts
                </Title>
              </Card>
            </Col>

            <Col span={6}>
              <Card
                style={{
                  backgroundColor: "rgba(245, 245, 247, 1)",
                  boxShadow: "0 0 8px rgba(0,0,0,.2)",
                }}
              >
                <Title style={{ margin: "0" }}>10</Title>
                <Title level={4} style={{ margin: "0" }}>
                  Events
                </Title>
              </Card>
            </Col>

            <Col span={6}>
              <Card
                style={{
                  backgroundColor: "rgba(245, 245, 247, 1)",
                  boxShadow: "0 0 8px rgba(0,0,0,.2)",
                }}
              >
                <Title style={{ margin: "0" }}>5</Title>
                <Title level={4} style={{ margin: "0" }}>
                  Pending
                </Title>
              </Card>
            </Col>

            <Col span={6}>
              <Card
                style={{
                  backgroundColor: "rgba(245, 245, 247, 1)",
                  boxShadow: "0 0 8px rgba(0,0,0,.2)",
                }}
              >
                <Title style={{ margin: "0" }}>2</Title>
                <Title level={4} style={{ margin: "0" }}>
                  Short List
                </Title>
              </Card>
            </Col>
          </Row>
        </Col> */}

        <Row>
          <Col span={12}>
            <Row>
              <div className='pending-time-slots-n' style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <Row justify={"space-between"} style={{display: 'flex', alignItems: 'baseline'}}>
                <Title className="title">UPCOMING INTERVIEWS</Title>
                <Select defaultValue="This week" style={{ width: 150,}}
                    options={[
                      {
                        value: 'This week',
                        label: 'This week',
                      },
                      {
                        value: 'This month',
                        label: 'This month',
                      },
                      {
                        value: 'This year',
                        label: 'This year',
                      },
                      {
                        value: 'disabled',
                        label: 'Disabled',
                        disabled: true,
                      },
                    ]}
                  />
                </Row>
                <List
                  itemLayout='horizontal'
                  dataSource={pendingInterviews}
                  renderItem={item => (
                    <List.Item className='list-item'>
                      <List.Item.Meta
                        title={`Interview ID: ${item.id}`}
                        description={`Time: ${item.time}`}
                        className='list-item-meta'
                      />
                      <Button type="primary">View Details</Button>
                    </List.Item>
                  )}
                />
              </div>
            </Row>

            <Row>
              <div className='pending-time-slots-n' style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <Row justify={"space-between"} style={{display: 'flex', alignItems: 'baseline'}}>
                  <Title className='title'>UPCOMING SELECTION TESTS</Title> 
                  <Select defaultValue="This week" style={{ width: 150 }}
                    options={[
                      {
                        value: 'This week',
                        label: 'This week',
                      },
                      {
                        value: 'This month',
                        label: 'This month',
                      },
                      {
                        value: 'This year',
                        label: 'This year',
                      },
                      {
                        value: 'disabled',
                        label: 'Disabled',
                        disabled: true,
                      },
                    ]}
                  />
                </Row>
                <List
                  itemLayout='horizontal'
                  dataSource={pendingSelectionTests}
                  renderItem={item => (
                    <List.Item className='list-item'>
                      <List.Item.Meta
                        title={`Selection Test ID: ${item.id}`}
                        description={`Time: ${item.time}`}
                        className='list-item-meta'
                      />
                      <Button type="primary">View Details</Button>
                    </List.Item>
                  )}
                />
              </div>
            </Row>
          </Col>

          <Col
            span={12}
            style={{ padding: "2", boxShadow: "0 0 8px rgba(0,0,0,.2)", width: '50%' }}
          >
            <Calendar 
            style={{}}/>
          </Col>
        </Row>
      </Row >
      </div>
    </>
  );
}

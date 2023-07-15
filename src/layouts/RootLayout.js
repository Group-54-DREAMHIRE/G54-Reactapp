import { Outlet } from 'react-router-dom';
import { Layout, theme, Row, Col } from 'antd';
import Navbar from '../Components/navbar/Navbar';
import Sidebar from '../Components/sidebar/Sidebar';
const { Content } = Layout;

function RootLayout() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <Layout>
        <Row
        style={{height: '13vh',
                position: 'sticky',
                top: '0',
                left: '0',
                display: 'flex',
                alignItems: 'center'}}>
        <Col span={24}>
        <Navbar />
        </Col>
        </Row>
        <Layout 
        style={{display: 'flex',
                flexDirection: 'row',}}> 
         <Sidebar/>
         <Content
            style={{
              padding: 0,
              margin: 30,
              minHeight: 280,
              width: '100%',
              background: colorBgContainer,
            }}>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default RootLayout


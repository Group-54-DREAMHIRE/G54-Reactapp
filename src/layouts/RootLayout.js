import { Outlet } from 'react-router-dom';
import { Layout, theme } from 'antd';
import Navbar from '../Components/navbar/Navbar';
const { Content } = Layout;

function RootLayout() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <Layout>
       <Navbar/>
        <Content
          style={{
            padding: 0,
            margin: 30,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </>
  )
}

export default RootLayout


import Footer from '../Components/footer/Footer';
import Sidebar from '../Components/sidebar/Sidebar';
import Navbar from '../Components/navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { Layout,theme } from 'antd';
const { Content } = Layout;

function RootLayout() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <Layout>
        <div className="rootlayout-header-w">
          <Navbar />
        </div>
        <Layout className='side'>
          <div className="side-bar-w">
            <Sidebar />
          </div>
          <div className="content-w">
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
            <Footer />
          </div>
        </Layout>
      </Layout>
    </>
  )
}

export default RootLayout


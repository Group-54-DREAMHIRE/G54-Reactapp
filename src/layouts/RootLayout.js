import { Col, Layout, Row } from 'antd';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Components/sidebar/Sidebar';
import Navbar from '../Components/navbar/Navbar';


function RootLayout({handleLogin}) {
  return (
    <>
      <div className="rootlayout-header-w">
        <Navbar/>
      </div>
      <Row>
        <Col span={24} >
          <div className="rootlayout-main-w" >
            <Sidebar handleLogin={handleLogin} />
            <div className="outlet-w">
              <Outlet />
            </div>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default RootLayout

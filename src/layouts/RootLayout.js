import { Col, Layout, Row } from 'antd';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Components/sidebar/Sidebar';


function RootLayout({handleLogin}) {
  return (
    <>

      {/* <div className='rootlayout-header-w'>

      </div>

      <div className='rootlayout-main-w'>
        <div className='rootlayout-sidebar-con-w'>
          <Sidebar />
        </div>
        <div className='rootlayout-con-w'>
          <div className='rootlayout-outlet-con-w'>
            <Outlet />
          </div>
          <div className='rootlayout-footer-w'>
           This is footer
          </div>
        </div>
      </div> */}
      <div className="rootlayout-header-w">
      </div>
      <Row>
        <Col span={24} >
          <div className="rootlayout-main-w" >
            <Sidebar handleLogin={handleLogin} />
            <div className="out">
              <Outlet />
            </div>
          </div>
        </Col>
      </Row>



    </>
  )
}

export default RootLayout

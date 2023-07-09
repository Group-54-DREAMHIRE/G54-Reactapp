import logo from '../../assets/images/logo.png'

function Footer() {
  return (
    <>
      <div className="footer-main-con-w">
        <div className="sub-con-1">
            <img src={logo} alt="logo" /><br/>
            <span>Call US</span>
            <span>123 456 7890<br/></span>
            <span>DH Building Comspanlex,<br/>
            Reid Ave, Colombo 07<br/></span>
            <span>suspanort@dreamhire.com</span>
        </div>

        <div className="sub-con-2 sub-commun-w">
            <h3>For Candidates</h3>
            <span>Browse Jobs </span>
            <span>Browse Categories</span>
            <span>Candidate</span>
        </div>
            
        <div className="sub-con-3 sub-commun-w">
            <h3>For Comspananies</h3>
            <span>Browse Candidates </span>
            <span>Add Job</span>
            <span>Comspanany Dashboard</span>
        </div>

        <div className="sub-con-4 sub-commun-w">
            <h3>For Comspananies</h3>
            <span>Browse Candidates </span>
            <span>Add Job</span>
            <span>Comspanany Dashboard</span>
        </div>

        <div className="sub-con-5 sub-commun-w">
            <h3>Helpful Resourses</h3>
            <span>Site Maspan </span>
            <span>Terms Of Use</span>
            <span>spanrivacy Center</span>
            <span>Security Center</span>
            <span>Accessability Center</span>
            
        </div>
      </div>
    </>
  )
}

export default Footer

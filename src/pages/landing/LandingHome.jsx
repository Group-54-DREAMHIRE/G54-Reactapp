import { Typography, Input, Row, Col, Button, Image } from "antd";
import landing1 from "../../assets/images/landing-1.png";
import landing2 from "../../assets/images/landing2.png";
import landing3 from "../../assets/images/landing3.png";
import landing4 from "../../assets/images/landing4.png";
import landing5 from "../../assets/images/landing5.png";
import search from '../../assets/images/search.png';

const { Title } = Typography;

const LandingHome = () => {
  return (
    <>
      <Row style={{ backgroundColor: "#F2FAFA", 
                    padding: "0 10% 0" ,
                    zIndex: '1'}}>
        <Col span={24}>
          <Row
            justify="space-between"
            style={{
              marginTop: "5%",
            }}
          >
            <Col span={11}>
              <Row justify="start" >
                <Col>
                  <Row>
                    <Title
                      style={{
                        display: "block",
                        fontSize: "50px",
                        fontWeight: "700",
                        marginLeft: "0",
                      }}
                    >
                      Are you looking for
                      <br /> a job
                    </Title>
                  </Row>
                </Col>
                <Col>
                  <Row justify="start" style={{marginBottom: '25px'}}>
                    <label>
                      dreamhire , Fast. Spacelance helps you to find
                      <br />
                      your passion at a moment's notice
                    </label>
                  </Row>
                </Col>
                <Col>
                  <Row style={{marginTop: '25px'}}>
                    <Col>
                      <Button type="primary"
                                style={{width: '120px',
                                        height: '50px'}}>
                        Find a job
                    </Button>
                    </Col>
                    <Col>
                      <Input
                        placeholder="search from city"
                        suffix={<img src={search} style={{width: '100%',
                                                     borderRadius: '50%',
                                                    textAlign: 'right'}}/>}
                        style={{width: '150px',
                        height: '50px',
                        boxShadow: '0 0 10px 0 rgba(0,24,128,.1)',}}
                      />
                    </Col>

                    <Col>
                      <Input
                        placeholder="search from title"
                        suffix={<img src={search} style={{width: '100%',
                        borderRadius: '50%',
                       textAlign: 'right'}}  />}
                        style={{width: '150px',
                        height: '50px'}}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col span={10}>
              <Image preview={false} src={landing1}/>
            </Col>
          </Row>
          <Row style={{marginTop: '80px'}} >
            <Col span={24}>
              <Row  justify="space-between" 
              style={{borderRadius: '10px',
                background: '#FFF',
                boxShadow: '0px 20px 30px 0px rgba(0, 0, 0, 0.05)',
                padding: '15px'}}>
                <Col span={6} >
                  <Row >
                    <Col>
                      <Row justify= 'center'>
                        <Image preview={false} src={landing2}/>
                      </Row>
                      <Row>
                        <Title  level={2}>Create Account</Title>
                      </Row>
                      <Row justify= 'center'>
                      <label>
                      First you have to create an<br/>
                       account  here
                        </label>
                      </Row>
                    </Col>
                  </Row>
                </Col>

                <Col span={6}>
                  <Row justify="center">
                    <Col span={24}>
                      <Row justify="center">
                        <Image preview={false} src={landing3} />
                      </Row>
                      <Row justify="center">
                        <Title level={2}>Search Jobs</Title>
                      </Row>
                      <Row justify="center">
                        <label>
                          Search the best<br />
                          freelance work here
                        </label>
                      </Row>
                    </Col>
                  </Row>
                </Col>

                <Col span={6}>
                  <Row justify="center">
                    <Col span={24}>
                      <Row justify="center">
                        <Image preview={false} src={landing4}/>
                      </Row>
                      <Row justify="center">
                        <Title level={2}>Apply</Title>
                      </Row>
                      <Row justify="center">
                        <label>
                          Apply or save and<br />
                          start your work
                        </label>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row style={{marginTop: '12%'}}>
            <Col span={14}>
              <Image preview={false} src={landing5} />
            </Col>

            <Col span={10}>
              <Row justify= 'end'>
                <Col>
                    <Title 
                        style={{
                                display: 'block',
                                textAlign: 'right'}}>
                        Find The Best
                    </Title>
                    <Title 
                        style={{
                                display: 'inline-block',
                                marginTop: '0',
                                color: 'rgb(30,136,229)'}}>
                        IT Careers 
                    </Title>
                    <Title 
                        style={{
                                display: 'inline-block',
                                marginTop: '0',
                                marginBottom: '12%'}}>
                        &nbsp; Here
                    </Title>
                </Col>
                <Col>
                  <label>
                    Lorem ipsum dolor sit amet, consectetur <br />
                    adipiscing elit. Ut erat bibendum ornare
                    <br />
                    urna, cursus eget convallis. Feugiat
                    <br />
                    imperdiet posuere justo, ultrices interdum
                    <br />
                    sed orci nunc, mattis. Ipsum viverra
                    <br />
                    viverra neque adipiscing arcu, quam <br />
                    dictum. Dui mi viverra dui, sit accumsan,
                    <br />
                    tincidunt massa. Dui cras magnis.
                  </label>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default LandingHome;

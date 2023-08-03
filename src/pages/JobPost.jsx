import jobpost1 from "../assets/images/jobpost1.jpg";
import { FiMapPin } from "react-icons/fi";
import { BsCurrencyDollar } from "react-icons/bs";
import ApplyJob from '../pages/candidate/ApplyJob';
import { Button, Col, Image, Row, Typography } from "antd";
import { useDispatch } from "react-redux";
import { openApplyJob } from "../store/models/modelsSlice";

const { Title, Text } = Typography;
export default function JobPost() {

  const dispatch = useDispatch(); 

  let items = {
    title: 'Sofaware Engineer',
    education: 'BSc in Computer Science',
    deadline: '25th January 2023',
    country: 'New York',
    address: 'Demo Address #8901 Marmora Road Chi Minh City, Vietnam',
    salry: 600,
    experience:6,
    details: '',
    description: "",
    howToApply: '',
    jobRequirements : [
      'Bachelor’s degree in Computer Science or related field',
      '2+ years of experience in web development',
      'Proficiency in JavaScript, HTML, and CSS',
      'Experience with React framework',
      'Strong problem-solving skills',
      'Excellent communication skills',
      ]
  }
  return (
    
    <>
      <Row style={{ padding: "5%" }} justify='space-between' className="jobpost-w" gutter={10}>
        <Col span={8}>
          <Row gutter={[0, 5]}>
            <Col span={24}>
              <Image height={200} src={jobpost1} preview={false} />
            </Col>
            <Col span={24}>
              <Row>
                <Title level={3} style={{fontFamily: 'Rubik,sans-serif', fontWeight:'500'}}>
                  Job Details
                </Title>
              </Row>
              <Row gutter={[0, 10]}>
                <Col span={24}>
                  <Row gutter={5}>
                    <Col span={2}>
                      <Title level={3}>
                        <FiMapPin />
                      </Title>
                    </Col>
                    <Col span={22}>
                      <Title level={4}>Address</Title>
                      <Text className="job-text-w">
                       {items.address}
                      </Text>
                    </Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row gutter={5}>
                    <Col span={2}>
                      <Title level={3}>
                        <BsCurrencyDollar />
                      </Title>
                    </Col>
                    <Col span={22}>
                      <Title level={4}>Salary</Title>
                      <Text className="job-text-w"> ${items.salry} Monthly</Text>
                    </Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row>
                    <Col span={2}></Col>
                    <Col>
                      <Title level={4}>Experience</Title>
                      <Text className="job-text-w"> {items.experience} Year Experience</Text>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col span={16}>
          <Row>
           <Col span={24}>
           <Title level={2} style={{ marginTop: "0" }}>
             {items.title}
            </Title>
            <Text className="job-text-w" strong> Education &nbsp; </Text> 
            <Text className="job-text-w"> {items.education} &nbsp;&nbsp;&nbsp; </Text>
            <Text className="job-text-w" strong>Deadline </Text> 
            <Text className="job-text-w">{items.deadline} </Text> &nbsp;&nbsp;&nbsp;
            <Title level={4} style={{display: 'inline-block'}}>
              <FiMapPin/>
            </Title>
            <Text className="job-text-w">
              {items.country}
            </Text>
            <br /> <br />
            <Text className="job-text-w">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Adipisci, vitae? Obcaecati molestiae reprehenderit nesciunt ullam
              unde tempora nihil officia fugit. A culpa modi perspiciatis
              quisquam, nesciunt placeat maxime enim aliquid sint laboriosam
              cum? Quas assumenda at, odio reprehenderit dolores dolor voluptas,
              necessitatibus quidem ex quis totam impedit nemo officia, fuga
              voluptate consequatur! Maiores ducimus ratione culpa ex placeat
              minima omnis repudiandae, amet, quisquam accusamus illo
              perferendis iste quis magnam modi fuga eveniet voluptatem quasi.
              Rerum quod facilis fugit? Nulla, voluptatibus?
            </Text>
           </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Title level={3} style={{fontFamily: 'Rubik,sans-serif', fontWeight:'500'}}>Job Description</Title>
              <hr style={{ borderBottom: "2px solid rgba(0,0,0,0.3)" }} />
              <br />
              <Text className="job-text-w">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus, iure. Nostrum maiores labore error repellat? Mollitia,
                unde. Eum, saepe provident. Magni quos dignissimos consequatur
                et veritatis reiciendis, quaerat maiores, eius saepe dicta
                voluptatum quidem alias amet labore distinctio cum cumque animi
                dolor fuga earum! Nobis id rem expedita autem, placeat incidunt
                cumque saepe harum! Esse mollitia quis atque, recusandae
                voluptate nostrum minima quaerat iste cumque ipsum, magni neque
                alias officiis. Iusto eos sint, accusantium velit ea optio
                inventore nisi nesciunt!
              </Text>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Title level={3} style={{fontFamily: 'Rubik,sans-serif', fontWeight:'500'}}>How to Apply</Title>
              <hr style={{ borderBottom: "2px solid rgba(0,0,0,0.3)" }} />
              <br />
              <Text className="job-text-w">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus, iure. Nostrum maiores labore error repellat? Mollitia,
                unde. Eum, saepe provident. Magni quos dignissimos consequatur
                et veritatis reiciendis, quaerat maiores, eius saepe dicta
                voluptatum quidem alias amet labore distinctio cum cumque animi
                dolor fuga earum! Nobis id rem expedita autem, placeat incidunt
                cumque saepe harum! Esse mollitia quis atque, recusandae
                voluptate nostrum minima quaerat iste cumque ipsum, magni neque
                alias officiis. Iusto eos sint, accusantium velit ea optio
                inventore nisi nesciunt!
              </Text>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Title level={3} style={{fontFamily: 'Rubik,sans-serif', fontWeight:'500'}}>Job Requirements</Title>
              <hr style={{ borderBottom: "2px solid rgba(0,0,0,0.3)" }} />
              <br />
              {
                items.jobRequirements.map((item, index)=>{
                  return(
                    <>
                    <Text 
                    style={{
                      lineHeight: '35px',
                      fontFamily: 'Montserrat,sans-serif', 
                      fontSize: '15px', color: 'rgba(0,0,0,.8)',
                      fontWeight: '400'}} key={index}> {index + 1} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item}.</Text> 
                    <br/>
                    </>
                  )
                })
              }
            </Col>
          </Row>
          <Row style={{marginTop: '30px'}}>
            <Button 
              size="large" 
              style={{borderRadius: '0'}} 
              type="primary"
              onClick={()=>dispatch(openApplyJob())}
              >Apply This Job
            </Button>
          </Row>
          <ApplyJob/>
        </Col>
      </Row>
    </>
  );
}

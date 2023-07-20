import { Typography, Input, Row, Col, Button, Image } from "antd";
import BlogCard from "./cards/BlogCard";
import blog1 from '../../assets/images/blog1.png';
import blog2 from '../../assets/images/blog2.png';
import blog3 from '../../assets/images/blog3.png';
import blog4 from '../../assets/images/blog4.png';
import blog5 from '../../assets/images/blog5.png';
import blog6 from '../../assets/images/blog6.png';
import blog7 from '../../assets/images/blog7.png';
import blog8 from '../../assets/images/blog8.png';
const { Title } = Typography;
export const LandingBlogs = () => {
  const blogitems = [
    {
      title: "Frontend Developer",
      image: blog1,
    },
    {
      title: "Software Engineer",
      image: blog2,
    },
    {
      title: "Tech Lead",
      image: blog3,
    },
    {
      title: "Quality Assurance",
      image: blog4,
    },
    {
      title: "Frontend Designer",
      image: blog5,
    },
    {
      title: "React developer",
      image: blog6,
    },
    {
      title: "Spring boot developer",
      image: blog7,
    },
    {
      title: "Full stack developer",
      image: blog8,
    },
  ];

  return (
    <>
      <Row>
        <Col span={24}>
          <Row justify="center">
            <Col style={{marginBottom: '2%'}}>
              <Title style={{ display: "inline-block" }}>
                Choose Different
              </Title>
              <Title
                style={{ display: "inline-block",
                        color: "rgb(30,136,229)" }}>
                Category
              </Title>
            </Col>
          </Row>
          <Row justify='center' style={{marginBottom: '2%'}}>
            <Col span={20}>
              <Row justify="center" gutter={[25, 25]}>
                {blogitems.map((item) => {
                  return (
                    <Col>
                      <BlogCard
                        key={item.index}
                        image={item.image}
                        title={item.title}
                      />
                    </Col>
                  );
                })}
              </Row>
              
            </Col>
          </Row>
          <Row justify='center'>
                <Button type="primary" style={{width: '15%', height: '45px'}}>
                    More Categories
                </Button>
              </Row>
        </Col>
      </Row>
    </>
  );
};

import { Col, Row, Steps, Typography } from "antd";
import AppliedJobCard from "../../Components/cards/candidate/AppliedJobCard";
import InterviewCard from '../../Components/cards/candidate/InterviewCard';
const { Title, Text } = Typography;
const description = "This is a description";
const items = [
  {
    company: "Creative Software",
    date: "2023.08.28",
    time: "9.00 AM",
    type: "HR Interview",
    with: "MRS. Vishmi"
  },
  {
    company: "Derect FN",
    date: "2023.09.05",
    time: "11.00 AM",
    type: "TECH Interview",
    with: "MR. Sampath"
  },
];
export default function AppliedJob() {
  return (
    <>
      <Row >
        <Col span={24}>
          <Row align="bottom" justify='space-between' gutter={[30,30]}>
            <Col>
              <Text style={{fontSize: '30px', fontWeight: '800'}}>
                Cloud Solutions International
              </Text>
              <br/>
              <Text style={{fontSize: '23px', fontWeight: '700'}}>
                Software Engineer
              </Text>
            </Col>
            <Col span={24}>
            <Steps
              responsive
              current={1}
              status="error"
              items={[
                {
                  title: "Finished",
                  description: "Successfully Applied the job",
                },
                {
                  title: "Rejected",
                  description: "Your resume is rejected",
                },
                {
                  title: "Waiting",
                  description,
                },
                {
                  title: "Waiting",
                  description,
                },
              ]}
            />
          </Col>
          <Col span={24}>
            <Row>
              <Col span={8}>
              <InterviewCard item={items[0]}/>
              </Col>
            </Row>
          </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

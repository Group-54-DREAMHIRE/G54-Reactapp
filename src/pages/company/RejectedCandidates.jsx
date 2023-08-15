import { FaMapMarkerAlt, FaMoneyBillAlt } from "react-icons/fa";
import { Card, Col, Row, Typography, Button, Image, } from "antd";
import dula from '../../assets/images/dula.jpeg';

const { Title, Text } = Typography;

const RejectedCandidates = () => {
    const items = [
        {
            id: 1,
            slotId: 1,
            name: "Dulanajna Weerasighe",
            title: "UI/UX Designer",
            timeSlot: "08:00 - 08.30",
            address: "Matara, Dickwella",
            image: dula,
            tags: [
                {
                    id: 1,
                    label: "REACT",
                },
                {
                    id: 2,
                    label: "JAVA",
                },
                {
                    id: 3,
                    label: "PYTHON",
                },
                {
                    id: 4,
                    label: "SCALA",
                },
            ]
        },
        {
            id: 2,
            name: "Dulanajna Weerasighe",
            title: "UI/UX Designer",
            timeSlot: "08:00 - 08.30",
            address: "Matara, Dickwella",
            image: dula,
            tags: [
                {
                    id: 1,
                    label: "REACT",
                },
                {
                    id: 2,
                    label: "JAVA",
                },
                {
                    id: 3,
                    label: "PYTHON",
                },
                {
                    id: 4,
                    label: "SCALA",
                },
            ]
        },
        {
            id: 3,
            name: "Dulanajna Weerasighe",
            title: "UI/UX Designer",
            timeSlot: "08:00 - 08.30",
            address: "Matara, Dickwella",
            image: dula,
            tags: [
                {
                    id: 1,
                    label: "REACT",
                },
                {
                    id: 2,
                    label: "JAVA",
                },
                {
                    id: 3,
                    label: "PYTHON",
                },
                {
                    id: 4,
                    label: "SCALA",
                },
            ]
        },

        {
            id: 4,
            name: "Dulanajna Weerasighe",
            title: "UI/UX Designer",
            timeSlot: "08:00 - 08.30",
            address: "Matara, Dickwella",
            image: dula,
            tags: [
                {
                    id: 1,
                    label: "REACT",
                },
                {
                    id: 2,
                    label: "JAVA",
                },
                {
                    id: 3,
                    label: "PYTHON",
                },
                {
                    id: 4,
                    label: "SCALA",
                },
            ]
        },

        {
            id: 5,
            name: "Dulanajna Weerasighe",
            title: "UI/UX Designer",
            timeSlot: "08:00 - 08.30",
            address: "Matara, Dickwella",
            image: dula,
            tags: [
                {
                    id: 1,
                    label: "REACT",
                },
                {
                    id: 2,
                    label: "JAVA",
                },
                {
                    id: 3,
                    label: "PYTHON",
                },
                {
                    id: 4,
                    label: "SCALA",
                },
            ]
        },

        {
            id: 6,
            name: "Dulanajna Weerasighe",
            title: "UI/UX Designer",
            timeSlot: "08:00 - 08.30",
            address: "Matara, Dickwella",
            image: dula,
            tags: [
                {
                    id: 1,
                    label: "REACT",
                },
                {
                    id: 2,
                    label: "JAVA",
                },
                {
                    id: 3,
                    label: "PYTHON",
                },
                {
                    id: 4,
                    label: "SCALA",
                },
            ]
        },



    ];
    return (
        <><Title style={{
            fontSize: '25px',
            fontWeight: 600,
        }}>
            OPEN SCHEDULE CANDIDATES
        </Title>
            <Row style={{ padding: '2%' }} gutter={[20, 20]}>
                {items.map((items) => {
                    return (
                        <>

                            <Col span={12} >
                                <Card
                                    className="resume-card-w"
                                    style={{ boxShadow: "0 0 8px 0 rgba(0,0,0,.1)", height: '120px' }}
                                    hoverable
                                >
                                    <Row justify="space-between">
                                        <Col span={5}>
                                            <Image
                                                src={items.image}
                                                style={{ borderRadius: "10px", height: "100%", width: "100%" }}
                                            />
                                        </Col>
                                        <Col span={8}>
                                            <Title level={5} style={{ marginBottom: "0", marginTop: "0" }}>
                                                {items.name}
                                            </Title>
                                            <Text style={{ color: "rgb(30,136,229)" }}>{items.title}</Text>
                                            <Title level={5} style={{ marginTop: "0" }}>
                                                <Text
                                                    style={{
                                                        marginTop: "0px",
                                                        marginRight: "",
                                                        color: "rgb(30,136,229)",
                                                    }}
                                                >
                                                </Text>
                                            </Title>
                                        </Col>
                                        <Col span={8}>
                                            {/* {items.tags.slice(0, 4).map((tag) => {
                                                return (
                                                    <Button
                                                        style={{
                                                            backgroundColor: "rgba(30,136,229,.25)",
                                                            fontWeight: '600',
                                                            color: "rgba(30,136,229,1)",
                                                            margin: "2px",
                                                        }}
                                                        key={tag.id}
                                                    >
                                                        {tag.label}
                                                    </Button>
                                                );
                                            })} */}
                                            <Row>
                                                <Col>
                                                    <Button
                                                        className="view-w"
                                                        style={{
                                                            border: '1px solid rgba(30,136,229,1)',
                                                            color: 'rgba(30,136,229,1)',
                                                            fontWeight: '600',
                                                            margin: '2px'
                                                        }}> View </Button>
                                                    <Button
                                                        className="view-w"
                                                        style={{
                                                            border: '1px solid rgba(30,136,229,1)',
                                                            color: 'rgba(30,136,229,1)',
                                                            fontWeight: '600'
                                                        }}> Delete </Button>
                                                </Col>

                                            </Row>
                                        </Col>


                                    </Row>

                                </Card>
                            </Col>
                        </>
                    )
                })}
            </Row>
        </>
    )
}

export default RejectedCandidates;

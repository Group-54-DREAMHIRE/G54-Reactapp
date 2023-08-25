import { FaMapMarkerAlt, FaMoneyBillAlt } from "react-icons/fa";
import { Card, Col, Row, Typography, Button, Image, } from "antd";
import dula from '../../assets/images/dula.jpeg';
import anjana from '../../assets/images/anjana.jpg';
import nishan from '../../assets/images/Nishan.jpg';
import lahiru from '../../assets/images/lahiru.png';
import dhanuka from '../../assets/images/danuka.jpg';
import vishmi from '../../assets/images/vishmi.jpg';

const { Title, Text } = Typography;

const SelectedTimeSlots = () => {
    const items = [
        {
            id: 1,
            slotId: 1,
            name: "Dulanajna Weerasighe",
            title: "Software Engineer",
            timeSlot: "08:00 AM- 08.30 AM",
            address: "Matara, Dickwella",
            image: dula,
            tags: [
                {
                    id: 1,
                    label: "JAVA",
                },
                {
                    id: 2,
                    label: "PYTHON",
                },
                {
                    id: 3,
                    label: "PHP",
                },
            ]
        },
        {
            id: 2,
            slotId: 2,
            name: "Anjana Nanayakkara",
            title: "Software Engineer",
            timeSlot: "08:30 AM - 09.00 AM",
            address: "Galle, Hapugala",
            image: anjana,
            tags: [
                {
                    id: 1,
                    label: "JAVA",
                },
                {
                    id: 2,
                    label: "PYTHON",
                },
                {
                    id: 3,
                    label: "PHP",
                },
            ]
        },
        {
            id: 3,
            slotId: 3,
            name: "Nishan Madhushanka",
            title: "Associate Software Engineer",
            timeSlot: "09:00 AM - 09.30 AM",
            address: "Matara, Dickwella",
            image: nishan,
            tags: [
                {
                    id: 1,
                    label: "JAVA",
                },
                {
                    id: 2,
                    label: "PYTHON",
                },
                {
                    id: 3,
                    label: "MONGODB",
                },
            ]
        },

        {
            id: 4,
            slotId: 4,
            name: "Lahiru Samarakoon",
            title: "Software Engineer",
            timeSlot: "09.30 AM - 10.00AM",
            address: "Matara, Dickwella",
            image: lahiru,
            tags: [
                {
                    id: 1,
                    label: "JAVA",
                },
                {
                    id: 2,
                    label: "PYTHON",
                },
                {
                    id: 3,
                    label: "PHP",
                },
            ]
        },

        {
            id: 5,
            name: "Danuka Sankalpa",
            title: "Senior Software Engineer",
            timeSlot: "10:00 AM- 10.30 AM",
            address: "Matara, Dickwella",
            image: dhanuka,
            tags: [
                {
                    id: 1,
                    label: "JAVA",
                },
                {
                    id: 2,
                    label: "PYTHON",
                },
                {
                    id: 3,
                    label: "PHP",
                },
            ]
        },

        {
            id: 6,
            name: "Dulanajna Weerasighe",
            title: "Software Engineer",
            timeSlot: "10:30 AM- 11.10 AM",
            address: "Matara, Dickwella",
            image: vishmi,
            tags: [
                {
                    id: 1,
                    label: "JAVA",
                },
                {
                    id: 2,
                    label: "PYTHON",
                },
                {
                    id: 3,
                    label: "PHP",
                },
            ]
        },



    ];
    return (
        <><Title style={{
            fontSize: '25px',
            fontWeight: 600,
        }}>
            RESERVED SLOTS WITH CANDIDATES
        </Title>
            <Row style={{ padding: '2%' }} gutter={[20, 20]}>
                {items.map((items) => {
                    return (
                        <>

                            <Col span={24} >
                                <Card
                                    className="resume-card-w"
                                    style={{ boxShadow: "0 0 8px 0 rgba(0,0,0,.1)", height: '130px' }}
                                    hoverable
                                >
                                    <Row justify="space-between">
                                        <Col span={4}>
                                            <Text style={{ textAlign: "center" }}>Time Slot ID : {items.slotId}</Text><br />
                                            <Text style={{ marginTop: "0px", color: "rgb(30,136,229)" }}>
                                                {items.timeSlot}
                                            </Text>
                                        </Col>
                                        <Col span={2}>
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
                                                            margin: '5px'
                                                        }}> View </Button>
                                                    <Button
                                                        className="view-w"
                                                        style={{
                                                            border: '1px solid rgba(30,136,229,1)',
                                                            color: 'rgba(30,136,229,1)',
                                                            fontWeight: '600'
                                                        }}> Remove </Button>
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

export default SelectedTimeSlots;

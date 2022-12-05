import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from "reactstrap";
function Services() {
    return (
        <>
            <div className='mt-5 text-center' data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" >
                <Row className='mt-5' >
                    <Col >
                        <span style={{ color: '#1a2141', fontSize: '40px', fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.2, }}>Our Blog </span>
                    </Col>
                </Row>
            </div>
            <div className='d-flex justify-content-center mt-3'>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem', margin: '10px' }} data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                            <Card.Img variant="top" src={require('../images/image-8.jpeg')} style={{ height: "250px" }} />
                            <Card.Body >
                                <Card.Title>Silver Springs Marathon</Card.Title>
                                <Card.Text>
                                    About 200 residents participated in the marathon and enjoyed the Adrenalin rush. This marks the completion of 4th Marathon running event in SS phase 1.
                                </Card.Text>
                                <div className='d-flex justify-content-center'>
                                    <Button className='d-flex justify-content-center mt-3' clasname="mt-5" style={{ background: '#191a33', border: 'none' }}>Go </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>


                        <Card style={{ width: '18rem', margin: '10px' }} data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                            <Card.Img variant="top" src={require('../images/image-3.jpeg')} style={{ height: "250px" }} />
                            <Card.Body>
                                <Card.Title> Health is wealth</Card.Title>
                                <Card.Text>
                                    SS residents tied up with Medista hospital to organize Covid vaccination camp. Currently there are no covid positive case reported in the society. Kudos to the residents.
                                </Card.Text>
                                <div className='d-flex justify-content-center'>
                                    <Button style={{ background: '#191a33', border: 'none', }}>Go </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>

                        <Card style={{ width: '18rem', margin: '10px' }} data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                            <Card.Img variant="top" src={require('../images/image-2.jpeg')} style={{ height: "250px" }} />
                            <Card.Body>
                                <Card.Title> Water Conservation</Card.Title>
                                <Card.Text>
                                    SS residents have taken the promise to reduce water consumption by 20% and have started several water saving initiatives across the society lead by Ms Tomar and Mr Goel.
                                </Card.Text>
                                <div className='d-flex justify-content-center'>
                                    <Button style={{ background: '#191a33', border: 'none' }}>Go </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>


            </div>

        </>
    );

}

export default Services;
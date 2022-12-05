import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
function RecentEvents() {
    return (
        <>
            <Row className="mt-8">

                <Col className='text-center mt-5'>


                    <span className="" style={{ color: '#1a2141', fontSize: '40px', fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.2, marginTop: '100px' }}>Recent Events</span>

                </Col>
            </Row>
            <div className='d-flex justify-content-center mt-3'>
                <Row >
                    <Col >
                        <Card style={{ width: '18rem', margin: '10px' }} data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1603228254119-e6a4d095dc59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9saSUyMGZlc3RpdmFsfGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
                            <Card.Body>
                                <Card.Title>Holi Event</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <div className="d-flex justify-content-center ">
                                    <Button style={{ background: '#191a33', border: 'none' }}>Go </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>


                        <Card style={{ width: '18rem', margin: '10px' }} data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                            <Card.Img variant="top" src="https://www.royalcliff.com/wp-content/uploads/2019/08/medical-1.jpg" />
                            <Card.Body>
                                <Card.Title>Health Checkup Event</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <div className="d-flex justify-content-center ">
                                    <Button style={{ background: '#191a33', border: 'none' }}>Go </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>

                        <Card style={{ width: '18rem', margin: '10px' }} data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                            <Card.Img variant="top" src="https://www.gnipst-pc.ac.in/images/slc/sc3.jpg" />
                            <Card.Body>
                                <Card.Title>Sports Event</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <div className="d-flex justify-content-center ">
                                    <Button style={{ background: '#191a33', border: 'none', justifyContent: 'center' }}>Go </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>


            </div>
        </>
    )
}
export default RecentEvents;
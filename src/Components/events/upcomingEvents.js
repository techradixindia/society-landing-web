import React from "react";
import { Row, Col,Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
function UpcomingEvents(){
    return(
        <>
            <Row className="mt-8">

                <Col className='text-center mt-5'>


                    <span className="" style={{ color: '#1a2141', fontSize: '40px', fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.2, marginTop: '100px' }}>Upcoming Events</span>

                </Col>
            </Row>
            <div className='d-flex justify-content-center mt-3'>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem', margin: '10px' }} data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                            <Card.Img variant="top" src="https://preview.colorlib.com/theme/constructioncompany/assets/img/service/servicess3.png.webp" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button style={{ background: '#191a33', border: 'none' }}>Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>


                        <Card style={{ width: '18rem', margin: '10px' }} data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                            <Card.Img variant="top" src="https://preview.colorlib.com/theme/constructioncompany/assets/img/service/servicess2.png.webp" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button style={{ background: '#191a33', border: 'none' }}>Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>

                        <Card style={{ width: '18rem', margin: '10px' }} data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                            <Card.Img variant="top" src="https://preview.colorlib.com/theme/constructioncompany/assets/img/service/servicess1.png.webp" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button style={{ background: '#191a33', border: 'none' }}>Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>


            </div>
        </>
    )
}
export default UpcomingEvents;
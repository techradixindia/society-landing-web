import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";
import './style.css'
function Notice() {
    return (
        <>
            <div className='mt-5 text-center' data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" >
                <Row >
                    <Col >
                        <span style={{ color: '#1a2141', fontSize: '40px', fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.2, }}>Notice</span>
                    </Col>
                </Row>
            </div>
            <div className='d-flex justify-content-center mt-5'>
                <Row>
                    <Col className='d-flex justify-content-center ' >
                        <Card style={{ width: '18rem', margin: '10px'}} data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                            {/* <Card.Img variant="top" src={require('../images/sticky-note.png')} className='notice-image's /> */}
                            <Card.Body  className='text-center'>
                                <Card.Title> Power Outage</Card.Title>
                                <Card.Text>
                                    There will be outage of power from 8 AM to 845 PM on December 12th 2022. Please plan accordingly.
                                    
                                </Card.Text>
                                <Link to='/notice'>
                                    <Button style={{ background: '#ff5f13', border:'none', boxShadow: '1px 2px 9px 0px #808080db' }}>View More</Button>
                                </Link>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='d-flex justify-content-center' >
                        <Card style={{ width: '18rem', margin: '10px', }} data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                            {/* <Card.Img variant="top" src={require('../images/sticky-note.png')} className='notice-image' /> */}
                            <Card.Body className='text-center' >
                                <Card.Title>Health Camp</Card.Title>
                                <Card.Text>
                                     Medista hospital will be putting up a health camp on Saturday December 10th 2022. Special full body package available for SS residents
                                </Card.Text>
                                <Link to='/notice'>
                                <Button style={{ background: '#ff5f13',border:'none',  boxShadow: '1px 2px 9px 0px #808080db' }}>View More</Button>
                                    </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='d-flex justify-content-center ' >
                        <Card style={{ width: '18rem', margin: '10px', }} data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                            {/* <Card.Img variant="top" src={require('../images/sticky-note.png')} className='notice-image' /> */}
                            <Card.Body className='text-center'>
                                <Card.Title>Kia Automobile Sales Event</Card.Title>
                                <Card.Text>
                                     Kia Auto from Indore will be putting up their stall and demo car on Sunday December 4th 2022. Visit for special discounts.
                                </Card.Text>
                                <Link to='/notice'>
                                <Button style={{ background: '#ff5f13', border: 'none', boxShadow: '1px 2px 9px 0px #808080db' }}>View More</Button>
                                    </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* <Col>


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
                    </Col> */}
                    {/* <Col>

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
                    </Col> */}
                </Row>

            </div>
        </>
    )
}
export default Notice;
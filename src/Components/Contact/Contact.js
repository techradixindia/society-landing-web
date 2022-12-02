import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { IoLocationSharp } from "react-icons/io5";
import { GoMail } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";
import Form from 'react-bootstrap/Form';
import '../style.css'
function Contact() {

    return (
        <>
            <div >
                <div className='contact-image'>
                    <Row className="mt-8">

                        <Col className='text-center mt-5'>


                            <span className="" style={{ color: '#1a2141', fontSize: '40px', fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.2, marginTop: '100px' }}>Contact us</span>

                        </Col>
                    </Row>
                </div>
            </div>

            <Container className='mt-5' data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" >

                <div className='d-flex justify-content-center mt-5'>
                    <Row >
                        <Col className='d-flex justify-content-center' >
                            <Card className='zoom-hov' style={{ width: '18rem', margin: '10px', boxShadow: '1px 2px 9px 0px #808080db' }} data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                                <div className='d-flex justify-content-center mt-3'>
                                    <IoLocationSharp style={{ color: '#ff5f13', fontSize: '50px', border: '4px dotted #ff8d57', borderRadius: '50%', padding: '8px' }}></IoLocationSharp>
                                </div>

                                <Card.Body className='text-center'>
                                    <Card.Title>Our Address</Card.Title>
                                    <Card.Text>
                                        Silver Springs Indore,(M.P)
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='d-flex justify-content-center' >


                            <Card className='zoom-hov' style={{ width: '18rem', margin: '10px', boxShadow: '1px 2px 9px 0px #808080db' }} data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                                <div className='d-flex justify-content-center mt-3'>
                                    <GoMail style={{ color: '#ff5f13', fontSize: '50px', border: '4px dotted #ff8d57', borderRadius: '50%', padding: '8px' }} />
                                </div>

                                <Card.Body className='text-center'>
                                    <Card.Title>Email Us</Card.Title>
                                    <Card.Text>
                                        info@silverinfra.com
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='d-flex justify-content-center' >

                            <Card className='zoom-hov' style={{ width: '18rem', margin: '10px', boxShadow: '1px 2px 9px 0px #808080db' }} data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                                <div className='d-flex justify-content-center mt-3'>
                                    <FiPhoneCall style={{ color: '#ff5f13', fontSize: '50px', border: '4px dotted #ff8d57', borderRadius: '50%', padding: '8px' }} />
                                </div>

                                <Card.Body className='text-center'>
                                    <Card.Title>Call Us</Card.Title>
                                    <Card.Text>
                                        +91-9999999999
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>


                </div>
                <div>
                    <Row className='mt-6' >
                        <Col lg={6} md={12}>
                            <iframe class="mb-4 me-md-3 me-sm-0  mb-lg-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7363.794270648989!2d75.90982315!3d22.65762355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e4a7e1cf4691%3A0xef80ec1bba647620!2sSilver%20Springs%2C%20Indore%2C%20Madhya%20Pradesh%20452020!5e0!3m2!1sen!2sin!4v1669908616881!5m2!1sen!2sin" frameborder="0" style={{ border: "0", width: "100%", height: "530px", boxShadow: '1px 2px 9px 0px #808080db' }} allowfullscreen></iframe>


                        </Col>
                        {/* <Col>
                        <Card className='p-3'>
                            <form>
                                <h4>Get in Touch</h4>
                                <lable style={{    color: "#7F7F7F",fontWeight:"500"}}>Full Name </lable>
                                <input className='form-control mt-2 p-2' type='text' placeholder='Enter your name'></input>
                                <lable style={{ color: "#7F7F7F", fontWeight: "500"}}>Email </lable>
                                <input className='form-control mt-2 p-2 ' type='email' placeholder='Enter your email'></input>
                                <lable style={{ color: "#7F7F7F", fontWeight: "500" }} >Phone Number :</lable>
                                <input className='form-control mt-2 p-2' type='number' placeholder='Enter your phone number'></input>
                                <lable style={{ color: "#7F7F7F", fontWeight: "500" }}>Message :</lable>
                                <textarea className='form-control mt-2 p-5' type='text-area' placeholder='Enter your Message'></textarea>
                                <Button style={{ background:"#ff5f13",border:"none"}}>Send Message</Button>
                            </form>
                        </Card>

                    </Col>
                */}
                        <Col lg={6} md={12}>
                            <Card className='ms-md-4 ms-sm-0' style={{ boxShadow: '1px 2px 9px 0px #808080db' }}>
                                <Card.Body>
                                    <h4>Get in Touch</h4>
                                    <Form>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Full Name</Form.Label>
                                            <Form.Control type="text" placeholder="Enter  full name" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" />

                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Phone Number</Form.Label>
                                            <Form.Control type="number" placeholder="Enter phone number" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" >
                                            <Form.Label>Message</Form.Label>
                                            <textarea className='form-control p-4' placeholder='Enter message'></textarea>
                                        </Form.Group>
                                        <div className='d-flex justify-content-center'>
                                            <Button style={{ background: '#ff5f13', border: "#ff5f13", paddingLeft: '30px', paddingRight: '30px', paddingTop: '14px', paddingBottom: '14px' }} type="submit">
                                                Submit
                                            </Button>
                                        </div>

                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )

}
export default Contact;
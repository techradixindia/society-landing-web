import React from "react";
import Container from 'react-bootstrap/Container';
import { Row, Col } from "reactstrap";
function Content() {
    return (
        <>
        <Row className="mt-6">

                <Row >
                    <Col lg={6} md={10} className='d-flex justify-content-center' data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                        <img src={require("../images/phase1.jpg")} height='320' width='90%'
                            style={{
                                borderRadius: " 23px",
                                boxShadow: "3px 5px 11px 4px grey"
                            }}></img>
                    </Col>
                    <Col lg={6} md={12} className='d-flex flex-column justify-content-center' data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                        <span style={{ color: '#1a2141', fontSize: '55px', fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.2, textAlign: 'center' }}>About Society
                        </span>
                        <div className=" d-flex flex-column justify-content-center text-center">
                            <p style={{ fontSize: '17px',  color: '#0b0b2b' }} >
                                Silver Springs in AB Bypass Road, Indore is a ready-to-move housing society. It offers apartments and villas in varied budget range. These units are a perfect combination of comfort and style, specifically designed to suit your requirements and conveniences. There are 2BHK, 3BHK and 4BHK Apartments and 3BHK, 4BHK and 5BHK Villas available in this project. This housing society is now ready to be called home as families have started moving in. Check out some of the features of Silver Springs housing society:

                                *Silver Springs AB Bypass Road has 9 towers, with 7 floors each and 2400 units on offer.

                                *Spread over an area of 139 acres, Silver Springs is one of the spacious housing societies in the Indore region. With all the basic amenities available, Silver Springs fits into your budget and your lifestyle.
                               </p>
                        </div>

                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col className='text-center mt-4 ' data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">


                        <span className="" style={{ color: '#1a2141', fontSize: '40px', fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.2, }}>Our Purpose </span>

                    </Col>
                </Row>


                <div data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">

                    <Row lg={12} className='d-flex justify-content-center' >
                        <Col className="d-flex flex-column justify-content-center mt-4 text-center">
                            <p style={{ fontSize: '17px', fontWeight: 700, color: '#0b0b2b' }}>
                                OUR VALUES (These represent who we are and why we do what we do)
                            </p>
                            <p>

                                Passion: We are passionate about SS Ph 1 and will strive to make it a better place.
                                Determined: We are determined that the special character of SS Ph 1 be maintained and enhanced.
                                Neutrality: We aim to serve and help the community in a voluntary non party political way
                                Integrity: We pledge that all activities for betterment of SS Ph 1 be conducted with utmost fairness and transparency.
                                Camaraderie: We want to live in Vibrant, Livable, healthy, Supportive and socially connected Neighborhood.
                                Openness: We will be open and approachable to all residents with equality.
                               
                                </p>
                            <p style={{ fontSize: '17px', fontWeight: 700, color: '#0b0b2b' }}>   MISSION STATEMENT (These represent what we do)   </p>

                            <p>
                                RWA facilitates Residents in making the right connections to resolve issues (involving Planning, Transport, Roads, Security, safety, water, electricity, Health and Wellbeing, unauthorized commercialization, Caring for Animals, Crime reduction, Education, social events and our Environment)
                                RWA reaches out to Residents through several vehicles (in person, Website, Mobile App, social media, sub committees & Newsletters)
                                RWA represents of all residents, Senior citizens, children and adults of all ages
                               
                                  </p>
                            <p style={{ fontSize: '17px', fontWeight: 700, color: '#0b0b2b' }}>     VISION STATEMENT (These represent our long term vision of our future) </p>

                            <p> To connect with all Residents in SS Ph 1
                                To be the voice of all residents without any biases
                                To understand all Residents' needs through regular engagement & Digital Medium with our members and other community groups
                                To enhance the relationship between RWA and local government bodies. To ensure we maximize their contribution towards SS Ph 1</p>

                            


                        </Col>

                    </Row>
                    {/* <Row>
                        <Col>
                            <Row >
                                <Col className="d-flex justify-content-center ms-5">
                                    <ul >
                                        <li>Quarterly detailed update of the project including completion status with pictures and funds collected against all units.</li>
                                        <li>Providing detailed project plan for achieving the promised completion date, while linking completion steps to funds requirement and availability.</li>
                                        <li>Yearly financial audits of the project certified by a Chartered Accountant.</li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                    </Row> */}

                </div>
            </Row>
         
        </>)

}
export default Content;
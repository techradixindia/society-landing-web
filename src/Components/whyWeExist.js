import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from "reactstrap";
function WhywWExist(){

    return(
        <>
            <Row className="mt-8">
                <Col className='text-center mt-5 ' data-aos="zomm-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">


                    <span className="section-title" style={{ color: '#1a2141', fontSize: '40px', fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.2, }}>Why we exist </span>

                </Col>
            </Row>
            <div data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">

                <Row lg={12} className='d-flex justify-content-center' >
                    <Col className="d-flex flex-column justify-content-center mt-4 text-center">
                        <p style={{ fontSize: '17px', fontWeight: 700, color: '#0b0b2b' }}>
                            Unwarranted delay in the completion of the project was the starting point. Delivery of this project was supposed to be completed by 2016-2017
                        </p>
                        <p>
                            Constant slippage of delivery dates promised by the developer since 2017.  </p>

                        <p>The developer unilaterally changed promised delivery date from that in the Agreement to sell to that of the Expiry of license provided by RERA (July 2022) even though the two dates have nothing to do with each other.This license was applied for in July 2017 (post the promised delivery date of most buyers) and interim grant was given for 5 years which is the default of any license provided by RERA.  </p>

                        <p>  Disguising of progress report of the project and hiding of financial information of the project.This has lead to RERA filing a suo moto case against the developer for this project. </p>

                        <p>    Using the excuse of government agencies not providing utilities so as to to cover their own mismanagement of the project. There is no excuse to not complete the structure and interiors as this has nothing to do with utility services. There are many project within a 1-2 Kilometer radius of this project that have been delivered recently.
                        </p>
                        <p>Issues between the developer and their overseas partner, with the overseas partner looking for an exit from the project claiming shortage of labor and material to complete the objectives of their contract.</p>
                    </Col>

                </Row>


            </div>
        </>
    )
}
export default WhywWExist;
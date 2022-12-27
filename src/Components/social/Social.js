import React from "react";
import { Row, Col } from "react-bootstrap";
import '../style.css';
import Card from 'react-bootstrap/Card';
function Social() {
    const [images, setImages] = React.useState([
        " https://www.youtube.com/embed/HSjWrW4_bVc",
        " https://www.youtube.com/embed/Ve0OJarxxNA",
        "https://www.youtube.com/embed/qjPTQEoBQMs"

    ])
    return (<>
        <Row className="mt-8">

            <Col className='text-center mt-5'>


                <span className="" style={{ color: '#1a2141', fontSize: '40px', fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.2, marginTop: '100px' }}>Social Media Corner</span>

            </Col>
        </Row>
        <div className="d-flex justify-content-center mt-8" data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
            <Row >
                <Col className='d-flex justify-content-center flex-wrap' col={4}>

                    {
                        images.map((image, index) => {
                            return (<>
                                <Card className='zoom-hov' style={{ margin: '10px', boxShadow: '1px 2px 9px 0px #808080db', borderRadius: '16px' }} data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                                    <iframe className='social-video' src={image} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                                </Card>
                            </>)
                        }

                        )
                    }

                </Col>
            </Row>

        </div>

        {/* <div className="d-flex justify-content-center mt-8" data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
            <Row >
                <Col className='d-flex justify-content-center flex-wrap'  >


                    <Card className='zoom-hov' style={{ margin: '10px', boxShadow: '1px 2px 9px 0px #808080db', borderRadius: '16px' }} data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                     
                        <blockquote className="twitter-tweet"><p lang="en" dir="ltr">VijayDashmi#Happy Dussehra # Raavan Dahan # Victoryof<br></br>Good over Evil # BurnThe Hate within # Celebration # Festivity @ Silver Springs <a href="https://t.co/0BxvoWPrWa">pic.twitter.com/0BxvoWPrWa</a></p>&mdash; Silver Springs (@SilverSpring18) <a href="https://twitter.com/SilverSpring18/status/914177690370035713?ref_src=twsrc%5Etfw">September 30, 2017</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> </Card>



                </Col>
            </Row>

        </div> */}


    </>)
}
export default Social;









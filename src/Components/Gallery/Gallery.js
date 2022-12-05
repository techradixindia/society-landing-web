import React from "react";
import {  Row,Col  } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import "../style.css"
import "./Gallery.css"
function Gallery(){
    const [images, setImages] = React.useState([
        "https://blogbox.indianeagle.com/wp-content/uploads/2019/07/73rd-Indian-Independence-Day-2019-events-USA.jpg",
        "https://bsmedia.business-standard.com/_media/bs/img/article/2019-09/02/full/1567388800-8455.jpg",
        "https://blog.radissonblu.com/wp-content/uploads/2016/11/shutterstock_154677038.jpg",
        "https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?cs=srgb&dl=pexels-teddy-yang-2263436.jpg&fm=jpg",
        "https://upload.wikimedia.org/wikipedia/commons/c/c7/Messe_Luzern_Corporate_Event.jpg",
        "https://www.tripsavvy.com/thmb/5vngKJHQCpYxAh4ieSFfMsho5gA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-533194649-56b1d7423df78cdfa002f1f4.jpg",
        "https://www.tourmyindia.com/blog//wp-content/uploads/2018/10/Best-Festivals-to-Witness-in-November-in-India.jpg",
        "https://www.rockitfish.co.uk/images-casestudies/colconf/conference-organisers.jpg",
        "https://freekaamaal.com/blog/wp-content/uploads/2018/09/image1.jpg",
        "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZXZlbnR8ZW58MHx8MHx8&w=1000&q=80",
    ])
return(

    <>
        <Row className="mt-8">

            <Col className='text-center mt-5'>


                <span className="" style={{ color: '#1a2141', fontSize: '40px', fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.2, marginTop: '100px' }}>Gallery</span>

            </Col>
        </Row>

        <div className="d-flex justify-content-center mt-5" data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
           <Row >
                <Col className='d-flex justify-content-center flex-wrap' col={3}>
    
                    {/* {
                        images.map((image, index) => {
                            return (<>
                                <Card className='zoom-hov'  style={{ width: '19rem', margin: '10px', boxShadow: '1px 2px 9px 0px #808080db', borderRadius: '16px' }} data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                                    <Card.Img variant="top" src={image} alt={`pic-${index}`} key={image} style={{height:'300px',borderRadius:'16px'}} />

                                </Card>
                            </>)
                        }

                        )
                    } */}
                    

                    <Card className='zoom-hov' style={{ width: '19rem', margin: '10px', boxShadow: '1px 2px 9px 0px #808080db', borderRadius: '16px' }} data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                        <img style={{borderTopLeftRadius:'5%'}} src={require("../../images/image-2.jpeg")} />
                    </Card>

                    <Card className='zoom-hov' style={{ width: '19rem', margin: '10px', boxShadow: '1px 2px 9px 0px #808080db', borderRadius: '16px' }} data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                        <img src={require("../../images/image-3.jpeg")} />
                    </Card>

                    <Card className='zoom-hov' style={{ width: '19rem', margin: '10px', boxShadow: '1px 2px 9px 0px #808080db', borderRadius: '16px' }} data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                        <img src={require("../../images/image-4.jpeg")} />
                    </Card>

                    <Card className='zoom-hov' style={{ width: '19rem', margin: '10px', boxShadow: '1px 2px 9px 0px #808080db', borderRadius: '16px' }} data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                        <img src={require("../../images/image-5.jpeg")} />
                    </Card>

                    <Card className='zoom-hov' style={{ width: '19rem', margin: '10px', boxShadow: '1px 2px 9px 0px #808080db', borderRadius: '16px' }} data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                        <img src={require("../../images/image-6.jpeg")} />
                    </Card>
                    <Card className='zoom-hov' style={{ width: '19rem', margin: '10px', boxShadow: '1px 2px 9px 0px #808080db', borderRadius: '16px' }} data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                        <img src={require("../../images/image-1.jpeg")} />
                    </Card>

                    <Card className='zoom-hov' style={{ width: '19rem', margin: '10px', boxShadow: '1px 2px 9px 0px #808080db', borderRadius: '16px' }} data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                        <img src={require("../../images/image-7.jpeg")} />
                    </Card>

                    <Card className='zoom-hov' style={{ width: '19rem', margin: '10px', boxShadow: '1px 2px 9px 0px #808080db', borderRadius: '16px' }} data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                        <img src={require("../../images/image-8.jpeg")} />
                    </Card>
                    <Card className='zoom-hov' style={{ width: '19rem', margin: '10px', boxShadow: '1px 2px 9px 0px #808080db', borderRadius: '16px' }} data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                        <img src={require("../../images/image-9.jpeg")} />
                    </Card>
                    <Card className='zoom-hov' style={{ width: '19rem', margin: '10px', boxShadow: '1px 2px 9px 0px #808080db', borderRadius: '16px' }} data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                        <img src={require("../../images/image-10.jpeg")} />
                    </Card>
                    <Card className='zoom-hov' style={{ width: '19rem', margin: '10px', boxShadow: '1px 2px 9px 0px #808080db', borderRadius: '16px' }} data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                        <img src={require("../../images/image11.jpeg")} />
                    </Card>
           
                </Col>
           </Row>
       
    </div>
    </>
)
}
export default Gallery;
import React from 'react';
import { CarouselWrapper } from "react-pretty-carousel";
import { Row, Col } from "reactstrap";
import './style.css'
function Event() {
    const [images, setImages] = React.useState([
        "https://www.thebigday.co.in/wp-content/uploads/2021/01/Corporate-Events.jpg",
        "https://www.rockitfish.co.uk/images-casestudies/colconf/conference-organisers.jpg",
        "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZXZlbnR8ZW58MHx8MHx8&w=1000&q=80",
        "https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?cs=srgb&dl=pexels-teddy-yang-2263436.jpg&fm=jpg",
        "https://upload.wikimedia.org/wikipedia/commons/c/c7/Messe_Luzern_Corporate_Event.jpg"

    ])
 return (

        <>
            <div>
                <div className='mt-5 text-center' data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" >
                    <Row >
                        <Col >
                            <span style={{ color: '#1a2141', fontSize: '46px', fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.2, }}>Events </span>
                        </Col>
                    </Row>
                </div>
                <Row className='mt-4' data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" >
                    <CarouselWrapper items={3} mode='gallery' >
                        {
                            images.map((image, index) => {
                                return (<>
                                    <div className='shadow-div'>
                                        <img src={image} alt={`pic-${index}`} key={image} style={{ height: '400px' }}></img>
                                    </div>
                                </>)
                            }

                            )
                        }
                    </CarouselWrapper>
                </Row>
            </div>
        </>
    )
}
export default Event;
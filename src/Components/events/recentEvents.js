import React from 'react';
import { Row, Col,Button } from "react-bootstrap";
import { CarouselWrapper } from "react-pretty-carousel";
import Card from 'react-bootstrap/Card';
function RecentEvents(){
    const [images, setImages] = React.useState([
        {
            image: "https://www.thebigday.co.in/wp-content/uploads/2021/01/Corporate-Events.jpg",
            title: "Event Tilte",
            content: 'Some quick example text to build on the card title and make up th bulk of the card'
        },
        {
            image: "https://www.rockitfish.co.uk/images-casestudies/colconf/conference-organisers.jpg",
            title: "Event Tilte",
            content: 'Some quick example text to build on the card title and make up th bulk of the card'
        },
        {
            image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZXZlbnR8ZW58MHx8MHx8&w=1000&q=80",
            title: "Event Tilte",
            content: 'Some quick example text to build on the card title and make up th bulk of the card'
        },
        {
            image: "https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?cs=srgb&dl=pexels-teddy-yang-2263436.jpg&fm=jpg",
            title: "Event Tilte",
            content: 'Some quick example text to build on the card title and make up th bulk of the card'
        },
        {
            image: "https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?cs=srgb&dl=pexels-teddy-yang-2263436.jpg&fm=jpg",
            title: "Event Tilte",
            content:"Some quick example text to build on the card title and make up th bulk of the card"
        },




    ])
    return(
        <>
            

            <div>
                <div className='mt-5 text-center' data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" >
                    <Row className='mt-8' >
                        <Col >
                            <span style={{ color: '#1a2141', fontSize: '46px', fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.2, }}>Recent Events </span>
                        </Col>
                    </Row>
                </div>
                <Row className='mt-4' data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" >
                    <CarouselWrapper items={3} mode='gallery' >
                        {
                            images.map((item, index) => {
                                return (<>
                               
                                    <Card style={{  margin: '10px',border:'none' }} className='text-center text-capitalize text-secondary'  data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                                            <Card.Img variant="top" src={item.image} />
                                            <Card.Body className='text-center'>
                                                <Card.Title className='text-center'>{item.title}</Card.Title>
                                            <p> {` ${item.content}`} </p> 
                                            <p> Price : 2000/- </p> 
                                            <p>Venue:Silver Spring Indore </p> 
                                                <Button style={{ background: '#191a33', border: 'none' }}>Go somewhere</Button>
                                            </Card.Body>
                                        </Card>
                                    
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
export default RecentEvents;
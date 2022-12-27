import { Button, Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import './style.css'
import Content from './Content';
import { Link, useNavigate } from 'react-router-dom';
function Slider() {

   let navigate =useNavigate()
    return (<>
            <Carousel className='mt-8'>
                <Carousel.Item>
                    <img
                    className="d-block w-100 slider-image"
                        src={require('../images/banner-1.jpeg')}
                        alt="First slide"
                        
                    />
                    <Carousel.Caption>
                    <span className="" style={{ color: '#fff', fontSize: '25px', fontWeight: 700, }}>Welcome to Revanta Gurgaon Flat Buyers Association</span>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 slider-image"
                    src={require('../images/banner-2.jpeg')}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                    <span className="" style={{ color: '#fff', fontSize: '25px', fontWeight: 700, }}>"Don't let shady builder steal your dream and lifetime savings!""buyer beware"...</span>
                   
                   
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 slider-image"
                    src={require('../images/banner-3.jpeg')}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                    <span className="" style={{ color: '#fff', fontSize: '25px', fontWeight: 700, }}>RGFBA work as a front to raise common civic and legal problems related to the Raheja Revanta project</span>
                    </Carousel.Caption>
                </Carousel.Item>
            {/* <Carousel.Item>
                <img
                    className="d-block w-100 slider-image"
                    src={require('../images/banner-4.jpeg')}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <span className="" style={{ color: '#1a2141', fontSize: '40px', fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.2, marginTop: '100px' }}>Welcome to Silver Springs</span>
                    <p style={{ fontSize: '20px', fontWeight: '500' }}>RWA Services at the click of your button, always round the clock.</p>
                    <Link to='/contact'>  <button className="btn" style={{ background: '#ff5f13', color: "white", paddingLeft: '40px', paddingRight: '40px', paddingTop: '10px', paddingBottom: '10px', fontSize: '20px', fontWeight: 'bold' }} >Contact Us</button></Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 slider-image"
                    src={require('../images/banner-5.jpeg')}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <span className="" style={{ color: '#1a2141', fontSize: '40px', fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.2, marginTop: '100px' }}>Welcome to Silver Springs</span>
                    <p style={{ fontSize: '20px', fontWeight: '500' }}>RWA Services at the click of your button, always round the clock.</p>
                    <Link to='/contact'>  <button className="btn" style={{ background: '#ff5f13', color: "white", paddingLeft: '40px', paddingRight: '40px', paddingTop: '10px', paddingBottom: '10px', fontSize: '20px', fontWeight: 'bold' }} >Contact Us</button></Link>
                </Carousel.Caption>
            </Carousel.Item> */}
            </Carousel>
            
            </>
    );
}

export default Slider;
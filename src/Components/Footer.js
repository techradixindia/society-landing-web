import React from 'react'
import { Nav, NavLink, Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { BsBuilding, BsFacebook, BsInstagram, BsTwitter, BsGoogle } from "react-icons/bs";

function Footer() {

    return (
        <>
            <footer class="page-footer font-small mt-2 " style={{ backgroundColor: '#191a33' }}>
                <div class="container text-md-left">
                    <div class="row">
                    <br></br>
                        <hr className="clearfix w-100 d-md-none " />
                        <div className="col-md-2 text-center mx-auto mt-4">
                          {/* <br></br> */}
                            <a class="navbar-brand  t text-white" href="#"> <BsBuilding size="35" style={{ color: '#ff5f13', marginRight: '5px' }}> </BsBuilding>Society</a>
                        </div>

                        <hr className="clearfix w-100 d-md-none" />
                        <div className="col-md-6 mx-auto">
                            <br></br>
                        <ul className="list-unstyled text-white text-center">
                                <h6>CONTACT US</h6>
                                <li>Silver Springs

                                    Indore, Madhya Pradesh 452020</li>
                                <li>Phone No 031505050</li>


                                <br></br>
                            </ul>
                        </div>
                        <hr class="clearfix w-100 d-md-none" />
                        <div class="col-md-2 mx-auto">
                            <br></br>
                            <h6 className="display-8 text-white text-center">GET SOCIAL</h6>
                            {/* <br></br> */}
                            <ul className="list-unstyled text-white text-center ">

                                <li className="mt-3">
                                    <BsFacebook style={{ 'fontSize': '1.5em' }} />&nbsp;&nbsp;
                                    <BsInstagram style={{ 'fontSize': '1.5em' }} />&nbsp;&nbsp;
                                    <BsTwitter style={{ 'fontSize': '1.5em' }} />&nbsp;&nbsp;
                                    <BsGoogle style={{ 'fontSize': '1.5em' }} />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>


    )
}

export default Footer
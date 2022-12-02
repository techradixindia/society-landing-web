import React, { useState } from "react";
import { Row } from "react-bootstrap";
import { BsBuilding } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import './style.css'
function Navigation() {
    let navigate = useNavigate()
let [navColor,setNavColor]=useState(0)
    return (
        <>
<Row>
            <div >
                <div className="row large shadow" style={{ background: '#191a33', position: 'fixed', top: 0, right: 0, left: 0, zIndex: 1030, margin: '0px', padding: '0px' }} >
                    <div className="mx-auto col-10">

                        <nav className="navbar navbar-expand-lg" >
                            <div className="container-fluid ">
                                    <a className="navbar-brand  text-white" href="#"> <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ4VvouWBl7at3bNc3ZmsTLaRvSnTJgk20iQ&usqp=CAU' style={{height:'60px',width:'60px',borderRadius:'50%'}}></img></a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0  ">
                                        <li className="nav-item ">
                                                <a className="nav-link  " aria-current="page" style={{ color: navColor==0 ? '#ff5f13' : '#fff' }}
                                                    onClick={() => { navigate('/home'); setNavColor(0) }}>Home</a>
                                        </li>
                                        <li className="nav-item dropdown ">
                                            <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"
                                                    style={{ color: navColor == 2 ? '#ff5f13' : '#fff' }}
                                                   >
                                                Events
                                            </a>
                                            <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item " href="#" onClick={() => { navigate('/recentevnet'); setNavColor(2) }}>Recent Events</a></li>
                                                    <li><a className="dropdown-item" href="#" onClick={() => { navigate('/upcomingevnet'); setNavColor(2) }}>Upcomint Events</a></li>

                                               
                                            </ul>
                                        </li>
                                       
                                        <li className="nav-item ">
                                            <a className="nav-link " aria-current="page" 
                                                    style={{ color: navColor == 3 ? '#ff5f13' : '#fff' }}
                                                    onClick={() => { navigate('/contact'); setNavColor(3) }}>Contact us</a>
                                        </li>
                                        <li className="nav-item ">
                                            <a className="nav-link btn " aria-current="page" 
                                                    style={{ color: navColor==4?'#ff5f13':'#fff'}}
                                            onClick={()=>{ navigate('/gallery'); setNavColor(4)}}>Gallery</a>
                                        </li>
                                            <li className="nav-item ">
                                                <a className="nav-link btn " aria-current="page"
                                                    style={{ color: navColor == 6 ? '#ff5f13' : '#fff' }}
                                                    onClick={() => { navigate('/socialmediacorner'); setNavColor(6) }}>Social Media Corner</a>
                                            </li>


                                        <li className="nav-item text-white">
                                            <a href="https://www.google.com"><button className="btn" style={{ background: '#ff5f13', color: "white" }} type="submit">Login</button></a>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            </Row>
        </>
    )
}
export default Navigation
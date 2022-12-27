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
                    <div className="row large shadow" style={{ background: '#32bdb9', position: 'fixed', top: 0, right: 0, left: 0, zIndex: 1030, margin: '0px', padding: '0px' }} >
                    <div className="col-10">

                        <nav className="navbar navbar-expand-lg" >
                            <div className="container-fluid ">
                                    <a className="navbar-brand  text-white" href="#"> <img src={require('../images/logo.png')} style={{height:'50px',width:'50px'}}></img></a>
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
                                                About
                                            </a>
                                            <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item " href="#" onClick={() => { navigate('/recentevnet'); setNavColor(2) }}>Mission</a></li>
                                                    <li><a className="dropdown-item" href="#" onClick={() => { navigate('/upcomingevnet'); setNavColor(2) }}>Vision</a></li>
                                                    <li><a className="dropdown-item" href="#" onClick={() => { navigate('/upcomingevnet'); setNavColor(2) }}>Concerns With The Projects </a></li>

                                               
                                            </ul>
                                        </li>
                                       
                                        <li className="nav-item ">
                                            <a className="nav-link " aria-current="page" 
                                                    style={{ color: navColor == 3 ? '#ff5f13' : '#fff' }}
                                                    onClick={() => { navigate('/contact'); setNavColor(3) }}>Contact </a>
                                        </li>
                                           
                                        <li className="nav-item ">
                                            <a className="nav-link  " aria-current="page" 
                                                    style={{ color: navColor==4?'#ff5f13':'#fff'}}
                                            onClick={()=>{ navigate('/gallery'); setNavColor(4)}}>Member Zone</a>
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
import React from 'react';
import { Button } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';

import './Navbar.css';
import RAD5_LOGO from './images/rad5-logo.png';
import "bootstrap-icons/font/bootstrap-icons.css";


export default function Navbar({handleShow}) {
  return (

  //   <nav className='container-fluid'>
  //   <Row className='navbar-menu align-items-center'>
  //       <img className='navbar-logo col-3 img-fluid' src={RAD5_LOGO} alt="" />
  //       <i onClick={handleShow} class="bi bi-menu-button col-3"></i>
  //       <div className='navbar-title d-flex justify-content-center col-6'>
  //             <h1>RAD5 CONNEKT</h1>
  //       </div>
             
  //     </Row>
  // </nav>
    <nav className='container-fluid navbar-menu'>
    <Row className='navbar-row'>
        <Col className='navbar-logo' xs = '3'>
            <div className='d-flex align-items-center navbar-height'>
                <img className='img-fluid' src={RAD5_LOGO} alt="" />
            </div>
        
        </Col>

        <Col className="d-lg-none" xs = '1'>
              <div className='d-flex align-items-center navbar-height'><i onClick={handleShow} class="bi bi-menu-button"></i></div>
        </Col>

        <Col xs = '6' lg ='9' className='p-0' >
                <div className='navbar-title navbar-height d-flex justify-content-center align-items-center'>
                      <h1>RAD5 CONNEKT</h1>
                </div>
        </Col>
        
    </Row>
  </nav>
  )
}

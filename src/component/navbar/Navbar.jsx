import React from 'react';
import { Button } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Navbar.css';
import RAD5_LOGO from './images/rad5-logo.png';
import "bootstrap-icons/font/bootstrap-icons.css";


export default function Navbar({handleShow}) {
  return (
    <nav className='container-fluid navbar-menu'>
    <Row className='navbar-row'>
        <Col className='navbar-logo' xs = '3'>
            <div className='d-flex align-items-center navbar-height'>
                <Link to='/'><img className='img-fluid' src={RAD5_LOGO} alt="" /></Link>
            </div>
        
        </Col>

        <Col className="d-lg-none" xs = '1'>
              <div className='d-flex align-items-center navbar-height'><button onClick={handleShow} className="bi bi-justify"></button></div>
        </Col>

        <Col xs = '8' sm ='6' lg ='9' className='p-0' >
                <div className='navbar-title navbar-height d-flex justify-content-center align-items-center'>
                      <h1 style={{whiteSpace:'nowrap'}}> <span className='d-none d-sm-inline'>RAD5</span> StudySphere</h1>
                </div>
        </Col>
        
    </Row>
  </nav>
  )
}

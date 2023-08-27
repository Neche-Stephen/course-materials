import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
import { Link } from 'react-router-dom';


import './Aside.css';


function Aside(props) {
  const { 
    showHtmlTopic, IntroToHtml, IntroToAttributes, 
    showCssTopic, Intro_CSS, Styling_Text,
    showJsTopic, IntroToProg, IntroToJs,
    show, setShow, handleClose, handleShow} = props;

  return (
        <>
          <Offcanvas className ="aside-offcanvas" show={show} onHide={handleClose} responsive="lg">
               <div className = "aside">
                <Row className='aside-row aside-title'>
                  <Col>
                    Courses
                  </Col>
                </Row>
               <Row className='aside-row'>
                      <p ><Link className='aside-topics' to='/html'>HTML</Link></p>
                    {IntroToHtml && <p onClick={()=>{showHtmlTopic(IntroToHtml)}}>{IntroToHtml}</p>}
                    {IntroToAttributes && <p onClick={()=>{showHtmlTopic(IntroToAttributes)}}>{IntroToAttributes}</p>}
                </Row>

                <Row className='aside-row'>
                  <p ><Link className='aside-topics' to='/css'>CSS</Link></p>
                  {Intro_CSS && <p onClick={()=>{showCssTopic('Intro_CSS')}}>{Intro_CSS}</p>}
                  {Styling_Text && <p onClick={()=>{showCssTopic('Styling_Text')}}>{Styling_Text}</p>}
                </Row>

                <Row className='aside-row'>
                  <p><Link className='aside-topics' to='/js'>JS</Link></p>
                  {IntroToProg && <p onClick={()=>{showJsTopic(IntroToProg)}}>{IntroToProg}</p>}
                  {IntroToJs && <p onClick={()=>{showJsTopic(IntroToJs)}}>{IntroToJs}</p>}
                </Row>
               </div>
          </Offcanvas>
            </>
  )
}

export default Aside
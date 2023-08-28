import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
import { Link } from 'react-router-dom';


import './Aside.css';


function Aside(props) {
  const { 
    showHtmlTopic, htmlTopics,
    showCssTopic, cssTopics,
    showJsTopic,jsTopics,
    show, setShow, handleClose, handleShow} = props;

    // const htmlTopics = [IntroToHtml, IntroToAttributes]

  return (
        <>
          <Offcanvas className ="aside-offcanvas" show={show} onHide={handleClose} responsive="lg">
               <div className = "aside">
                <Row className='aside-row aside-title mb-1'>
                  <Col>
                    Courses
                  </Col>
                </Row>
               <Row className='aside-row mb-1'>
                      <Col><Link className='aside-link' to='/html'>HTML</Link> </Col>
                </Row>
                {
                      htmlTopics &&  htmlTopics.map((htmlTopic, index) => {
                        return  <Row className='aside-topic mb-1' key={index}><span onClick={()=>{showHtmlTopic(htmlTopic)}}>{htmlTopic}</span></Row>
                       })
                  }

                <Row className='aside-row mb-1'>
                  <Col><Link className='aside-link' to='/css'>CSS</Link> </Col>
                </Row>
                {
                    cssTopics &&  cssTopics.map((cssTopic, index) => {
                      return  <Row className='aside-topic mb-1' key={index}><span onClick={()=>{showCssTopic(cssTopic)}}>{cssTopic}</span></Row>
                      })
                }

                <Row className='aside-row mb-1'>
                  <Col><Link className='aside-link' to='/js'>JS</Link> </Col>
                </Row>
                {
                    jsTopics &&  jsTopics.map((jsTopic, index) => {
                      return  <Row className='aside-topic mb-1' key={index}><span onClick={()=>{showJsTopic(jsTopic)}}>{jsTopic}</span></Row>
                      })
                }
               </div>
          </Offcanvas>
            </>
  )
}

export default Aside
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
                      <p className='aside-link' ><Link className='aside-link' to='/html'>HTML</Link></p>
                </Row>
                {
                      htmlTopics &&  htmlTopics.map((htmlTopic, index) => {
                        return  <Row key={index}><p className='aside-topic' onClick={()=>{showHtmlTopic(htmlTopic)}}>{htmlTopic}</p></Row>
                       })
                  }

                <Row className='aside-row mb-1'>
                  <p ><Link className='aside-link' to='/css'>CSS</Link></p>
                </Row>
                {
                    cssTopics &&  cssTopics.map((cssTopic, index) => {
                      return  <Row key={index}><p className='aside-topic' onClick={()=>{showCssTopic(cssTopic)}}>{cssTopic}</p></Row>
                      })
                }

                <Row className='aside-row mb-1'>
                  <p><Link className='aside-link' to='/js'>JS</Link></p>
                </Row>
                {
                    jsTopics &&  jsTopics.map((jsTopic, index) => {
                      return  <Row key={index}><p className='aside-topic' onClick={()=>{showJsTopic(jsTopic)}}>{jsTopic}</p></Row>
                      })
                }
               </div>
          </Offcanvas>
            </>
  )
}

export default Aside
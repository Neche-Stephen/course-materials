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
                <Row style={{minHeight: '70px'}} className='aside-row aside-title mb-1'>
                  <Col>
                     <i className="bi bi-book me-3"></i>
                     <span>COURSES</span>
                  </Col>
                </Row>
             
                <Link className='aside-row aside-link mb-1 row' to='/html'>
                      <Col>HTML</Col>
                </Link>
                {
                      htmlTopics &&  htmlTopics.map((htmlTopic, index) => {
                        return (
                           <button key={index} style={{backgroundColor : htmlTopic.clicked ? '#AAAAAA' : '#FF9A9A'}}  className='row aside-topic mb-1 text-white' disabled={htmlTopic.clicked} onClick={()=>{showHtmlTopic(htmlTopic.topicName)}}>
                           {htmlTopic.topicName}
                          </button>

                        )
                       })
                  }

                  <Link className='aside-row aside-link mb-1 row' to='/css'>
                        <Col>CSS</Col>
                  </Link>
                {
                    cssTopics &&  cssTopics.map((cssTopic, index) => {
                      return (
                        <button key={index} style={{backgroundColor : cssTopic.clicked ? '#AAAAAA' : '#FF9A9A'}}  className='row aside-topic mb-1 text-white' disabled={cssTopic.clicked} onClick={()=>{showCssTopic(cssTopic.topicName)}}>
                        {cssTopic.topicName}
                       </button>
                      )
                      })
                }

                  <Link className='aside-row aside-link mb-1 row' to='/js'>
                      <Col>JS</Col>
                  </Link>
                {
                    jsTopics &&  jsTopics.map((jsTopic, index) => {
                      return (
                        <button key={index} style={{backgroundColor : jsTopic.clicked ? '#AAAAAA' : '#FF9A9A'}}  className='row aside-topic mb-1 text-white' disabled={jsTopic.clicked} onClick={()=>{showJsTopic(jsTopic.topicName)}}>
                          {jsTopic.topicName}
                       </button>
                      )
                      })
                }
               </div>
          </Offcanvas>
            </>
  )
}

export default Aside
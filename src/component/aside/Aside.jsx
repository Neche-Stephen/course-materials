import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
import { Link } from 'react-router-dom';


import './Aside.css';


const defaultCoursesMode = {
  htmlClicked : false,
  cssClicked : false,
  jsClicked : false,
  extraClicked: false
}



function Aside(props) {
  const [coursesMode, setCoursesMode] = useState(defaultCoursesMode);
  const { htmlClicked, cssClicked, jsClicked, extraClicked} = coursesMode;

  const { 

    showHtmlTopic, htmlTopics,
    showCssTopic, cssTopics,
    showJsTopic,jsTopics,
    showExtraTopic, extraTopics,
    show, setShow, handleClose, handleShow
  } = props;

const handleCourseClick = (courseClicked)=>{
    const updatedCoursesMode = {};
    for (const course in coursesMode) {
      updatedCoursesMode[course] = course === courseClicked;
    }
    // Update the state with the new object
    setCoursesMode(updatedCoursesMode);
  }


  return (
        <>
          <Offcanvas className ="aside-offcanvas" show={show} onHide={handleClose} responsive="lg">
               <div className = "aside">
                <Row style={{minHeight: '70px'}} className='aside-row aside-title mb-1 justify-content-center'>
                  <Col>
                     <i className="bi bi-book me-3"></i>
                     <span>COURSES</span>
                  </Col>
                </Row>
             
                <Row onClick = {() =>{handleCourseClick('htmlClicked')}} className='aside-row aside-link mb-1 row justify-content-center'><Col xs = '8'>HTML</Col></Row>
                {
                     htmlClicked &&  htmlTopics.map((htmlTopic, index) => {
                        return (
                           <button key={index} style={{backgroundColor : htmlTopic.clicked ? '#AAAAAA' : '#FF9A9A'}}  className='row aside-topic mb-1 text-white' disabled={htmlTopic.clicked} onClick={()=>{showHtmlTopic(htmlTopic.topicName)}}>
                           {htmlTopic.topicName}
                          </button>

                        )
                       })
                  }
                  <Row onClick = {() =>{handleCourseClick('cssClicked')}} className='aside-row aside-link mb-1 row justify-content-center'><Col xs = '8'>CSS</Col></Row>
                {
                 cssClicked &&  cssTopics.map((cssTopic, index) => {
                      return (
                        <button key={index} style={{backgroundColor : cssTopic.clicked ? '#AAAAAA' : '#FF9A9A'}}  className='row aside-topic mb-1 text-white' disabled={cssTopic.clicked} onClick={()=>{showCssTopic(cssTopic.topicName)}}>
                        {cssTopic.topicName}
                       </button>
                      )
                      })
                }

                  <Row onClick = {() =>{handleCourseClick('jsClicked')}} className='aside-row aside-link mb-1 row justify-content-center'><Col xs = '8'>JS</Col></Row>
                {
                   jsClicked &&  jsTopics.map((jsTopic, index) => {
                      return (
                        <button key={index} style={{backgroundColor : jsTopic.clicked ? '#AAAAAA' : '#FF9A9A'}}  className='row aside-topic mb-1 text-white' disabled={jsTopic.clicked} onClick={()=>{showJsTopic(jsTopic.topicName)}}>
                          {jsTopic.topicName}
                       </button>
                      )
                      })
                }

                <Row onClick = {() =>{handleCourseClick('extraClicked')}} className='aside-row aside-link mb-1 row justify-content-center'><Col xs = '8'>Extras</Col></Row>
                {
                   extraClicked &&  extraTopics.map((extraTopic, index) => {
                      return (
                        <button key={index} style={{backgroundColor : extraTopic.clicked ? '#AAAAAA' : '#FF9A9A'}}  className='row aside-topic mb-1 text-white' disabled={extraTopic.clicked} onClick={()=>{showExtraTopic(extraTopic.topicName)}}>
                          {extraTopic.topicName}
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
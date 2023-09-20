import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';

import './TopicComponent.css'

export default function TopicComponent( {topicDetails, topicAssessments, topicAssessmentsCorrections}) {
    const {title, learningObjective, lectureMaterialLink, ResourcesLink} = topicDetails;
    const {exercise, classwork, homework} = topicAssessments;

    let classworkCorrection; let homeworkCorrection;
    if(topicAssessmentsCorrections){
        ({ classworkCorrection, homeworkCorrection} = topicAssessmentsCorrections);
    }
  return (
    <div className='topic_component'>
         <Container>
            <Row className='mb-5 mt-3'>
                <Col>
                    <h1>{title}</h1>
                </Col>
            </Row>

            <Row>
                <Col xs = '12'>
                    <h4>Lecture material</h4>
                    <ul>
                        {
                            lectureMaterialLink.map((lectureMaterial, index) =>{
                                return <li key={index}><a href={lectureMaterial.materialLink} target='_blank' rel="noreferrer">{lectureMaterial.materialName}</a></li>
                            })
                        }
                    </ul>
                </Col>

                <Col xs = '12'>
                    <h4>Resources</h4>
                    <ul>
                        {
                            ResourcesLink.map((resource, index) =>{
                                return <li key={index}><a href={resource.resourceLink} target='_blank' rel="noreferrer">{resource.resourceName}</a> ({resource.resourceInfo})</li>
                            })
                        }
                    </ul>
                    
                </Col>

                <Col xs = '12'>
                    <h4>Assessment</h4>
                    <ul>
                        {exercise && <li><a href={exercise} target='_blank'  rel="noreferrer">Exercise with Solution</a></li>}
                        {classwork &&  <li><a href={classwork} target='_blank' rel="noreferrer">Classwork</a></li>}
                        {homework &&   <li><a href={homework} target='_blank'  rel="noreferrer">Homework</a></li>}
                    </ul>
                </Col>

                <Col xs = '12'>
                    <h4>Assessment Correction</h4>
                    <ul>
                        {classworkCorrection &&  <li><a href={classworkCorrection} target='_blank' rel="noreferrer">Classwork Correction</a></li>}
                        {homeworkCorrection &&  <li><a href={homeworkCorrection} target='_blank'  rel="noreferrer">Homework Correction</a></li>}
                    </ul>
                </Col>

              
            </Row>
        </Container>


    </div>
  )
}

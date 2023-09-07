import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';

import './TopicComponent.css'

export default function TopicComponent( {topicDetails}) {
    const {title, learningObjective, lectureMaterialLink, ResourcesLink} = topicDetails;
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

                <Col>
                    <h4>Resources</h4>
                    <ul>
                        {
                            ResourcesLink.map((resource, index) =>{
                                return <li key={index}><a href={resource.resourceLink} target='_blank' rel="noreferrer">{resource.resourceName}</a></li>
                            })
                        }
                    </ul>
                    
                </Col>

              
            </Row>
        </Container>


    </div>
  )
}

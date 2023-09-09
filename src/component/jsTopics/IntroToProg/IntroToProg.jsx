import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import TopicComponent from '../../topicComponent/TopicComponent';

const topicDetails = {
  title : 'Introduction to Programming',
  learningObjective : '',
  lectureMaterialLink : [
      {
          materialName : 'Introduction to Programming',
          materialLink : "https://docs.google.com/document/d/1vb8ErxKSHF3_sphZnvPxi1EB79AGHaWSPTAXwLbr_Vg/edit?usp=sharing",
          materialInfo : null
      }
  ],
  ResourcesLink : [
      // {
      //     resourceLink : null,
      //     resourceName : null,
      //     resourceInfo : null
      // },
      ]
}

const topicAssessments = {
  exercise : null,
  classwork : null,
  homework : null
}

export default function IntroToProg() {
  return (
    <div className='topic_component'>
      {/* <TopicComponent topicDetails={topicDetails} topicAssessments={ topicAssessments}/> */}
        <Row className='mt-3'>

            <Col className='col-12 mb-5'>
              <h1>{topicDetails.title}</h1>
          </Col>
            <Col xs = '12'>
                    <h4>Lecture material</h4>
                    <ul>
                        {
                            topicDetails.lectureMaterialLink.map((lectureMaterial, index) =>{
                                return <li key={index}><a href={lectureMaterial.materialLink} target='_blank' rel="noreferrer">{lectureMaterial.materialName}</a></li>
                            })
                        }
                    </ul>
            </Col>

        </Row>
    </div>
  )
}

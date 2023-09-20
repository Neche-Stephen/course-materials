import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


import TopicComponent from '../../topicComponent/TopicComponent';


const topicDetails = {
        title : 'Introduction to Javascript',
        learningObjective : '',
        lectureMaterialLink : [
            {
                materialName : 'Introduction to Javascript',
                materialLink : "https://docs.google.com/document/d/18AP9H_O6Upr_CvkiNDW_goPLYIxcLi0Vb1hggtjKfOw/edit?usp=sharing",
                materialInfo : null
            }
        ],
        ResourcesLink : [
            {
                resourceLink : "https://javascript.info/variables",
                resourceName : 'Variables',
                resourceInfo : 'Attempt the tasks at the end of this Resource.'
            },
            ]
}

const topicAssessments = {
    exercise : 'https://docs.google.com/document/d/11LEdSzW4gOnp353BExwh2EItUbhTPgh5LClua-vvLyI/edit?usp=sharing',
    classwork : 'https://docs.google.com/document/d/1RvrU8_SWsXUPTU244IN8JNRgkIVP8k7IQmlO9cOGdng/edit?usp=sharing',
    homework : 'https://docs.google.com/document/d/1Y0aD5ozUEC72OgoHnoJ9LE0WNsdB8Xa15o1iV4Qpks0/edit?usp=sharing'
}

const topicAssessmentsCorrections = {
    classworkCorrection : 'https://docs.google.com/document/d/15HjyHcPyGlqmzWiw3rdCfRGRS4aCJMNWoYlj3KisWB4/edit?usp=sharing',
    homeworkCorrection : 'https://docs.google.com/document/d/1_aDF0fb6U5PWUHGIKCvNLOeaQ4Uy-1WFHDhxFcAj0ZI/edit?usp=sharing'
}

export default function IntroToJs() {
  
  return (
    <div>
        <TopicComponent 
        topicDetails = {topicDetails}
        topicAssessments = {topicAssessments} 
        topicAssessmentsCorrections = {topicAssessmentsCorrections}
        />

    </div>
  )
}

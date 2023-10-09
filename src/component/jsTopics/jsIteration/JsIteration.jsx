import React from 'react';
import TopicComponent from '../../topicComponent/TopicComponent';

const topicDetails = {
  title : 'Javascript Iteration Part 1',
  learningObjective : '',
  lectureMaterialLink : [
      {
          materialName : 'JS Iteration - for..in, for..of, forEach',
          materialLink : "https://docs.google.com/document/d/1pvLGbfPe8D7gjnE7YP6TU1pTczMWluF_nUDXxXlDJ3c/edit?usp=sharing",
      },
  ],
  ResourcesLink : [
      // {
      //     resourceLink : "https://javascript.info/variables",
      //     resourceName : 'Variables',
      //     resourceInfo : 'Attempt the tasks at the end of this Resource.'
      // },
      ]
}

const topicAssessments = {
  exercise : 'https://docs.google.com/document/d/1lFbZKMM_VS54CHI_gXGKCLWu9y1s8cbDVIYRoPOQSn0/edit?usp=sharing',
  classwork : 'https://docs.google.com/document/d/1LO2qtuTLg-C1rt-rSaNfkz_A115vPwb3xQ-GOlJ--PE/edit?usp=sharing',
  homework : 'https://docs.google.com/document/d/1dwE_rEfemnFvDYvomS9wnvFc5jYWyzN_-q_qytfvOxo/edit?usp=sharing'
}
// const topicAssessmentsCorrections = {
//   classworkCorrection : 'https://docs.google.com/document/d/1FT6SbHEE78SDbJ2OJ2k6y_zYrC_5-wt34i3CYhx-7Ig/edit?usp=sharing',
//   homeworkCorrection : 'https://docs.google.com/document/d/1TbRmfqW71DNdiJfeOG1XtMPBAhEXzF6m5I02BzGj2T8/edit?usp=sharingg'
// }

export default function JsIteration1() {
  return (
    <div>
          <TopicComponent topicDetails = {topicDetails} topicAssessments = {topicAssessments}  />
        {/* No Lecture Material Available for this topic */}
    </div>
  )
}

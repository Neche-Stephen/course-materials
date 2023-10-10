import React from 'react';
import TopicComponent from '../../topicComponent/TopicComponent';

const topicDetails = {
  title : 'Javascript Iteration Part 2',
  learningObjective : '',
  lectureMaterialLink : [
      {
          materialName : 'JavaScript Array Iteration - Map, Filter',
          materialLink : "https://docs.google.com/document/d/1zVu5NpJOuSusdXJj2dkcC3A5J8VGr63r5cy0RN2hsFM/edit?usp=sharing",
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
  exercise : 'https://docs.google.com/document/d/1v59h5svsZVtrPXmpRlhsnsFe-rS36xX1kbxgdEDP3mM/edit?usp=sharing',
  classwork : 'https://docs.google.com/document/d/1tWurguiXMyCQ13-LPdyyloCFg0VKEz85tom7-hpGDqA/edit?usp=sharing',
  homework : 'https://docs.google.com/document/d/1l6TYeHF0TpPBqAHyUh_Mxxb-KjlDxT2Y1kQ_1KMagRk/edit?usp=sharing'
}
// const topicAssessmentsCorrections = {
//   classworkCorrection : 'https://docs.google.com/document/d/1FT6SbHEE78SDbJ2OJ2k6y_zYrC_5-wt34i3CYhx-7Ig/edit?usp=sharing',
//   homeworkCorrection : 'https://docs.google.com/document/d/1TbRmfqW71DNdiJfeOG1XtMPBAhEXzF6m5I02BzGj2T8/edit?usp=sharingg'
// }

export default function JsIteration2() {
  return (
    <div>
          <TopicComponent topicDetails = {topicDetails} topicAssessments = {topicAssessments}  />
        {/* No Lecture Material Available for this topic */}
    </div>
  )
}

import React from 'react';
import TopicComponent from '../../topicComponent/TopicComponent';

const topicDetails = {
  title : 'JS DOM Part 1',
  learningObjective : '',
  lectureMaterialLink : [
      {
          materialName : 'JavaScript DOM Methods and Properties',
          materialLink : "https://docs.google.com/document/d/1RLFJZUD_P5PsETJG_j7vM6ChK5R4iCz61E8okbG0CY0/edit?usp=sharing",
      },
  ],
  ResourcesLink : [
      {
          resourceLink : "https://www.youtube.com/watch?v=0ik6X4DJKCc&list=PLillGF-RfqbYE6Ik_EuXA2iZFcE082B3s",
          resourceName : 'DOM Crash Course',
          resourceInfo : 'Extensive 4 part series on DOM'
      },
      ]
}

const topicAssessments = {
  exercise : 'https://docs.google.com/document/d/1QuLS_0lHWN5VzPNBUZxrXHyX8jki30VQKzDPmt5Xt-E/edit?usp=sharing',
  classwork : 'https://docs.google.com/document/d/1e_HL-upbD7hVQiXXA0ZP3O7aEHICyjsY3rEc3nMWcOg/edit?usp=sharing',
  homework : 'https://docs.google.com/document/d/1CQrYj2DjKx6crPHo8IxWGxT1RKNmhPMd4o_Q-BydAx8/edit?usp=sharing'
}
// const topicAssessmentsCorrections = {
//   classworkCorrection : 'https://docs.google.com/document/d/1FT6SbHEE78SDbJ2OJ2k6y_zYrC_5-wt34i3CYhx-7Ig/edit?usp=sharing',
//   homeworkCorrection : 'https://docs.google.com/document/d/1TbRmfqW71DNdiJfeOG1XtMPBAhEXzF6m5I02BzGj2T8/edit?usp=sharingg'
// }

export default function JsDOM1() {
  return (
    <div>
          <TopicComponent topicDetails = {topicDetails} topicAssessments = {topicAssessments}  />
        {/* No Lecture Material Available for this topic */}
    </div>
  )
}

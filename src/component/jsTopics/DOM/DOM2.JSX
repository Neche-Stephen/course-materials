import React from 'react';
import TopicComponent from '../../topicComponent/TopicComponent';

const topicDetails = {
  title : 'JS DOM Part 2',
  learningObjective : '',
  lectureMaterialLink : [
      {
          materialName : 'JavaScript DOM Events and Events Handling',
          materialLink : "https://docs.google.com/document/d/1OBDc4SpUuLK6w6isF-TWcEbkNr-NSHWJ15l_5JQeKnk/edit?usp=sharing",
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
  exercise : 'https://docs.google.com/document/d/1ipoGbDmGll1Dt5imT2B6VglFxNK7E_p60QKRRGq7pPI/edit?usp=sharing',
  classwork : 'https://docs.google.com/document/d/1_hy4HyKOM_7uozt7QgpxzaTT15JCivyPGPoWAfc8XeQ/edit?usp=sharing',
  homework : 'https://docs.google.com/document/d/1_hy4HyKOM_7uozt7QgpxzaTT15JCivyPGPoWAfc8XeQ/edit?usp=sharing'
}
// const topicAssessmentsCorrections = {
//   classworkCorrection : 'https://docs.google.com/document/d/1FT6SbHEE78SDbJ2OJ2k6y_zYrC_5-wt34i3CYhx-7Ig/edit?usp=sharing',
//   homeworkCorrection : 'https://docs.google.com/document/d/1TbRmfqW71DNdiJfeOG1XtMPBAhEXzF6m5I02BzGj2T8/edit?usp=sharingg'
// }

export default function JsDOM2() {
  return (
    <div>
          <TopicComponent topicDetails = {topicDetails} topicAssessments = {topicAssessments}  />
        {/* No Lecture Material Available for this topic */}
    </div>
  )
}

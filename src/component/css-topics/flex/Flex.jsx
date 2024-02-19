import React from 'react';

import TopicComponent from '../../topicComponent/TopicComponent';

const topicDetails = {
  title : 'Introduction to Flex',
  learningObjective : '',
  lectureMaterialLink : [
    {
        materialName : 'Introduction to Flex',
        materialLink : "https://docs.google.com/document/d/1iPypcpArNax1HsupWpS3oNzDuVghuYp8/edit?usp=sharing&ouid=106772511003676051114&rtpof=true&sd=true",
    },

  ],
  ResourcesLink : [
      // {
      //     resourceLink : "https://javascript.info/variables",
      //     resourceName : 'Variables'
      // },
      ]
}

const topicAssessments = {
  exercise : 'https://docs.google.com/document/d/1VP_UvR9wvzooFxVvrY-n1EIy9XlS459g0drDb6cyDFM/edit?usp=sharing.',
  classwork : 'https://docs.google.com/document/d/178I5l8N-XXcwtpkkKevbnDkpvmon01wJDOxUHmMW8k8/edit?usp=sharing',
  homework : 'https://docs.google.com/document/d/1HJJa9d7QADFv3Y819xxEdWtXNG1zxHDV-9CPWTCT0Ms/edit?usp=sharing'
}


export default function Flex() {
  return (
    <div>
      <TopicComponent topicDetails={topicDetails} topicAssessments = {topicAssessments}/>
    </div>
  )
}

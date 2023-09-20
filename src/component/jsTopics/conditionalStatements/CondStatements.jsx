import React from 'react'


import TopicComponent from '../../topicComponent/TopicComponent';

const topicDetails = {
  title : 'Conditional Statements',
  learningObjective : '',
  lectureMaterialLink : [
      {
          materialName : 'Conditional Statements',
          materialLink : "https://docs.google.com/document/d/1E2OMJ4hgeXKKd3UOuWzXRfhXfvseLMppa5eV7Hq7Ryw/edit?usp=sharing",
      }
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
  exercise : 'https://docs.google.com/document/d/1UwXEUgv2EAYOgLpWOHw-l6TGukaPidMu5N0apqvXAvg/edit?usp=sharing',
  classwork : 'https://docs.google.com/document/d/1xw8xtIHkJu0IG2Y9i9kO_XxataMqP5w9L-G7rEjGk0E/edit?usp=sharing',
  homework : 'https://docs.google.com/document/d/1rSxMNCMfvhTJ2BqokN7uSIv02ro73fRFwhpCj6901Oc/edit?usp=sharing'
}

export default function CondStatements() {
  return (
    <div>
          <TopicComponent topicDetails = {topicDetails} topicAssessments = {topicAssessments} />
        {/* No Lecture Material Available for this topic */}
    </div>
  )
}

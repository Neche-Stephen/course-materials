import React from 'react';

import TopicComponent from '../../topicComponent/TopicComponent';

const topicDetails = {
  title : 'Introduction to HTML',
  learningObjective : '',
  lectureMaterialLink : [
      {
          materialName : 'More HTML Elements and File Paths',
          materialLink : "https://docs.google.com/document/d/117Squn8IvKC8i84n76-3Z6k9SwRWSwMs/edit?usp=sharing&ouid=106772511003676051114&rtpof=true&sd=true",
      }
  ],
  ResourcesLink : [
      // {
      //     resourceLink : "https://javascript.info/variables",
      //     resourceName : 'Variables'
      // },
      ]
}

const topicAssessments = {
  exercise : 'https://docs.google.com/document/d/1LdiRs72ggCmHi0qLOYSuhu-87-3kP26DrzZ8xB-Twjw/edit?usp=sharing',
  classwork : 'https://docs.google.com/document/d/1ZZ69reJADcGdkDo7AqBxvSGctHJ7hmTMIC4upEbL1Cw/edit?usp=sharing',
  homework : 'https://docs.google.com/document/d/1PmnpDh-h92o6elr_s5nvNIyws0GKhzU1ZNUznJ0Zfc0/edit?usp=sharing'
}

export default function HtmlElements() {
  return (
    <div>
      <TopicComponent topicDetails={topicDetails} topicAssessments = {topicAssessments}/>
      {/* No Lecture Material Available for this topic */}
    </div>
  )
}

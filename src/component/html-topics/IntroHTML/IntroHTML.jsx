import React from 'react';

import TopicComponent from '../../topicComponent/TopicComponent';

const topicDetails = {
  title : 'Introduction to HTML',
  learningObjective : '',
  lectureMaterialLink : [
      {
          materialName : 'Introduction to HTML',
          materialLink : "https://docs.google.com/document/d/1WfAZVN5Kv8HQalVBRNqSCeGEsHP0va-l/edit?usp=sharing&ouid=106772511003676051114&rtpof=true&sd=true",
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
  exercise : 'https://docs.google.com/document/d/1JWc5fKRiBTxlQUZvBz6CFFFAhjmTsE8MrJ3a2Vy-J18/edit?usp=sharing',
  classwork : 'https://docs.google.com/document/d/1V1wgLvxzaCGoDyODcnzk1qi8fLRdxh4d/edit?usp=sharing&ouid=106772511003676051114&rtpof=true&sd=true',
  homework : 'https://docs.google.com/document/d/1cTuOmUyiWPvW42kpJdd76vHOox6mDYj9/edit?usp=sharing&ouid=106772511003676051114&rtpof=true&sd=true'
}

export default function IntroHTML() {
  return (
    <div>
      <TopicComponent topicDetails={topicDetails} topicAssessments = {topicAssessments}/>
      {/* No Lecture Material Available for this topic */}
    </div>
  )
}

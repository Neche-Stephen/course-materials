import React from 'react';

import TopicComponent from '../../topicComponent/TopicComponent';

const topicDetails = {
  title : 'Introduction to HTML',
  learningObjective : '',
  lectureMaterialLink : [
      {
          materialName : 'Introduction to Tables and Forms',
          materialLink : "https://docs.google.com/document/d/1I0PxDH6tyRdw13k72zNXG5p8S_xYItpB/edit?usp=sharing&ouid=106772511003676051114&rtpof=true&sd=true",
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
  exercise : 'https://docs.google.com/document/d/1MnlsoR-kzn26pfSIcVI41915Q4ZjvXqHOTksWx5N-dg/edit?usp=sharing',
  classwork : 'https://docs.google.com/document/d/1HMzDOeMGFk5WYivkBx8H9kwdulhE3YZM/edit?usp=sharing&ouid=106772511003676051114&rtpof=true&sd=true',
  homework : 'https://docs.google.com/document/d/1frNE1swtEwN2XKQzshvdfPOKbwesBEy5/edit?usp=sharing&ouid=106772511003676051114&rtpof=true&sd=true'
}

export default function Table_Form() {
  return (
    <div>
      <TopicComponent topicDetails={topicDetails} topicAssessments = {topicAssessments}/>
      {/* No Lecture Material Available for this topic */}
    </div>
  )
}

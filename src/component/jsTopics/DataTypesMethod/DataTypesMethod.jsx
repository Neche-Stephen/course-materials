import React from 'react';


import TopicComponent from '../../topicComponent/TopicComponent';

const topicDetails = {
  title : 'Data Type Methods',
  learningObjective : '',
  lectureMaterialLink : [
      {
          materialName : 'Data Type Methods',
          materialLink : "https://docs.google.com/document/d/1WXWnmrO-Bxykue-OEZbSFKzomxJrW7-suciOqXkTkgU/edit?usp=sharing",
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
  exercise : 'https://docs.google.com/document/d/1SzuVwMh4HOYbS8GdLW_x96HKRlxWTXuLMQIFMIKPIRo/edit?usp=sharing',
  classwork : 'https://docs.google.com/document/d/1_a2YR-EHJeL4-5jTbFf4qr2WHuMQIhZB_tg6rngGs54/edit?usp=sharing',
  homework : 'https://docs.google.com/document/d/1vcj4OGO1--P1_hLWufpK_Dhirnu-yVql8BPfmPWlsE0/edit?usp=sharing'
}


export default function DataTypesMethods() {
  return (
    <div>
          <TopicComponent topicDetails = {topicDetails} topicAssessments = {topicAssessments} 
          
          />
        {/* No Lecture Material Available for this topic */}
    </div>
  )
}

import React from 'react';


import TopicComponent from '../../topicComponent/TopicComponent';

const topicDetails = {
  title : 'Data Type Methods',
  learningObjective : '',
  lectureMaterialLink : [
      {
          materialName : 'Data Type Methods - Strings, Numbers',
          materialLink : "https://docs.google.com/document/d/1WXWnmrO-Bxykue-OEZbSFKzomxJrW7-suciOqXkTkgU/edit?usp=sharing",
      },
      {
        materialName : 'Data Type Methods - Arrays, Objects',
        materialLink : "https://docs.google.com/document/d/11Ck5KPtW87IZ0lC6wQEUjKILC6jbRdHHVqkDZb9oVbo/edit?usp=sharing",
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
  exercise : 'https://docs.google.com/document/d/1C1o6Vi_7G-8erj45DziQshfewVAvo3VeriNwMOL_sIE/edit?usp=sharing',
  classwork : 'https://docs.google.com/document/d/1GdVRpkCkpE3OR9kj8l2iaucexi40l7TEgAl0dehJDdk/edit?usp=sharing',
  homework : 'https://docs.google.com/document/d/1riMIjlKwts1g3M0rRkfeKzD0HbhIkpfLjlnDRgvxwUo/edit?usp=sharing'
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

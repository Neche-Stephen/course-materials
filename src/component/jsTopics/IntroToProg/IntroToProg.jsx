import React from 'react';

import TopicComponent from '../../topicComponent/TopicComponent';

const topicDetails = {
  title : 'Introduction to Programming',
  learningObjective : '',
  lectureMaterialLink : [
      {
          materialName : 'Introduction to Javascript',
          materialLink : "https://docs.google.com/document/d/18AP9H_O6Upr_CvkiNDW_goPLYIxcLi0Vb1hggtjKfOw/edit?usp=sharing",
      }
  ],
  ResourcesLink : [
      {
          resourceLink : "https://javascript.info/variables",
          resourceName : 'Variables'
      },
      ]
}
export default function IntroToProg() {
  return (
    <div>
      <TopicComponent topicDetails={topicDetails}/>

    </div>
  )
}

import React from 'react';

import TopicComponent from '../../topicComponent/TopicComponent';

const topicDetails = {
  title : 'Background Property, Positioning, Pseudo-Class Selectors',
  learningObjective : '',
  lectureMaterialLink : [
    {
        materialName : 'The Background Property',
        materialLink : "https://docs.google.com/document/d/1EOb71xOSm3PkGvIDFWnN-YvZEjCyPXRW36VQ-7F0HRc/edit?usp=sharing",
    },
    {
    materialName : 'Relative and Absolute Positioning',
    materialLink : "https://docs.google.com/document/d/1FNvR-M3AoAbLKDj2gjuNoJf9PVLTFkNRQ3t3B5cv9mA/edit?usp=sharing",
    },
    {
        materialName : 'Pseudo-Class Selectors',
        materialLink : "https://docs.google.com/document/d/1MvtASZaxNI-YjMW04LOnFjSHHu3hHldzLQuGt3-6wes/edit?usp=sharing",
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
  exercise : 'https://docs.google.com/document/d/1e6gMU11aR8Ejufi37sB0EE_gKQSKjsCP_UhQT91DZms/edit?usp=sharing',
  classwork : 'https://docs.google.com/document/d/1dNZQjRuGv5Y9mfP8pXRtkrvqnBYB715Vd_frkHqzhOY/edit?usp=sharing',
  homework : 'https://docs.google.com/document/d/15PVGuF1_mOiN3uxOvWzovCmXWHemnooKtMxz9J5yjt0/edit?usp=sharing'
}


export default function Background() {
  return (
    <div>
      <TopicComponent topicDetails={topicDetails} topicAssessments = {topicAssessments}/>
    </div>
  )
}

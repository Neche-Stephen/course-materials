import React from 'react';

import TopicComponent from '../../topicComponent/TopicComponent';

const topicDetails = {
  title : 'Box Model and Combining Selectors',
  learningObjective : '',
  lectureMaterialLink : [
    {
        materialName : 'Box Model',
        materialLink : "https://docs.google.com/document/d/1lAOA78kJMEc9fak0bHQVjF2GCMW3nCGo/edit?usp=sharing&ouid=106772511003676051114&rtpof=true&sd=true",
    },
    {
        materialName : 'Combining Selectors',
        materialLink : "https://docs.google.com/document/d/1iIbfLaB78FJn_cpGKUyyHd08LM5imC7g0n-cWhISQ94/edit?usp=sharing",
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
  exercise : 'https://docs.google.com/document/d/1WCI_j4G65g1x9RWVNnMFMAd280vfaotjglQcnyLg4as/edit?usp=sharing',
  classwork : 'https://docs.google.com/document/d/1mieVjFLeyHgLWnAC5XkyXU5iLV3Kkg5MWVghV6oxzPA/edit?usp=sharing',
  homework : 'https://docs.google.com/document/d/1vGGiP5ayw7bjn0FC9_H4qMiV6Cq7L4vJzM0jYld60tU/edit?usp=sharing'
}


export default function BoxModel() {
  return (
    <div>
      <TopicComponent topicDetails={topicDetails} topicAssessments = {topicAssessments}/>
    </div>
  )
}

import React from 'react';

import TopicComponent from '../../topicComponent/TopicComponent';

const topicDetails = {
  title : 'Introduction to CSS',
  learningObjective : '',
  lectureMaterialLink : [
      {
          materialName : 'Introduction to CSS',
          materialLink : "https://docs.google.com/document/d/1cKmdrFsWooIQM3Jk5AZSKy_WcPX83RhS/edit?usp=sharing&ouid=106772511003676051114&rtpof=true&sd=true",
      },
      {
        materialName : 'Block Level, Inline and Inline-block Elements',
        materialLink : "https://docs.google.com/document/d/1DU-oNMdFE_xMJGSczCl1eYP7hymbqd0mD3CT-QWR7sA/edit?usp=sharing",
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
  exercise : 'https://docs.google.com/document/d/1mYmvj8cboCQ_CvyVPeNWhKKYxeYR9VhaEUaC899xF5I/edit?usp=sharing',
  classwork : 'https://docs.google.com/document/d/1_OGl2NdoAEQTnFFZ_YQfjXwAjbjHcZxxPTCgAF3GkIg/edit?usp=sharing',
  homework : 'https://docs.google.com/document/d/1noFDa7GIy5gA3lwT6pWMDsnRHdRvKMcHFeu_XbxEmPs/edit?usp=sharing'
}


export default function IntroCss() {
  return (
    <div>
      <TopicComponent topicDetails={topicDetails} topicAssessments = {topicAssessments}/>
    </div>
  )
}

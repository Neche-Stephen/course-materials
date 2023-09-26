import React from 'react'


import TopicComponent from '../../topicComponent/TopicComponent';

const topicDetails = {
  title : 'Introduction to Javascript Datatypes',
  learningObjective : '',
  lectureMaterialLink : [
      {
          materialName : 'Data Types',
          materialLink : "https://docs.google.com/document/d/1cEKdEdeKQhaBdYijX-nF05x8q975Xt0eFSydAZnZ3Xc/edit?usp=sharing",
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
  exercise : 'https://docs.google.com/document/d/1hBhsbaZFrBMFrTWBgF_l8yZQYczROQbr-I2hpmzQMSA/edit?usp=sharing',
  classwork : 'https://docs.google.com/document/d/1wh38gmaqezzfTQueJMP9WnWA-1F6-D_hep928c7NEQw/edit?usp=sharing',
  homework : 'https://docs.google.com/document/d/1fvEAjdfVeKg6_swvuRxSgsPZW6azKtXOfzv0G0VBIYE/edit?usp=sharing'
}
const topicAssessmentsCorrections = {
  classworkCorrection : 'https://docs.google.com/document/d/1FT6SbHEE78SDbJ2OJ2k6y_zYrC_5-wt34i3CYhx-7Ig/edit?usp=sharing',
  homeworkCorrection : 'https://docs.google.com/document/d/1TbRmfqW71DNdiJfeOG1XtMPBAhEXzF6m5I02BzGj2T8/edit?usp=sharingg'
}

export default function DataTypes() {
  return (
    <div>
          <TopicComponent topicDetails = {topicDetails} topicAssessments = {topicAssessments}  topicAssessmentsCorrections = {topicAssessmentsCorrections} />
        {/* No Lecture Material Available for this topic */}
    </div>
  )
}

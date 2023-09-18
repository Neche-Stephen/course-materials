import React from 'react'


import TopicComponent from '../../topicComponent/TopicComponent';

const topicDetails = {
  title : 'Introduction to Javascript Operators',
  learningObjective : '',
  lectureMaterialLink : [
      {
          materialName : 'JS Arithmetic Operators',
          materialLink : "https://docs.google.com/document/d/1pvLYDcFMJ-nT-OCnK7UtKFZdblGGlcbpsyhCcepEr44/edit?usp=sharing",
      },
      {
          materialName : 'JS Assignment Operators',
          materialLink : "https://docs.google.com/document/d/1SBEukGfyK53LFCPvfMIBoSAkqUT1pAb3OCTUG39G8wg/edit?usp=sharing",
      },
      {
        materialName : 'JS Comparison Operators',
        materialLink : "https://docs.google.com/document/d/1UWTgFYMfF7nePPpL-8ATRVJBhm1FIgQOr1K4g-9brn4/edit?usp=sharing",
      },
      {
      materialName : 'JS Logical Operators',
      materialLink : "https://docs.google.com/document/d/1BE5Us8kwtGW3MLC9ksyzREX2t6DkTPrk7KWP7PJg1uw/edit?usp=sharing",
      },
      {
        materialName : 'JS Unary, Ternary, and typeof Operators',
        materialLink : "https://docs.google.com/document/d/1T8ejpdFyLEcz1FeaRg7jk06SYr_oIPunfBkLDjR86FU/edit?usp=sharing",
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
  exercise : 'https://docs.google.com/document/d/1UjaWZI3mp_QHXOQuf7e4l9uwik9LmW39ZISEyJnKfIw/edit?usp=sharing',
  classwork : 'https://docs.google.com/document/d/1p6WbTTEmnz9JcQaUYm2-VGtd-woLug1Zfqxv8nrL4w8/edit?usp=sharing',
  homework : 'https://docs.google.com/document/d/1Qzn5AwSfb1PrB3Xs0h1U0aUJ1IrGiPpfTJRZu3q7pZU/edit?usp=sharing'
}

export default function JsOperators() {
  return (
    <div>
          <TopicComponent topicDetails = {topicDetails} topicAssessments = {topicAssessments} />
        {/* No Lecture Material Available for this topic */}
    </div>
  )
}

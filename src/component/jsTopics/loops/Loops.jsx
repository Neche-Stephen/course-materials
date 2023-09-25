import React from 'react';


import TopicComponent from '../../topicComponent/TopicComponent';

const topicDetails = {
  title : 'JS Loops',
  learningObjective : '',
  lectureMaterialLink : [
      {
          materialName : 'Javascript Loops',
          materialLink : "https://docs.google.com/document/d/18XVAYghOMJt4QkFbDhmQ2Ld6WXfJr7OrEu8I5lLngJM/edit?usp=sharing",
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
  exercise : 'https://docs.google.com/document/d/17NUWeXRkiHHSzaAq7FFgnLosfbNcQFWg8Mb6AgeKcOQ/edit?usp=sharing',
  classwork : 'https://docs.google.com/document/d/19eNvtiKSr9PRC2z8aN-42fnXoXoi_C_MHp5j2yA0z7A/edit?usp=sharing',
  homework : 'https://docs.google.com/document/d/1K2hOUUGP7aHsUOcCsw6Rs00W6_kXQPaAovwJZOYsVps/edit?usp=sharing'
}

export default function Loops() {
  return (
    <div>
          <TopicComponent topicDetails = {topicDetails} topicAssessments = {topicAssessments} />
        {/* No Lecture Material Available for this topic */}
    </div>
  )
}

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

//Navbar Component
import Navbar from '../../component/navbar/Navbar';

//Aside Component for displaying topics
import Aside from '../../component/aside/Aside';


// Topics Component
import IntroToJs from '../../component/jsTopics/IntroToJs/IntroToJs';
import IntroToProg from '../../component/jsTopics/IntroToProg/IntroToProg';
import DataTypes from '../../component/jsTopics/DataTypes/DataTypes';


// Topics
const defaultJsTopics = [
  {
    topicName: 'Introduction to Programming',
    clicked: true
  },
  {
    topicName: 'Introduction to Javascript',
    clicked: false
  },
  {
    topicName: 'Introduction to Javascript Data types',
    clicked: false
  }
]

function JsComponent() {
  const [jsTopics, setJsTopics] = useState(defaultJsTopics);
  const [topic, setTopic] = useState(<IntroToProg />);

//Offcanvas state
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const toggleTopicClicked = (clickedTopicName) =>{
    const updatedTopics = jsTopics.map((topic) => ({
      ...topic,
      clicked: topic.topicName === clickedTopicName,
    }));
    setJsTopics(updatedTopics);
  }

  const showJsTopic = (topicName)=>{
    if (topicName === 'Introduction to Programming'){
    setTopic(<IntroToProg />);
    toggleTopicClicked(topicName);

    }
    else if (topicName === 'Introduction to Javascript'){
      setTopic(<IntroToJs />);
      toggleTopicClicked(topicName);

      }

    else if (topicName === 'Introduction to Javascript Data types'){
      setTopic(<DataTypes />);
      toggleTopicClicked(topicName);

      }

   
  }
  return (
   <>
      <Navbar handleShow={handleShow} />
    
     <div className='container-fluid'>
        <Row>
          <aside className = "col-3">
            <Aside jsTopics = {jsTopics} showJsTopic = {showJsTopic}
            show = {show} setShow ={setShow} handleShow = {handleShow} handleClose = {handleClose} />
          </aside>
           
          <main className='col-lg-9'>
             {topic}
          </main>
            
        </Row>
     </div>
    
   </>
  )
}

export default JsComponent;

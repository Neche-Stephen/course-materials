import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './css.css';

import Aside from '../../component/aside/Aside';
import Navbar from '../../component/navbar/Navbar';


// Topics Component
import IntroCss from '../../component/css-topics/IntroCss/Intro-css';
import StylingText from '../../component/css-topics/StylingText/stylingText';

// Topics Name
const defaultCssTopics = [
  {
    topicName: 'Introduction to CSS',
    clicked: true
  },
  {
    topicName: 'Styling Text',
    clicked: false
  }
];

function CssComponent() {
  const [cssTopics, setCssTopics] = useState(defaultCssTopics);

  const toggleTopicClicked = (clickedTopicName) =>{
    const updatedTopics = cssTopics.map((topic) => ({
      ...topic,
      clicked: topic.topicName === clickedTopicName,
    }));
    setCssTopics(updatedTopics);
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [topic, setTopic] = useState(<IntroCss />);

  const showCssTopic = (topicName)=>{
    if (topicName === 'Introduction to CSS'){
    setTopic(<IntroCss />);
    toggleTopicClicked(topicName);
    
    }
    else if (topicName === 'Styling Text'){
    setTopic(<StylingText />);
    toggleTopicClicked(topicName);

      }

   
  }
  return (
   <>
       <Navbar handleShow={handleShow} />
    
     <div className='container-fluid'>
        <Row>
          <aside className = "col-3">
            <Aside showCssTopic = {showCssTopic} cssTopics  = {cssTopics}
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

export default CssComponent;

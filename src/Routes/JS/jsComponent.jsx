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


// Topics Name
const topics = ['BoxModel', 'Background'];

function JsComponent() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [topic, setTopic] = useState(<IntroToProg />);

  const showJsTopic = (topicName)=>{
    if (topicName === 'Introduction to Programming'){
    setTopic(<IntroToProg />)
    }
    else if (topicName === 'Introduction to Javascript'){
      setTopic(<IntroToJs />)
      }

   
  }
  return (
   <>
      <Navbar handleShow={handleShow} />
    
     <div className='container-fluid'>
        <Row>
          <aside className = "col-3">
            <Aside IntroToProg = "Introduction to Programming" IntroToJs = {'Introduction to Javascript'}
            showJsTopic = {showJsTopic}
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

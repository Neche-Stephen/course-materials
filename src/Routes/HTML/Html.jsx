import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './html.css';

import Aside from '../../component/aside/Aside';
import Navbar from '../../component/navbar/Navbar';


// Topics Component
import IntroToAttributes from '../../component/html-topics/IntroToAttributes/IntroToAttributes';
import IntroToHtml from '../../component/html-topics/IntroToHtml/IntroToHtml';

// Topics Name
const htmlTopics = ["Introdution To Html", 'Introdution To Attributes'];

function HtmlComponent() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [topic, setTopic] = useState(<IntroToHtml/>);

  const showHtmlTopic = (topicName)=>{
    if (topicName === 'Introdution To Html'){
    setTopic(<IntroToHtml />)
    }
    else if (topicName === 'Introdution To Attributes'){
      setTopic(<IntroToAttributes />)
      }

   
  }
  return (
   <>
        <Navbar handleShow={handleShow} />
    
     <div className='container-fluid'>
        <Row>
          <aside className = "col-3">
            <Aside IntroToHtml = "Introdution To Html" IntroToAttributes = 'Introdution To Attributes'
            showHtmlTopic = {showHtmlTopic} htmlTopics = { htmlTopics}
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

export default HtmlComponent;

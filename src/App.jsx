import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';


import Aside from './component/aside/Aside';
import Navbar from './component/navbar/Navbar';
import Home from './component/home/Home';

import { jsTopics as defaultJsTopics } from './utils/topicsName';
import { cssTopics as defaultCssTopics } from './utils/topicsName';
import { htmlTopics as defaultHtmlTopics } from './utils/topicsName';
import { extraTopics as defaultExtraTopics } from './utils/topicsName';

import { showHtmlTopicMethod, showJsTopicMethod, showCssTopicMethod, showExtraTopicMethod } from './utils/showTopicsMethods';



function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [component, setComponent] = useState(<Home />);
  const [ jsTopics, setJsTopics] = useState(defaultJsTopics);
  const [ cssTopics, setCssTopics] = useState(defaultCssTopics);
  const [ htmlTopics, setHtmlTopics] = useState(defaultHtmlTopics);
  const [ extraTopics, setExtraTopics] = useState(defaultExtraTopics);



const toggleTopicClicked = (clickedTopicName) =>{
    const updatedHtmlTopics = htmlTopics.map((topic) => ({
      ...topic,
      clicked: topic.topicName === clickedTopicName,
    }));
    setHtmlTopics(updatedHtmlTopics);

    const updatedCssTopics = cssTopics.map((topic) => ({
      ...topic,
      clicked: topic.topicName === clickedTopicName,
    }));
    setCssTopics(updatedCssTopics);

    const updatedJsTopics = jsTopics.map((topic) => ({
      ...topic,
      clicked: topic.topicName === clickedTopicName,
    }));
    setJsTopics(updatedJsTopics);

  }

const showJsTopic = (topicName) => {
     const selectedComponent =  showJsTopicMethod(topicName);
     setComponent(selectedComponent);
     handleClose();
     toggleTopicClicked(topicName)
  }

const showCssTopic = (topicName) => {
    const selectedComponent =  showCssTopicMethod(topicName);
    setComponent(selectedComponent);
    handleClose();
    toggleTopicClicked(topicName);
 }

 const showHtmlTopic = (topicName) => {
  const selectedComponent =  showHtmlTopicMethod(topicName);
  setComponent(selectedComponent);
  handleClose();
  toggleTopicClicked(topicName);
}

const showExtraTopic = (topicName) => {
  const selectedComponent =  showExtraTopicMethod(topicName);
  setComponent(selectedComponent);
  handleClose();
  toggleTopicClicked(topicName);
}

const returnHome = () =>{
  setComponent(<Home />);
  toggleTopicClicked(null);
}
  return (
   <>
     <Navbar  handleShow={handleShow} returnHome = {returnHome}/>
     <div className='container-fluid'>
        <Row>
            <aside className = "col-3">
              <Aside 
              jsTopics = {jsTopics} showJsTopic = {showJsTopic}
              cssTopics = {cssTopics} showCssTopic = {showCssTopic}
              htmlTopics = {htmlTopics} showHtmlTopic = {showHtmlTopic}
              extraTopics = {extraTopics} showExtraTopic = {showExtraTopic}
              show = {show} setShow ={setShow} handleShow = {handleShow} handleClose = {handleClose} />
            </aside>
           
          <main className='col-lg-9'>
            {component}
          </main>
            
        </Row>
     </div>
    
   </>
  )
}

export default App

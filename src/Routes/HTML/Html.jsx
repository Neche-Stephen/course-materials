// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import { useState } from 'react';
// import Alert from 'react-bootstrap/Alert';
// import Button from 'react-bootstrap/Button';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import './html.css';

// import Aside from '../../component/aside/Aside';
// import Navbar from '../../component/navbar/Navbar';


// // Topics Component
// // import IntroToAttributes from '../../component/html-topics/IntroToHTML/IntroToHTML';
// import IntroToHtml from '../../component/html-topics/IntroToHTML/IntroToHTML';

// // Topics
// const defaultHtmlTopics = [
//     {
//       topicName : "Introdution To HTML",
//       clicked : true
//     },
//     {
//       topicName : 'Introdution To Attributes',
//       clicked : false
//     },
// ];


// function HtmlComponent() {
//   const [htmlTopics, setHtmlTopics] = useState(defaultHtmlTopics);
//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const [topic, setTopic] = useState(<IntroToHtml/>);

//   const toggleTopicClicked = (clickedTopicName) =>{
//           const updatedTopics = htmlTopics.map((topic) => ({
//             ...topic,
//             clicked: topic.topicName === clickedTopicName,
//           }));
      
//           setHtmlTopics(updatedTopics);
//   }

 

//   const showHtmlTopic = (topicName)=>{
//     console.log('clicked')
//     if (topicName === 'Introdution To HTML'){
//     setTopic(<IntroToHtml />);
//     toggleTopicClicked(topicName);
//     }
//     else if (topicName === 'Introdution To Attributes'){
//       // setTopic(<IntroToAttributes />);
//     toggleTopicClicked(topicName);

//       }

   
//   }
//   return (
//    <>
//         <Navbar handleShow={handleShow} />
    
//      <div className='container-fluid'>
//         <Row>
//           <aside className = "col-3">
//             <Aside IntroToHtml = "Introdution To Html" IntroToAttributes = 'Introdution To Attributes'
//             showHtmlTopic = {showHtmlTopic} htmlTopics = { htmlTopics}
//             show = {show} setShow ={setShow} handleShow = {handleShow} handleClose = {handleClose} />
//           </aside>
           
//           <main className='col-lg-9'>
//              {topic}
//           </main>
            
//         </Row>
//      </div>
    
//    </>
//   )
// }

// export default HtmlComponent;

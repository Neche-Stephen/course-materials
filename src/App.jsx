import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';


import Aside from './component/aside/Aside';
import HtmlComponent from './Routes/HTML/Html';

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
   <>
      <nav>
        <Button variant="primary" className="d-lg-none" onClick={handleShow}>
          Launch
        </Button>
      </nav>
    
     <div className='container-fluid'>
        <Row>
            <aside className = "col-3">
              <Aside show = {show} setShow ={setShow} handleShow = {handleShow} handleClose = {handleClose} />
            </aside>
           
          <main className='col-lg-9'>
            Welcome
          </main>
            
        </Row>
     </div>
    
   </>
  )
}

export default App

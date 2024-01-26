import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

// Skills Component
import HtmlComponent from './Routes/HTML/Html';
import CssComponent from './Routes/CSS/css';
import JsComponent from './Routes/JS/jsComponent';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<App/>}/>
          {/* <Route path='/html' element = {<HtmlComponent/>}/>
          <Route path='/css' element = {<CssComponent/>}/>
          <Route path='/js' element = {<JsComponent/>}/> */}
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);



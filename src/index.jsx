import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "./index.css";
import Home from './pages/home';
import Footer from './components/footer';
import About from './pages/about';
import Vans from './pages/vans';
import Vandetail from './pages/vandetail';
import NavigationBar from './components/navigationbar';

import "./server";

function App() {
  return (
    <div className='navigationContainer'>
      <BrowserRouter >
        <NavigationBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/vans" element={<Vans/>}/>
          <Route path="/vans/:id" element={<Vandetail/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App/>);

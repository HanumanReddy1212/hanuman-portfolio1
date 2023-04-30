import React from 'react'
import { Route, Routes } from 'react-router-dom';
import "./index.css"
import About from './routes/About';
import Contact from './routes/Contact';
import Home from './routes/Home';
import Projects from './routes/Projects';


function App() {
  return (
    <>
    <Routes>
        <Route path="/hanuman-portfolio1/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/hanuman-portfolio1/projects" element={<Projects/>} />
        <Route path="/hanuman-portfolio1/contact" element={<Contact/>} />
    </Routes>
    </>
  );
}

export default App;

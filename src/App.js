import React from 'react';
import './App.css';
import {Browser, Routes,Route, BrowserRouter} from 'react-router-dom';
import Layout from './components/Layout';
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"
import OurStore from './pages/OurStore';
function App() {
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='contact' element={<Contact />} />
          <Route path ='about' element={<About />}></Route>
          <Route path ='store' element={<OurStore />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;

import React from 'react';
import './App.css';
import {Browser, Routes,Route, BrowserRouter} from 'react-router-dom';
import Layout from './components/Layout';
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
import CompareProduct from './pages/CompareProduct';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
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
          <Route path ='blogs' element={<Blog />}></Route>
          <Route path ='compare-product' element={<CompareProduct />}></Route>
          <Route path ='wishlist' element={<Wishlist />}></Route>
          <Route path ='login' element={<Login />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;

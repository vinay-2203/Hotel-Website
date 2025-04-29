import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {useEffect } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Homepage from './landingpage/home/Homepage';

import Navbar from './landingpage/Navbar';
import Footer from './landingpage/Footer';

import Hotemain from './landingpage/hotels/Hotelmain';
import Alllisting from './landingpage/listing/Alllisting';

import Addhotel from './landingpage/addhotel/Addhotel';
import Showhotel from './landingpage/showhotel/Showhotel'
import BookPage from './landingpage/book/Hero';
import ReceiptPage from './landingpage/receipt/Receipt';
import SearchPage from './landingpage/home/search';
import SupportPage from './landingpage/support/Support';
import TrainSearch from './landingpage/train/Train';

import Signup from './landingpage/signup/Signup';
import Login from './landingpage/login/Login';

import { LoginProvider } from './landingpage/Logincontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LoginProvider>
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Homepage></Homepage>}></Route>
      <Route path='/hotels' element={<Hotemain></Hotemain>}></Route>
      <Route path='/search' element={<Alllisting></Alllisting>}></Route>
      <Route path='/addhotel' element={<Addhotel></Addhotel>}></Route>
      <Route path='/allhotels' element={<Showhotel></Showhotel>}></Route>
      <Route path='/signup' element={<Signup></Signup>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/payment/:id' element={<BookPage></BookPage>}></Route>
      <Route path='/receipt/:bookingId' element={<ReceiptPage></ReceiptPage>}></Route>
      <Route path='/searchi' element={<SearchPage></SearchPage>}></Route>
      <Route path='/support' element={<SupportPage></SupportPage>}></Route>
      <Route path='/trains' element={<TrainSearch></TrainSearch>}></Route>
    </Routes>
    <Footer />
  </BrowserRouter>
  </LoginProvider>
);



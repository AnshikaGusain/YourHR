import Footer from './Footer';
import Header from './Header';
import Signin from './Signin';
import Signup from './Signup';
import Home from './Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState } from 'react';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
          {/* <Route index element={<signin />} /> */}
          <Route path="/signin" element={<Signin/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/home" element={<Home/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;

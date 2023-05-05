import Footer from './Footer';
import Header from './Header';
import Signin from './Signin';
import Signup from './Signup';
import Home from './Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

function App() {
  const [user,setUser]=useState({});
  const set=(user)=>{
    setUser(()=>{
      return {
        firstname:user.firstname,
        lastname:user.lastname,
        email:user.email
      }
    });
  }
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
          {/* <Route index element={<signin />} /> */}
          <Route path="/" element={<Signup set={set}/>}/>
          <Route path="/signin" element={<Signin set={set}/>} />
          <Route path="/signup" element={<Signup set={set}/>} />
          <Route path="/home" element={<Home user={user}/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;

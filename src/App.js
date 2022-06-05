import './App.css';
import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Login from "./pages/login"
import ImgMap from './components/ImgMap';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Routes>
        <Route path= '/' element={<Login/>} /> 
        <Route path='/im' element={<ImgMap/>} /> 
       </Routes>
        
       </BrowserRouter>
    </div>
  );
}

export default App;

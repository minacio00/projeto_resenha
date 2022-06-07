import './App.css';
import React from 'react';
import {Route, Routes, BrowserRouter, HashRouter} from 'react-router-dom';
import Login from "./pages/login"
import ImgMap from './components/ImgMap';
import ControleResenha from './pages/controleResenha';

function App() {
  function alertDismissed() {
    // do something
}
  return (
    <div className="App">
      {/* <BrowserRouter> */}
       <HashRouter>
        <Routes>
          <Route path= '/' element={<Login/>} /> 
          <Route path='/im' element={<ImgMap/>} /> 
          <Route path='/controle' element={<ControleResenha/>} />
        </Routes>
       </HashRouter>
       {/* </BrowserRouter> */}
    </div>
  );
}

export default App;

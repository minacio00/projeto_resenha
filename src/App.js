import './App.css';
import React from 'react';
import {Route, Routes, BrowserRouter, HashRouter} from 'react-router-dom';
import Login from "./pages/login"
import ImgMap from './components/ImgMap';
import ControleResenha from './pages/controleResenha';
import Proprietario from './pages/Proprietario';
import Equideo from './pages/Equideo';
import { Cabeca } from './pages/Cabeca';
import { LadoEsquerdo } from './pages/LadoEsquerdo';
import { VisaoGeral } from './pages/VisaoGeral';
import { LadoDireito } from './pages/LadoDireito';
import { MembrosAnteriores } from './pages/MembrosAnt';

function App() {
  function alertDismissed() {
    // do something
}
  return (
    <div className="App">
      {/* <BrowserRouter> */}
       <HashRouter>
        <Routes>
          <Route path='/im' element={<ImgMap/>} /> 
          <Route path='/controle' element={<ControleResenha/>} />
          <Route path='proprietario' element={<Proprietario/>} />
          <Route path='equideo' element={<Equideo/>}/>
          <Route path='geral' element={<VisaoGeral/>}/>
          <Route path='cabeca' element={<Cabeca/>}/>
          <Route path='esquerdo' element={<LadoEsquerdo/>}/>
          <Route path='direito' element={<LadoDireito/>}/>
          <Route path='anteriores' element={<MembrosAnteriores/>}/>
          <Route path='/'  element={<Login/>} /> 
        </Routes>
       </HashRouter>
       {/* </BrowserRouter> */}
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const renderReactDOM = ()=>{
  ReactDOM.render(<App/>,document.getElementById('root'));
}

if(window.cordova){
  document.addEventListener('deviceready',()=>{
    console.log(navigator.notification);
    renderReactDOM();
  },false)
} else {
  renderReactDOM();
}

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import { RouteMatch } from 'react-router';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css'
import App from './App';
import About  from './About';
import Vans from './Vans';
import Error from './Error';
import Host from './Host';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes,Route,Link } from "react-router-dom"

import Footer from './footer';
import Navbar from './navbar';
import Description from './carDes';
import Login from './Login';
import Signup from './Signup';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
<BrowserRouter>
<Navbar/>
< App style={{flex:"1"}}>

</App>
</BrowserRouter>
<Footer/>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

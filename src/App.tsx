import React from 'react';
import './App.css';
import { Routes, Route} from "react-router-dom";
import { Home } from './pages/Home';
import Pizza from './pages/Pizza';
import { Contact } from './pages/Contact';
import { Register } from './pages/Register';
import { ShoppingCart } from './pages/ShoppingCart';
import { AddressAndPayment } from './pages/AddressAndPayment';
import { Problem } from './pages/Problem';
import { Login } from './components/Login';
const App = () => {
  return (
    <Routes>
        <Route path="/" element={ <Home />}></Route>
        <Route path="*" element={ <Problem />}></Route>
        <Route path="/Pizza" element={ <Pizza />}></Route>
        <Route path="/Contact" element={ <Contact />}></Route>
        <Route path="/Login" element={ <Login />}></Route>
        <Route path="/Register" element={ <Register />}></Route>
        <Route path="/ShoppingCart" element={ <ShoppingCart />}></Route>
        <Route path="/AddressAndPayment" element={ <AddressAndPayment />}></Route>
    </Routes>
  )
}

export default App

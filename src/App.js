import React from "react";
import About from './components/About';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from "./components/Contact";
import {Routes, Route} from "react-router";
import {BrowserRouter as Router} from 'react-router-dom';
import { Register } from "./components/Register";
import Thanks from "./components/Thanks";

function App(){
    return(
        <>
            <Router>
                <Navbar/>
                <Routes>
                    <Route exact path="/" element={<Home/>}></Route>
                    <Route exact path="/about" element={<About/>}></Route>
                    <Route exact path="/contact" element={<Contact/>}></Route>
                    <Route exact path="/register" element={<Register/>}></Route>
                    <Route exact path="/thanks" element={<Thanks/>}></Route>
                </Routes>
            </Router>
        </>
    )
}

export default App;
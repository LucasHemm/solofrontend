import {Route, Routes} from "react-router-dom";
import Home from "../routes/Home.jsx";
import About from "../routes/About.jsx";
import React from "react";
import Joke from "../routes/Joke.jsx";
import Persons from "../routes/Persons.jsx";

const Content = ({user}) =>{
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About user={user}/>}/>
            <Route path="/joke" element={<Joke user={user}/>}/>
            <Route path="/persons" element={<Persons user={user}/>}/>
        </Routes>
    )
}

export default Content;
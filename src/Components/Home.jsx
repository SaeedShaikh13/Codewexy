import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './About';
import Body from './Body';
import HandT from './HandT';
import Header from './Header';


const Home = () => {
    return (
        <div>
            <BrowserRouter>
                <Header/>            
                <Routes>
                    <Route path="/" element={<Body/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/H_T" element={<HandT/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Home;
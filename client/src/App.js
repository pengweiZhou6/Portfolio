import React from 'react';
import Header from './components/Header'


import Skills from './components/Skills'
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Home from "./components/Home";

function App() {

    return (
        <div id="colorlib-page">
            <div id="container-wrap">
                <Header/>
                <div id="colorlib-main">
                    <Home/>
                    <About/>
                    <Skills/>
                    {/*<Experience/>*/}
                    <Projects/>
                </div>
            </div>
        </div>
    )
}

export default App

import React from 'react';
import Header from './components/Header'
import useSticky from './hooks/useSticky.js'

import Divider from '@material-ui/core/Divider';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import Typography from "@material-ui/core/Typography";

import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";

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
                    <Experience/>
                    <Projects/>
                </div>
            </div>
        </div>
    )
}

export default App

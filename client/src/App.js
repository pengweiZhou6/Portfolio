import React from 'react';
import Navbar from './components/Navbar'
import Content from './components/Content'
import useSticky from './hooks/useSticky.js'

import Divider from '@material-ui/core/Divider';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import Typography from "@material-ui/core/Typography";
// import 'bootstrap/dist/css/bootstrap.css';

function App() {
    const { isSticky, element } = useSticky()
    return (
        <>
            <Navbar sticky={isSticky}/>
            <Content element={element}/>
        </>
    )
}

export default App
